import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Cookie, Shield, BarChart3, Target, ChevronDown, ChevronUp } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Immer aktiv, kann nicht deaktiviert werden
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("cookie_consent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const selected = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("cookie_consent", JSON.stringify(selected));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("cookie_consent", JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const togglePreference = (key) => {
    if (key === "necessary") return; // Kann nicht geändert werden
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
        <CardHeader className="border-b">
          <CardTitle id="cookie-banner-title" className="flex items-center gap-2 text-xl">
            <Cookie className="w-6 h-6 text-blue-600" aria-hidden="true" />
            Cookie-Einstellungen
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-gray-600">
            Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
            Einige Cookies sind technisch notwendig, andere helfen uns, die Website zu verbessern 
            und Ihnen personalisierte Inhalte anzuzeigen. Sie können selbst entscheiden, welche 
            Cookies Sie zulassen möchten.
          </p>

          <Button 
            variant="ghost" 
            onClick={() => setShowDetails(!showDetails)}
            className="w-full justify-between text-blue-600 hover:text-blue-700"
            aria-expanded={showDetails}
            aria-controls="cookie-details"
          >
            <span>Cookie-Details {showDetails ? "ausblenden" : "anzeigen"}</span>
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          {showDetails && (
            <div id="cookie-details" className="space-y-4 border rounded-lg p-4 bg-gray-50">
              {/* Notwendige Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" aria-hidden="true" />
                    <Label className="font-semibold text-gray-900">Notwendige Cookies</Label>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Immer aktiv</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich. 
                    Sie ermöglichen z.B. die Speicherung Ihrer Cookie-Einstellungen und die Anmeldung.
                    Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren.
                  </p>
                </div>
                <Switch 
                  checked={true} 
                  disabled 
                  aria-label="Notwendige Cookies (immer aktiv)"
                />
              </div>

              {/* Funktionale Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Cookie className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    <Label htmlFor="functional-cookies" className="font-semibold text-gray-900">Funktionale Cookies</Label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern Ihrer Präferenzen, 
                    Spracheinstellungen und personalisierte Inhalte. Ohne diese Cookies stehen einige 
                    Funktionen möglicherweise nicht zur Verfügung.
                  </p>
                </div>
                <Switch 
                  id="functional-cookies"
                  checked={preferences.functional} 
                  onCheckedChange={() => togglePreference("functional")}
                  aria-label="Funktionale Cookies aktivieren"
                />
              </div>

              {/* Analyse Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-600" aria-hidden="true" />
                    <Label htmlFor="analytics-cookies" className="font-semibold text-gray-900">Analyse-Cookies</Label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. 
                    Die Daten werden anonymisiert erhoben und helfen uns, die Website kontinuierlich zu verbessern.
                  </p>
                </div>
                <Switch 
                  id="analytics-cookies"
                  checked={preferences.analytics} 
                  onCheckedChange={() => togglePreference("analytics")}
                  aria-label="Analyse-Cookies aktivieren"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-orange-600" aria-hidden="true" />
                    <Label htmlFor="marketing-cookies" className="font-semibold text-gray-900">Marketing-Cookies</Label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Werbung anzuzeigen, die für Sie relevant ist. 
                    Sie können auch verwendet werden, um die Effektivität von Werbekampagnen zu messen 
                    und personalisierte Inhalte auf anderen Websites anzuzeigen.
                  </p>
                </div>
                <Switch 
                  id="marketing-cookies"
                  checked={preferences.marketing} 
                  onCheckedChange={() => togglePreference("marketing")}
                  aria-label="Marketing-Cookies aktivieren"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={handleRejectAll}
              className="flex-1"
            >
              Nur notwendige
            </Button>
            {showDetails && (
              <Button 
                variant="outline" 
                onClick={handleAcceptSelected}
                className="flex-1"
              >
                Auswahl speichern
              </Button>
            )}
            <Button 
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Alle akzeptieren
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Weitere Informationen finden Sie in unserer{" "}
            <a href="/Datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</a>.
            Sie können Ihre Einstellungen jederzeit über den Link im Footer ändern.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}