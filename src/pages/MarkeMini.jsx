import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, CheckCircle2, Info } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function MarkeMini() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="MINI Leasingübernahme | Umschreibung & BMW Bank Abwicklung"
        description="Leitfaden zur MINI Leasingübernahme über die BMW Bank GmbH: Umschreibungsgebühren, Schufa-Bonitätsprüfung & Ablauf."
        canonicalPath="/marke-mini"
      />
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/marken" className="hover:underline">Marken-Übersicht</Link>
            <span>/</span>
            <span>MINI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            MINI Leasingübernahme Leitfaden
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Leasingvertragsübernahme für MINI Cooper, Countryman & Aceman über die BMW Bank GmbH.
          </p>
        </div>

        <AdSenseBanner slot="8000000077" className="bg-white" />

        {/* Content Box 1: Bank & Eckdaten */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Welche Bank betreut MINI Leasingverträge?
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p>
              Leasingverträge der Marke <strong>MINI</strong> werden in Deutschland vorwiegend über die <strong>BMW Bank GmbH (MINI Financial Services)</strong> abgewickelt. Eine Übertragung auf einen neuen Leasingnehmer ist möglich, sofern die Bank nach einer Bonitätsprüfung zustimmt.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-bold block text-sm">Die wichtigsten Daten auf einen Blick:</strong>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                <li><strong>Umschreibungsgebühr:</strong> Beim jeweiligen Leasinggeber für den konkreten Vertrag erfragen.</li>
                <li><strong>Mindestrestlaufzeit:</strong> Vom jeweiligen Anbieter geforderte Restlaufzeit (vertragsabhängig).</li>
                <li><strong>Bonitätsprüfung:</strong> Positive Schufa sowie Gehaltsnachweise (Arbeitnehmer) bzw. BWA/EÜR (Gewerbe).</li>
                <li><strong>Konditionen:</strong> Die vereinbarte Leasingrate und die jährliche Kilometerleistung bleiben unverändert.</li>
              </ul>
            </div>
          </div>
        </div>

        <AdSenseBanner slot="8000000177" className="bg-white" />

        {/* Content Box 2: Ablauf */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            Ablauf der Vertragsübernahme
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <ol className="list-decimal list-inside space-y-2 font-medium text-slate-800">
              <li><strong>Antrag anfordern:</strong> Der bisherige Leasingnehmer fordert die Umschreibungsunterlagen bei der BMW Bank GmbH (MINI Financial Services) an.</li>
              <li><strong>Unterlagen einreichen:</strong> Der Übernehmer füllt die Selbstauskunft aus und legt seine Bonitätsunterlagen bei.</li>
              <li><strong>Prüfung durch die Bank:</strong> Die Leasingbank prüft die Kreditwürdigkeit nach Eingang aller Antragsunterlagen.</li>
              <li><strong>Vertrag unterschreiben:</strong> Nach Genehmigung unterschreiben Alt- und Neukunde die offizielle Schuldübernahme.</li>
              <li><strong>Fahrzeugübergabe:</strong> Durchführung der Übergabe mit detailliertem Protokoll und Festhalten des Kilometerstands.</li>
            </ol>
            
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-slate-800 flex gap-2">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Praxis-Hinweis:</strong> Gleiche Kriterien und Prüfmaßstäbe wie bei BMW Leasingübernahmen.
              </div>
            </div>
          </div>
        </div>

        {/* Navigation / Next Steps */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-extrabold text-slate-900 text-base">Weitere Ratgeber &amp; Vorlagen</h3>
            <p className="text-xs text-slate-600">Vergleichen Sie Umschreibungsgebühren oder nutzen Sie unsere kostenfreie Checkliste.</p>
          </div>
          <div className="flex gap-2">
            <Link to="/marken" className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-200">
              Alle Marken
            </Link>
            <Link to="/kosten-gebuehren" className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800">
              Banken-Gebühren
            </Link>
            <Link to="/checkliste" className="px-4 py-2 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs hover:bg-amber-400">
              Checkliste
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
