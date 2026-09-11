import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, DollarSign, FileText, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function MarkeMercedes() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/marken" className="hover:underline">Marken-Übersicht</Link>
            <span>/</span>
            <span>Mercedes-Benz</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Mercedes-Benz Leasingübernahme Leitfaden
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Alles zur Vertragsübernahme von Mercedes-Benz Leasingverträgen über die Mercedes-Benz Bank AG (Mercedes-Benz Mobility).
          </p>
        </div>

        <AdSenseBanner slot="8000000010" className="bg-white" />

        {/* Content Box 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Welche Bank betreut Mercedes-Benz Leasingverträge?
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p>
              Leasingverträge der Marke Mercedes-Benz werden in Deutschland über die <strong>Mercedes-Benz Bank AG</strong> (Teil der Mercedes-Benz Mobility AG) abgewickelt. Eine Übernahme ist sowohl für Privatkunden als auch für Gewerbetreibende möglich, erfordert jedoch die Zustimmung der Bank.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block text-sm">Die wichtigsten Daten auf einen Blick:</strong>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                <li><strong>Umschreibungsgebühr:</strong> ca. 350 € bis 500 € inkl. MwSt. (wird i. d. R. dem Übernehmer oder bisherigen Halter in Rechnung gestellt).</li>
                <li><strong>Mindestrestlaufzeit:</strong> Üblicherweise mindestens 6 Monate Restvertragszeit.</li>
                <li><strong>Bonitätsnachweis:</strong> Schufa-Auskunft, die letzten 3 Gehaltsabrechnungen oder aktuelle BWA bei Selbstständigen.</li>
                <li><strong>Vertragskonditionen:</strong> Monatsrate, vereinbarte Kilometer und Restwert bleiben unverändert bestehen.</li>
              </ul>
            </div>
          </div>
        </div>

        <AdSenseBanner slot="8000000011" className="bg-white" />

        {/* Content Box 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            Ablauf der Mercedes-Benz Vertragsübertragung
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <ol className="list-decimal list-inside space-y-2 font-medium text-slate-800">
              <li><strong>Antragsanforderung:</strong> Der aktuelle Leasingnehmer kontaktiert das Mercedes-Benz Kundencenter und fordert das Umschreibungsformular an.</li>
              <li><strong>Selbstauskunft & Unterlagen:</strong> Der Neukunde füllt die Bonitäts-Selbstauskunft aus und reicht seine Gehaltsnachweise ein.</li>
              <li><strong>Prüfung durch Mercedes-Benz Bank:</strong> Die Bank führt eine Bonitätsprüfung durch (Bearbeitungszeit ca. 1 bis 2 Wochen).</li>
              <li><strong>Umschreibungsvertrag:</strong> Nach Bewilligung unterzeichnen Alt- und Neukunde den dreiseitigen Übernahmevertrag.</li>
              <li><strong>Fahrzeugübergabe:</strong> Fahrzeugübergabe mit detailliertem Protokoll, Dokumentation der Stichtags-Kilometer und Ummeldung bei der Zulassungsstelle.</li>
            </ol>
          </div>
        </div>

        {/* Content Box 3: Quick Navigation */}
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-extrabold text-slate-900">Umfassende Checkliste zur Übergabe nötig?</h3>
            <p className="text-xs text-slate-600">Nutzen Sie unser kostenfreies Übernahmeprotokoll und den Kostenrechner.</p>
          </div>
          <div className="flex gap-2">
            <Link to="/checkliste" className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800">
              Checkliste
            </Link>
            <Link to="/kosten-gebuehren" className="px-4 py-2 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs hover:bg-amber-400">
              Gebühren
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}