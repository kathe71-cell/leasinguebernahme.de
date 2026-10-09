import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Route change: In den sichtbaren Bereich scrollen
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [pathname]);

  // Floating Button visibility
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-amber-500 text-slate-950 font-extrabold rounded-full shadow-xl hover:bg-amber-400 hover:-translate-y-1 transition-all z-50 print:hidden focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      aria-label="Nach oben scrollen"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}