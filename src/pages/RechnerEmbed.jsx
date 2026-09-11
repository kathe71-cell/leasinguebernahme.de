import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function RechnerEmbed() {
  const [origRate, setOrigRate] = useState(480);
  const [takeoverRate, setTakeoverRate] = useState(330);
  const [months, setMonths] = useState(18);
  const [transferFee, setTransferFee] = useState(300);

  const totalRateSavings = Math.max(0, (origRate - takeoverRate) * months);
  const netSavings = Math.max(0, totalRateSavings - transferFee);

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 font-sans text-slate-900 flex flex-col justify-between" lang="de">
      <div className="max-w-xl mx-auto w-full space-y-6">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-sm">
              <Calculator className="w-4 h-4 text-slate-950 font-bold" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 leading-tight">
                Leasingübernahme Ersparnisrechner
              </h2>
              <span className="text-[10px] text-slate-500 font-medium">
                Kostenlose Modellrechnung für Vertragsübernahmen
              </span>
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
            Rechner-Widget
          </span>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Reguläre Neuvertrags-Rate (€/Monat)
            </label>
            <input
              type="number"
              value={origRate}
              onChange={(e) => setOrigRate(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Übernahme-Rate (€/Monat)
            </label>
            <input
              type="number"
              value={takeoverRate}
              onChange={(e) => setTakeoverRate(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50 text-emerald-700"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Restlaufzeit (Monate)
            </label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Umschreibungsgebühr der Bank (€)
            </label>
            <input
              type="number"
              value={transferFee}
              onChange={(e) => setTransferFee(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md space-y-3">
          <div className="flex justify-between items-center text-xs text-slate-300">
            <span>Raten-Ersparnis ({months} Monate):</span>
            <span className="font-bold text-white text-sm">+{totalRateSavings.toLocaleString("de-DE")} €</span>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Abzgl. Bankgebühr:</span>
            <span>-{transferFee.toLocaleString("de-DE")} €</span>
          </div>
          <div className="border-t border-slate-800 pt-2 flex justify-between items-baseline">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Netto-Vorteil für Sie:
              </span>
              <span className="text-[10px] text-slate-400">* Modellrechnung ohne Gewähr</span>
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
              {netSavings.toLocaleString("de-DE")} €
            </span>
          </div>
        </div>

        {/* Branding Footer with Backlink */}
        <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
          <span className="text-[10px] text-slate-400">Quelle: Unabhängiger Fachratgeber</span>
          <a
            href="https://www.leasingübernahme.de/"
            target="_blank"
            rel="noopener"
            className="text-[11px] font-extrabold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1"
          >
            <span>Leasingübernahme.de Ratgeber</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
