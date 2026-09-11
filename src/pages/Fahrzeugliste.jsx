import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Vehicle } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, RefreshCw, Car } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";

export default function Fahrzeugliste() {
  const location = useLocation();
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [brandFilter, setBrandFilter] = useState("all");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [maxRateFilter, setMaxRateFilter] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const brand = searchParams.get("brand");
    const fuelType = searchParams.get("fuelType");
    const maxRate = searchParams.get("maxRate");
    const loc = searchParams.get("location");

    if (brand) setBrandFilter(brand);
    if (fuelType) setFuelFilter(fuelType);
    if (maxRate) setMaxRateFilter(maxRate);
    if (loc) setLocationSearch(loc);

    loadVehicles();
  }, [location.search]);

  const loadVehicles = async () => {
    setIsLoading(true);
    try {
      const data = await Vehicle.list();
      setVehicles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filtered = vehicles.filter(v => {
    if (brandFilter !== "all" && v.brand.toLowerCase() !== brandFilter.toLowerCase()) return false;
    if (fuelFilter !== "all" && v.fuel_type.toLowerCase() !== fuelFilter.toLowerCase()) return false;
    if (maxRateFilter && v.monthly_rate > Number(maxRateFilter)) return false;
    if (locationSearch && !v.location.toLowerCase().includes(locationSearch.toLowerCase()) && !v.brand.toLowerCase().includes(locationSearch.toLowerCase()) && !v.model.toLowerCase().includes(locationSearch.toLowerCase())) return false;
    return true;
  });

  const resetFilters = () => {
    setBrandFilter("all");
    setFuelFilter("all");
    setMaxRateFilter("");
    setLocationSearch("");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
              Live Marktübersicht
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Verfügbare Leasingübernahme-Angebote
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Geprüfte Verträge mit sofortiger Verfügbarkeit in Deutschland
            </p>
          </div>
          <Badge className="bg-slate-900 text-white font-extrabold text-sm px-4 py-1.5 rounded-full">
            {filtered.length} Angebote gefunden
          </Badge>
        </div>

        {/* Filter Bar */}
        <Card className="bg-white border-slate-200 shadow-sm p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Marke
              </label>
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="bg-slate-50 border-slate-200 font-semibold text-slate-900">
                  <SelectValue placeholder="Alle Marken" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Marken</SelectItem>
                  <SelectItem value="Audi">Audi</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="Mercedes">Mercedes</SelectItem>
                  <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="Tesla">Tesla</SelectItem>
                  <SelectItem value="Cupra">Cupra</SelectItem>
                  <SelectItem value="Skoda">Skoda</SelectItem>
                  <SelectItem value="Porsche">Porsche</SelectItem>
                  <SelectItem value="Volvo">Volvo</SelectItem>
                  <SelectItem value="Opel">Opel</SelectItem>
                  <SelectItem value="Ford">Ford</SelectItem>
                  <SelectItem value="Hyundai">Hyundai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Antriebsart
              </label>
              <Select value={fuelFilter} onValueChange={setFuelFilter}>
                <SelectTrigger className="bg-slate-50 border-slate-200 font-semibold text-slate-900">
                  <SelectValue placeholder="Alle Antriebe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Antriebe</SelectItem>
                  <SelectItem value="Benzin">Benzin</SelectItem>
                  <SelectItem value="Diesel">Diesel</SelectItem>
                  <SelectItem value="Elektro">Elektro</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="Plug-in Hybrid">Plug-in Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Max. Monatsrate (€)
              </label>
              <Input 
                type="number"
                placeholder="z. B. 450"
                value={maxRateFilter}
                onChange={(e) => setMaxRateFilter(e.target.value)}
                className="bg-slate-50 border-slate-200 text-slate-900 font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Suchbegriff / Ort
              </label>
              <Input 
                placeholder="z. B. München oder Avant"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="bg-slate-50 border-slate-200 text-slate-900 font-semibold"
              />
            </div>

          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              * Partnerlink / Alle Monatsraten zzgl. gesetzlicher Umschreibungsgebühren des Herstellers
            </span>
            <Button 
              onClick={resetFilters} 
              variant="ghost" 
              size="sm" 
              className="text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Filter zurücksetzen
            </Button>
          </div>
        </Card>

        {/* Results Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <Card className="bg-white border-slate-200 p-12 text-center space-y-4">
            <Car className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">Keine passenden Angebote gefunden</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Versuchen Sie die Filterkriterien zu lockern oder setzen Sie die Filtereinstellungen zurück.
            </p>
            <Button onClick={resetFilters} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold">
              Alle Angebote anzeigen *
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}