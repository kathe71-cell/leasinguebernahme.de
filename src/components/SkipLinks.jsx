import React from "react";

// Barrierefreiheit: Skip-Links für Tastatur-Navigation
export default function SkipLinks() {
  return (
    <nav aria-label="Sprungnavigation" className="sr-only focus-within:not-sr-only">
      <ul className="fixed top-0 left-0 z-[100] bg-blue-600 text-white">
        <li>
          <a 
            href="#main-content" 
            className="block px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white sr-only focus:not-sr-only"
          >
            Zum Hauptinhalt springen
          </a>
        </li>
        <li>
          <a 
            href="#main-navigation" 
            className="block px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white sr-only focus:not-sr-only"
          >
            Zur Hauptnavigation springen
          </a>
        </li>
        <li>
          <a 
            href="#footer" 
            className="block px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white sr-only focus:not-sr-only"
          >
            Zum Footer springen
          </a>
        </li>
      </ul>
    </nav>
  );
}