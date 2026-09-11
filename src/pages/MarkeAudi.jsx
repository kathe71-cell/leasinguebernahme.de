import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, DollarSign, FileText, ArrowRight, ChevronRight } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function MarkeAudi() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Hersteller-Ratgeber
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Audi Leasingübernahme Leitfaden
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Alles zur Vertragsübernahme von Audi Leasingverträgen über die Volkswagen Financial Services AG (VWFS).
          </p>
        </div>

        <AdSenseBanner slot="8000000001" className="bg-white" />

        {/* Content Box 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Welche Bank betreut Audi Leasingverträge?
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p>
              Leasingverträge der Marke Audi werden in Deutschland über die <strong>Volkswagen Financial Services AG (VWFS) / Audi Leasing</strong> abgewickelt. Die Vertragsübernahme bedarf der formalen Genehmigung durch die VWFS.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block text-sm">Die wichtigsten Daten auf einen Blick:</strong>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                <li><strong>Umschreibungsgebühr:</strong> ca. 300 € bis 450 € inkl. MwSt.</li>
                <li><strong>Mindestrestlaufzeit:</strong> In der Regel mindestens 6 Monate.</li>
                <li><strong>Bonitätsnachweis:</strong> Schufa-Selbstauskunft, 3 Gehaltsnachweise oder BWA für Gewerbe.</li>
              </ul>
            </div>
          </div>
        </div>

        <AdSenseBanner slot="8000000002" className="bg-white" />

        {/* Content Box 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            Ablauf der Audi Vertragsübertragung
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <ol className="list-decimal list-inside space-y-2 font-medium text-slate-800">
              <li><strong>Antragstellung:</strong> Der bisherige Leasingnehmer fordert die Formulare zur Vertragsübernahme beim Kundenservice der Audi Leasing / VWFS an.</li>
              <li><strong>Selbstauskunft einreichen:</strong> Der Übernehmer füllt die Selbstauskunft aus und reicht Gehaltsnachweise ein.</li>
              <li><strong>Bonitätsprüfung:</strong> Die Bank prüft die Bonität innerhalb von ca. 5 bis 10 Werktagen.</li>
              <li><strong>Übernahmevertrag unterschreiben:</strong> Alle Parteien unterzeichnen die Umschreibungsvereinbarung.</li>
              <li><strong>Fahrzeugübergabe:</strong> Durchführung der Übergabe mit Protokoll und Ausweis der exakten Stichtags-Kilometer.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}