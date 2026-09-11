import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Search, BookOpen } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Was genau versteht man unter einer Leasingübernahme?",
      a: "Bei einer Leasingübernahme (auch Leasingvertragsübernahme genannt) übernimmt ein neuer Leasingnehmer einen bestehenden, laufenden Leasingvertrag von einem bisherigen Kunden. Die monatliche Rate, die verbleibende Restlaufzeit und die Freikilometer bleiben dabei unverändert bestehen."
    },
    {
      q: "Wer muss der Leasingübernahme zustimmen?",
      a: "Eine Vertragsübertragung ist nur mit der ausdrücklichen schriftlichen Genehmigung der finanzierenden Leasinggesellschaft (z. B. VW Financial Services, BMW Bank, Mercedes-Benz Bank) möglich. Dazu führt die Bank eine Bonitätsprüfung beim neuen Leasingnehmer durch."
    },
    {
      q: "Welche Voraussetzungen muss der neue Leasingnehmer erfüllen?",
      a: "Der neue Leasingnehmer muss volljährig sein, einen Wohnsitz und Bankverbindung in Deutschland haben und über eine einwandfreie Schufa-Auskunft sowie ein geregeltes Einkommen (bzw. bei Firmen eine ausreichende BWA) verfügen."
    },
    {
      q: "Welche Gebühren fallen bei einer Vertragsübernahme an?",
      a: "Die Leasinggesellschaften erheben eine Bearbeitungs- und Umschreibungsgebühr. Diese liegt je nach Bank meist zwischen 200 € und 600 €. Oft vereinbaren Alt- und Neu-Leasingnehmer, diese Kosten zu teilen."
    },
    {
      q: "Wer haftet für Kratzer oder Schäden bei der Fahrzeugrückgabe?",
      a: "Rechtlich übernimmt der neue Leasingnehmer den Vertrag mit allen Pflichten. Daher haftet der neue Leasingnehmer am Ende der Vertragslaufzeit auch für Schäden, die eventuell bereits vor der Übernahme entstanden sind. Ein detailliertes Übergabeprotokoll bei der Übernahme ist deshalb essenziell."
    },
    {
      q: "Bleibt die Werksgarantie bei einer Leasingübernahme erhalten?",
      a: "Ja, die Garantie des Fahrzeugherstellers ist an das Fahrzeug gebunden und bleibt auch nach einem Halterwechsel oder einer Vertragsübernahme in vollem Umfang gültig."
    },
    {
      q: "Kann der Vertrag vorzeitig gekündigt werden?",
      a: "Klassische Leasingverträge sind während der vereinbarten Festlaufzeit ordentlich nicht kündbar. Die Übernahme durch einen Nachfolger ist für den bisherigen Kunden die einzige Möglichkeit, sich vorzeitig aus dem Vertrag zu lösen."
    },
    {
      q: "Wie lange dauert eine Leasingübernahme in der Regel?",
      a: "Vom ersten Antrag bei der Bank bis zur endgültigen Genehmigung und Fahrzeugübergabe vergehen in der Regel etwa 2 bis 4 Wochen."
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Wissen &amp; Antworten
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Häufig gestellte Fragen (FAQ)
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Antworten auf die wichtigsten Rechts- und Praxisfragen rund um das Thema Leasingübertragung in Deutschland.
          </p>
        </div>

        <AdSenseBanner slot="6000000001" className="bg-white" />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50 focus:outline-none"
              >
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                {openIdx === i ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIdx === i && (
                <div className="p-5 pt-0 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <AdSenseBanner slot="6000000002" className="bg-white" />

      </div>
    </div>
  );
}