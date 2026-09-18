import React, { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function RechnerEmbed() {
  const [origRate, setOrigRate] = useState(480);
  const [takeoverRate, setTakeoverRate] = useState(330);
  const [months, setMonths] = useState(18);
  const [transferFee, setTransferFee] = useState(300);
  const [incentive, setIncentive] = useState(0);
  const [extraCosts, setExtraCosts] = useState(0);

  const safeOrig = Number(origRate) || 0;
  const safeTakeover = Number(takeoverRate) || 0;
  const safeMonths = Math.max(1, Number(months) || 1);
  const safeFee = Number(transferFee) || 0;
  const safeIncentive = Number(incentive) || 0;
  const safeExtra = Number(extraCosts) || 0;

  const totalRateDiff = (safeOrig - safeTakeover) * safeMonths;
  const netDifference = totalRateDiff + safeIncentive - safeFee - safeExtra;

  return (
    <div className="bg-white p-3 sm:p-4 font-sans text-slate-900" lang="de">
      <SEOHead 
        title="Leasingübernahme Ersparnisrechner Widget"
        description="Kostenloses Rechner-Widget zur Ermittlung von Ratenersparnissen und Mehrkosten bei einer Leasingübernahme."
        canonicalPath="/rechner-embed"
      />
      <div className="max-w-lg mx-auto w-full space-y-3.5">
        
        {/* Header */}
        <div className="border-b border-slate-100 pb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
              <Calculator className="w-3.5 h-3.5 text-slate-950 font-bold" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 leading-tight">
                Leasingübernahme Ersparnisrechner
              </h2>
              <span className="text-[10px] text-slate-500 font-medium block">
                Unabhängige Modellrechnung für Vertragsübernahmen
              </span>
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
            Widget
          </span>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="space-y-0.5">
            <label className="text-[11px] font-bold text-slate-700 block truncate">
              Neuvertrags-Rate (€/M)
            </label>
            <input
              type="number"
              min="0"
              value={origRate}
              onChange={(e) => setOrigRate(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[11px] font-bold text-slate-700 block truncate">
              Übernahme-Rate (€/M)
            </label>
            <input
              type="number"
              min="0"
              value={takeoverRate}
              onChange={(e) => setTakeoverRate(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50 text-emerald-700"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[11px] font-bold text-slate-700 block truncate">
              Restlaufzeit (Monate)
            </label>
            <input
              type="number"
              min="1"
              max="48"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[11px] font-bold text-slate-700 block truncate">
              Bankgebühr (€)
            </label>
            <input
              type="number"
              min="0"
              value={transferFee}
              onChange={(e) => setTransferFee(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[10px] font-bold text-slate-600 block truncate">
              Ausgleichzahlung (€, opt.)
            </label>
            <input
              type="number"
              min="0"
              placeholder="0"
              value={incentive}
              onChange={(e) => setIncentive(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[10px] font-bold text-slate-600 block truncate">
              Sonstige Kosten (€, opt.)
            </label>
            <input
              type="number"
              min="0"
              placeholder="0"
              value={extraCosts}
              onChange={(e) => setExtraCosts(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold bg-slate-50"
            />
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-slate-900 text-white p-3.5 rounded-xl shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-300">
            <span>Raten-Differenz ({safeMonths} Monate):</span>
            <span className="font-bold text-white text-xs sm:text-sm">
              {totalRateDiff > 0 ? "+" : ""}{totalRateDiff.toLocaleString("de-DE")} €
            </span>
          </div>
          {safeIncentive > 0 && (
            <div className="flex justify-between items-center text-xs text-emerald-400">
              <span>+ Ausgleichszahlung Abgeber:</span>
              <span>+{safeIncentive.toLocaleString("de-DE")} €</span>
            </div>
          )}
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>- Bankgebühren &amp; Nebenkosten:</span>
            <span>-{(safeFee + safeExtra).toLocaleString("de-DE")} €</span>
          </div>
          <div className="border-t border-slate-800 pt-1.5 flex justify-between items-baseline">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block text-amber-400">
                {netDifference > 0 ? "Vorteil Übernehmer:" : netDifference < 0 ? "Mehrkosten:" : "Gleichstand:"}
              </span>
              <span className="text-[9px] text-slate-400">* Unverbindliche Modellrechnung</span>
            </div>
            <span className={`text-xl sm:text-2xl font-extrabold ${
              netDifference > 0 ? "text-emerald-400" : netDifference < 0 ? "text-rose-400" : "text-amber-400"
            }`}>
              {netDifference > 0 ? "+" : ""}{netDifference.toLocaleString("de-DE")} €
            </span>
          </div>
        </div>

        {/* Branding Footer with Backlink */}
        <div className="pt-1.5 text-center text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
          <span className="text-[10px] text-slate-400">Quelle: Unabhängiges Portal</span>
          <a
            href="https://www.xn--leasingbernahme-5vb.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-extrabold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1"
          >
            <span>Leasingübernahme.de</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
