import React from "react";
import { Link } from "react-router-dom";
import { Scale, AlertTriangle, CheckCircle2, ChevronRight, DollarSign, Calculator } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function RatgeberKuendigungVsUebernahme() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/" className="hover:underline">Ratgeber</Link>
            <span>/</span>
            <span>Vergleich</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Vorzeitige Leasing-Kündigung vs. Leasingübernahme
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Warum die vorzeitige Kündigung eines Leasingvertrags tausende Euro kosten kann und wie die Vertragsübernahme bis zu 80 % der Ausstiegskosten spart.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Stand: September 2026 | Geprüfte Rechtslage</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
            Kernfakten auf einen Blick (Google AI Snippet)
          </span>
          <p className="font-medium">
            Ein vorzeitiger Leasingausstieg durch Kündigung erfordert das Einverständnis der Leasingbank und löst eine Vorfälligkeitsentschädigung sowie Ausgleichszahlungen von meist 3.000 € bis über 8.000 € aus. Bei einer Leasingübernahme zahlt der Leasingnehmer lediglich die Bank-Umschreibungsgebühr von 300 € bis 550 €, da der Nachfolger den Vertrag 1:1 fortführt.
          </p>
        </div>

        <AdSenseBanner slot="9000000009" className="bg-white" />

        {/* Vergleichstabelle */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Scale className="w-6 h-6 text-amber-600" />
            Der direkte Kosten- und Rechtsvergleich
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 font-bold">Kriterium</th>
                  <th className="p-3.5 font-bold text-red-400">Vorzeitige Kündigung</th>
                  <th className="p-3.5 font-bold text-emerald-400">Leasingübernahme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Kostenaufwand</td>
                  <td className="p-3.5 text-red-700 font-bold">3.000 € bis 10.000 €+</td>
                  <td className="p-3.5 text-emerald-700 font-bold">300 € bis 550 € (Bankgebühr)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Zustimmung der Bank</td>
                  <td className="p-3.5">Nur bei Härtefällen (oft abgelehnt)</td>
                  <td className="p-3.5">Standardisierter Prozess bei allen Banken</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Vorfälligkeitsentschädigung</td>
                  <td className="p-3.5 text-red-700">Ja (Zins- &amp; Margenverlust der Bank)</td>
                  <td className="p-3.5 text-emerald-700">Nein (Vertrag läuft unverändert weiter)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Minderwertausgleich</td>
                  <td className="p-3.5 text-red-700">Sofortige Händler-Endabrechnung</td>
                  <td className="p-3.5 text-emerald-700">Wird erst am regulären Vertragsende fällig</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Dauer der Abwicklung</td>
                  <td className="p-3.5">4 bis 12 Wochen (zähe Verhandlungen)</td>
                  <td className="p-3.5">1 bis 3 Wochen (Formularprozess)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <AdSenseBanner slot="9000000010" className="bg-white" />

        {/* CTA */}
        <div className="bg-amber-500 text-slate-950 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-lg">Möchten Sie Ihren Vertrag weitergeben?</h3>
            <p className="text-xs text-slate-800">Nutzen Sie unsere Checkliste für einen reibungslosen Übergabeprozess.</p>
          </div>
          <Link to="/checkliste" className="px-5 py-2.5 bg-slate-950 text-white font-bold rounded-xl text-xs hover:bg-slate-800">
            Checkliste öffnen
          </Link>
        </div>

      </div>
    </div>
  );
}
