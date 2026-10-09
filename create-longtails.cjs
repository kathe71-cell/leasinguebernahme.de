const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');

// 1. Trotz Schufa
const trotzSchufa = `import React from "react";
import SEOHead from "@/components/SEOHead";
import AdSenseBanner from "@/components/AdSenseBanner";
import { AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RatgeberTrotzSchufa() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Leasingübernahme trotz Schufa? Das müssen Sie wissen"
        description="Ist eine Leasingübernahme ohne Bonitätsprüfung möglich? Wir klären auf, warum die Bank immer prüft und welche Alternativen es gibt."
        canonicalPath="/leasinguebernahme-trotz-schufa"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Leasingübernahme trotz negativer Schufa?
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Viele Interessenten hoffen, bei der Übernahme eines laufenden Leasingvertrags von Privatpersonen die strenge Bonitätsprüfung der Bank umgehen zu können. Wir klären den wichtigsten Irrtum auf.
          </p>
        </div>

        <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-rose-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5" />
            Der größte Irrtum: Es gibt keine Übernahme ohne Schufa
          </h2>
          <p className="text-rose-800 text-sm leading-relaxed mb-4">
            Der bisherige Leasingnehmer kann Ihnen das Auto <strong>nicht</strong> einfach so überlassen. Die Leasinggesellschaft (z.B. VW Bank, BMW Bank) bleibt immer rechtlicher Eigentümer. Ein Fahrerwechsel bedarf der Umschreibung des Vertrags, und dafür führt die Bank bei Ihnen eine **vollständige, neue Bonitätsprüfung** inklusive Schufa-Abfrage durch.
          </p>
          <ul className="space-y-2 text-rose-800 text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Eine negative Schufa führt in fast 100% der Fälle zur sofortigen Ablehnung.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Ein unzureichendes oder unregelmäßiges Einkommen (Probezeit) führt ebenfalls zur Ablehnung.</li>
          </ul>
        </div>

        <AdSenseBanner slot="1234567890" className="bg-white" />

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            Gibt es Alternativen?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Sollte Ihre Bonität für eine reguläre Vertragsübernahme nicht ausreichen, bleibt oft nur der Weg über **spezielle Auto-Abo Anbieter** oder Gebrauchtwagen-Finanzierer, die mit sogenannten "Schufa-freien" oder toleranteren Modellen werben. Hier zahlen Sie jedoch in der Regel deutlich höhere Risikoaufschläge.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            **Tipp:** Lassen Sie sich niemals auf "Untermietverträge" von Privatpersonen ein. Diese sind laut den Allgemeinen Geschäftsbedingungen (AGB) fast aller Leasingbanken strengstens verboten und führen zur fristlosen Kündigung sowie Strafanzeigen wegen Unterschlagung.
          </p>
        </div>

      </div>
    </div>
  );
}
`;

// 2. Elektroauto
const elektroauto = `import React from "react";
import SEOHead from "@/components/SEOHead";
import AdSenseBanner from "@/components/AdSenseBanner";
import { Zap, CheckCircle2 } from "lucide-react";

export default function RatgeberElektroauto() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Elektroauto Leasingübernahme: BAFA & THG-Quote"
        description="Was passiert mit der BAFA-Prämie und der THG-Quote bei der Übernahme eines E-Auto Leasingvertrags? Alle Fakten zur Halterumschreibung."
        canonicalPath="/leasinguebernahme-elektroauto"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-emerald-200">
            <Zap className="w-3.5 h-3.5" />
            <span>E-Mobilität Ratgeber</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            E-Auto Leasingübernahme: Wer bekommt BAFA und THG-Quote?
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Elektroautos (BEV) sind beliebte Objekte für Leasingübernahmen. Doch bei staatlichen Förderungen und Quoten kommt es oft zu Streitigkeiten zwischen Alt- und Neu-Leasingnehmer.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Die BAFA-Prämie (Umweltbonus)</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Die staatliche BAFA-Prämie wurde in der Regel vom **Erst-Leasingnehmer** als Leasingsonderzahlung vorgeschossen und anschließend vom Staat erstattet.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" /> <strong>Wichtig:</strong> Für den neuen Leasingnehmer entsteht hierdurch keine Ratepflicht gegenüber der BAFA. Das Auto ist bereits gefördert.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" /> Der Erst-Leasingnehmer darf jedoch keine "Rückzahlung" der BAFA-Prämie vom neuen Leasingnehmer fordern.</li>
          </ul>
        </div>

        <AdSenseBanner slot="2345678901" className="bg-white" />

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Die THG-Quote (Treibhausgasminderungsquote)</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Die THG-Quote kann jährlich vom aktuellen Fahrzeughalter beantragt werden. Maßgeblich ist, wer zum Zeitpunkt der Beantragung im Fahrzeugschein (Zulassungsbescheinigung Teil I) als Halter eingetragen ist.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-700 space-y-2">
            <p><strong>Das Problem in der Praxis:</strong> Oft hat der Vorbesitzer die THG-Quote für das laufende Kalenderjahr bereits beantragt und ausgezahlt bekommen.</p>
            <p><strong>Die Lösung:</strong> Klären Sie bei der Übernahme vertraglich (im Übernahmevertrag), ob die Quote für das laufende Jahr anteilig erstattet wird. Für das kommende Kalenderjahr sind Sie als neuer Halter dann antragsberechtigt.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
`;

