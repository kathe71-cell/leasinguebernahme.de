import React from "react";
import { Link } from "react-router-dom";
import { DollarSign, Building2, AlertTriangle, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function KostenGebuehren() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Umschreibungsgebühren der Leasingbanken | VWFS, BMW, Mercedes Bank"
        description="Übersicht der Bearbeitungsgebühren für Leasingübernahmen bei VWFS, BMW Bank, Mercedes-Benz Bank & Stellantis. Wer zahlt die Umschreibung?"
        canonicalPath="/kosten-gebuehren"
      />
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Gebühren-Übersicht &amp; Transparenz
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Kosten &amp; Umschreibungsgebühren
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Welche Gebühren verlangen die deutschen Leasingbanken bei einer Vertragsübernahme? Alle Beträge und versteckte Kosten transparent im Überblick.
          </p>
        </div>


        {/* Bank Fees Table */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Umschreibungsgebühren der Leasinggesellschaften
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Bei jeder Leasingübernahme fällt bei der finanzierenden Leasingbank eine Bearbeitungs- bzw. Umschreibungsgebühr für den Verwaltungsaufwand und die Schufa-Bonitätsprüfung an. Die Höhe ist je nach Gesellschaft unterschiedlich:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 font-bold">Leasinggesellschaft</th>
                  <th className="p-3.5 font-bold">Marken</th>
                  <th className="p-3.5 font-bold text-amber-400">Gebühr (Erfragen)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">
                    Volkswagen Financial Services (VWFS)*
                    <span className="block text-[11px] font-normal text-amber-700 mt-0.5">
                      Wichtig: Laut offizieller Erklärung ist die Vertragsübernahme auf Privatpersonen ausgeschlossen (vorrangig Gewerbe-zu-Gewerbe).
                    </span>
                  </td>
                  <td className="p-3.5">VW, Audi, SEAT, CUPRA, Škoda</td>
                  <td className="p-3.5 font-bold"><a href="https://www.vwfs.de/" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-600 hover:underline font-bold">Beim Anbieter erfragen*</a></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">BMW Bank</td>
                  <td className="p-3.5">BMW, MINI</td>
                  <td className="p-3.5 font-bold"><a href="https://www.bmwbank.de/" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-600 hover:underline font-bold">Beim Anbieter erfragen*</a></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Mercedes-Benz Bank</td>
                  <td className="p-3.5">Mercedes-Benz, Smart</td>
                  <td className="p-3.5 font-bold"><a href="https://www.mercedes-benz-bank.de/" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-600 hover:underline font-bold">Beim Anbieter erfragen*</a></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Santander Consumer Bank</td>
                  <td className="p-3.5">Freie Marken / Händler</td>
                  <td className="p-3.5 font-bold"><a href="https://www.santander.de/" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-600 hover:underline font-bold">Beim Anbieter erfragen*</a></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Stellantis Bank</td>
                  <td className="p-3.5">Opel, Peugeot, Citroën, Fiat</td>
                  <td className="p-3.5 font-bold"><a href="https://www.stellantis-financial-services.de/" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-600 hover:underline font-bold">Beim Anbieter erfragen*</a></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Sixt Neuwagen / LeasePlan</td>
                  <td className="p-3.5">Gewerbe &amp; Flotten</td>
                  <td className="p-3.5 font-bold"><a href="https://www.ayvens.com/de-de/" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-600 hover:underline font-bold">Beim Anbieter erfragen*</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Hinweis: Die Gebühr beträgt erfahrungsgemäß ca. 250 € - 500 €. Gebühren werden je nach Kundengruppe (Privat / Gewerbe) und Vertragsmodell vom Leasinggeber individuell festgelegt.
          </p>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-slate-900 text-xs leading-relaxed space-y-1">
            <strong className="font-bold text-slate-900 block">Wer zahlt die Umschreibungsgebühr?</strong>
            <p>
              Rechtlich wird die Gebühr der Leasingbank von der Person gefordert, die den Vertrag übernimmt oder abgibt. In der Praxis einigen sich Alt- und Neu-Leasingnehmer häufig darauf, die Gebühr zu teilen oder über eine Ausgleichszahlung zu verrechnen.
            </p>
          </div>
        </div>


        {/* Versteckte Kosten */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            Welche weiteren Kosten können entstehen?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Kfz-Ummeldung / Zulassung</strong>
              <p className="text-slate-600">
                Kosten für die Umschreibung des Fahrzeugscheins (Zulassungsbescheinigung Teil I) auf der Zulassungsstelle (ca. 30 € – 60 € inkl. Kennzeichen).
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Kfz-Versicherung (Vollkasko)</strong>
              <p className="text-slate-600">
                Die Leasingbank verlangt zwingend eine bestehende Vollkaskoversicherung mit in der Regel max. 500 € Selbstbeteiligung.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Minderwert / Rückgabeschäden</strong>
              <p className="text-slate-600">
                Am Ende der Vertragslaufzeit prüft ein TÜV/DEKRA-Gutachter den Zustand. Der aktuelle Leasingnehmer haftet für übermäßige Beschädigungen.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Mehrkilometer-Abrechnung</strong>
              <p className="text-slate-600">
                Wird die vertragliche Kilometergrenze überschritten, wird der im Vertrag definierte Mehrkilometer-Cent-Betrag bei Rückgabe abgerechnet.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
