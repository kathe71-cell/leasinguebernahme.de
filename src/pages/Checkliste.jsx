import React from "react";
import { FileText, CheckSquare, Printer, ShieldCheck, Download } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function Checkliste() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Muster-Übergabeprotokoll & Checkliste für Leasingübernahmen"
        description="Kostenlose Checkliste und Muster-Vorlage für die Fahrzeugübergabe bei Leasingübernahmen. Dokumentation von Freikilometern, Fahrzeugzustand und Vorschäden."
        canonicalPath="/checkliste"
      />

      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
              Praxis-Hilfe &amp; Vorlage
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
              Übergabeprotokoll Checkliste
            </h1>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Verwenden Sie dieses kostenlose Muster-Protokoll bei der Fahrzeugübergabe, um den Fahrzeugzustand, Kilometerstand und bestehende Vorschäden strukturiert zu dokumentieren.
            </p>
          </div>
          <button 
            onClick={handlePrint}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs py-2.5 px-4 rounded-xl shadow flex items-center gap-2 print:hidden"
          >
            <Printer className="w-4 h-4" />
            <span>Protokoll drucken</span>
          </button>
        </div>

        <AdSenseBanner slot="5000000001" className="bg-white print:hidden" />

        {/* Print Content Card */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 print:border-none print:shadow-none">
          <div className="border-b border-slate-200 pb-4 flex justify-between items-center">
            <div>
              <h2 className="font-extrabold text-slate-900 text-xl">Muster-Fahrzeugübernahme-Protokoll</h2>
              <p className="text-xs text-slate-500">leasingübernahme.de • Kostenlose Dokumentationshilfe</p>
            </div>
            <span className="text-xs text-slate-400">Datum: __________________</span>
          </div>

          {/* Section 1: Stammdaten */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-amber-700">1. Fahrzeug- &amp; Vertragsdaten</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-2 border p-3 rounded-lg border-slate-200">
                <p><strong>Hersteller &amp; Modell:</strong> ____________________________</p>
                <p><strong>Amtliches Kennzeichen:</strong> ____________________________</p>
                <p><strong>Fahrzeug-Id-Nr. (FIN):</strong> ____________________________</p>
              </div>
              <div className="space-y-2 border p-3 rounded-lg border-slate-200">
                <p><strong>Exakter Kilometerstand:</strong> ________________ km</p>
                <p><strong>Leasinggesellschaft:</strong> ____________________________</p>
                <p><strong>Vertragsnummer:</strong> ____________________________</p>
              </div>
            </div>
          </div>

          {/* Section 2: Vertragsparteien */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-amber-700">2. Vertragsparteien</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5 border p-3 rounded-lg border-slate-200">
                <strong className="block font-bold text-slate-900">Bisheriger Leasingnehmer (Übergeber):</strong>
                <p>Name, Vorname: ____________________________</p>
                <p>Anschrift: ____________________________</p>
              </div>
              <div className="space-y-1.5 border p-3 rounded-lg border-slate-200">
                <strong className="block font-bold text-slate-900">Neuer Leasingnehmer (Übernehmer):</strong>
                <p>Name, Vorname: ____________________________</p>
                <p>Anschrift: ____________________________</p>
              </div>
            </div>
          </div>

          {/* Section 3: Zustandsprüfung */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-amber-700">3. Zustandsprüfung &amp; Zubehör</h3>
            <div className="space-y-2 text-xs border p-4 rounded-lg border-slate-200">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Anzahl der übergebenen Schlüssel:</span>
                <span className="font-bold">[ ] 2 Schlüssel [ ] _____ Schlüssel</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Zulassungsbescheinigung Teil I (Fahrzeugschein) übergeben:</span>
                <span className="font-bold">[ ] Ja [ ] Nein</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Serviceheft / Digitaler Nachweis vorhanden &amp; lückenlos:</span>
                <span className="font-bold">[ ] Ja [ ] Nein</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Sommer- / Winterreifen Profiltiefe:</span>
                <span className="font-bold">Vorne: _____ mm | Hinten: _____ mm</span>
              </div>
            </div>
          </div>

          {/* Section 4: Vorschäden */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-amber-700">4. Dokumentation bestehender Vorschäden (Kratzer, Dellen, Steinschläge)</h3>
            <div className="border border-slate-200 rounded-lg p-4 h-32 text-xs text-slate-400">
              [ Hier festgestellte Kratzer, Dellen, Felgenkratzer oder Innenraumschäden eintragen... ]
            </div>
          </div>

          {/* Section 5: Unterschriften */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs">
            <div className="space-y-8">
              <p>Ort, Datum: _______________________</p>
              <div className="border-t border-slate-400 pt-1">
                Unterschrift Übergeber (Alt-Leasingnehmer)
              </div>
            </div>
            <div className="space-y-8">
              <p>Ort, Datum: _______________________</p>
              <div className="border-t border-slate-400 pt-1">
                Unterschrift Übernehmer (Neu-Leasingnehmer)
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