// 3. Prämie
const praemie = `import React from "react";
import SEOHead from "@/components/SEOHead";
import AdSenseBanner from "@/components/AdSenseBanner";
import { DollarSign, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function RatgeberPraemie() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Leasingübernahme mit Prämie: So berechnen Sie die Ausgleichszahlung"
        description="Wann lohnt sich eine Ausgleichszahlung (Prämie) bei der Leasingübernahme? So berechnen und verhandeln Sie fair mit dem Vorbesitzer."
        canonicalPath="/leasinguebernahme-praemie"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Ausgleichszahlung & Prämie bei Leasingübernahme
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Nicht jeder Leasingvertrag, der abgegeben wird, ist lukrativ. Oft sind die Freikilometer bereits aufgebraucht oder die Rate ist zu hoch. Hier kommt die Ausgleichszahlung ("Prämie") ins Spiel.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-amber-600" />
            Wann ist eine Prämie gerechtfertigt?
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> 
              <div><strong>Minderkilometer:</strong> Der Vorbesitzer ist deutlich mehr gefahren, als es der Vertrag zeitanteilig vorsieht. Sie müssten bei Rückgabe die teuren Mehrkilometer zahlen.</div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> 
              <div><strong>Hohe Leasingrate:</strong> Der Altvertrag wurde zu schlechten Konditionen abgeschlossen. Aktuelle Neuverträge auf dem Markt sind günstiger.</div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> 
              <div><strong>Beschädigungen:</strong> Das Fahrzeug hat Kratzer, Dellen oder abgefahrene Reifen, die bei der Rückgabe voll zu Ihren Lasten (Minderwert) berechnet werden.</div>
            </li>
          </ul>
        </div>

        <AdSenseBanner slot="3456789012" className="bg-white" />

        <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-amber-400">Wie berechnet man die Prämie?</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nutzen Sie unseren Rechner, um die genaue Raten-Differenz über die Restlaufzeit zu berechnen. Rechnen Sie dann die voraussichtlichen Kosten für Mehrkilometer und Schäden hinzu. Die Summe ergibt die faire Ausgleichszahlung, die der Alt-Leasingnehmer an Sie zahlen sollte.
          </p>
          <div className="pt-2">
            <Link to="/" className="inline-block px-5 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-sm hover:bg-amber-400">
              Zum Leasingübernahme-Rechner
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
`;

// 4. Risiken
const risiken = `import React from "react";
import SEOHead from "@/components/SEOHead";
import AdSenseBanner from "@/components/AdSenseBanner";
import { AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function RatgeberRisiken() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Risiken & Fallen bei der Leasingübernahme"
        description="Welche Gefahren und Risiken drohen bei einer Leasingübernahme? Erfahrungen, versteckte Kosten und Tipps zum Übergabeprotokoll."
        canonicalPath="/leasinguebernahme-risiken"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Die 3 größten Risiken bei der Leasingübernahme
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Sie übernehmen nicht nur das Auto, sondern auch alle vertraglichen Pflichten und die volle Haftung für sämtliche Vorschäden. Hier lauern die größten Kostenfallen.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-rose-700 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              1. Versteckte Schäden und Minderwerte
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bei der Rückgabe des Fahrzeugs am Ende der Vertragslaufzeit prüft ein Gutachter (z.B. TÜV, Dekra) das Auto. Die Bank verlangt von **Ihnen** Schadensersatz für Kratzer, Dellen oder beschädigte Felgen – völlig egal, ob der Vorbesitzer diese verursacht hat.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-rose-700 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              2. Abgefahrene Reifen & Verschleißteile
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Die Bremsen müssen neu gemacht werden? Die Reifen haben weniger als 4 mm Profil? Wenn kein Wartungspaket eingeschlossen ist, zahlen Sie als neuer Halter alle Verschleiß-Reparaturen, die der Vorbesitzer "angespart" hat.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-rose-700 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              3. Fehlende Inspektionen (Garantieverlust)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Wurden die Service-Intervalle im Scheckheft (oder digital) nicht exakt eingehalten, verfällt die Herstellergarantie. Zusätzlich berechnet die Leasingbank bei Rückgabe einen Minderwert für das lückenhafte Scheckheft.
            </p>
          </div>
        </div>

        <AdSenseBanner slot="4567890123" className="bg-white" />

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl space-y-4">
          <h2 className="text-xl font-bold text-emerald-900">Die Lösung: Das Übergabeprotokoll</h2>
          <p className="text-sm text-emerald-800 leading-relaxed">
            All diese Risiken lassen sich durch ein detailliertes Übergabeprotokoll und eine vorherige Begutachtung ausschließen. Halten Sie jeden noch so kleinen Kratzer fest und lassen Sie sich vom Vorbesitzer den finanziellen Ausgleich zahlen, bevor Sie den Bankvertrag unterschreiben.
          </p>
          <Link to="/checkliste" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700">
            <FileText className="w-4 h-4" />
            <span>Kostenloses PDF-Übergabeprotokoll</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(dir, 'RatgeberTrotzSchufa.jsx'), trotzSchufa);
fs.writeFileSync(path.join(dir, 'RatgeberElektroauto.jsx'), elektroauto);
fs.writeFileSync(path.join(dir, 'RatgeberPraemie.jsx'), praemie);
fs.writeFileSync(path.join(dir, 'RatgeberRisiken.jsx'), risiken);

console.log("Created 4 ratgeber files.");
