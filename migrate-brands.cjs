const fs = require('fs');
const path = require('path');

const brands = [
  { name: 'Citroen', bank: 'Stellantis Financial Services', isPriv: true },
  { name: 'Cupra', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false },
  { name: 'Fiat', bank: 'Stellantis Financial Services', isPriv: true },
  { name: 'Ford', bank: 'Ford Bank GmbH', isPriv: true },
  { name: 'Hyundai', bank: 'Hyundai Capital Bank Europe', isPriv: true },
  { name: 'Kia', bank: 'Hyundai Capital Bank Europe', isPriv: true },
  { name: 'Mazda', bank: 'Santander Consumer Bank', isPriv: true },
  { name: 'Mercedes', bank: 'Mercedes-Benz Bank AG', isPriv: true },
  { name: 'Mini', bank: 'BMW Bank GmbH', isPriv: true },
  { name: 'Nissan', bank: 'Mobilize Financial Services', isPriv: true },
  { name: 'Opel', bank: 'Stellantis Financial Services', isPriv: true },
  { name: 'Peugeot', bank: 'Stellantis Financial Services', isPriv: true },
  { name: 'Renault', bank: 'Mobilize Financial Services', isPriv: true },
  { name: 'Seat', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false },
  { name: 'Skoda', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false },
  { name: 'Tesla', bank: 'Tesla Financial Services', isPriv: true },
  { name: 'Toyota', bank: 'Toyota Kreditbank GmbH', isPriv: true },
  { name: 'Volkswagen', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false },
  { name: 'Volvo', bank: 'Santander Consumer Bank', isPriv: true },
];

brands.forEach(b => {
  const filePath = path.join(__dirname, 'src/pages', `Marke${b.name}.jsx`);
  
  const content = `import React from "react";
import BrandGuideTemplate from "@/components/BrandGuideTemplate";

export default function Marke${b.name}() {
  const faqs = [
    {
      question: "Ist die Leasingübernahme bei ${b.name} für Privatpersonen möglich?",
      answer: ${b.isPriv 
        ? `"Ja, in der Regel ist die Vertragsübernahme bei der ${b.bank} auch für Privatkunden möglich, sofern die strengen Vorgaben zur Bonität (ausreichendes und gesichertes Einkommen, positive Schufa) erfüllt werden."` 
        : `"Laut offiziellen Vorgaben der ${b.bank} ist die Leasingübernahme auf Privatpersonen derzeit stark eingeschränkt oder ausgeschlossen. Übertragungen sind vorrangig im gewerblichen Bereich (Gewerbe-zu-Gewerbe) möglich."`
      }
    },
    {
      question: "Was passiert mit der Leasing-Sonderzahlung (Anzahlung)?",
      answer: "Eine vom Erst-Leasingnehmer geleistete Anzahlung wird von der Bank nicht erstattet. Eine finanzielle Einigung muss privat zwischen dem bisherigen und dem neuen Leasingnehmer getroffen werden."
    },
    {
      question: "Können Service-Pakete (wie Wartung & Verschleiß) übernommen werden?",
      answer: "Meistens sind solche Service-Pakete fahrzeuggebunden und gehen auf den neuen Leasingnehmer über. Klären Sie jedoch vorab mit der ${b.bank}, ob alle gebuchten Services weiterhin Bestand haben."
    },
    {
      question: "Wie lange dauert der Umschreibungsprozess bei der ${b.bank}?",
      answer: "Sobald alle Unterlagen (Selbstauskunft, Gehaltsnachweise/BWA) vollständig vorliegen, dauert die Bonitätsprüfung und Vertragserstellung erfahrungsgemäß etwa 2 bis 4 Wochen."
    }
  ];

  return (
    <BrandGuideTemplate 
      brandName="${b.name}"
      bankName="${b.bank}"
      bankUrl=""
      specificRuleTitle="${b.isPriv ? 'Bonitätsprüfung erforderlich' : 'Privatkunden-Einschränkung'}"
      specificRuleText="${b.isPriv 
        ? `Die ${b.bank} prüft jeden Übernahmeantrag individuell. Eine positive Schufa und gesicherte Einkommensverhältnisse sind zwingende Grundvoraussetzung.`
        : `Laut offizieller Auskunft der ${b.bank} ist eine Leasingübernahme auf Privatpersonen derzeit ausgeschlossen oder nur in absoluten Ausnahmefällen möglich. Vertragsübertragungen werden vorrangig für Geschäftskunden (Gewerbe-zu-Gewerbe) durchgeführt.`}"
      isPrivateAllowed={${b.isPriv}}
      faqs={faqs}
    />
  );
}
`;
  fs.writeFileSync(filePath, content);
});

console.log("All brand guides updated!");
