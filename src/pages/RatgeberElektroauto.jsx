import React from "react";
import SEOHead from "@/components/SEOHead";
import { Zap, CheckCircle2, AlertTriangle, BatteryCharging, FileText } from "lucide-react";

export default function RatgeberElektroauto() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Elektroauto Leasingübernahme: BAFA, THG-Quote & Akku-Mythen"
        description="Alle rechtlichen und finanziellen Besonderheiten bei der Leasingübernahme von E-Autos. Was passiert mit BAFA-Prämie, THG-Quote und dem Ladekabel?"
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
            Elektroautos (BEV) und Plug-In-Hybride (PHEV) machen einen immer größeren Teil der Leasingübernahmen aus. Doch bei staatlichen Förderungen, Quoten und dem Zubehör (Ladekabel) kommt es oft zu Streitigkeiten zwischen Alt- und Neu-Leasingnehmer. Wir klären die rechtliche Lage.
          </p>
        </div>

        {/* BAFA */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
            <FileText className="w-6 h-6 text-amber-500" />
            Die BAFA-Prämie (Umweltbonus)
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Die staatliche BAFA-Prämie (bis zu 4.500 € bzw. 6.000 € in Vorjahren) wurde in der Regel vom <strong>Erst-Leasingnehmer</strong> bei Vertragsabschluss als Leasingsonderzahlung an das Autohaus vorgeschossen. Nach der Erstzulassung hat sich der Vorbesitzer dieses Geld vom Staat (BAFA) erstatten lassen.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-2">
            <h3 className="font-bold text-emerald-900 text-sm">Was bedeutet das für den Übernehmer?</h3>
            <ul className="space-y-2 text-sm text-emerald-800">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Für den neuen Leasingnehmer entsteht hierdurch keine Ratepflicht gegenüber der BAFA. Das Auto ist bereits vollständig gefördert und die Sonderzahlung im Leasingvertrag verrechnet.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Der Erst-Leasingnehmer darf <strong>keine "Rückzahlung"</strong> der BAFA-Prämie vom neuen Leasingnehmer fordern, da er diese ja vom Staat zurückerhalten hat.</li>
            </ul>
          </div>
          <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl flex gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-rose-900 text-sm">Achtung Haltefrist!</h3>
              <p className="text-rose-800 text-xs mt-1 leading-relaxed">Der Vorbesitzer muss die BAFA-Haltefrist (je nach Förderjahr 6, 12 oder 24 Monate) beachten. Wird das Fahrzeug vor Ablauf dieser Frist auf Sie umgeschrieben (Halterwechsel), fordert die BAFA die Prämie vom Vorbesitzer zurück. Dies ist allein das Risiko des Vorbesitzers, nicht Ihres!</p>
            </div>
          </div>
        </div>


        {/* THG Quote */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Die THG-Quote (Treibhausgasminderungsquote)
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Die THG-Quote (ca. 100 € - 300 € pro Jahr) kann jährlich vom aktuellen Fahrzeughalter beantragt werden. Maßgeblich ist, wer zum Zeitpunkt der Beantragung im Fahrzeugschein (Zulassungsbescheinigung Teil I) als Halter eingetragen ist.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Das Problem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Oft hat der Vorbesitzer die THG-Quote für das laufende Kalenderjahr bereits im Januar beantragt und ausgezahlt bekommen. Die Quote kann pro Jahr und Fahrzeug nur <strong>einmalig</strong> abgetreten werden.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Die Lösung</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Klären Sie bei der Übernahme, ob die Quote für das laufende Jahr anteilig (pro rata) erstattet wird. Für das kommende Kalenderjahr sind Sie als neuer Halter dann voll antragsberechtigt.</p>
            </div>
          </div>
        </div>

        {/* Zubehör & Batterie */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-400 border-b border-slate-700 pb-4">
            <BatteryCharging className="w-5 h-5" />
            Batterie-Zustand (SoH) & Ladekabel
          </h2>
          
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <h3 className="font-bold text-white mb-1">Ist der Batterie-Zustand (State of Health) wichtig?</h3>
              <p className="leading-relaxed">Bei reinen Kilometer-Leasingverträgen trägt das Restwertrisiko der Batterie die Leasinggesellschaft. Sofern Sie die Batterie nicht grob fahrlässig beschädigen, spielt die natürliche Degradation bei der Rückgabe keine Rolle. Ein Batteriezertifikat des Vorbesitzers ist daher meist nicht zwingend notwendig, schadet aber nicht.</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-xl mt-4 border border-slate-700">
              <h3 className="font-bold text-white mb-1 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /> Fehlende Ladekabel sind teuer!</h3>
              <p className="leading-relaxed text-xs">Achten Sie penibel darauf, dass alle originalen Ladekabel (Typ-2-Kabel, Schuko-Ladeziegel), die bei Auslieferung des Neuwagens dabei waren, auch an Sie übergeben werden. Ein fehlendes Originalkabel berechnet die Leasinggesellschaft am Ende oft mit 300 € bis 500 € als Fehlteil.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
