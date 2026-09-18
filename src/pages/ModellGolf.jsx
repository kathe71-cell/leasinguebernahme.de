import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, Calculator, CheckCircle2, ChevronRight, Car, Info, Award } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function ModellGolf() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <SEOHead 
        title="VW Golf 8 Leasingübernahme | Ablauf & VWFS Bestimmungen"
        description="Leitfaden zur Leasingübernahme von VW Golf 8 Modellen über die Volkswagen Financial Services (VWFS). Bearbeitungsgebühren und Voraussetzungen."
        canonicalPath="/vw-golf-leasinguebernahme"
      />
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/marken" className="hover:underline">Marken</Link>
            <span>/</span>
            <Link to="/marke-volkswagen" className="hover:underline">Volkswagen</Link>
            <span>/</span>
            <span>VW Golf</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            VW Golf Leasingübernahme: Ablauf, Kosten &amp; Ersparnis
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Alles zur vorzeitigen Übernahme laufender VW Golf 8 Leasingverträge (Life, Style, R-Line, GTI, GTE &amp; Variant) über die Volkswagen Financial Services AG.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Fachratgeber Mobilität &amp; Vertragsrecht</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block">
            Wichtiger Hinweis &amp; Definition: VW Golf Leasingübernahme
          </span>
          <p className="font-medium">
            Die VW Golf Leasingübernahme ermöglicht den Eintritt in einen bestehenden Vertrag für einen VW Golf 8 zu vereinbarten Konditionen. Die Umschreibung bedarf der Genehmigung der Volkswagen Bank (VWFS); die Gebühr ist beim Leasinggeber für den konkreten Vertrag zu erfragen.
          </p>
          <div className="bg-rose-100/80 p-2.5 rounded-lg text-xs text-rose-950 font-semibold border border-rose-200">
            <strong>Einschränkung der VWFS:</strong> Laut offizieller Erklärung der Volkswagen Financial Services sind Vertragsübernahmen auf <strong>Privatpersonen ausgeschlossen</strong> (vorrangig Gewerbe-zu-Gewerbe).
          </div>
        </div>

        <AdSenseBanner slot="9000000001" className="bg-white" />

        {/* Modell-Eckdaten Tabelle */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Car className="w-6 h-6 text-amber-600" />
            VW Golf 8 Varianten in der Leasingübernahme
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Aufgrund der hohen Stückzahlen ist der Golf 8 das meistgesuchte Fahrzeug für Vertragsübernahmen. Nachfolgend beispielhafte Szenarien zur Illustration:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 font-bold">Modellvariante</th>
                  <th className="p-3 font-bold">Beispielhafte Neu-Rate*</th>
                  <th className="p-3 font-bold text-amber-400">Beispielhafte Übernahmerate*</th>
                  <th className="p-3 font-bold">Bank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold bg-slate-50">Golf 8 1.5 TSI / eTSI</td>
                  <td className="p-3">280 € – 360 €</td>
                  <td className="p-3 font-bold text-emerald-700">199 € – 260 €</td>
                  <td className="p-3">VWFS</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50">Golf 8 2.0 TDI (Langstrecke)</td>
                  <td className="p-3">330 € – 420 €</td>
                  <td className="p-3 font-bold text-emerald-700">240 € – 310 €</td>
                  <td className="p-3">VWFS</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50">Golf 8 GTI / Clubsport</td>
                  <td className="p-3">420 € – 550 €</td>
                  <td className="p-3 font-bold text-emerald-700">310 € – 420 €</td>
                  <td className="p-3">VWFS</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50">Golf 8 GTE (Plug-in-Hybrid)</td>
                  <td className="p-3">380 € – 480 €</td>
                  <td className="p-3 font-bold text-emerald-700">270 € – 350 €</td>
                  <td className="p-3">VWFS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            * Modellrechnung zur Illustration: Die tatsächliche Höhe der Raten, Ersparnisse und Laufzeiten hängt vom konkreten Erstvertrag, der Ausstattung, dem Restwert und der Bonitätsprüfung der Leasingbank ab.
          </p>
        </div>

        {/* Ablauf Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            Schritt-für-Schritt Ablauf bei Volkswagen Financial Services
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 font-medium">
            <li><strong>Vertragsprüfung:</strong> Vorbesitzer prüft die verbleibende Vertragslaufzeit und das verbleibende Kilometerbudget.</li>
            <li><strong>Formular anfordern:</strong> Antrag auf Vertragsübernahme bei der Volkswagen Bank / Audi Leasing anfordern.</li>
            <li><strong>Bonitätsauskunft einreichen:</strong> Übernehmer reicht Gehaltsnachweise und Schufa-Zustimmung ein.</li>
            <li><strong>Genehmigung &amp; Umschreibung:</strong> Nach erfolgreicher Bonitätsprüfung durch die Leasingbank unterzeichnen Vorbesitzer, Neukunde und VWFS.</li>
            <li><strong>Übergabe mit Protokoll:</strong> Detailliertes Festhalten von Vorschäden, Profiltiefe und exaktem Übergabe-Kilometerstand.</li>
          </ol>
        </div>

        <AdSenseBanner slot="9000000002" className="bg-white" />

        {/* Cross-Navigation */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-extrabold text-amber-400">Ersparnis für Ihren Golf berechnen?</h3>
            <p className="text-xs text-slate-300">Nutzen Sie unseren kostenlosen Übernahme-Rechner oder laden Sie das Übergabeprotokoll herunter.</p>
          </div>
          <div className="flex gap-2">
            <Link to="/" className="px-4 py-2 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs hover:bg-amber-400">
              Zum Rechner
            </Link>
            <Link to="/checkliste" className="px-4 py-2 bg-slate-800 text-white font-bold rounded-xl text-xs hover:bg-slate-700 border border-slate-700">
              Checkliste
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
