import React from "react";
import BrandGuideTemplate from "@/components/BrandGuideTemplate";

export default function MarkeSeat() {
  const faqs = [
    {
      question: "Ist die Leasingübernahme bei Seat für Privatpersonen möglich?",
      answer: "Laut offiziellen Vorgaben der Volkswagen Financial Services AG (VWFS) ist die Leasingübernahme auf Privatpersonen derzeit stark eingeschränkt oder ausgeschlossen. Übertragungen sind vorrangig im gewerblichen Bereich (Gewerbe-zu-Gewerbe) möglich."
    },
    {
      question: "Was passiert mit der Leasing-Sonderzahlung (Anzahlung)?",
      answer: "Eine vom Erst-Leasingnehmer geleistete Anzahlung wird von der Bank nicht erstattet. Eine finanzielle Einigung muss privat zwischen dem bisherigen und dem neuen Leasingnehmer getroffen werden."
    },
    {
      question: "Können Service-Pakete (wie Wartung & Verschleiß) übernommen werden?",
      answer: "Meistens sind solche Service-Pakete fahrzeuggebunden und gehen auf den neuen Leasingnehmer über. Klären Sie jedoch vorab mit der Volkswagen Financial Services AG (VWFS), ob alle gebuchten Services weiterhin Bestand haben."
    },
    {
      question: "Wie lange dauert der Umschreibungsprozess bei der Volkswagen Financial Services AG (VWFS)?",
      answer: "Sobald alle Unterlagen (Selbstauskunft, Gehaltsnachweise/BWA) vollständig vorliegen, dauert die Bonitätsprüfung und Vertragserstellung erfahrungsgemäß etwa 2 bis 4 Wochen."
    }
  ];

  return (
    <BrandGuideTemplate 
      brandName="Seat"
      bankName="Volkswagen Financial Services AG (VWFS)"
      bankUrl="https://www.vwfs.de/"
      specificRuleTitle="Privatkunden-Einschränkung"
      specificRuleText="Laut offizieller Auskunft der Volkswagen Financial Services AG (VWFS) ist eine Leasingübernahme auf Privatpersonen derzeit ausgeschlossen oder nur in absoluten Ausnahmefällen möglich. Vertragsübertragungen werden vorrangig für Geschäftskunden (Gewerbe-zu-Gewerbe) durchgeführt."
      isPrivateAllowed={false}
      faqs={faqs}
    />
  );
}
