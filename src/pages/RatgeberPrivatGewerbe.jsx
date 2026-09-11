import React from "react";
import { Link } from "react-router-dom";
import { Building2, FileText, CheckCircle2, ChevronRight, DollarSign } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function RatgeberPrivatGewerbe() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/" className="hover:underline">Ratgeber</Link>
            <span>/</span>
            <span>Steuer &amp; Gewerbe</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Leasingübernahme von Privat an Gewerbe (und umgekehrt)
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Steuerliche Behandlung, Vorsteuerabzug, Bonitätsnachweise und Fallstricke bei der Vertragsübernahme zwischen Privatpersonen und Unternehmen.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Stand: September 2026 | Geprüfte Rechtslage</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
            Wichtigste Steuer-Regel (Google AI Snippet)
          </span>
          <p className="font-medium">
            Bei einer Leasingübernahme von Privat an Gewerbe wird der Vertrag auf das Unternehmen umgeschrieben, wodurch die monatlichen Leasingraten als Betriebsausgaben absetzbar werden und zum Vorsteuerabzug (19 % MwSt.) berechtigen. Bei der Übernahme von Gewerbe an Privat müssen Brutto-Raten bezahlt werden und der Vorsteuerabzug entfällt.
          </p>
        </div>

        <AdSenseBanner slot="9000000011" className="bg-white" />

        {/* Boxen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-600" />
              Privat an Gewerbe
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700">
              <li>Leasingraten werden voll als Betriebsausgabe geltend gemacht.</li>
              <li>Vorsteuerabzug der monatlichen 19 % Mehrwertsteuer möglich.</li>
              <li>Bank verlangt BWA, SuSa und Gewerbeanmeldung / Handelsregisterauszug.</li>
              <li>Fahrzeug wird betriebliches Vermögen (1%-Regelung oder Fahrtenbuch).</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              Gewerbe an Privat
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700">
              <li>Übernehmer zahlt immer den vollen Bruttobetrag (inkl. MwSt.).</li>
              <li>Keine steuerliche Absetzbarkeit für Arbeitnehmer (außer Pendlerpauschale).</li>
              <li>Bank prüft private Schufa und die letzten 3 Gehaltsabrechnungen.</li>
              <li>Abtretungserklärung der bisherigen Vorsteueransprüche ist nicht erforderlich.</li>
            </ul>
          </div>
        </div>

        <AdSenseBanner slot="9000000012" className="bg-white" />

        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-extrabold text-amber-400">Gebühren der einzelnen Banken vergleichen</h3>
            <p className="text-xs text-slate-300">Sehen Sie, welche Umschreibungsgebühren VWFS, BMW Bank oder Mercedes Bank berechnen.</p>
          </div>
          <Link to="/kosten-gebuehren" className="px-5 py-2.5 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs hover:bg-amber-400">
            Bankgebühren ansehen
          </Link>
        </div>

      </div>
    </div>
  );
}
