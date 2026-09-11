import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  CheckCircle2, 
  Calculator, 
  HelpCircle, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  Award, 
  Check, 
  X,
  ChevronRight,
  Zap,
  Sparkles,
  Building2,
  Users
} from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function Index() {
  // Rechner State
  const [origRate, setOrigRate] = useState(480);
  const [takeoverRate, setTakeoverRate] = useState(330);
  const [months, setMonths] = useState(18);
  const [transferFee, setTransferFee] = useState(300);

  const totalRateSavings = Math.max(0, (origRate - takeoverRate) * months);
  const netSavings = Math.max(0, totalRateSavings - transferFee);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Das unabhängige Fachportal &amp; Ratgeber</span>
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
                Definition auf den Punkt (Google AI Snippet)
              </span>
              <p>
                Eine <strong>Leasingübernahme</strong> bezeichnet den rechtlichen Eintritt eines neuen Leasingnehmers in einen laufenden Fahrzeug-Leasingvertrag (Schuldübernahme nach § 415 BGB). Der Übernehmer übernimmt die bestehende Monatsrate und Restlaufzeit ohne Sonderzahlung, während der Vorbesitzer aus dem Vertrag entlassen wird.
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
            Berechnen Sie das individuelle Einsparpotenzial unter Berücksichtigung der Umschreibungsgebühr.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Reguläre Neuwagen-Leasingrate (€/Monat)
              </label>
              <input 
                type="number" 
                value={origRate} 
                onChange={(e) => setOrigRate(Number(e.target.value))} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Übernahme-Leasingrate (€/Monat)
              </label>
              <input 
                type="number" 
                value={takeoverRate} 
                onChange={(e) => setTakeoverRate(Number(e.target.value))} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Restlaufzeit (Monate): {months} Monate
              </label>
              <input 
                type="range" 
                min="6" 
                max="36" 
                value={months} 
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
                value={transferFee} 
                onChange={(e) => setTransferFee(Number(e.target.value))} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 text-center">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              Netto-Gesamtersparnis *
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400">
              {netSavings.toLocaleString('de-DE')} €
            </div>
            <div className="space-y-1 text-xs text-slate-300 border-t border-slate-800 pt-3">
              <p>Ratenersparnis: <strong>{totalRateSavings.toLocaleString('de-DE')} €</strong></p>
              <p>Abzüglich Bankgebühr: <strong>-{transferFee} €</strong></p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 italic">
              * Modellrechnung. Die tatsächliche Höhe hängt vom individuellen Nutzungsverhalten und den Konditionen des Anbieters ab.
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
              value='<iframe src="https://www.leasingübernahme.de/rechner-embed" width="100%" height="450" frameborder="0"></iframe>' 
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

      {/* VERGLEICHSTABELLE */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Vergleich: Leasingübernahme vs. Neuwagen vs. Auto-Abo
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Welche Option passt am besten zu Ihren Flexibilitäts- und Budget-Anforderungen?
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
                  <td className="p-4 font-bold bg-slate-50">Lieferzeit</td>
                  <td className="p-4 font-semibold text-emerald-700">Sofort (wenige Tage)</td>
                  <td className="p-4 text-slate-600">3 bis 12 Monate</td>
                  <td className="p-4 text-slate-600">1 bis 4 Wochen</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Vertragslaufzeit</td>
                  <td className="p-4 font-semibold text-emerald-700">Kurz (6–24 Monate Rest)</td>
                  <td className="p-4 text-slate-600">Lang (24–48 Monate)</td>
                  <td className="p-4 text-slate-600">Sehr kurz (1–12 Monate)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Sonderzahlung / Anzahlung</td>
                  <td className="p-4 font-semibold text-emerald-700">In der Regel 0 €</td>
                  <td className="p-4 text-slate-600">Oft mehrere tausend Euro</td>
                  <td className="p-4 text-slate-600">Keine (Startgebühr)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Monatliche Kosten</td>
                  <td className="p-4 font-semibold text-emerald-700">Sehr günstig (Altraten)</td>
                  <td className="p-4 text-slate-600">Mittel bis hoch</td>
                  <td className="p-4 text-slate-600">Sehr hoch (All-inclusive)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-slate-50">Einmalgebühr Umschreibung</td>
                  <td className="p-4 text-slate-700">ca. 200 € – 600 €</td>
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
            Wichtige Regelungen &amp; Umschreibungsbedingungen der führenden Autobanken
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Volkswagen Financial Services (VWFS)",
              brands: "VW, Audi, SEAT, CUPRA, Škoda",
              fee: "ca. 300 € – 450 €",
              rule: "Gewerbliche und private Vertragsübernahmen sind nach Bonitätsprüfung möglich."
            },
            {
              name: "BMW Bank",
              brands: "BMW, MINI",
              fee: "ca. 400 € – 550 €",
              rule: "Standardisierter Antrag. Übernahme erst ab mindestens 6 Monaten Restlaufzeit."
            },
            {
              name: "Mercedes-Benz Bank",
              brands: "Mercedes-Benz, Smart",
              fee: "ca. 350 € – 500 €",
              rule: "Umschreibung erfordert vollständige Selbstauskunft & Einkommensnachweise."
            },
            {
              name: "Santander Consumer Bank",
              brands: "Multimarken",
              fee: "ca. 250 € – 400 €",
              rule: "Flexible Übertragungsbedingungen für Privat- und Geschäftskunden."
            },
            {
              name: "Stellantis Financial Services",
              brands: "Opel, Peugeot, Citroën, Fiat",
              fee: "ca. 300 € – 450 €",
              rule: "Vertragsübertragung muss direkt beim ausliefernden Händler beantragt werden."
            },
            {
              name: "Tesla Financial Services / Banken",
              brands: "Tesla Model 3, Y, S, X",
              fee: "ca. 350 € – 500 €",
              rule: "App-gestützte Beantragung oder Partnerbank-Prüfung (z. B. CA Auto Bank)."
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
                    Life, Style, GTI, GTE &amp; R. Details zur Umschreibung über die Volkswagen Bank (VWFS) ab 199 €/Monat.
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
                    Der große Vergleich: Warum vorzeitige Leasingkündigungen tausende Euro kosten und Übernahmen 80 % sparen.
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
                    Steuerliche Behandlung, 19 % Vorsteuerabzug, 1%-Regelung und Dokumentationspflichten beim Vertragswechsel.
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

      {/* E-E-A-T EDITORIAL & QUALITY ASSURANCE BOX */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-xl shrink-0 shadow">
            JK
          </div>
          <div className="space-y-1 flex-1 text-xs text-slate-600">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <strong className="text-slate-900 font-bold text-sm">Fachredaktion Leasingübernahme.de</strong>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[10px]">
                Geprüfte Rechtslage: September 2026
              </span>
            </div>
            <p className="leading-relaxed">
              Dieser Ratgeber wurde von unserer Fachredaktion für Mobilität und Vertragsrecht (§§ 414, 415 BGB) erstellt. Alle Konditionen, Bankgebühren und Umschreibungsprozesse werden monatlich mit den Richtlinien der führenden deutschen Automobilbanken abgeglichen.
            </p>
            <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-4 text-[11px] text-slate-500 font-semibold">
              <span>Rechtsquellen: BGB, Preisverzeichnisse VWFS, BMW Bank, Mercedes-Benz Bank</span>
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