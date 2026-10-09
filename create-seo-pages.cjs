const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');

const glossarContent = `import React from "react";
import SEOHead from "@/components/SEOHead";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Glossar() {
  const terms = [
    {
      term: "Andienungsrecht",
      definition: "Das vertragliche Recht der Leasinggesellschaft, dem Leasingnehmer das Fahrzeug am Ende der Laufzeit zum kalkulierten Restwert zum Kauf anzubieten. Der Leasingnehmer MUSS das Fahrzeug dann kaufen. Meist nur bei Restwertleasing relevant."
    },
    {
      term: "Ausgleichszahlung (Prämie)",
      definition: "Eine Zahlung, die bei der Leasingübernahme vom Alt-Leasingnehmer an den neuen Leasingnehmer geleistet wird, um Nachteile auszugleichen (z.B. Mehrkilometer, hohe Rate, Vorschäden)."
    },
    {
      term: "BAFA-Prämie (Umweltbonus)",
      definition: "Ein staatlicher Zuschuss für Elektroautos. Bei Leasingübernahmen innerhalb der Haltefrist (z.B. 12 Monate) kann die BAFA die Prämie vom Ersthalter zurückfordern."
    },
    {
      term: "Bonitätsprüfung (Schufa)",
      definition: "Vor jeder Umschreibung prüft die Leasingbank die Kreditwürdigkeit des neuen Leasingnehmers. Eine negative Schufa führt in der Regel zur sofortigen Ablehnung."
    },
    {
      term: "Kilometerleasing",
      definition: "Die häufigste und sicherste Leasingform. Abgerechnet wird streng nach gefahrenen Kilometern. Das Restwertrisiko am Ende der Laufzeit trägt die Leasinggesellschaft."
    },
    {
      term: "Mehr- und Minderkilometer",
      definition: "Wird am Ende der Laufzeit mehr oder weniger gefahren als vereinbart, werden diese Kilometer zu einem vertraglich fixierten Cent-Betrag nachberechnet oder erstattet (oft gibt es eine 2.500 km Freigrenze)."
    },
    {
      term: "Minderwertgutachten",
      definition: "Am Ende der Leasingzeit prüft ein unabhängiger Gutachter das Auto. Für Schäden, die über normale Gebrauchsspuren hinausgehen, wird ein finanzieller Minderwert festgelegt, den der Leasingnehmer zahlen muss."
    },
    {
      term: "Restwertleasing",
      definition: "Eine riskantere Leasingform. Der Wert des Autos am Vertragsende wird vorab geschätzt. Ist das Auto bei Rückgabe weniger wert (z.B. Markteinbruch, Dieselskandal), zahlt der Leasingnehmer die Differenz."
    },
    {
      term: "THG-Quote",
      definition: "Die Treibhausgasminderungsquote kann vom Fahrzeughalter eines Elektroautos jährlich beantragt und ausgezahlt werden. Bei Übernahmen muss geklärt werden, wer die Quote für das laufende Jahr erhält."
    },
    {
      term: "Umschreibungsgebühr",
      definition: "Eine administrative Gebühr der Leasinggesellschaft für die Bonitätsprüfung und das Umschreiben des Vertrags. Liegt meist zwischen 250 € und 500 €."
    },
    {
      term: "Vorfälligkeitsentschädigung",
      definition: "Wird ein Leasingvertrag vorzeitig gekündigt (statt ihn umzuschreiben), verlangt die Bank Schadensersatz für entgangene Zinsen und Raten. Das ist extrem teuer."
    }
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Leasing-Glossar | Fachbegriffe der Leasingübernahme einfach erklärt"
        description="Was ist Andienungsrecht, Restwertleasing oder ein Minderwertgutachten? Unser Lexikon erklärt alle wichtigen Begriffe rund um Auto-Leasing."
        canonicalPath="/glossar"
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://www.leasingübernahme.de/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Glossar",
                "item": "https://www.leasingübernahme.de/glossar"
              }
            ]
          })
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-amber-500" />
            Das Leasing-Glossar
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Fachbegriffe, Bankendeutsch und rechtliche Hürden einfach erklärt. Hier finden Sie alle Definitionen für eine sichere Leasingübernahme.
          </p>
        </div>

        <div className="space-y-6">
          {terms.map((t, idx) => (
            <div key={idx} id={t.term.toLowerCase().replace(/[^a-z0-9]/g, '-')} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">{t.term}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{t.definition}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center">
          <p className="text-emerald-900 font-bold mb-4">Möchten Sie wissen, wie der genaue Ablauf funktioniert?</p>
          <Link to="/info" className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700">
            Zum Schritt-für-Schritt Ablauf
          </Link>
        </div>
      </div>
    </div>
  );
}
`;

const aboContent = `import React from "react";
import SEOHead from "@/components/SEOHead";
import AdSenseBanner from "@/components/AdSenseBanner";
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

        <AdSenseBanner slot="1234567890" className="bg-white" />

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
`;

fs.writeFileSync(path.join(dir, 'Glossar.jsx'), glossarContent);
fs.writeFileSync(path.join(dir, 'RatgeberAboVsLeasing.jsx'), aboContent);

console.log("Created Glossar.jsx and RatgeberAboVsLeasing.jsx");
