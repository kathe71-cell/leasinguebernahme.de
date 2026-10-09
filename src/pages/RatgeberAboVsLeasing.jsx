import React from "react";
import SEOHead from "@/components/SEOHead";
import { Scale, CheckCircle2, XCircle } from "lucide-react";

export default function RatgeberAboVsLeasing() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Auto-Abo vs. Leasingübernahme | Der große Vergleich 2024"
        description="Was ist günstiger? Auto-Abo (All-Inclusive) oder die Übernahme eines bestehenden Leasingvertrags? Vor- und Nachteile im Experten-Check."
        canonicalPath="/auto-abo-vs-leasinguebernahme"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Auto-Abo oder Leasingübernahme?
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto">
            Die beiden flexibelsten Wege zum neuen Auto. Wir vergleichen die Gesamtkosten, die Bindung und die Risiken beider Modelle schonungslos miteinander.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <h2 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Inhaltsverzeichnis</h2>
          <ul className="space-y-2 text-sm text-amber-600 font-semibold">
            <li><a href="#was-ist-ein-auto-abo" className="hover:underline">1. Was ist ein Auto-Abo?</a></li>
            <li><a href="#kostenvergleich" className="hover:underline">2. Kosten- und Leistungsvergleich</a></li>
            <li><a href="#bonitaet-schufa" className="hover:underline">3. Bonität & Schufa: Wer prüft strenger?</a></li>
            <li><a href="#fazit" className="hover:underline">4. Fazit & Empfehlung</a></li>
          </ul>
        </div>

        <div id="was-ist-ein-auto-abo" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Scale className="w-6 h-6 text-amber-500" />
            Was ist ein Auto-Abo?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ein Auto-Abo (z.B. von Finn, ViveLaCar oder Faaren) ist wie das "Netflix für Autos". Sie zahlen eine feste monatliche Rate, in der <strong>absolut alles</strong> außer dem Kraftstoff/Strom enthalten ist. Steuern, Versicherung, Wartung, TÜV, Reifenwechsel und Wertverlust sind komplett abgedeckt. Die Laufzeiten sind extrem flexibel (1 bis 12 Monate).
          </p>
        </div>


        <div id="kostenvergleich" className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden scroll-mt-20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-900 w-1/3">Kriterium</th>
                  <th className="p-4 font-bold text-emerald-700 w-1/3">Leasingübernahme</th>
                  <th className="p-4 font-bold text-amber-700 w-1/3">Auto-Abo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Monatliche Rate</td>
                  <td className="p-4">Sehr niedrig (Altverträge oft günstig)</td>
                  <td className="p-4">Deutlich höher (da "All-Inclusive")</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Versicherung & Steuer</td>
                  <td className="p-4 text-rose-600 flex items-center gap-1"><XCircle className="w-4 h-4" /> Nicht inklusive (extra Kosten)</td>
                  <td className="p-4 text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> 100% inklusive (Vollkasko)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Wartung & Verschleiß</td>
                  <td className="p-4">Hängt vom Altvertrag ab (Vorsicht bei Reifen!)</td>
                  <td className="p-4 text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Inklusive (keine Zusatzkosten)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Startkosten / Gebühren</td>
                  <td className="p-4">Umschreibung (ca. 250-500 €) + evt. Transport</td>
                  <td className="p-4">Oft Startgebühr (ca. 100-300 €)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Ausgleichsprämie?</td>
                  <td className="p-4 text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Ja, Sie können Geld vom Vorbesitzer bekommen</td>
                  <td className="p-4 text-rose-600 flex items-center gap-1"><XCircle className="w-4 h-4" /> Nein</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Laufzeit</td>
                  <td className="p-4">Fix (Restlaufzeit des Vertrags, meist 12-24 Mon.)</td>
                  <td className="p-4">Hochflexibel (teilweise monatlich kündbar)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="bonitaet-schufa" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900">Bonität & Schufa: Wer prüft strenger?</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Eine klassische Leasinggesellschaft prüft bei der Übernahme enorm streng, da der Vertrag rechtlich vollständig auf Sie übergeht. Auto-Abo Anbieter sind hier oft <strong>etwas kulanter</strong>. Warum? Das Fahrzeug bleibt auf den Abo-Anbieter zugelassen. Zahlen Sie Ihre Rate nicht, wird das Auto sofort stillgelegt oder abgeholt. Wer bei der Leasingübernahme wegen mittlerer Bonität abgelehnt wurde, hat beim Auto-Abo oft noch Chancen.
          </p>
        </div>

        <div id="fazit" className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-4 scroll-mt-20">
          <h2 className="text-xl font-bold text-amber-400">Fazit: Wer gewinnt?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Die <strong>Leasingübernahme</strong> ist finanziell unschlagbar, wenn Sie einen günstigen Altvertrag mit dicker Ausgleichsprämie (Geld vom Vorbesitzer) finden und eine hohe Schadenfreiheitsklasse bei der Versicherung haben.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Das <strong>Auto-Abo</strong> gewinnt, wenn Sie das Auto nur für 3-6 Monate brauchen, maximale Bequemlichkeit suchen oder als Fahranfänger extrem hohe Versicherungsbeiträge hätten (da die Versicherung beim Abo inklusive ist).
          </p>
          <div className="pt-2 text-center text-xs text-slate-500">
            * Werbelink / Partnerlink
          </div>
        </div>

      </div>
    </div>
  );
}
