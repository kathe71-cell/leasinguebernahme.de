import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Clock, ChevronRight, DollarSign, ShieldCheck, Calculator, Building2, FileText } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function Index() {
  // Rechner State
  const [origRate, setOrigRate] = useState(480);
  const [takeoverRate, setTakeoverRate] = useState(330);
  const [months, setMonths] = useState(18);
  const [transferFee, setTransferFee] = useState(300);
  const [incentive, setIncentive] = useState(0);
  const [extraCosts, setExtraCosts] = useState(0);

  // Input Sanitize
  const safeOrig = Number(origRate) || 0;
  const safeTakeover = Number(takeoverRate) || 0;
  const safeMonths = Math.max(1, Number(months) || 1);
  const safeFee = Number(transferFee) || 0;
  const safeIncentive = Number(incentive) || 0;
  const safeExtra = Number(extraCosts) || 0;

  // Calculation (Unclamped)
  const totalRateDiff = (safeOrig - safeTakeover) * safeMonths;
  const netDifference = totalRateDiff + safeIncentive - safeFee - safeExtra;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead 
        title="Leasingübernahme Ratgeber | Ablauf, Umschreibungsgebühren & Rechner"
        description="Der unabhängige Ratgeber für Leasingübernahmen in Deutschland: Alles zu Ablauf, Schufa-Bonitätsprüfung, Umschreibungsgebühren, Vor- & Nachteile, Checklisten & Ersparnisrechner."
        canonicalPath="/"
      />
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Das unabhängige Informationsportal &amp; Ratgeber</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Leasingübernahme in Deutschland: Der große Leitfaden
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Alles, was Sie über die Übernahme laufender Leasingverträge wissen müssen: Ablauf, Banken-Voraussetzungen, Umschreibungsgebühren, Vor- &amp; Nachteile sowie nützliche Rechner &amp; Checklisten.
            </p>

            {/* Position 0 Definition Box */}
            <div className="bg-slate-800/90 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl text-left text-xs sm:text-sm text-slate-200 leading-relaxed shadow-lg">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                Kompakt-Definition: Leasingübernahme
              </span>
              <p>
                Eine <strong>Leasingübernahme</strong> bezeichnet den rechtlichen Eintritt eines neuen Leasingnehmers in einen laufenden Fahrzeug-Leasingvertrag (Schuldübernahme nach § 415 BGB) mit Zustimmung der Leasinggesellschaft. Der Übernehmer übernimmt die vereinbarte Monatsrate und Restlaufzeit (ggf. inklusive vereinbarter Ausgleichszahlungen oder Bearbeitungsgebühren). Die vollständige Entlassung des Alt-Leasingnehmers erfolgt gemäß bestätigter Vereinbarung der Leasingbank.
              </p>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link to="/info">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-5 py-3 rounded-xl shadow transition-transform active:scale-95 flex items-center gap-2">
                  <span>Ablauf in 4 Schritten</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link to="/kosten-gebuehren">
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-5 py-3 rounded-xl border border-slate-700 transition-colors">
                  Banken-Gebühren &amp; Kosten
                </button>
              </Link>

              <Link to="/checkliste">
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-5 py-3 rounded-xl border border-slate-700 transition-colors">
                  Übergabe-Checkliste
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ADSENSE BANNER TOP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner slot="1000000001" className="bg-white" />
      </div>

      {/* SCHNELEINSTIEG THEMEN */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Die wichtigsten Ratgeber-Themen im Überblick
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Wählen Sie ein Fachgebiet, um fundierte Informationen zu erhalten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/info" className="group">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group-hover:border-amber-400 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-100 text-amber-950 border border-amber-300 rounded-xl flex items-center justify-center font-extrabold">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Ablauf &amp; Bonitätsprüfung
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Wie läuft eine Vertragsübernahme Schritt für Schritt ab? Welche Unterlagen fordert die Leasingbank und welche Schufa-Kriterien gelten?
                </p>
              </div>
              <div className="pt-4 flex items-center text-amber-700 font-bold text-sm">
                <span>Leitfaden lesen</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/kosten-gebuehren" className="group">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group-hover:border-amber-400 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-100 text-amber-950 border border-amber-300 rounded-xl flex items-center justify-center font-extrabold">
                  <DollarSign className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Umschreibungsgebühren &amp; Kosten
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Übersicht der Bearbeitungsgebühren von VWFS, BMW Bank, Mercedes Bank &amp; Co. Wer zahlt die Umschreibung und worauf muss man achten?
                </p>
              </div>
              <div className="pt-4 flex items-center text-amber-700 font-bold text-sm">
                <span>Gebührenübersicht anzeigen</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/vorteile-nachteile" className="group">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group-hover:border-amber-400 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-amber-100 text-amber-950 border border-amber-300 rounded-xl flex items-center justify-center font-extrabold">
                  <ShieldCheck className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Vor- &amp; Nachteile im Vergleich
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ist eine Leasingübernahme lohnend im Vergleich zum Neuwagen-Leasing oder Auto-Abo? Objektiver Vor- und Nachteile-Vergleich.
                </p>
              </div>
              <div className="pt-4 flex items-center text-amber-700 font-bold text-sm">
                <span>Vergleichsmatrix ansehen</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* WAS IST EINE LEASINGÜBERNAHME? (EXHAUSTIVE ESSAY) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">Grundlagenwissen</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Was genau versteht man unter einer Leasingübernahme?
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Unter einer <strong>Leasingübernahme</strong> (auch als <em>Vertragsübernahme</em> oder <em>Leasingübertragung</em> bezeichnet) versteht man den rechtlichen Vorgang, bei dem ein bestehender Leasingvertrag von einem bisherigen Leasingnehmer (Alt-Leasingnehmer) auf eine neue Person oder Firma (Neu-Leasingnehmer) übertragen wird. 
            </p>
            <p>
              Der große Unterschied zum regulären Neuwagen-Leasing besteht darin, dass <strong>kein neuer Vertrag mit dem Autohaus abgeschlossen wird</strong>, sondern der bestehende Vertrag mit all seinen Konditionen (monatliche Rate, vereinbarte Freikilometer, Restlaufzeit und Schadensregeln) 1:1 vom Nachfolger fortgeführt wird.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-sm space-y-1">
              <strong className="font-bold block text-amber-950">Wichtig zu wissen:</strong>
              <p className="text-slate-800">
                Eine Leasingübernahme bedarf zwingend der ausdrücklichen Zustimmung der finanzierenden Leasinggesellschaft (z. B. VW Financial Services, BMW Bank, Mercedes-Benz Bank). Der Nachfolger muss eine positive Bonitätsprüfung durchlaufen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERSPARNIS- & KOSTENRECHNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full mb-3 border border-amber-300">
            <Calculator className="w-4 h-4" />
            <span>Interaktive Modellrechnung</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Leasingübernahme Kosten- &amp; Ersparnisrechner
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Berechnen Sie das individuelle Ergebnis unter Berücksichtigung von Raten, Bankgebühren und Einmalkosten.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Reguläre Neuwagen-Leasingrate (€/Monat)
              </label>
              <input 
                type="number" 
                min="0"
                value={origRate} 
                onChange={(e) => setOrigRate(e.target.value)} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Übernahme-Leasingrate (€/Monat)
              </label>
              <input 
                type="number" 
                min="0"
                value={takeoverRate} 
                onChange={(e) => setTakeoverRate(e.target.value)} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Restlaufzeit (Monate): {safeMonths} Monate
              </label>
              <input 
                type="range" 
                min="1" 
                max="48" 
                value={safeMonths} 
                onChange={(e) => setMonths(Number(e.target.value))} 
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Umschreibungsgebühr der Bank (€ Einmalig)
              </label>
              <input 
                type="number" 
                min="0"
                value={transferFee} 
                onChange={(e) => setTransferFee(e.target.value)} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                  Ausgleichszahlung Abgeber (€, optional)
                </label>
                <input 
                  type="number" 
                  min="0"
                  placeholder="0"
                  value={incentive} 
                  onChange={(e) => setIncentive(e.target.value)} 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">
                  Sonstige Einmalkosten (€, optional)
                </label>
                <input 
                  type="number" 
                  min="0"
                  placeholder="0"
                  value={extraCosts} 
                  onChange={(e) => setExtraCosts(e.target.value)} 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 text-center">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              {netDifference > 0 
                ? "Finanzieller Vorteil für Übernehmer *" 
                : netDifference < 0 
                ? "Mehrkosten gegenüber Neuvertrag *" 
                : "Ergebnis: Kostenneutral *"}
            </span>

            <div className={`text-3xl sm:text-5xl font-extrabold ${
              netDifference > 0 ? "text-emerald-400" : netDifference < 0 ? "text-rose-400" : "text-amber-400"
            }`}>
              {netDifference > 0 ? "+" : ""}{netDifference.toLocaleString('de-DE')} €
            </div>

            <div className="space-y-1 text-xs text-slate-300 border-t border-slate-800 pt-3 text-left">
              <p className="flex justify-between">
                <span>Differenz Monatsraten ({safeMonths} M.):</span>
                <strong>{totalRateDiff > 0 ? "+" : ""}{totalRateDiff.toLocaleString('de-DE')} €</strong>
              </p>
              {safeIncentive > 0 && (
                <p className="flex justify-between text-emerald-300">
                  <span>+ Ausgleichszahlung Abgeber:</span>
                  <strong>+{safeIncentive.toLocaleString('de-DE')} €</strong>
                </p>
              )}
              <p className="flex justify-between text-slate-400">
                <span>- Umschreibungsgebühr Bank:</span>
                <strong>-{safeFee.toLocaleString('de-DE')} €</strong>
              </p>
              {safeExtra > 0 && (
                <p className="flex justify-between text-slate-400">
                  <span>- Sonstige Einmalkosten:</span>
                  <strong>-{safeExtra.toLocaleString('de-DE')} €</strong>
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 text-left space-y-1">
              <p className="italic">
                * Modellrechnung. Die tatsächliche Auswirkung hängt vom individuellen Nutzungsverhalten und den Vertragskonditionen ab.
              </p>
              <div className="bg-slate-800 p-2.5 rounded-lg text-[10px] text-slate-300 space-y-0.5 mt-2">
                <strong className="text-amber-400 block font-bold">Wichtige Prüfpunkte vor der Übernahme:</strong>
                <p>• <strong>Kilometerbudget:</strong> Verbleibende Freikilometer prüfen &amp; mit eigener Fahrleistung abgleichen.</p>
                <p>• <strong>Fahrzeugzustand:</strong> Bekannte Schäden und Vorschäden im Übergabeprotokoll festhalten.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RECHNER EMBEDDING PROMOTION */}
        <div className="max-w-4xl mx-auto mt-6 bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <strong className="text-slate-900 font-bold block text-sm">Möchten Sie diesen Rechner auf Ihrer eigenen Website oder im Forum einbinden?</strong>
            <span className="text-slate-500">Nutzen Sie unser kostenfreies, responsives Iframe-Widget.</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input 
              readOnly 
              value='<iframe src="https://www.xn--leasingbernahme-5vb.de/rechner-embed" width="100%" height="520" frameborder="0"></iframe>' 
              className="bg-white px-2 py-1.5 rounded-lg border border-slate-300 text-[11px] font-mono w-full sm:w-64 select-all"
              onClick={(e) => e.target.select()}
            />
            <Link to="/rechner-embed" target="_blank" className="px-3 py-1.5 bg-slate-900 text-white rounded-lg font-bold text-xs whitespace-nowrap hover:bg-slate-800">
              Vorschau
            </Link>
          </div>
        </div>
      </section>

      {/* ADSENSE BANNER MID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner slot="1000000002" className="bg-white" />
      </div>

      {/* VERGLEICHSTABELLE LEASINGÜBERNAHME VS NEUWAGEN VS ABO */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">Vergleich</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Leasingübernahme vs. Neuwagen vs. Auto-Abo
            </h2>
            <p className="text-slate-600 text-sm">
              Die drei Mobilitätsmodelle im direkten Gegenüberstellung
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold">Kriterium</th>
                  <th className="p-4 font-bold text-amber-400">Leasingübernahme</th>
                  <th className="p-4 font-bold">Neuwagen-Leasing</th>
                  <th className="p-4 font-bold">Auto-Abo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Lieferzeit / Verfügbarkeit</td>
                  <td className="p-4 font-semibold text-emerald-700">Sofort nach Genehmigung durch Leasinggeber</td>
                  <td className="p-4 text-slate-600">Oft 3 bis 12 Monate (Bestellfahrzeug)</td>
                  <td className="p-4 text-slate-600">Abhängig von Anbieter &amp; Prüfung</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Vertragslaufzeit</td>
                  <td className="p-4 font-semibold text-emerald-700">Kurz (6–24 Monate Rest)</td>
                  <td className="p-4 text-slate-600">Lang (24–48 Monate)</td>
                  <td className="p-4 text-slate-600">Sehr kurz (1–12 Monate)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Sonderzahlung / Anzahlung</td>
                  <td className="p-4 font-semibold text-emerald-700">Abhängig von Vereinbarung (oft 0 €)</td>
                  <td className="p-4 text-slate-600">Je nach Angebot (0 € bis mehrere 1.000 €)</td>
                  <td className="p-4 text-slate-600">Keine (oft Startgebühr)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Monatliche Kosten</td>
                  <td className="p-4 font-semibold text-emerald-700">Basierend auf bestehendem Vertrag</td>
                  <td className="p-4 text-slate-600">Aktuelle Markt-Leasingrate</td>
                  <td className="p-4 text-slate-600">Höhere Rate (All-inclusive)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Einmalgebühr Umschreibung</td>
                  <td className="p-4 text-slate-700">Beim Leasinggeber zu erfragen</td>
                  <td className="p-4 text-slate-600">Überführungskosten (800–1.200 €)</td>
                  <td className="p-4 text-slate-600">Keine oder Startpaket</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LEASINGBANKEN GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Leasingbanken in Deutschland im Überblick
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Wichtige Regelungen &amp; Bedingungen führender Autobanken (Orientierungswerte ohne Gewähr)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Volkswagen Financial Services (VWFS)",
              brands: "VW, Audi, SEAT, CUPRA, Škoda",
              fee: "Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen",
              rule: "WICHTIGER HINWEIS: Laut offizieller Erklärung der VWFS ist die Leasingübernahme auf Privatpersonen derzeit ausgeschlossen. Übertragungen sind vorrangig im gewerblichen Bereich (Gewerbe-zu-Gewerbe) oder nach individueller Prüfung möglich."
            },
            {
              name: "BMW Bank",
              brands: "BMW, MINI",
              fee: "Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen",
              rule: "Standardisierter Antrag. Übernahme unter Vorbehalt positiver Bonitätsprüfung möglich."
            },
            {
              name: "Mercedes-Benz Bank",
              brands: "Mercedes-Benz, Smart",
              fee: "Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen",
              rule: "Umschreibung erfordert vollständige Selbstauskunft & Einkommensnachweise des Nachfolgers."
            },
            {
              name: "Santander Consumer Bank",
              brands: "Multimarken",
              fee: "Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen",
              rule: "Übertragungsbedingungen für Privat- und Geschäftskunden nach Bankprüfung."
            },
            {
              name: "Stellantis Financial Services",
              brands: "Opel, Peugeot, Citroën, Fiat",
              fee: "Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen",
              rule: "Vertragsübertragung muss beim zuständigen Vertragshändler beantragt werden."
            },
            {
              name: "Tesla Financial Services / CA Auto Bank",
              brands: "Tesla Model 3, Y, S, X",
              fee: "Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen",
              rule: "Abwicklung über den zuständigen Leasing- beziehungsweise Finanzierungspartner."
            }
          ].map((bank, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <h3 className="font-extrabold text-slate-900 text-base">{bank.name}</h3>
              </div>
              <p className="text-xs text-slate-500 font-semibold">Marken: {bank.brands}</p>
              <div className="text-xs space-y-1 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p>Umschreibungsgebühr: <strong className="text-slate-900">{bank.fee}</strong></p>
                <p className="text-slate-600 text-[11px] pt-1">{bank.rule}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-100 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
          <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Transparenzhinweis zu Umschreibungsgebühren:</span>
          </strong>
          <p className="leading-relaxed">
            Die Umschreibungsgebühren und Bedingungen variieren je nach Leasinggesellschaft, Kundengruppe (Privat- oder Gewerbekunde) und Ausgestaltung des Ursprungsvertrags. Die Umschreibungsgebühr bitte beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen.
          </p>
          <div className="pt-1">
            <Link to="/kosten-gebuehren" className="inline-flex items-center gap-1.5 text-amber-700 font-bold hover:text-amber-800 underline text-xs">
              <span>Weitere Details in unserer Gebühren-Übersicht</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BELIEBTESTE MODELLE & SPEZIALRATGEBER (HIGH INTENT CLUSTER) */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
              Fokus-Fahrzeuge &amp; Sonderfälle
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Beliebte Leasingmodelle &amp; Rechtsfragen
            </h2>
            <p className="text-slate-600 text-sm">
              Spezifische Konditionen, Bankvorgaben und steuerliche Besonderheiten für die am häufigsten übernommenen Fahrzeuge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/vw-golf-leasinguebernahme" className="group">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-amber-600 text-lg mb-1">
                    VW Golf 8 Leasingübernahme
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Life, Style, GTI, GTE &amp; R. Details zur Umschreibung und den Richtlinien der Volkswagen Bank (VWFS).
                  </p>
                </div>
                <div className="text-amber-700 font-bold text-xs pt-4 flex items-center gap-1">
                  <span>Modell-Ratgeber lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/bmw-3er-leasinguebernahme" className="group">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-amber-600 text-lg mb-1">
                    BMW 3er (G20/G21) Übernahme
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    320d, 330e &amp; M340i. Alles zu den Richtlinien der BMW Bank GmbH und Service-Inclusive Übertragbarkeit.
                  </p>
                </div>
                <div className="text-amber-700 font-bold text-xs pt-4 flex items-center gap-1">
                  <span>Modell-Ratgeber lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/tesla-model-y-leasinguebernahme" className="group">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-amber-600 text-lg mb-1">
                    Tesla Model Y Leasingübernahme
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RWD, Maximale Reichweite &amp; Performance. Inklusive Anleitung zur digitalen Fahrzeugübertragung in der Tesla App.
                  </p>
                </div>
                <div className="text-amber-700 font-bold text-xs pt-4 flex items-center gap-1">
                  <span>Modell-Ratgeber lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/audi-a4-leasinguebernahme" className="group">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-amber-600 text-lg mb-1">
                    Audi A4 Avant &amp; Limousine
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    35 TDI &amp; 40 TFSI. Audi Leasingbedingungen, VWFS Formulare und Bonitätsvoraussetzungen.
                  </p>
                </div>
                <div className="text-amber-700 font-bold text-xs pt-4 flex items-center gap-1">
                  <span>Modell-Ratgeber lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/leasingvertrag-vorzeitig-kuendigen" className="group">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-amber-600 text-lg mb-1">
                    Kündigung vs. Übernahme
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Der große Vergleich: Warum vorzeitige Leasingkündigungen erhebliche Stornokosten verursachen können und wann eine Übernahme die wirtschaftlichere Alternative ist.
                  </p>
                </div>
                <div className="text-amber-700 font-bold text-xs pt-4 flex items-center gap-1">
                  <span>Vergleich lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/leasinguebernahme-privat-an-gewerbe" className="group">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 group-hover:text-amber-600 text-lg mb-1">
                    Privat an Gewerbe (&amp; umgekehrt)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Steuerliche Behandlung, Vorsteuerabzug, 1%-Regelung und Dokumentationspflichten beim Vertragswechsel.
                  </p>
                </div>
                <div className="text-amber-700 font-bold text-xs pt-4 flex items-center gap-1">
                  <span>Steuer-Ratgeber lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL & QUALITY ASSURANCE BOX */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-xl shrink-0 shadow">
            JK
          </div>
          <div className="space-y-1 flex-1 text-xs text-slate-600">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <strong className="text-slate-900 font-bold text-sm">Fachredaktion Leasingübernahme.de</strong>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-extrabold text-[10px]">
                Fachratgeber Mobilität &amp; Vertragsrecht
              </span>
            </div>
            <p className="leading-relaxed">
              Dieser Ratgeber wurde von unserer Fachredaktion für Mobilität und Vertragsrecht (§§ 414, 415 BGB) zusammengestellt. Alle Angaben zu Bankgebühren und Umschreibungsprozessen basieren auf öffentlich zugänglichen Informationen der Leasinganbieter und dienen der allgemeinen Orientierung.
            </p>
            <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-4 text-[11px] text-slate-500 font-semibold">
              <span>Rechtsquellen: BGB, Preis- &amp; Leistungsverzeichnisse der Leasingbanken</span>
            </div>
          </div>
        </div>
      </section>

      {/* ADSENSE BANNER FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner slot="1000000003" className="bg-white" />
      </div>

    </div>
  );
}