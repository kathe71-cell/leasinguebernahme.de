import React from "react";

// SEO-Komponente für strukturierte Daten und Meta-Informationen
// Wird als JSON-LD Script in die Seite eingefügt
export default function SEOHead({ 
  title = "Leasingübernahme.de - Leasing Fahrzeuge finden",
  description = "Finden Sie attraktive Leasingfahrzeuge oder stellen Sie Ihr Fahrzeug zur Übernahme ein. Schnell, einfach und kostenlos.",
  type = "website",
  image = null,
  url = null,
  brand = null,
  price = null,
  structuredData = null
}) {
  // Basis-Strukturierte Daten für die Organisation
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leasingübernahme.de",
    "url": "https://leasinguebernahme.de",
    "logo": "https://leasinguebernahme.de/logo.png",
    "description": "Portal für Leasingübernahmen in Deutschland",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "German"
    }
  };

  // WebSite-Daten für Suchmaschinen
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Leasingübernahme.de",
    "url": "https://leasinguebernahme.de",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://leasinguebernahme.de/Fahrzeugliste?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Fahrzeug-spezifische Daten wenn vorhanden
  const vehicleData = brand ? {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": price ? {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": price,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    } : undefined
  } : null;

  // Breadcrumb-Daten
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://leasinguebernahme.de"
      }
    ]
  };

  const allData = [organizationData, websiteData];
  if (vehicleData) allData.push(vehicleData);
  if (structuredData) allData.push(structuredData);

  return (
    <>
      {/* Strukturierte Daten als JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(allData)
        }}
      />
    </>
  );
}

// Hilfsfunktion für FAQ-Schema
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Hilfsfunktion für Produkt-Schema (Fahrzeuge)
export function generateVehicleSchema(vehicle) {
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": `${vehicle.brand} ${vehicle.model}`,
    "brand": {
      "@type": "Brand",
      "name": vehicle.brand
    },
    "model": vehicle.model,
    "vehicleModelDate": vehicle.year?.toString(),
    "mileageFromOdometer": {
      "@type": "QuantitativeValue",
      "value": vehicle.mileage,
      "unitCode": "KMT"
    },
    "fuelType": vehicle.fuel_type,
    "vehicleTransmission": vehicle.transmission,
    "color": vehicle.color,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": vehicle.offer_type === 'kauf' ? vehicle.cash_price : vehicle.monthly_rate,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  };
}