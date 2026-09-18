import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_DOMAIN = "https://www.xn--leasingbernahme-5vb.de";

export default function SEOHead({ 
  title = "Leasingübernahme Ratgeber | Ablauf, Umschreibungsgebühren & Rechner",
  description = "Der unabhängige Ratgeber für Leasingübernahmen in Deutschland: Ablauf, Schufa-Bonitätsprüfung, Umschreibungsgebühren, Vor- & Nachteile, Checklisten & Ersparnisrechner.",
  canonicalPath = null,
  structuredData = null
}) {
  const location = useLocation();
  const path = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_DOMAIN}${path === "/" ? "" : path}`;

  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // 3. Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", canonicalUrl);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      linkCanonical.href = canonicalUrl;
      document.head.appendChild(linkCanonical);
    }

    // 4. OpenGraph Meta Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

  }, [title, description, canonicalUrl]);

  // Base Organization & WebSite JSON-LD
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leasingübernahme.de",
    "url": BASE_DOMAIN,
    "logo": `${BASE_DOMAIN}/favicon.svg`,
    "description": "Unabhängiger Ratgeber und Fachportal für Leasingübernahmen in Deutschland"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Leasingübernahme.de",
    "url": BASE_DOMAIN
  };

  const allData = [organizationData, websiteData];
  if (structuredData) allData.push(structuredData);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(allData)
      }}
    />
  );
}