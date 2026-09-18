import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, Calculator, CheckCircle2, ChevronRight, Car, Info } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function ModellBmw3er() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <SEOHead 
        title="BMW 3er Leasingübernahme | Konditionen der BMW Bank GmbH"
        description="Alles zur Übernahme von BMW 3er Leasingverträgen (G20/G21) über die BMW Bank GmbH. Bearbeitungsgebühren und Ablauf."
        canonicalPath="/bmw-3er-leasinguebernahme"
      />
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/marken" className="hover:underline">Marken</Link>
            <span>/</span>
            <Link to="/marke-bmw" className="hover:underline">BMW</Link>
            <span>/</span>
            <span>BMW 3er</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            BMW 3er Leasingübernahme: Konditionen der BMW Bank
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Alles zur Vertragsübernahme der BMW 3er Baureihe (G20 Limousine, G21 Touring – 318i, 320d, 330e, M340i) über die BMW Bank GmbH.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Fachratgeber Mobilität &amp; Vertragsrecht</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
            Kompakt-Definition: BMW 3er Leasingübernahme
          </span>
          <p className="font-medium">
            Die BMW 3er Leasingübernahme ist die Übertragung eines bestehenden Leasingvertrags auf einen neuen Halter über die BMW Bank GmbH. Die Bearbeitungsgebühr ist direkt bei der BMW Bank für den konkreten Vertrag zu erfragen, die erforderliche Restlaufzeit richtet sich nach den Bedingungen des konkreten Vertrags und der BMW Bank und die monatliche Rate sowie vereinbarte Freikilometer bleiben unverändert.
          </p>
        </div>

        <AdSenseBanner slot="9000000003" className="bg-white" />

        {/* Modell-Tabelle */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Car className="w-6 h-6 text-amber-600" />
            BMW 3er Modelle &amp; Raten-Vergleich
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 font-bold">Modell</th>
                  <th className="p-3 font-bold">Beispielhafte Neu-Rate*</th>
                  <th className="p-3 font-bold text-amber-400">Beispielhafte Übernahmerate*</th>
                  <th className="p-3 font-bold">BMW Bank Gebühr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold bg-slate-50">BMW 320d Touring (G21)</td>
                  <td className="p-3">540 € – 680 €</td>
                  <td className="p-3 font-bold text-emerald-700">380 € – 490 €</td>
                  <td className="p-3 font-semibold text-slate-900">Beim Leasinggeber erfragen</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50">BMW 330e Plug-in-Hybrid</td>
                  <td className="p-3">590 € – 720 €</td>
                  <td className="p-3 font-bold text-emerald-700">420 € – 530 €</td>
                  <td className="p-3 font-semibold text-slate-900">Beim Leasinggeber erfragen</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50">BMW M340i xDrive</td>
                  <td className="p-3">780 € – 990 €</td>
                  <td className="p-3 font-bold text-emerald-700">590 € – 750 €</td>
                  <td className="p-3 font-semibold text-slate-900">Beim Leasinggeber erfragen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic mt-2">
            * Modellrechnung zur Illustration: Die tatsächliche Ratenhöhe und Ersparnis hängt vom konkreten Erstvertrag ab.
          </p>
        </div>

        {/* Wichtige Hinweise */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-sm text-slate-700">
          <h3 className="font-extrabold text-slate-900 text-base">Besonderheiten bei der BMW Bank GmbH</h3>
          <ul className="list-disc list-inside space-y-1.5 font-medium">
            <li><strong>Keine Ratenänderung:</strong> Die Monatsrate kann während der Umschreibung weder gesenkt noch erhöht werden.</li>
            <li><strong>Kilometer-Stand:</strong> Über- und Minderkilometer werden am Vertragsende zwischen Neukunde und BMW Bank abgerechnet. Der Vorbesitzer haftet nach erfolgreicher Umschreibung nicht mehr.</li>
            <li><strong>Service-Pakete:</strong> BMW Service Inclusive Pakete sind fahrzeuggebunden und verbleiben kostenfrei beim Fahrzeug.</li>
          </ul>
        </div>

        <AdSenseBanner slot="9000000004" className="bg-white" />

        <div className="bg-amber-500 text-slate-950 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-lg">Häufige Fragen zu BMW Leasingübernahmen</h3>
            <p className="text-xs text-slate-800">Sehen Sie alle Voraussetzungen und Bonitätskriterien in unserem FAQ-Bereich.</p>
          </div>
          <Link to="/faq" className="px-5 py-2.5 bg-slate-950 text-white font-bold rounded-xl text-xs hover:bg-slate-800">
            Zu den FAQs
          </Link>
        </div>

      </div>
    </div>
  );
}
