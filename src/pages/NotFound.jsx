import React from "react";
import SEOHead from "@/components/SEOHead";
import { Search, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20 min-h-screen flex items-center justify-center">
      <SEOHead 
        title="404 - Seite nicht gefunden | leasingübernahme.de"
        description="Die angeforderte Seite konnte leider nicht gefunden werden."
        canonicalPath="/404"
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 text-center space-y-8">
        
        <div className="space-y-4">
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-rose-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Seite nicht gefunden
          </h1>
          <p className="text-slate-600 leading-relaxed text-lg max-w-lg mx-auto">
            Huch! Diese Seite existiert leider nicht (mehr) oder der Link war fehlerhaft. 
            Aber keine Sorge, hier finden Sie die wichtigsten Themen:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
          <Link to="/info" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all group">
            <h3 className="font-bold text-slate-900 flex items-center justify-between">
              Ablauf & Bonität <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">So funktioniert die Umschreibung.</p>
          </Link>
          <Link to="/auto-abo-vs-leasinguebernahme" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all group">
            <h3 className="font-bold text-slate-900 flex items-center justify-between">
              Auto-Abo vs. Leasing <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">Die beste Alternative bei Ablehnung.</p>
          </Link>
          <Link to="/leasinguebernahme-praemie" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all group">
            <h3 className="font-bold text-slate-900 flex items-center justify-between">
              Prämie berechnen <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">Geld vom Vorbesitzer erhalten.</p>
          </Link>
          <Link to="/marken" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all group">
            <h3 className="font-bold text-slate-900 flex items-center justify-between">
              Marken-Ratgeber <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 mt-1">VW, BMW, Audi & Co im Detail.</p>
          </Link>
        </div>

        <div className="pt-6">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-colors">
            <Home className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
