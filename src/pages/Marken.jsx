import React from "react";
import { Link } from "react-router-dom";
import { Car, Building2, ChevronRight, ArrowRight } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";
import SEOHead from "@/components/SEOHead";

export default function Marken() {
  const brands = [
    { name: "Audi", path: "/marke-audi", desc: "Besonderheiten bei der Vertragsübernahme über die Volkswagen Financial Services AG.", count: "VWFS Umschreibung" },
    { name: "BMW", path: "/marke-bmw", desc: "Leasingübernahme über die BMW Bank GmbH. Mindestrestlaufzeit & Voraussetzungen.", count: "BMW Bank" },
    { name: "Mercedes-Benz", path: "/marke-mercedes", desc: "Vertragsübertragung bei der Mercedes-Benz Bank AG.", count: "Mercedes Bank" },
    { name: "Volkswagen", path: "/marke-volkswagen", desc: "Leasingverträge der Volkswagen Bank für Golf, Passat, Tiguan & ID-Modelle.", count: "VW Financial Services" },
    { name: "Tesla", path: "/marke-tesla", desc: "Leasingübernahme für Model 3, Model Y & Partnerbanken inkl. Account-Transfer.", count: "Tesla Financial" },
    { name: "Škoda", path: "/marke-skoda", desc: "VWFS Regelungen für Octavia, Superb & Enyaq iV.", count: "VWFS" },
    { name: "CUPRA", path: "/marke-cupra", desc: "Umschreibung für Formentor, Born & Leon über VWFS.", count: "VWFS" },
    { name: "SEAT", path: "/marke-seat", desc: "Leasingübernahme für Ibiza, Leon, Arona & Ateca über VWFS.", count: "VWFS" },
    { name: "Opel", path: "/marke-opel", desc: "Stellantis Financial Services Vertragsübernahme für Astra, Corsa & Co.", count: "Stellantis Bank" },
    { name: "Ford", path: "/marke-ford", desc: "Ford Bank GmbH (Ford Credit) Übernahme für Kuga, Puma & Focus.", count: "Ford Credit" },
    { name: "Renault", path: "/marke-renault", desc: "Mobilize Financial Services (RCI Banque) für Megane, Clio & Captur.", count: "Mobilize Bank" },
    { name: "Peugeot", path: "/marke-peugeot", desc: "Stellantis Financial Services (PSA Bank) für 208, 308 & 3008.", count: "PSA Bank" },
    { name: "Hyundai", path: "/marke-hyundai", desc: "Hyundai Capital Bank Europe für Ioniq 5, Kona & Tucson.", count: "Hyundai Capital" },
    { name: "Kia", path: "/marke-kia", desc: "Kia Finance Vertragsübernahme für EV6, Sportage & Niro.", count: "Kia Finance" },
    { name: "Toyota", path: "/marke-toyota", desc: "Toyota Kreditbank GmbH Regelungen für Yaris, Corolla & RAV4.", count: "Toyota Kreditbank" },
    { name: "Fiat", path: "/marke-fiat", desc: "Übernahme von Fiat 500, 500e & Tipo Leasingverträgen.", count: "FCA Bank / Stellantis" },
    { name: "MINI", path: "/marke-mini", desc: "MINI Financial Services über die BMW Bank GmbH.", count: "BMW Bank" },
    { name: "Volvo", path: "/marke-volvo", desc: "Volvo Car Financial Services für XC40, XC60 & EX30.", count: "Volvo Bank" },
    { name: "Citroën", path: "/marke-citroen", desc: "Citroën Leasingübernahme über Stellantis Financial Services.", count: "Stellantis" },
    { name: "Mazda", path: "/marke-mazda", desc: "Mazda Finance (Santander) für CX-30, CX-5 & MX-5.", count: "Mazda Finance" },
    { name: "Nissan", path: "/marke-nissan", desc: "Nissan Financial Services für Qashqai & X-Trail.", count: "Nissan Finance" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Marken-Übersicht für Leasingübernahmen | VW, Audi, BMW & Mercedes"
        description="Ratgeber und Bank-Richtlinien der einzelnen Automarken für die Leasingübernahme. Regelungen von VWFS, BMW Bank, Mercedes-Benz Bank & mehr."
        canonicalPath="/marken"
      />
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Hersteller &amp; Banken
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Marken-Ratgeber für Leasingübernahmen
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Detaillierte Anleitungen, Umschreibungsgebühren und Bedingungen der einzelnen Automarken und Herstellerbanken in Deutschland.
          </p>
        </div>

        <AdSenseBanner slot="7000000001" className="bg-white" />

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((b, i) => (
            <Link key={i} to={b.path} className="group">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group-hover:border-amber-400 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {b.name}
                    </h2>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 whitespace-nowrap">
                      {b.count}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="flex items-center text-amber-700 font-bold text-xs pt-1 border-t border-slate-100">
                  <span>Marken-Guide lesen</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <AdSenseBanner slot="7000000002" className="bg-white" />

      </div>
    </div>
  );
}