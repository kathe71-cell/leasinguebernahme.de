import React from "react";
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
