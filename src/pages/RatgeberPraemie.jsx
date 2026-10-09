import React from "react";
import SEOHead from "@/components/SEOHead";
import { DollarSign, CheckCircle2, Calculator, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RatgeberPraemie() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Leasingübernahme mit Prämie: Ausgleichszahlung fair berechnen"
        description="Wann lohnt sich eine Ausgleichszahlung (Prämie) bei der Leasingübernahme? So berechnen und verhandeln Sie Minderkilometer und Schäden fair mit dem Vorbesitzer."
        canonicalPath="/leasinguebernahme-praemie"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Ausgleichszahlung & Prämie bei Leasingübernahme
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Nicht jeder Leasingvertrag, der abgegeben wird, ist für den Übernehmer sofort lukrativ. Oft sind die Freikilometer bereits aufgebraucht, es gibt unreparierte Schäden oder die monatliche Rate ist im heutigen Marktvergleich zu hoch. Hier kommt die Ausgleichszahlung ("Prämie") ins Spiel.
          </p>
        </div>

        {/* Gründe für Prämie */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
            <DollarSign className="w-6 h-6 text-emerald-600" />
            Wann ist eine Prämie gerechtfertigt?
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-slate-900">Minderkilometer (Zu viel gefahren)</h3>
                <p className="text-sm text-slate-600 mt-1">Der Vorbesitzer ist deutlich mehr gefahren, als es der Vertrag zeitanteilig vorsieht. Wenn Sie den Vertrag zu Ende fahren, fehlen Ihnen diese Kilometer. Sie müssten bei Rückgabe die teuren Mehrkilometer (oft 10 bis 20 Cent/km) an die Leasingbank zahlen.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-slate-900">Schlechte Leasingrate (Zu teuer)</h3>
                <p className="text-sm text-slate-600 mt-1">Der Altvertrag wurde zu Zeiten hoher Zinsen oder ohne gute Rabatte abgeschlossen. Wenn es das gleiche Auto heute als Neuwagen für 300 € gibt, Sie aber 400 € übernehmen sollen, muss der Vorbesitzer diese Differenz über eine Einmalzahlung ausgleichen.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-slate-900">Beschädigungen & Verschleiß</h3>
                <p className="text-sm text-slate-600 mt-1">Das Fahrzeug hat Kratzer, Dellen oder abgefahrene Reifen. Da Sie bei Vertragsende voll dafür haften, müssen die fiktiven Reparaturkosten oder der gutachterliche Minderwert als Prämie an Sie ausgezahlt werden.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Berechnung */}
        <div className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-xl font-bold text-amber-900 flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Wie berechnet man die faire Prämie? (Rechenbeispiel)
          </h2>
          <p className="text-amber-800 text-sm leading-relaxed">
            Ein fairer Ausgleich lässt sich mathematisch exakt herleiten. Hier ein typisches Beispiel zur Berechnung des Kilometer-Ausgleichs:
          </p>
          
          <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm space-y-3 font-mono text-sm text-slate-700">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>Leasing-Gesamtkilometer:</span>
              <strong>30.000 km</strong>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>Laufzeit insgesamt:</span>
              <strong>36 Monate</strong>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span>Bisherige Laufzeit (Vorbesitzer):</span>
              <strong>18 Monate</strong>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 text-rose-600">
              <span>Bisher gefahrene Kilometer:</span>
              <strong>20.000 km (statt 15.000 km)</strong>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2 text-emerald-600">
              <span>Fehlende Kilometer für Sie:</span>
              <strong>5.000 km</strong>
            </div>
            <div className="flex justify-between pt-2">
              <span>Kosten lt. Vertrag (z.B. 12 Cent/km):</span>
              <strong className="text-lg">600,00 € Prämie fällig</strong>
            </div>
          </div>
          
          <p className="text-amber-800 text-xs">
            Zu diesem Wert addieren Sie noch eventuelle Schäden (Kratzer: ca. 200€ pro Bauteil) und die Bank-Umschreibungsgebühr (ca. 300€), falls Sie sich einigen, dass der Abgeber diese trägt.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-4 text-center">
          <h2 className="text-xl font-bold text-white">Rechnen Sie selbst nach!</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Nutzen Sie unseren kostenlosen Ersparnisrechner. Geben Sie die Raten und die Restlaufzeit ein, und sehen Sie sofort, wie viel Prämie angemessen ist und ob das Angebot wirklich ein "Schnäppchen" ist.
          </p>
          <div className="pt-4">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl text-sm hover:bg-amber-400 transition-colors">
              <Calculator className="w-4 h-4" />
              <span>Zum Leasingübernahme-Rechner</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
