import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { 
  Menu, 
  X, 
  ChevronRight, 
  FileText,
  Clock,
  DollarSign,
  ShieldCheck,
  CheckSquare,
  Car
} from "lucide-react";

import ScrollToTop from "../components/ScrollToTop";
import CookieBanner from "../components/CookieBanner";
import SkipLinks from "../components/SkipLinks";

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900" lang="de">
      <SkipLinks />
      
      {/* Header - Clean, Streamlined & Modern */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" onClick={handleLinkClick}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <BrandLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                  Leasingübernahme<span className="text-amber-600">.de</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium -mt-1 tracking-wider uppercase">
                  Das unabhängige Fachportal
                </span>
              </div>
            </Link>

            {/* Streamlined Desktop Navigation: Only core guide topics, NO start/faq/impressum */}
            <nav id="main-navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2" role="navigation" aria-label="Hauptnavigation">
              <Link
                to="/info"
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive("/info") 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                onClick={handleLinkClick}
              >
                Ablauf &amp; Schritte
              </Link>

              <Link
                to="/kosten-gebuehren"
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive("/kosten-gebuehren") 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                onClick={handleLinkClick}
              >
                Kosten &amp; Banken
              </Link>

              <Link
                to="/vorteile-nachteile"
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive("/vorteile-nachteile") 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                onClick={handleLinkClick}
              >
                Vor- &amp; Nachteile
              </Link>

              <Link
                to="/checkliste"
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive("/checkliste") 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                onClick={handleLinkClick}
              >
                Checkliste
              </Link>

              <Link
                to="/marken"
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive("/marken") 
                    ? "bg-slate-900 text-white shadow-sm" 
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                onClick={handleLinkClick}
              >
                Marken-Guides
              </Link>

              {/* Quick Action Button */}
              <div className="pl-2">
                <Link to="/checkliste" onClick={handleLinkClick}>
                  <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs lg:text-sm px-4 py-2 rounded-xl shadow transition-transform active:scale-95 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 stroke-[2.5]" />
                    <span>Muster-Vorlage</span>
                  </button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
            <Link to="/info" onClick={handleLinkClick} className="block px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-100">
              Ablauf &amp; Schritte
            </Link>
            <Link to="/kosten-gebuehren" onClick={handleLinkClick} className="block px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-100">
              Kosten &amp; Banken
            </Link>
            <Link to="/vorteile-nachteile" onClick={handleLinkClick} className="block px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-100">
              Vor- &amp; Nachteile
            </Link>
            <Link to="/checkliste" onClick={handleLinkClick} className="block px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-100">
              Checkliste &amp; Vorlagen
            </Link>
            <Link to="/marken" onClick={handleLinkClick} className="block px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-100">
              Marken-Guides
            </Link>

            <div className="pt-3 border-t border-slate-100">
              <Link to="/checkliste" onClick={handleLinkClick}>
                <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4 stroke-[2.5]" />
                  <span>Kostenloses Übergabeprotokoll</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>

      {/* Footer (Contains Impressum, Datenschutz & FAQ for 100% legal compliance & SEO) */}
      <footer id="footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <BrandLogo className="w-10 h-10" />
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Leasingübernahme<span className="text-amber-400">.de</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Ihr unabhängiges Fachportal &amp; Informations-Ratgeber für Leasingübernahme, Vertragsweitergabe und Gebrauchtwagen-Leasing in Deutschland.
              </p>

              {/* Disclosure Note */}
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs text-slate-400 space-y-1">
                <p className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                  Rechtlicher Hinweis &amp; Unabhängigkeit
                </p>
                <p>
                  leasinguebernahme.de ist ein rein unabhängiges Informationsportal und steht in keinem gesellschaftsrechtlichen Verhältnis zu den genannten Automobilherstellern, Autohäusern oder Leasinggesellschaften.
                </p>
              </div>
            </div>
            
            {/* Navigation Column */}
            <div>
              <h3 className="text-xs font-extrabold text-white tracking-wider uppercase mb-4 text-amber-400">
                Ratgeber-Themen
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                    Ratgeber Übersicht
                  </Link>
                </li>
                <li>
                  <Link to="/info" className="text-slate-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                    Ablauf &amp; Bonitätsprüfung
                  </Link>
                </li>
                <li>
                  <Link to="/kosten-gebuehren" className="text-slate-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                    Banken-Gebühren Übersicht
                  </Link>
                </li>
                <li>
                  <Link to="/vorteile-nachteile" className="text-slate-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                    Vor- &amp; Nachteile Vergleich
                  </Link>
                </li>
                <li>
                  <Link to="/checkliste" className="text-slate-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                    Übergabeprotokoll Checkliste
                  </Link>
                </li>
                <li>
                  <Link to="/marken" className="text-slate-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                    Marken-Ratgeber
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h3 className="text-xs font-extrabold text-white tracking-wider uppercase mb-4 text-amber-400">
                Rechtliches &amp; Hilfe
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link 
                    to="/impressum" 
                    className="text-amber-300 font-bold hover:text-white transition-colors flex items-center gap-1"
                    onClick={handleLinkClick}
                  >
                    <span>Impressum (§ 5 DDG)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/datenschutz" 
                    className="text-slate-400 hover:text-white transition-colors"
                    onClick={handleLinkClick}
                  >
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="text-slate-400 hover:text-white transition-colors"
                    onClick={handleLinkClick}
                  >
                    Häufige Fragen (FAQ)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} leasinguebernahme.de - Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}
