import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Car, ArrowRight } from "lucide-react";

export default function StickyMobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-xs text-slate-300 font-medium">Sofort verfügbar</span>
          <span className="text-xs text-amber-400 font-extrabold flex items-center gap-1">
            * Werbelink / Partner
          </span>
        </div>
        <Link 
          to={createPageUrl("Fahrzeugliste")} 
          className="flex-1 max-w-[240px]"
        >
          <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95">
            <Car className="w-4 h-4" />
            <span>Angebote finden *</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
