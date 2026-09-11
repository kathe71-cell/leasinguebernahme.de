import React from "react";

export default function BrandLogo({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Leasingübernahme Logo"
    >
      <defs>
        <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="logoSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* Squircle Background */}
      <rect x="24" y="24" width="464" height="464" rx="112" fill="url(#logoBgGrad)" stroke="#334155" strokeWidth="8" />

      {/* Dynamic Transfer Arrows (Übernahme) */}
      <path d="M 170 145 A 135 135 0 0 1 360 175" fill="none" stroke="url(#logoGoldGrad)" strokeWidth="22" strokeLinecap="round" />
      <polygon points="360,150 385,188 340,195" fill="url(#logoGoldGrad)" />

      <path d="M 342 367 A 135 135 0 0 1 152 337" fill="none" stroke="url(#logoGoldGrad)" strokeWidth="22" strokeLinecap="round" />
      <polygon points="152,362 127,324 172,317" fill="url(#logoGoldGrad)" />

      {/* Car Silhouette */}
      <g transform="translate(106, 176) scale(0.6)">
        <path d="M 40 160 L 75 110 C 105 75, 145 60, 205 55 L 320 55 C 375 55, 410 75, 445 115 L 475 160 C 495 170, 505 185, 505 205 L 505 235 C 505 245, 495 255, 485 255 L 455 255 C 445 220, 410 195, 370 195 C 330 195, 295 220, 285 255 L 175 255 C 165 220, 130 195, 90 195 C 50 195, 15 220, 5 255 L -5 255 C -15 255, -25 245, -25 235 L -25 205 C -25 185, -10 170, 40 160 Z" fill="url(#logoSilverGrad)" />
        <path d="M 100 135 L 135 90 C 155 75, 185 70, 235 68 L 245 68 L 245 135 Z" fill="#0f172a" opacity="0.9" />
        <path d="M 265 68 L 315 68 C 355 70, 380 80, 405 105 L 435 135 L 265 135 Z" fill="#0f172a" opacity="0.9" />
        <path d="M 30 165 L 470 165" stroke="url(#logoGoldGrad)" strokeWidth="8" strokeLinecap="round" />
        
        <circle cx="90" cy="255" r="42" fill="#0f172a" stroke="url(#logoGoldGrad)" strokeWidth="10" />
        <circle cx="90" cy="255" r="18" fill="url(#logoSilverGrad)" />
        <circle cx="370" cy="255" r="42" fill="#0f172a" stroke="url(#logoGoldGrad)" strokeWidth="10" />
        <circle cx="370" cy="255" r="18" fill="url(#logoSilverGrad)" />
      </g>
    </svg>
  );
}
