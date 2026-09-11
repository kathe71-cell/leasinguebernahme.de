import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Plus, Trash2, Download, Upload, X, TestTube2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';


export default function DashboardSettings() {
  const [feeds, setFeeds] = useState([{ id: 1, url: '' }]);
  const [jsonFeeds, setJsonFeeds] = useState([{ id: 1, url: '' }]);
  const [importingFeeds, setImportingFeeds] = useState(new Set());
  const [importProgress, setImportProgress] = useState({});
  const [csvImporting, setCsvImporting] = useState(false);
  const [csvProgress, setCsvProgress] = useState({ current: 0, total: 0 });
  const [abortController, setAbortController] = useState(null);
  const [jsonFeedAbortControllers, setJsonFeedAbortControllers] = useState({});

  const handleFeedChange = (id, value) => {
    const newFeeds = feeds.map(feed => 
      feed.id === id ? { ...feed, url: value } : feed
    );
    setFeeds(newFeeds);
  };

  const handleJsonFeedChange = (id, value) => {
    const newFeeds = jsonFeeds.map(feed => 
      feed.id === id ? { ...feed, url: value } : feed
    );
    setJsonFeeds(newFeeds);
  };

  const handleAddFeed = () => {
    setFeeds([...feeds, { id: Date.now(), url: '' }]);
  };

  const handleAddJsonFeed = () => {
    setJsonFeeds([...jsonFeeds, { id: Date.now(), url: '' }]);
  };

  const handleRemoveFeed = (id) => {
    if (feeds.length > 1) {
      setFeeds(feeds.filter(feed => feed.id !== id));
    } else {
      toast.error("Sie können den letzten Feed nicht entfernen.");
    }
  };

  const handleRemoveJsonFeed = (id) => {
    if (jsonFeeds.length > 1) {
      setJsonFeeds(jsonFeeds.filter(feed => feed.id !== id));
    } else {
      toast.error("Sie können den letzten Feed nicht entfernen.");
    }
  };

  const handleSave = () => {
    const validFeeds = feeds.filter(feed => feed.url.trim() !== '');
    const validJsonFeeds = jsonFeeds.filter(feed => feed.url.trim() !== '');
    console.log("Saving Feeds:", validFeeds, validJsonFeeds);
    toast.success("Einstellungen erfolgreich gespeichert!", {
        description: `${validFeeds.length} XML- und ${validJsonFeeds.length} JSON-Feed-URLs wurden übernommen.`,
    });
  };

  const handleImport = async (url, feedId) => {
    if (!url || !url.trim()) {
      toast.error("Bitte geben Sie zuerst eine URL ein.");
      return;
    }

    setImportingFeeds(prev => new Set([...prev, feedId]));
    setImportProgress(prev => ({ ...prev, [feedId]: 0 }));

    try {
      setImportProgress(prev => ({ ...prev, [feedId]: 20 }));
      toast.info("Lade XML-Feed herunter...");

      // Fetch XML with CORS proxy
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const xmlText = await response.text();
      
      setImportProgress(prev => ({ ...prev, [feedId]: 40 }));
      toast.info("Parse Fahrzeugdaten...");

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      
      // Parse Coyote feed structure - one vehicle per ad
      const ads = xmlDoc.querySelectorAll('campaignAd');
      
      console.log("Found ads:", ads.length);
      
      if (ads.length === 0) {
        throw new Error("Keine Anzeigen im Feed gefunden");
      }

      const vehicles = [];
      
      ads.forEach(ad => {
        // Get vehicle name from campaignAdName
        const adName = ad.querySelector('campaignAdName')?.textContent?.trim() || '';
        const adFile = ad.querySelector('campaignAdFile')?.textContent?.trim() || '';
        
        // Skip campaign/marketing images - only use vehicle images
        // Campaign images usually have dimensions like "1280x858" in the filename
        const isCampaignImage = adFile && (
          adFile.includes('1280x858') || 
          adFile.includes('campaign') ||
          adName.includes('1280x858')
        );
        
        if (isCampaignImage) {
          console.log("Skipping campaign image:", adName);
          return; // Skip this ad
        }
        
        // Get description from parent campaign
        const campaign = ad.closest('coyoteCampaign');
        const description = campaign?.querySelector('description')?.textContent?.trim() || '';
        
        // Parse vehicle info from ad name
        const titleParts = adName.split(/\s+/);
        const brand = titleParts[0] || 'Unbekannt';
        const model = titleParts.slice(1).join(' ') || 'Modell';

        console.log("Parsed vehicle:", { brand, model, adName, hasImage: !!adFile });

        vehicles.push({
          brand,
          model,
          description: description || adName,
          images: adFile && adFile.startsWith('http') ? [adFile] : []
        });
      });

      setImportProgress(prev => ({ ...prev, [feedId]: 60 }));
      toast.info(`Importiere ${vehicles.length} Fahrzeuge...`);

      const vehiclesToCreate = vehicles.map(vehicleData => ({
        brand: vehicleData.brand,
        model: vehicleData.model,
        year: 2021,
        mileage: 50000,
        monthly_rate: 300,
        remaining_months: 24,
        takeover_fee: 0,
        location: "Deutschland",
        fuel_type: "Benzin",
        transmission: "Automatik",
        color: "Grau",
        description: vehicleData.description,
        contact_name: "",
        contact_email: "",
        contact_phone: "",
        images: vehicleData.images,
        is_private: false,
        status: "aktiv"
      }));

      setImportProgress(prev => ({ ...prev, [feedId]: 80 }));
      await base44.entities.Vehicle.bulkCreate(vehiclesToCreate);

      setImportProgress(prev => ({ ...prev, [feedId]: 100 }));
      toast.success(`${vehicles.length} Fahrzeuge importiert!`);

    } catch (error) {
      console.error("Import failed:", error);
      const isRateLimitOrTimeout = error.message.includes('Rate limit') || 
                                   error.message.includes('Failed to fetch') || 
                                   error.message.includes('408') ||
                                   error.message.includes('überlastet');
      toast.error("Import fehlgeschlagen", {
        description: isRateLimitOrTimeout 
          ? "❌ CORS-Proxies sind überlastet.\n\n✅ Lösung: Laden Sie die Datei herunter und verwenden Sie den Datei-Upload."
          : error.message,
        duration: 8000,
      });
    } finally {
      setTimeout(() => {
        setImportingFeeds(prev => {
          const newSet = new Set(prev);
          newSet.delete(feedId);
          return newSet;
        });
        setImportProgress(prev => {
          const newProgress = { ...prev };
          delete newProgress[feedId];
          return newProgress;
        });
      }, 2000);
    }
  };

  const handleCsvImport = async (file, testMode = false) => {
    if (!file) return;

    const controller = new AbortController();
    setAbortController(controller);
    setCsvImporting(true);
    setCsvProgress({ current: 0, total: 0 });

    try {
      const text = await file.text();
      const lines = text.split('\n').filter(line => line.trim());
      
      if (lines.length < 2) {
        throw new Error('CSV-Datei ist leer oder ungültig');
      }

      // Detect delimiter (tab or semicolon)
      const delimiter = lines[0].includes('\t') ? '\t' : ';';
      
      const headers = lines[0].split(delimiter).map(h => h.trim());
      const dataLines = lines.slice(1);
      
      // Find column indices
      const markeIdx = headers.indexOf('Marke');
      const modellIdx = headers.indexOf('Modell');
      const erstzulassungIdx = headers.indexOf('Erstzulassung');
      const kilometerstandIdx = headers.indexOf('Kilometerstand');
      const kraftstoffIdx = headers.indexOf('Kraftstoff');
      const getriebeIdx = headers.indexOf('Getriebe');
      const farbeIdx = headers.indexOf('Farbe');
      const fahrzeugnameIdx = headers.indexOf('Fahrzeugname');
      const fahrzeugbeschreibungIdx = headers.indexOf('Fahrzeugbeschreibung');
      const bildUrlIdx = headers.indexOf('bildUrl');
      const bild2UrlIdx = headers.indexOf('bild2Url');

      // Collect valid vehicles
      const validVehicles = [];
      for (const line of dataLines) {
        const values = line.split(delimiter);
        
        const brand = values[markeIdx]?.trim();
        const model = values[modellIdx]?.trim();
        
        if (brand && model) {
          validVehicles.push(values);
        }
        
        if (testMode && validVehicles.length >= 10) break;
      }
      
      const vehiclesToImport = validVehicles;
      const total = vehiclesToImport.length;
      
      setCsvProgress({ current: 0, total });
      toast.info(`Starte Import von ${total} Fahrzeugen...`);

      for (let i = 0; i < vehiclesToImport.length; i++) {
        if (controller.signal.aborted) {
          toast.warning('Import abgebrochen');
          break;
        }

        const values = vehiclesToImport[i];
        
        const brandValue = values[markeIdx]?.trim();
        const modelValue = values[modellIdx]?.trim();
        
        const vehicleData = {
          brand: brandValue,
          model: modelValue,
          year: values[erstzulassungIdx] ? parseInt(values[erstzulassungIdx].substring(0, 4)) : new Date().getFullYear(),
          mileage: values[kilometerstandIdx] ? parseInt(values[kilometerstandIdx].replace(/\D/g, '')) : 0,
          monthly_rate: 300,
          remaining_months: 24,
          takeover_fee: 0,
          location: 'Deutschland',
          fuel_type: values[kraftstoffIdx]?.trim() || 'Benzin',
          transmission: values[getriebeIdx]?.trim() || 'Automatik',
          color: values[farbeIdx]?.trim() || '',
          description: values[fahrzeugbeschreibungIdx]?.trim() || values[fahrzeugnameIdx]?.trim() || `${brandValue} ${modelValue}`,
          contact_name: '',
          contact_email: '',
          contact_phone: '',
          images: [values[bildUrlIdx], values[bild2UrlIdx]].filter(url => url && url.trim() && url.startsWith('http')),
          is_private: false,
          status: 'aktiv'
        };

        await base44.entities.Vehicle.create(vehicleData);
        setCsvProgress({ current: i + 1, total });
        
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      if (!controller.signal.aborted) {
        toast.success(`${vehiclesToImport.length} Fahrzeuge erfolgreich importiert!`);
      }

    } catch (error) {
      console.error('CSV Import failed:', error);
      toast.error('Import fehlgeschlagen', {
        description: error.message
      });
    } finally {
      setCsvImporting(false);
      setAbortController(null);
      setCsvProgress({ current: 0, total: 0 });
    }
  };

  const handleAbortImport = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  const handleAbortJsonFeedImport = (feedId) => {
    const controller = jsonFeedAbortControllers[feedId];
    if (controller) {
      controller.abort();
      toast.warning('Import wird abgebrochen...');
    }
  };

  const handleJsonFeedImport = async (url, feedId, testMode = false) => {
    if (!url || !url.trim()) {
      toast.error("Bitte geben Sie zuerst eine URL ein.");
      return;
    }

    const controller = new AbortController();
    setJsonFeedAbortControllers(prev => ({ ...prev, [feedId]: controller }));
    setImportingFeeds(prev => new Set([...prev, feedId]));
    setImportProgress(prev => ({ ...prev, [feedId]: 0 }));

    try {
      setImportProgress(prev => ({ ...prev, [feedId]: 20 }));
      toast.info("Lade JSON-Feed herunter...");

      // Try multiple CORS proxies since direct fetch usually fails due to CORS
      let response;
      const proxies = [
        `https://corsproxy.io/?${encodeURIComponent(url)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
      ];
      
      let lastError;
      for (const proxyUrl of proxies) {
        try {
          console.log(`Trying proxy: ${proxyUrl}`);
          response = await fetch(proxyUrl);
          if (response.ok) {
            console.log("Proxy succeeded");
            break;
          }
        } catch (err) {
          lastError = err;
          console.log(`Proxy failed: ${proxyUrl}`, err.message);
        }
      }
      
      if (!response || !response.ok) {
        throw new Error('Alle CORS-Proxies sind überlastet. Bitte laden Sie die JSON-Datei herunter und verwenden Sie den Datei-Upload unten.');
      }

      const text = await response.text();
      const jsonData = JSON.parse(text);

      setImportProgress(prev => ({ ...prev, [feedId]: 40 }));
      toast.info("Parse Fahrzeugdaten...");

      if (!Array.isArray(jsonData)) {
        throw new Error('JSON-Feed muss ein Array enthalten');
      }

      // Filter valid vehicles
      let validVehicles = jsonData.filter(item => {
        const brand = item.manufacturer_name?.trim();
        const model = item.car_model_name?.trim();
        return brand && model;
      });

      // Limit to 10 vehicles in test mode
      if (testMode) {
        validVehicles = validVehicles.slice(0, 10);
      }

      setImportProgress(prev => ({ ...prev, [feedId]: { current: 0, total: validVehicles.length } }));
      toast.info(`Importiere ${validVehicles.length} Fahrzeuge${testMode ? ' (Test)' : ''}...`);

      for (let i = 0; i < validVehicles.length; i++) {
        if (controller.signal.aborted) {
          toast.warning('Import abgebrochen');
          break;
        }

        const item = validVehicles[i];

        try {
          // Determine offer type: leasing or cash purchase
          const leasingMatrix = item.leasingmatrix?.split('|') || [];
          const cashPriceValue = item.cash_price?.wert ? parseFloat(item.cash_price.wert.replace(',', '.')) : 0;
          const hasLeasing = leasingMatrix.length >= 3 && leasingMatrix[2];
          const hasCashPrice = cashPriceValue > 0;
          
          // Determine offer type and pricing
          let offerType = 'leasing';
          let monthlyRate = 0;
          let cashPrice = 0;
          let remainingMonths = 24;
          
          if (hasLeasing) {
            offerType = 'leasing';
            // Use brutto price (index 3) for display, fallback to netto (index 2)
            monthlyRate = leasingMatrix[3] ? parseFloat(leasingMatrix[3].replace(',', '.')) : 
                         parseFloat(leasingMatrix[2].replace(',', '.'));
            remainingMonths = leasingMatrix[0] ? parseInt(leasingMatrix[0]) : 24;
          } else if (hasCashPrice) {
            offerType = 'kauf';
            cashPrice = cashPriceValue;
          } else {
            // Skip vehicles without valid pricing
            console.log(`Skipping vehicle without pricing: ${item.manufacturer_name} ${item.car_model_name}`);
            continue;
          }

          // Parse location
          const pickupLocation = item.pickup_locations?.[0];
          const location = pickupLocation ? `${pickupLocation.zipcode} ${pickupLocation.city}` : 'Deutschland';

          // Parse images
          const images = [];
          if (item.image_url) images.push(item.image_url);
          if (item.image2_url) {
            const additionalImages = item.image2_url.split(';').filter(url => url?.trim());
            images.push(...additionalImages);
          }

          // Map fuel type
          const fuelTypeMap = {
            'Benzin': 'Benzin',
            'Diesel': 'Diesel',
            'Elektro': 'Elektro',
            'Hybrid': 'Hybrid'
          };
          const fuelType = fuelTypeMap[item.fuel_type] || 'Benzin';

          // Map transmission
          const transmissionMap = {
            'Automatik': 'Automatik',
            'Manuell': 'Manuell',
            'Schaltgetriebe': 'Manuell'
          };
          const transmission = transmissionMap[item.gear_type] || 'Automatik';

          const vehicleData = {
                          brand: item.manufacturer_name.trim(),
                          model: item.car_model_name.trim(),
                          year: item.first_registration ? parseInt(item.first_registration.substring(0, 4)) : new Date().getFullYear(),
                          mileage: item.mileage?.wert ? parseInt(item.mileage.wert) : 0,
                          offer_type: offerType,
                          monthly_rate: monthlyRate,
                          cash_price: cashPrice,
                          remaining_months: remainingMonths,
                          takeover_fee: item.deposit?.wert ? parseFloat(item.deposit.wert) : 0,
                          location: location,
                          fuel_type: fuelType,
                          transmission: transmission,
                          color: item.color?.trim() || '',
                          description: item.vehicle_description?.trim() || item.vehicle_title?.trim() || `${item.manufacturer_name} ${item.car_model_name}`,
                          contact_name: '',
                          contact_email: '',
                          contact_phone: '',
                          external_url: item.product_detail_page_url?.trim() || '',
                          images: images,
                          is_private: false,
                          status: 'aktiv'
                        };

          await base44.entities.Vehicle.create(vehicleData);
        } catch (err) {
          console.error(`Fehler bei Fahrzeug ${i + 1}:`, err);
          // Continue with next vehicle
        }

        setImportProgress(prev => ({ ...prev, [feedId]: { current: i + 1, total: validVehicles.length } }));
        
        // Longer delay to prevent rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      setImportProgress(prev => ({ ...prev, [feedId]: { current: validVehicles.length, total: validVehicles.length } }));
      toast.success(`${validVehicles.length} Fahrzeuge importiert!`);

    } catch (error) {
      console.error("JSON Feed Import failed:", error);
      const isRateLimitOrCORS = error.message.includes('Rate limit') || 
                                error.message.includes('Failed to fetch') || 
                                error.message.includes('408') ||
                                error.message.includes('überlastet') ||
                                error.message.includes('CORS-Proxies');
      toast.error("Import fehlgeschlagen", {
        description: isRateLimitOrCORS 
          ? "❌ CORS-Proxies sind überlastet.\n\n✅ Lösung: Laden Sie die JSON-Datei herunter und verwenden Sie den Datei-Upload unten."
          : error.message,
        duration: 8000,
      });
    } finally {
      setTimeout(() => {
        setImportingFeeds(prev => {
          const newSet = new Set(prev);
          newSet.delete(feedId);
          return newSet;
        });
        setImportProgress(prev => {
          const newProgress = { ...prev };
          delete newProgress[feedId];
          return newProgress;
        });
        setJsonFeedAbortControllers(prev => {
          const newControllers = { ...prev };
          delete newControllers[feedId];
          return newControllers;
        });
      }, 2000);
    }
  };

  const handleJsonImport = async (file, testMode = false) => {
    if (!file) return;

    const controller = new AbortController();
    setAbortController(controller);
    setCsvImporting(true);
    setCsvProgress({ current: 0, total: 0 });

    try {
      const text = await file.text();
      const jsonData = JSON.parse(text);

      if (!Array.isArray(jsonData)) {
        throw new Error('JSON-Datei muss ein Array enthalten');
      }

      // Filter valid vehicles
      const validVehicles = jsonData.filter(item => {
        const brand = item.manufacturer_name?.trim();
        const model = item.car_model_name?.trim();
        return brand && model;
      });

      const vehiclesToImport = testMode ? validVehicles.slice(0, 10) : validVehicles;
      const total = vehiclesToImport.length;

      setCsvProgress({ current: 0, total });
      toast.info(`Starte Import von ${total} Fahrzeugen...`);

      for (let i = 0; i < vehiclesToImport.length; i++) {
        if (controller.signal.aborted) {
          toast.warning('Import abgebrochen');
          break;
        }

        const item = vehiclesToImport[i];

        // Determine offer type: leasing or cash purchase
              const leasingMatrix = item.leasingmatrix?.split('|') || [];
              const cashPriceValue = item.cash_price?.wert ? parseFloat(item.cash_price.wert.replace(',', '.')) : 0;
              const hasLeasing = leasingMatrix.length >= 3 && leasingMatrix[2];
              const hasCashPrice = cashPriceValue > 0;

              let offerType = 'leasing';
              let monthlyRate = 0;
              let cashPrice = 0;
              let remainingMonths = 24;

              if (hasLeasing) {
                offerType = 'leasing';
                monthlyRate = leasingMatrix[3] ? parseFloat(leasingMatrix[3].replace(',', '.')) : 
                             parseFloat(leasingMatrix[2].replace(',', '.'));
                remainingMonths = leasingMatrix[0] ? parseInt(leasingMatrix[0]) : 24;
              } else if (hasCashPrice) {
                offerType = 'kauf';
                cashPrice = cashPriceValue;
              } else {
                continue; // Skip vehicles without valid pricing
              }

        // Parse location
        const pickupLocation = item.pickup_locations?.[0];
        const location = pickupLocation ? `${pickupLocation.zipcode} ${pickupLocation.city}` : 'Deutschland';

        // Parse images
        const images = [];
        if (item.image_url) images.push(item.image_url);
        if (item.image2_url) {
          const additionalImages = item.image2_url.split(';').filter(url => url?.trim());
          images.push(...additionalImages);
        }

        // Map fuel type
        const fuelTypeMap = {
          'Benzin': 'Benzin',
          'Diesel': 'Diesel',
          'Elektro': 'Elektro',
          'Hybrid': 'Hybrid'
        };
        const fuelType = fuelTypeMap[item.fuel_type] || 'Benzin';

        // Map transmission
        const transmissionMap = {
          'Automatik': 'Automatik',
          'Manuell': 'Manuell',
          'Schaltgetriebe': 'Manuell'
        };
        const transmission = transmissionMap[item.gear_type] || 'Automatik';

        const vehicleData = {
                    brand: item.manufacturer_name.trim(),
                    model: item.car_model_name.trim(),
                    year: item.first_registration ? parseInt(item.first_registration.substring(0, 4)) : new Date().getFullYear(),
                    mileage: item.mileage?.wert ? parseInt(item.mileage.wert) : 0,
                    offer_type: offerType,
                    monthly_rate: monthlyRate,
                    cash_price: cashPrice,
                    remaining_months: remainingMonths,
                    takeover_fee: item.deposit?.wert ? parseFloat(item.deposit.wert) : 0,
                    location: location,
                    fuel_type: fuelType,
                    transmission: transmission,
                    color: item.color?.trim() || '',
                    description: item.vehicle_description?.trim() || item.vehicle_title?.trim() || `${item.manufacturer_name} ${item.car_model_name}`,
                    contact_name: '',
                    contact_email: '',
                    contact_phone: '',
                    external_url: item.product_detail_page_url?.trim() || '',
                    images: images,
                    is_private: false,
                    status: 'aktiv'
                  };

        await base44.entities.Vehicle.create(vehicleData);
        setCsvProgress({ current: i + 1, total });

        await new Promise(resolve => setTimeout(resolve, 200));
      }

      if (!controller.signal.aborted) {
        toast.success(`${vehiclesToImport.length} Fahrzeuge erfolgreich importiert!`);
      }

    } catch (error) {
      console.error('JSON Import failed:', error);
      toast.error('Import fehlgeschlagen', {
        description: error.message
      });
    } finally {
      setCsvImporting(false);
      setAbortController(null);
      setCsvProgress({ current: 0, total: 0 });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Einstellungen</h2>
      <Card>
        <CardHeader>
          <CardTitle>Daten-Feeds verwalten</CardTitle>
          <CardDescription>
            Fügen Sie eine oder mehrere URLs (XML/JSON) hinzu, um Fahrzeugdaten zu importieren.
            Der Import kann einige Minuten dauern.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label>Feed-URLs</Label>
            {feeds.map((feed) => (
              <div key={feed.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={feed.url}
                    onChange={(e) => handleFeedChange(feed.id, e.target.value)}
                    placeholder="https://beispiel.de/fahrzeug-feed.xml"
                    disabled={importingFeeds.has(feed.id)}
                  />
                  <Button 
                    variant="secondary" 
                    onClick={() => handleImport(feed.url, feed.id)}
                    disabled={importingFeeds.has(feed.id)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {importingFeeds.has(feed.id) ? "Importiere..." : "Importieren"}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleRemoveFeed(feed.id)} 
                    disabled={feeds.length <= 1 || importingFeeds.has(feed.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {importingFeeds.has(feed.id) && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Import-Fortschritt</span>
                      <span className="font-medium">
                        {typeof importProgress[feed.id] === 'object' 
                          ? `${importProgress[feed.id]?.current || 0} / ${importProgress[feed.id]?.total || 0}`
                          : `${importProgress[feed.id] || 0}%`}
                      </span>
                    </div>
                    <Progress 
                      value={typeof importProgress[feed.id] === 'object' 
                        ? ((importProgress[feed.id]?.current || 0) / (importProgress[feed.id]?.total || 1)) * 100 
                        : (importProgress[feed.id] || 0)} 
                      className="h-2" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex gap-2 pt-4 border-t">
            <Button onClick={handleAddFeed} variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Feed hinzufügen
            </Button>
            <Button onClick={handleSave}>Einstellungen speichern</Button>
          </div>
        </CardContent>
        </Card>

        <Card>
        <CardHeader>
          <CardTitle>JSON Daten-Feeds verwalten</CardTitle>
          <CardDescription>
            Fügen Sie eine oder mehrere JSON-Feed-URLs hinzu, um Fahrzeugdaten zu importieren.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label>JSON Feed-URLs</Label>
            {jsonFeeds.map((feed) => (
              <div key={feed.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    value={feed.url}
                    onChange={(e) => handleJsonFeedChange(feed.id, e.target.value)}
                    placeholder="https://beispiel.de/fahrzeug-feed.json"
                    disabled={importingFeeds.has(feed.id)}
                  />
                  <Button 
                    variant="secondary" 
                    onClick={() => handleJsonFeedImport(feed.url, feed.id, false)}
                    disabled={importingFeeds.has(feed.id)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {importingFeeds.has(feed.id) ? "Importiere..." : "Importieren"}
                  </Button>
                  {!importingFeeds.has(feed.id) ? (
                                          <Button 
                                            variant="outline" 
                                            onClick={() => handleJsonFeedImport(feed.url, feed.id, true)}
                                          >
                                            <TestTube2 className="mr-2 h-4 w-4" />
                                            Test (10)
                                          </Button>
                                        ) : (
                                          <Button 
                                            variant="destructive" 
                                            onClick={() => handleAbortJsonFeedImport(feed.id)}
                                          >
                                            <X className="mr-2 h-4 w-4" />
                                            Abbrechen
                                          </Button>
                                        )}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleRemoveJsonFeed(feed.id)} 
                    disabled={jsonFeeds.length <= 1 || importingFeeds.has(feed.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {importingFeeds.has(feed.id) && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Import-Fortschritt</span>
                      <span className="font-medium">
                        {typeof importProgress[feed.id] === 'object' 
                          ? `${importProgress[feed.id]?.current || 0} / ${importProgress[feed.id]?.total || 0}`
                          : `${importProgress[feed.id] || 0}%`}
                      </span>
                    </div>
                    <Progress 
                      value={typeof importProgress[feed.id] === 'object' 
                        ? ((importProgress[feed.id]?.current || 0) / (importProgress[feed.id]?.total || 1)) * 100 
                        : (importProgress[feed.id] || 0)} 
                      className="h-2" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-4 border-t">
            <Button onClick={handleAddJsonFeed} variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              JSON Feed hinzufügen
            </Button>
          </div>
        </CardContent>
        </Card>

        <Card>
        <CardHeader>
          <CardTitle>JSON/CSV Import</CardTitle>
          <CardDescription>
            Importieren Sie Fahrzeuge aus einer JSON- oder CSV-Datei
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
            <input
              type="file"
              accept=".json,.csv"
              id="fileUpload"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (file.name.endsWith('.json')) {
                    handleJsonImport(file, false);
                  } else {
                    handleCsvImport(file, false);
                  }
                }
                e.target.value = '';
              }}
              disabled={csvImporting}
            />
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                JSON- oder CSV-Datei hochladen und importieren
              </p>
              <div className="flex gap-2 justify-center">
                <label htmlFor="fileUpload">
                  <Button 
                    type="button" 
                    variant="outline" 
                    asChild 
                    disabled={csvImporting}
                  >
                    <span>
                      <Upload className="mr-2 h-4 w-4" />
                      Vollständiger Import
                    </span>
                  </Button>
                </label>
                <input
                  type="file"
                  accept=".json,.csv"
                  id="fileTestUpload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.name.endsWith('.json')) {
                        handleJsonImport(file, true);
                      } else {
                        handleCsvImport(file, true);
                      }
                    }
                    e.target.value = '';
                  }}
                  disabled={csvImporting}
                />
                <label htmlFor="fileTestUpload">
                  <Button 
                    type="button" 
                    variant="secondary" 
                    asChild 
                    disabled={csvImporting}
                  >
                    <span>
                      <TestTube2 className="mr-2 h-4 w-4" />
                      Test (10 Fahrzeuge)
                    </span>
                  </Button>
                </label>
              </div>
            </div>
          </div>

          {csvImporting && (
            <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-blue-900">Import läuft...</p>
                  <p className="text-sm text-blue-700">
                    {csvProgress.current} von {csvProgress.total} Fahrzeugen importiert
                  </p>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={handleAbortImport}
                >
                  <X className="mr-2 h-4 w-4" />
                  Abbrechen
                </Button>
              </div>
              <Progress 
                value={(csvProgress.current / csvProgress.total) * 100} 
                className="h-2"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}