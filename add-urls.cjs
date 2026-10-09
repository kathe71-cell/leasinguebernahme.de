const fs = require('fs');
const path = require('path');

const brands = [
  { name: 'Citroen', bank: 'Stellantis Financial Services', isPriv: true, url: 'https://www.stellantis-financial-services.de/' },
  { name: 'Cupra', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false, url: 'https://www.vwfs.de/' },
  { name: 'Fiat', bank: 'Stellantis Financial Services', isPriv: true, url: 'https://www.stellantis-financial-services.de/' },
  { name: 'Ford', bank: 'Ford Bank GmbH', isPriv: true, url: 'https://www.ford.de/finanzen/ford-bank' },
  { name: 'Hyundai', bank: 'Hyundai Capital Bank Europe', isPriv: true, url: 'https://www.hyundaicapitalbank.de/' },
  { name: 'Kia', bank: 'Hyundai Capital Bank Europe', isPriv: true, url: 'https://www.hyundaicapitalbank.de/' },
  { name: 'Mazda', bank: 'Santander Consumer Bank', isPriv: true, url: 'https://www.santander.de/' },
  { name: 'Mercedes', bank: 'Mercedes-Benz Bank AG', isPriv: true, url: 'https://www.mercedes-benz-bank.de/' },
  { name: 'Mini', bank: 'BMW Bank GmbH', isPriv: true, url: 'https://www.bmwbank.de/' },
  { name: 'Nissan', bank: 'Mobilize Financial Services', isPriv: true, url: 'https://www.mobilize-fs.de/' },
  { name: 'Opel', bank: 'Stellantis Financial Services', isPriv: true, url: 'https://www.stellantis-financial-services.de/' },
  { name: 'Peugeot', bank: 'Stellantis Financial Services', isPriv: true, url: 'https://www.stellantis-financial-services.de/' },
  { name: 'Renault', bank: 'Mobilize Financial Services', isPriv: true, url: 'https://www.mobilize-fs.de/' },
  { name: 'Seat', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false, url: 'https://www.vwfs.de/' },
  { name: 'Skoda', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false, url: 'https://www.vwfs.de/' },
  { name: 'Tesla', bank: 'Tesla Financial Services', isPriv: true, url: 'https://www.tesla.com/de_de/support/financial-services' },
  { name: 'Toyota', bank: 'Toyota Kreditbank GmbH', isPriv: true, url: 'https://www.toyota.de/finanzierung' },
  { name: 'Volkswagen', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false, url: 'https://www.vwfs.de/' },
  { name: 'Volvo', bank: 'Santander Consumer Bank', isPriv: true, url: 'https://www.santander.de/' },
  { name: 'Audi', bank: 'Volkswagen Financial Services AG (VWFS)', isPriv: false, url: 'https://www.vwfs.de/' },
  { name: 'BMW', bank: 'BMW Bank GmbH', isPriv: true, url: 'https://www.bmwbank.de/' }
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
      bankUrl="${b.url}"
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

console.log("All brand guides updated with URLs!");
