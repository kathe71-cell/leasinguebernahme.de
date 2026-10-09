import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle,
  CarFront,
  CreditCard,
  ClipboardList,
  ArrowRight
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function BrandGuideTemplate({
  brandName,
  bankName,
  bankUrl,
  specificRuleTitle,
  specificRuleText,
  isPrivateAllowed,
  faqs
}) {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title={`${brandName} Leasingübernahme: Leitfaden & Umschreibungsgebühren`}
        description={`Ratgeber zur ${brandName} Leasingübernahme über die ${bankName}. Erfahren Sie alles zu Voraussetzungen, Ablauf, Dokumenten und Kosten der Umschreibung.`}
        canonicalPath={`/marke-${brandName.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
        structuredData={schemaFAQ}
      />
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Umfassender Hersteller-Ratgeber
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            {brandName} Leasingübernahme Leitfaden
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Ein vollständiger Guide zur Vertragsübernahme von {brandName}-Leasingverträgen. Wir zeigen Ihnen, wie der Prozess über die zuständige <strong>{bankName}</strong> abgewickelt wird, welche Unterlagen gefordert sind und welche Voraussetzungen gelten.
          </p>
        </div>


        {/* 1. Zuständige Bank & Wichtige Hinweise */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Building2 className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Zuständige Leasinggesellschaft
            </h2>
          </div>
          
          <div className="text-slate-700 text-sm leading-relaxed space-y-4">
            <p>
              In Deutschland werden die Verträge der Marke {brandName} in der Regel über die <strong>{bankName}</strong> abgewickelt. Jede Leasingübernahme (auch Schuldübernahme genannt) bedarf der ausdrücklichen Zustimmung dieser Leasinggesellschaft.
            </p>
            
            {bankUrl && (
              <p>
                <a 
                  href={bankUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 font-bold hover:underline"
                >
                  Zur offiziellen Webseite der {bankName}
                </a>
              </p>
            )}

            {specificRuleText && (
              <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-xl space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <strong className="text-rose-950 font-bold text-base">{specificRuleTitle || "Wichtiger Hinweis der Bank"}</strong>
                </div>
                <p className="text-slate-800 text-sm">
                  {specificRuleText}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 2. Voraussetzungen & Unterlagen */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-3 rounded-xl">
              <ClipboardList className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Voraussetzungen &amp; Benötigte Unterlagen
            </h2>
          </div>

          <div className="text-slate-700 text-sm leading-relaxed space-y-4">
            <p>
              Die {bankName} führt bei jedem Übernahme-Interessenten eine strenge Bonitätsprüfung durch. Erst nach positiver Prüfung wird die Umschreibung genehmigt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  Für Gewerbekunden
                </h3>
                <ul className="space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Aktuelle BWA (Betriebswirtschaftliche Auswertung)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Jahresabschluss / EÜR des Vorjahres</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Handelsregisterauszug oder Gewerbeanmeldung</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Kopie des Personalausweises des Geschäftsführers</span></li>
                </ul>
              </div>

              {isPrivateAllowed !== false ? (
                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CarFront className="w-4 h-4 text-slate-500" />
                    Für Privatkunden
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Die letzten 3 Gehaltsnachweise</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Kopie des Personalausweises (Vorder- und Rückseite)</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Vollständig ausgefüllte Selbstauskunft der Bank</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /><span>Nachweis eines unbefristeten Arbeitsverhältnisses</span></li>
                  </ul>
                </div>
              ) : (
                <div className="border border-rose-200 rounded-xl p-5 bg-rose-50 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="space-y-1">
                    <p className="text-rose-900 font-extrabold text-sm">Leasingübernahme als Privatperson nicht möglich?</p>
                    <p className="text-rose-800 text-xs leading-relaxed">
                      Da die {bankName} eine Umschreibung auf Privatkunden derzeit ausschließt, lohnt sich oft ein Blick auf reguläre Neu-Leasing Aktionen.
                    </p>
                  </div>
                  <a 
                    href={`https://www.leasingmarkt.de/leasing/${brandName.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-sm transition-colors flex items-center gap-2 mt-2"
                  >
                    <span>Alternative: {brandName} Neu-Leasing vergleichen*</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-[9px] text-rose-500 font-medium">* Werbelink / Partnerlink (LeasingMarkt)</span>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* 3. Schritt-für-Schritt Ablauf */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-3 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Der Ablauf der Leasingübernahme
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent mt-8">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">Anfrage beim Leasinggeber</h3>
                <p className="text-xs text-slate-600">Der bisherige Leasingnehmer (Übergeber) kontaktiert die {bankName} und bittet um die Formulare zur Vertragsübernahme.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">Einreichen der Unterlagen</h3>
                <p className="text-xs text-slate-600">Der neue Leasingnehmer (Übernehmer) füllt die Selbstauskunft aus und sendet diese samt Einkommensnachweisen/BWA an die Bank.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-slate-900 font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-amber-200 bg-amber-50 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">Bonitätsprüfung</h3>
                <p className="text-xs text-slate-700">Die {bankName} prüft die Unterlagen. Dies nimmt erfahrungsgemäß 1 bis 3 Wochen in Anspruch.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">4</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">Vertragsunterzeichnung</h3>
                <p className="text-xs text-slate-600">Nach Freigabe erhalten alle Parteien (Übergeber, Übernehmer, Bank) den Umschreibungsvertrag zur Unterschrift (oft per PostIdent).</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">5</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">Fahrzeugübergabe</h3>
                <p className="text-xs text-slate-600">Das Fahrzeug wird übergeben. Ein schriftliches Übergabeprotokoll (Zustand, exakter KM-Stand) sollte zwingend angefertigt werden.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Kosten & Gebühren */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-3 rounded-xl">
              <CreditCard className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Kosten der Umschreibung
            </h2>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-4">
            <p>Eine Leasingübernahme ist mit diversen administrativen Kosten verbunden. Zu beachten sind insbesondere:</p>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                    <th className="p-4 font-bold">Kostenpunkt</th>
                    <th className="p-4 font-bold">Erklärung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold">Umschreibungsgebühr der Bank</td>
                    <td className="p-4">Die Gebühr beträgt ca. 250 € - 500 € und variiert nach Vertragsart und wird oft vom Übernehmer oder geteilt getragen.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Ummeldung (KFZ-Zulassungsstelle)</td>
                    <td className="p-4">Das Fahrzeug muss bei der Zulassungsstelle auf den neuen Halter umgeschrieben werden (Kostenpunkte: Gebühren, neue Kennzeichen).</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Ggf. Fahrzeugtransport</td>
                    <td className="p-4">Wenn sich das Fahrzeug in einer anderen Stadt befindet, fallen Kosten für die Überführung oder den Eigen-Transport an.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              * Modellrechnung / Hinweis: Klären Sie zwingend vorab, wer (Übergeber oder Übernehmer) die Umschreibungsgebühr der Bank übernimmt. Dies sollte vertraglich zwischen beiden Parteien festgehalten werden.
            </p>
          </div>
        </div>

        {/* 5. Häufige Fragen (FAQs) */}
        {faqs && faqs.length > 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-3 rounded-xl">
                <HelpCircle className="w-6 h-6 text-amber-700" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Häufige Fragen (FAQ)
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{faq.question}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center text-xs text-slate-400 mt-8">
          leasingübernahme.de ist ein unabhängiges Portal und steht in keinem gesellschaftsrechtlichen Verhältnis zum Anbieter. Alle Angaben ohne Gewähr.
        </div>

      </div>
    </div>
  );
}
