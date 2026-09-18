import React from "react";
import { Building2, ShieldCheck } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function MarkeBMW() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="BMW Leasingübernahme | Umschreibungsgebühren & BMW Bank Ablauf"
        description="Leitfaden zur BMW Leasingübernahme über die BMW Bank GmbH: Umschreibungsgebühren, Schufa-Voraussetzungen & Mindestlaufzeiten."
        canonicalPath="/marke-bmw"
      />
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Hersteller-Ratgeber
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            BMW Leasingübernahme Leitfaden
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Informationen zur Vertragsübertragungsabwicklung bei der BMW Bank GmbH.
          </p>
        </div>

        <AdSenseBanner slot="8000000003" className="bg-white" />

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            BMW Bank GmbH Umschreibungsregeln
          </h2>
          <p>
            Die <strong>BMW Bank GmbH</strong> ermöglicht die Vertragsübernahme für Privat- und Geschäftskunden. Die Bearbeitungsgebühr bitte direkt bei der BMW Bank für den konkreten Vertrag erfragen.
          </p>
          <ul className="list-disc list-inside space-y-1 font-medium text-slate-800 pt-2">
            <li>Gute Schufa und gesicherte Einkommensverhältnisse erforderlich.</li>
            <li>Mindestrestlaufzeit des Leasingvertrags: Vom Anbieter abhängig (vertragsabhängig).</li>
            <li>Keine Anpassung von Laufleistung oder Zinssatz möglich.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}