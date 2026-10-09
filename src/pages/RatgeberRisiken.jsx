import React from "react";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function RatgeberRisiken() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Risiken & Fallen bei der Leasingübernahme"
        description="Welche Gefahren und Risiken drohen bei einer Leasingübernahme? Echte Erfahrungen, versteckte Kosten, Minderwerte und wie das Übergabeprotokoll Sie schützt."
        canonicalPath="/leasinguebernahme-risiken"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Die 4 größten Risiken & Fallen bei der Leasingübernahme
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            "Übernehmen Sie einfach meinen Vertrag, das Auto ist top in Schuss!" – So beginnen oft teure Überraschungen. Sie übernehmen nicht nur das Auto, sondern auch die <strong>volle rechtliche Haftung</strong> gegenüber der Bank für sämtliche (auch alte) Vorschäden.
          </p>
        </div>

        {/* Die 4 Risiken */}
        <div className="space-y-6">
          <div className="bg-white border border-rose-200 p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
            <h2 className="text-lg font-bold text-rose-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              1. Versteckte Schäden und Minderwerte
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Bei der Rückgabe des Fahrzeugs am Ende der Vertragslaufzeit prüft ein unabhängiger Gutachter (TÜV, Dekra) das Auto auf Herz und Nieren. Die Bank verlangt von <strong>Ihnen</strong> den finanziellen Ausgleich für jeden kleinen Kratzer, jede Schramme in der Felge und jeden Steinschlag. Es ist der Bank völlig egal, ob der Vorbesitzer diese verursacht hat.
            </p>
            <p className="text-xs text-rose-700 font-semibold bg-rose-50 p-2 rounded-lg">Erfahrungswert: Ungemeldete Parkrempler kosten bei Rückgabe schnell 800 € bis 1.500 € Nachzahlung.</p>
          </div>

          <div className="bg-white border border-rose-200 p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
            <h2 className="text-lg font-bold text-rose-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              2. Die Profiltiefen- & Reifen-Falle
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Viele Abgeber versprechen "8-fach bereift". Wenn Sie bei der Übernahme nicht nachmessen, stehen Sie bei Rückgabe vor einem Problem. Die meisten Leasingbanken fordern bei Rückgabe Sommer- und Winterreifen mit mindestens <strong>4,0 mm Profiltiefe</strong>. Sind sie weiter abgefahren, zahlen Sie einen komplett neuen Satz Reifen.
            </p>
          </div>

          <div className="bg-white border border-rose-200 p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
            <h2 className="text-lg font-bold text-rose-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              3. Fehlende Inspektionen (Garantieverlust)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Wurden die vorgegebenen Service- und Wartungsintervalle vom Vorbesitzer nicht auf den Kilometer oder Tag genau eingehalten, verfällt in vielen Fällen die Werksgarantie. Zusätzlich berechnet die Bank bei Rückgabe einen dicken Minderwert (oft 15-20% des Fahrzeugwertes) für das lückenhafte Scheckheft.
            </p>
          </div>

          <div className="bg-white border border-rose-200 p-6 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
            <h2 className="text-lg font-bold text-rose-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              4. "Versehentliche" Mehrkilometer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Verlassen Sie sich nie auf die grobe Angabe "Auto hat ca. 20.000 km gelaufen". Lesen Sie den exakten Kilometerstand am Tag der Vertragsunterschrift am digitalen Tacho ab und dokumentieren Sie ihn. Eine Abweichung von nur 2.000 km kann Sie später Hunderte Euro kosten.
            </p>
          </div>
        </div>


        {/* Die Lösung: Das Übergabeprotokoll */}
        <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-bold text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            Ihre Absicherung: Das Übergabeprotokoll
          </h2>
          <p className="text-sm text-emerald-800 leading-relaxed">
            All diese massiven finanziellen Risiken lassen sich durch eine einzige Maßnahme ausschließen: <strong>Dokumentation.</strong> Sie müssen den Zustand des Fahrzeugs am Tag der Übernahme in einem unterschriebenen Protokoll festhalten. 
          </p>
          <p className="text-sm text-emerald-800 leading-relaxed">
            Finden Sie Kratzer oder abgefahrene Reifen, fordern Sie vom Abgeber eine <strong>Ausgleichszahlung</strong> (Prämie), <em>bevor</em> Sie den Übernahmevertrag der Bank unterschreiben.
          </p>
          <div className="pt-4">
            <Link to="/checkliste" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700 transition-colors shadow">
              <FileText className="w-5 h-5" />
              <span>Kostenloses PDF-Übergabeprotokoll herunterladen</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
