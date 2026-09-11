import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Vehicle, Inquiry } from "@/api/entities";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Fuel, 
  Settings, 
  Calendar,
  User,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function Fahrzeugdetails() {
  const [vehicle, setVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const loadVehicle = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      
      if (!id) {
        setIsLoading(false);
        return;
      }

      try {
        const item = await Vehicle.get(id);
        if (item) {
          setVehicle(item);
        } else {
          const list = await Vehicle.filter({ id });
          if (list && list.length > 0) setVehicle(list[0]);
        }
      } catch (error) {
        console.error("Failed to load vehicle:", error);
      }
      setIsLoading(false);
    };

    loadVehicle();
  }, []);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!vehicle) return;
    try {
      await Inquiry.create({
        vehicle_id: vehicle.id,
        name: inquiryName,
        email: inquiryEmail,
        phone: inquiryPhone,
        message: inquiryMessage
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  const isExternal = Boolean(vehicle?.external_url && vehicle.external_url.trim());

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="h-12 bg-slate-200 animate-pulse rounded-xl max-w-sm mx-auto mb-6"></div>
        <div className="h-96 bg-slate-200 animate-pulse rounded-2xl"></div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Fahrzeug nicht gefunden</h2>
        <p className="text-slate-600">Das von Ihnen gesuchte Leasingangebot existiert nicht mehr oder wurde entfernt.</p>
        <Link to={createPageUrl("Fahrzeugliste")}>
          <Button className="bg-amber-500 text-slate-950 font-extrabold">Zurück zur Fahrzeugliste *</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Back Link */}
        <Link to={createPageUrl("Fahrzeugliste")} className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Fahrzeugliste
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Image */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&auto=format&fit=crop&q=80"} 
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Spec Card */}
            <Card className="bg-white border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-6 gap-4">
                <div>
                  <Badge className="bg-amber-100 text-amber-950 border border-amber-300 font-extrabold text-xs px-3 py-1 mb-2">
                    {vehicle.brand} Leasingübernahme
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {vehicle.brand} {vehicle.model}
                  </h1>
                  <p className="text-slate-500 text-sm font-medium mt-1">
                    Standort: {vehicle.location} • Erstellt: {new Date(vehicle.created_at || Date.now()).toLocaleDateString('de-DE')}
                  </p>
                </div>
                <div className="text-left sm:text-right bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-3xl font-extrabold text-slate-900 block">
                    {vehicle.monthly_rate} €
                  </span>
                  <span className="text-xs text-slate-500 font-bold">monatlich *</span>
                </div>
              </div>

              {/* Technical Matrix */}
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-4">Technische Spezifikationen</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs text-slate-500 font-bold block">Erstzulassung</span>
                    <span className="font-bold text-slate-900 text-sm">{vehicle.year}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs text-slate-500 font-bold block">Kilometerstand</span>
                    <span className="font-bold text-slate-900 text-sm">{vehicle.mileage?.toLocaleString('de-DE')} km</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs text-slate-500 font-bold block">Restlaufzeit</span>
                    <span className="font-bold text-slate-900 text-sm">{vehicle.remaining_months} Monate</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs text-slate-500 font-bold block">Kraftstoff / Antrieb</span>
                    <span className="font-bold text-slate-900 text-sm">{vehicle.fuel_type}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs text-slate-500 font-bold block">Getriebe</span>
                    <span className="font-bold text-slate-900 text-sm">{vehicle.transmission || 'Automatik'}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-xs text-slate-500 font-bold block">Übernahmegebühr</span>
                    <span className="font-bold text-slate-900 text-sm">{vehicle.takeover_fee ? `${vehicle.takeover_fee} €` : '0 €'}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-extrabold text-slate-900 text-lg mb-3">Fahrzeugbeschreibung &amp; Vertragsdetails</h3>
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                  {vehicle.description}
                </p>
              </div>
            </Card>
          </div>

          {/* Contact / Action Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white border-slate-200 shadow-sm p-6 space-y-6 sticky top-24">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-extrabold text-slate-900 text-xl">Interesse bekunden</h3>
                <p className="text-xs text-slate-500 mt-1">Direkte Kontaktaufnahme zur Übernahme</p>
              </div>

              {isExternal ? (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dieses Leasingangebot wird auf unserer Partnerplattform bereitgestellt. Klicken Sie auf den Button, um die vollständigen Unterlagen einzusehen.
                  </p>
                  <a 
                    href={vehicle.external_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full"
                  >
                    <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-3.5 px-4 rounded-xl shadow transition-transform active:scale-95 flex items-center justify-center gap-2">
                      <span>Zum Partner-Angebot *</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </a>
                  <span className="text-[11px] text-slate-400 block text-center">
                    * Partnerlink / Sie werden extern weitergeleitet
                  </span>
                </div>
              ) : submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-950 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm">Anfrage erfolgreich gesendet!</h4>
                  <p className="text-xs text-emerald-800">
                    Der Anbieter wird sich in Kürze mit Ihnen in Verbindung setzen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ihr Name *</label>
                    <Input 
                      required 
                      placeholder="Max Mustermann" 
                      value={inquiryName} 
                      onChange={(e) => setInquiryName(e.target.value)} 
                      className="bg-slate-50 border-slate-200 text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ihre E-Mail *</label>
                    <Input 
                      required 
                      type="email" 
                      placeholder="name@beispiel.de" 
                      value={inquiryEmail} 
                      onChange={(e) => setInquiryEmail(e.target.value)} 
                      className="bg-slate-50 border-slate-200 text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefon (Optional)</label>
                    <Input 
                      placeholder="+49 170 1234567" 
                      value={inquiryPhone} 
                      onChange={(e) => setInquiryPhone(e.target.value)} 
                      className="bg-slate-50 border-slate-200 text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nachricht</label>
                    <textarea 
                      rows={3} 
                      placeholder="Ich interessiere mich für die Leasingübernahme dieses Fahrzeugs..." 
                      value={inquiryMessage} 
                      onChange={(e) => setInquiryMessage(e.target.value)} 
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow transition-transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Unverbindlich anfragen *</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-slate-400 block text-center">
                    * Partnerlink / Ihre Angaben werden vertraulich behandelt
                  </span>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}