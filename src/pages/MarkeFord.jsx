import React from "react";
import BrandGuideTemplate from "@/components/BrandGuideTemplate";

export default function MarkeFord() {
  const faqs = [
    {
      question: "Ist die Leasingübernahme bei Ford für Privatpersonen möglich?",
      answer: "Ja, in der Regel ist die Vertragsübernahme bei der Ford Bank GmbH auch für Privatkunden möglich, sofern die strengen Vorgaben zur Bonität (ausreichendes und gesichertes Einkommen, positive Schufa) erfüllt werden."
    },
    {
      question: "Was passiert mit der Leasing-Sonderzahlung (Anzahlung)?",
      answer: "Eine vom Erst-Leasingnehmer geleistete Anzahlung wird von der Bank nicht erstattet. Eine finanzielle Einigung muss privat zwischen dem bisherigen und dem neuen Leasingnehmer getroffen werden."
    },
    {
      question: "Können Service-Pakete (wie Wartung & Verschleiß) übernommen werden?",
      answer: "Meistens sind solche Service-Pakete fahrzeuggebunden und gehen auf den neuen Leasingnehmer über. Klären Sie jedoch vorab mit der Ford Bank GmbH, ob alle gebuchten Services weiterhin Bestand haben."
    },
    {
      question: "Wie lange dauert der Umschreibungsprozess bei der Ford Bank GmbH?",
      answer: "Sobald alle Unterlagen (Selbstauskunft, Gehaltsnachweise/BWA) vollständig vorliegen, dauert die Bonitätsprüfung und Vertragserstellung erfahrungsgemäß etwa 2 bis 4 Wochen."
    }
  ];

  return (
    <BrandGuideTemplate 
      brandName="Ford"
      bankName="Ford Bank GmbH"
      bankUrl="https://www.ford.de/"
      specificRuleTitle="Bonitätsprüfung erforderlich"
      specificRuleText="Die Ford Bank GmbH prüft jeden Übernahmeantrag individuell. Eine positive Schufa und gesicherte Einkommensverhältnisse sind zwingende Grundvoraussetzung."
      isPrivateAllowed={true}
      faqs={faqs}
    />
  );
}
