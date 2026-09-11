import React from "react";
import { Link } from "react-router-dom";
import { Check, X, ShieldCheck, Scale, ArrowRight } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function VorteileNachteile() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Objektive Bewertung
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Vor- &amp; Nachteile einer Leasingübernahme
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Vor- und Nachteile im Vergleich zu Neuwagen-Leasing, Gebrauchtwagen-Kauf und Auto-Abo auf einen Blick.
          </p>
        </div>

        <AdSenseBanner slot="4000000001" className="bg-white" />

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vorteile */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 border-t-4 border-t-emerald-500">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">✓</span>
              Vorteile für den Übernehmer
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Sofortige Verfügbarkeit:</strong> Keine monatelangen Wartezeiten wie beim Neuwagen-Bestellleasing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Geringere Restlaufzeiten:</strong> Ideal, wenn Sie ein Auto nur für 6 bis 18 Monate benötigen.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Keine Anzahlung:</strong> Oft wurden Sonderzahlungen bereits vom Vorbesitzer geleistet.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Laufende Werksgarantie:</strong> Junge gebrauchte Fahrzeuge haben meist noch Herstellergarantie.</span>
              </li>
            </ul>
          </div>

          {/* Nachteile */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 border-t-4 border-t-amber-500">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold">!</span>
              Mögliche Nachteile &amp; Risiken
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Umschreibungsgebühren:</strong> Einmalige Bankgebühr (ca. 250 € bis 500 €) fällt an.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Fixe Konfiguration:</strong> Farbe und Ausstattung können nicht mehr angepasst werden.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Zustandshaftung bei Rückgabe:</strong> Sie haften am Ende auch für Vorschäden des Vorbesitzers (Übergabeprotokoll wichtig!).</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Bank-Bonitätsprüfung:</strong> Ohne einwandfreie Schufa wird die Umschreibung abgelehnt.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
