import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, Car, CheckCircle2, ChevronRight } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function ModellAudiA4() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/marken" className="hover:underline">Marken</Link>
            <span>/</span>
            <Link to="/marke-audi" className="hover:underline">Audi</Link>
            <span>/</span>
            <span>Audi A4</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Audi A4 Leasingübernahme: Ratgeber &amp; VWFS Ablauf
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Vertragsübernahme für Audi A4 Avant und Limousine (35 TDI, 40 TFSI, S4) über die Volkswagen Financial Services AG (Audi Leasing).
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Stand: September 2026 | Geprüfte Rechtslage</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
            Definition auf den Punkt (Google AI Snippet)
          </span>
          <p className="font-medium">
            Die Audi A4 Leasingübernahme ermöglicht die vorzeitige Abgabe oder Übernahme eines Audi A4 ohne teure Kündigungsgebühren. Die Abwicklung erfolgt über die Audi Leasing (VWFS), erfordert mindestens 6 Monate Restlaufzeit und kostet einmalig zwischen 300 € und 450 € Umschreibungsgebühr.
          </p>
        </div>

        <AdSenseBanner slot="9000000007" className="bg-white" />

        {/* Content Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Voraussetzungen der Audi Leasing (VWFS)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 font-medium">
            <li><strong>Bonitätskriterien:</strong> Unbefristetes Arbeitsverhältnis, deutsche Schufa ohne Negativmerkmale und ausreichendes Nettoeinkommen im Verhältnis zur Leasingrate.</li>
            <li><strong>Gewerbliche Übernahme:</strong> Bei Firmenkunden werden die BWA der letzten zwei Jahre sowie ein Handelsregisterauszug verlangt.</li>
            <li><strong>Gewährleistung:</strong> Gesetzliche Sachmängelhaftung und bestehende Audi Anschlussgarantien gehen automatisch auf den Übernehmer über.</li>
          </ul>
        </div>

        <AdSenseBanner slot="9000000008" className="bg-white" />

        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-extrabold text-amber-400">Gesamte Markenübersicht ansehen</h3>
            <p className="text-xs text-slate-300">Entdecken Sie alle 21 Automarken und deren Umschreibungsbedingungen.</p>
          </div>
          <Link to="/marken" className="px-5 py-2.5 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs hover:bg-amber-400">
            Zu allen Marken
          </Link>
        </div>

      </div>
    </div>
  );
}
