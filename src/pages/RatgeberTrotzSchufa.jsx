import React from "react";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, ShieldCheck, CheckCircle2, XCircle, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RatgeberTrotzSchufa() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-20">
      <SEOHead 
        title="Leasingübernahme trotz negativer Schufa? Fakten & Alternativen"
        description="Ist eine Leasingübernahme ohne Bonitätsprüfung möglich? Erfahren Sie, warum Banken immer prüfen, welche Kriterien gelten und welche Alternativen es gibt."
        canonicalPath="/leasinguebernahme-trotz-schufa"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Leasingübernahme trotz negativer Schufa?
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            Viele Interessenten, die bei einem Neuwagen-Leasing abgelehnt wurden, hoffen, durch die Übernahme eines laufenden Vertrags von einer Privatperson die strenge Bonitätsprüfung umgehen zu können. Wir zeigen, warum das ein gefährlicher Irrtum ist und welche echten Alternativen existieren.
          </p>
        </div>

        {/* Mythen vs Fakten */}
        <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-rose-900 flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6" />
            Der größte Irrtum: Übernahme ohne Bank
          </h2>
          <p className="text-rose-800 text-sm leading-relaxed mb-4">
            Der häufigste Glaube ist: <em>"Ich einige mich mit dem Vorbesitzer, überweise ihm monatlich das Geld und fahre das Auto."</em> <strong>Das ist illegal und vertragswidrig.</strong> Der bisherige Leasingnehmer darf das Fahrzeug nicht einfach "untervermieten". 
          </p>
          <p className="text-rose-800 text-sm leading-relaxed mb-4">
            Die Leasinggesellschaft (Eigentümer des Fahrzeugs) muss der Übernahme zwingend zustimmen. Und das tut sie nur nach einer <strong>kompletten, neuen Bonitätsprüfung</strong>.
          </p>
          
          <div className="bg-white/60 p-4 rounded-xl mt-4">
            <h3 className="font-bold text-rose-900 text-sm mb-2">Was führt unweigerlich zur Ablehnung?</h3>
            <ul className="space-y-2 text-rose-800 text-sm">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-600" /> Harte Schufa-Einträge (Eidesstattliche Versicherung, Privatinsolvenz)</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-600" /> Laufende Inkasso-Verfahren oder unbezahlte Rechnungen</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-600" /> Befristetes Arbeitsverhältnis oder Probezeit</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-600" /> Zu geringes frei verfügbares Einkommen (Haushaltsrechnung)</li>
            </ul>
          </div>
        </div>


        {/* Wie prüft die Bank */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Wie genau prüft die Leasingbank?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Der Umschreibungsprozess entspricht 1:1 dem eines Neuvertrags. Die Bank fordert von Ihnen als Interessent eine umfassende Selbstauskunft. Dabei werden folgende Faktoren bewertet:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5"><Info className="w-4 h-4 text-amber-600" /> Schufa-Score</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Abfrage des Basisscores sowie des branchenspezifischen Auto-Scores. Ist dieser zu niedrig (oft unter 95%), wird maschinell abgelehnt.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5"><Info className="w-4 h-4 text-amber-600" /> Haushaltsrechnung</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Reicht das Nettoeinkommen abzüglich Miete, Lebenshaltungskosten und anderer Kredite aus, um die Leasingrate sicher zu decken?</p>
            </div>
          </div>
        </div>

        {/* Lösungen & Alternativen */}
        <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-bold text-emerald-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            Lösungswege & Alternativen
          </h2>
          <p className="text-emerald-800 text-sm leading-relaxed">
            Wenn die reguläre Leasingbank (z.B. BMW Bank, Mercedes-Benz Bank) ablehnt, haben Sie noch folgende legale und sichere Optionen, um an ein Fahrzeug zu kommen:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
              <h3 className="font-bold text-emerald-900 text-sm">1. Einsetzen eines Bürgen / Mitantragstellers</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Viele Banken akzeptieren die Übernahme, wenn Sie einen liquiden zweiten Kreditnehmer (z.B. Ehepartner, Elternteil) in den Vertrag aufnehmen. Beide haften dann gesamtschuldnerisch für die Raten.</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
              <h3 className="font-bold text-emerald-900 text-sm">2. Auto-Abo als Leasing-Alternative</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Einige moderne Auto-Abo Anbieter (wie z.B. Finn oder abonnieren.de) haben etwas moderatere Bonitätskriterien als klassische Herstellerbanken, da die Fahrzeuge auf den Anbieter zugelassen bleiben und bei Nichtzahlung sofort eingezogen werden können. Die Schufa wird dennoch geprüft, aber der Cut-Off-Wert ist teils niedriger.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
              <h3 className="font-bold text-emerald-900 text-sm">3. Spezialfinanzierer (ohne Schufa)</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Es gibt Vermittler für "Autokredite ohne Schufa" (meist über Schweizer Banken). Diese sind jedoch oft mit extrem hohen Zinsen (10-15% p.a.) und Bearbeitungsgebühren verbunden. Von Leasingangeboten komplett ohne Schufa ist generell abzuraten, da hier viele unseriöse Vermittler agieren.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-400">
            <HelpCircle className="w-5 h-5" />
            Häufige Fragen (FAQ)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-sm text-white">Darf ich das Auto vom Vorbesitzer per Privatvertrag übernehmen?</h3>
              <p className="text-xs text-slate-400 mt-1">Nein. Das Fahrzeug gehört der Leasingbank. Eine private "Untermiete" verstößt gegen die AGB, macht den Versicherungsschutz zunichte und kann als strafbare Unterschlagung gewertet werden.</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Lohnt sich eine Anfrage bei mittlerer Bonität?</h3>
              <p className="text-xs text-slate-400 mt-1">Ja, wenn Sie keine harten Negativmerkmale haben (nur z.B. ein paar spät bezahlte Handyrechnungen), kann die Bank die Übernahme unter Auflagen (z.B. Zahlung einer Kaution) bewilligen.</p>
            </div>
          </div>
          <div className="pt-2">
             <Link to="/info" className="text-amber-400 hover:text-amber-300 text-sm font-bold underline">
               Mehr zum generellen Ablauf der Bonitätsprüfung lesen
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
