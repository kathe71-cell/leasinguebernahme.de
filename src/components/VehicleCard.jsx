import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MapPin, 
  Settings, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function VehicleCard({ vehicle }) {
  const isExternal = Boolean(vehicle?.external_url && vehicle.external_url.trim());

  const handleContact = () => {
    if (isExternal) {
      window.open(vehicle.external_url, '_blank', 'noopener,noreferrer');
    } else {
      const subject = `Anfrage: ${vehicle.brand} ${vehicle.model}`;
      const body = `Hallo,\n\nich interessiere mich für Ihr Leasingangebot:\n\n${vehicle.brand} ${vehicle.model}\nMonatliche Rate: ${vehicle.monthly_rate}€\n\nBitte kontaktieren Sie mich für weitere Details.\n\nMit freundlichen Grüßen`;
      window.location.href = `mailto:${vehicle.contact_email || 'jens@kathe.org'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const hasValidImages = vehicle && Array.isArray(vehicle.images) && vehicle.images.length > 0 && 
    vehicle.images[0] && !vehicle.images[0].includes('example.com');
  
  const vehicleImage = hasValidImages ? vehicle.images[0] : null;

  const fuelTypeColors = {
    "Benzin": "bg-slate-100 text-slate-900 border-slate-300",
    "Diesel": "bg-slate-100 text-slate-900 border-slate-300", 
    "Elektro": "bg-emerald-100 text-emerald-950 border-emerald-300 font-extrabold",
    "Hybrid": "bg-amber-100 text-amber-950 border-amber-300 font-extrabold",
    "Plug-in Hybrid": "bg-amber-100 text-amber-950 border-amber-300 font-extrabold"
  };

  return (
    <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        <div className="relative overflow-hidden bg-slate-100">
          {vehicleImage ? (
            <img
              src={vehicleImage}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-slate-200 text-slate-500">
              <span className="text-sm font-semibold">Leasingangebot Bild</span>
            </div>
          )}

          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            <Badge className={`border text-xs px-2.5 py-0.5 font-bold ${fuelTypeColors[vehicle.fuel_type] || "bg-slate-100 text-slate-900 border-slate-300"}`}>
              {vehicle.fuel_type}
            </Badge>
            {!vehicle.is_private && (
              <Badge className="bg-slate-900 text-white font-bold text-xs px-2.5 py-0.5">
                Gewerblich
              </Badge>
            )}
          </div>

          {vehicle.takeover_fee > 0 && (
            <Badge className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-extrabold text-xs px-2.5 py-0.5 shadow">
              {vehicle.takeover_fee}€ Übernahme
            </Badge>
          )}
        </div>

        <CardContent className="p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {vehicle.brand} {vehicle.model}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                EZ {vehicle.year} • {vehicle.mileage?.toLocaleString('de-DE')} km
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-slate-900">
                {vehicle.monthly_rate} €
              </p>
              <p className="text-[11px] text-slate-500 font-medium">monatlich *</p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span><strong>{vehicle.remaining_months} Monate</strong> Restlaufzeit</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>{vehicle.location}</span>
            </div>
            {vehicle.transmission && (
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{vehicle.transmission}</span>
              </div>
            )}
          </div>

          {vehicle.description && (
            <p className="text-xs text-slate-600 line-clamp-2 pt-1 leading-relaxed">
              {vehicle.description}
            </p>
          )}
        </CardContent>
      </div>

      <div className="p-5 pt-0 flex gap-2">
        <Link to={`${createPageUrl("Fahrzeugdetails")}?id=${vehicle.id}`} className="flex-1">
          <Button variant="outline" className="w-full border-slate-300 text-slate-800 font-bold hover:bg-slate-100 text-xs py-2">
            Details
          </Button>
        </Link>

        <button 
          onClick={handleContact}
          className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs py-2 px-3 rounded-lg shadow flex items-center justify-center gap-1 transition-transform active:scale-95"
        >
          <span>{isExternal ? 'Zum Angebot *' : 'Anfragen *'}</span>
          {isExternal ? <ExternalLink className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </button>
      </div>
    </Card>
  );
}