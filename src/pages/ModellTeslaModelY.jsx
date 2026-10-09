import React from "react";
import { Link } from "react-router-dom";
import { Building2, ShieldCheck, Zap, CheckCircle2, ChevronRight, Car, Info } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function ModellTeslaModelY() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <SEOHead 
        title="Tesla Model Y Leasingübernahme | App-Transfer & Bankablauf"
        description="Ratgeber zur Übernahme von Tesla Model Y Leasingverträgen: Digitale Fahrzeugübertragung in der Tesla App & Partnerbanken."
        canonicalPath="/tesla-model-y-leasinguebernahme"
      />
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-1">
            <Link to="/marken" className="hover:underline">Marken</Link>
            <span>/</span>
            <Link to="/marke-tesla" className="hover:underline">Tesla</Link>
            <span>/</span>
            <span>Tesla Model Y</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Tesla Model Y Leasingübernahme: Ablauf &amp; Account-Transfer
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Der umfassende Leitfaden zur Übernahme von Tesla Model Y Leasingverträgen (RWD, Maximale Reichweite, Performance) und digitaler Fahrzeugübertragung in der Tesla App.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Fachratgeber Mobilität &amp; Vertragsrecht</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
            Kompakt-Definition: Tesla Model Y Leasingübernahme
          </span>
          <p className="font-medium">
            Die Tesla Model Y Leasingübernahme kombiniert die bankseitige Schuldübernahme (z. B. CA Auto Bank oder Santander Consumer Bank) mit der digitalen Fahrzeugübertragung im Tesla-Konto. Die Umschreibungsgebühr ist beim jeweiligen Finanzierungspartner zu erfragen, wobei bestehende Software-Optionen wie der Enhanced Autopilot erhalten bleiben.
          </p>
        </div>


        {/* Besonderheiten E-Auto Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-600" />
            Wichtige Besonderheiten bei Tesla Leasingübernahmen
          </h2>
          <div className="text-slate-700 text-sm space-y-3 leading-relaxed">
            <p>
              Bei Elektrofahrzeugen wie dem Tesla Model Y müssen neben dem Standard-Bankvertrag zusätzliche Schritte beachtet werden:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 font-bold block text-sm">1. Tesla App Übertragung</strong>
                <p className="text-xs text-slate-600">Der Vorbesitzer muss in der Tesla-App unter „Fahrzeug verwalten“ die Funktion „Fahrzeug übertragen“ anstoßen, damit der Neukunde vollen App-Zugriff und Supercharger-Abrechnung erhält.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 font-bold block text-sm">2. Batterie-Zertifikat</strong>
                <p className="text-xs text-slate-600">Die 8-jährige Tesla Batterie- und Antriebsgarantie geht vollumfänglich auf den neuen Leasingnehmer über. Ein State-of-Health-Ausdruck (SoH) bei Übergabe wird empfohlen.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Banken & Gebühren */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Welche Bank betreut Ihren Tesla Leasingvertrag?
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Tesla nutzt in Deutschland verschiedene Partnergesellschaften für Leasingverträge. Prüfen Sie Ihren Leasingvertrag auf den exakten Vertragspartner:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
            <li><strong>Santander Consumer Bank AG:</strong> Betreut einen Großteil der Privatleasingverträge (Umschreibungsgebühr ca. 250 € - 500 €).</li>
            <li><strong>CA Auto Bank (ehem. FCA Bank):</strong> Häufig bei neueren Modelljahren (Umschreibungsgebühr ca. 250 € - 500 €).</li>
            <li><strong>Tesla Financial Services Deutschland:</strong> Für gewerbliche Flotten und ausgewählte Privatverträge.</li>
          </ul>
        </div>


        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-extrabold text-amber-400">Schäden bei Rückgabe vermeiden</h3>
            <p className="text-xs text-slate-300">Nutzen Sie unser herstellerunabhängiges Übergabeprotokoll für die lückenlose Dokumentation.</p>
          </div>
          <Link to="/checkliste" className="px-5 py-2.5 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs hover:bg-amber-400">
            Checkliste ansehen
          </Link>
        </div>

      </div>
    </div>
  );
}
