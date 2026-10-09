import React from "react";
import BrandGuideTemplate from "@/components/BrandGuideTemplate";

export default function MarkeVolvo() {
  const faqs = [
    {
      question: "Ist die Leasingübernahme bei Volvo für Privatpersonen möglich?",
      answer: "Ja, in der Regel ist die Vertragsübernahme bei der Santander Consumer Bank auch für Privatkunden möglich, sofern die strengen Vorgaben zur Bonität (ausreichendes und gesichertes Einkommen, positive Schufa) erfüllt werden."
    },
    {
      question: "Was passiert mit der Leasing-Sonderzahlung (Anzahlung)?",
      answer: "Eine vom Erst-Leasingnehmer geleistete Anzahlung wird von der Bank nicht erstattet. Eine finanzielle Einigung muss privat zwischen dem bisherigen und dem neuen Leasingnehmer getroffen werden."
    },
    {
      question: "Können Service-Pakete (wie Wartung & Verschleiß) übernommen werden?",
      answer: "Meistens sind solche Service-Pakete fahrzeuggebunden und gehen auf den neuen Leasingnehmer über. Klären Sie jedoch vorab mit der Santander Consumer Bank, ob alle gebuchten Services weiterhin Bestand haben."
    },
    {
      question: "Wie lange dauert der Umschreibungsprozess bei der Santander Consumer Bank?",
      answer: "Sobald alle Unterlagen (Selbstauskunft, Gehaltsnachweise/BWA) vollständig vorliegen, dauert die Bonitätsprüfung und Vertragserstellung erfahrungsgemäß etwa 2 bis 4 Wochen."
    }
  ];

  return (
    <BrandGuideTemplate 
      brandName="Volvo"
      bankName="Santander Consumer Bank"
      bankUrl="https://www.santander.de/"
      specificRuleTitle="Bonitätsprüfung erforderlich"
      specificRuleText="Die Santander Consumer Bank prüft jeden Übernahmeantrag individuell. Eine positive Schufa und gesicherte Einkommensverhältnisse sind zwingende Grundvoraussetzung."
      isPrivateAllowed={true}
      faqs={faqs}
    />
  );
}
