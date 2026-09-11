import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  UserCheck, 
  CreditCard, 
  Car, 
  ArrowRight,
  HelpCircle
} from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function Info() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
            Schritt-für-Schritt Anleitung
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
            Der Ablauf einer Leasingübernahme
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Wie funktioniert der Vertragswechsel rechtlich und praktisch? Vom Erstkontakt über die Schufa-Prüfung der Leasingbank bis zur Fahrzeugübergabe.
          </p>
        </div>

        {/* AdSense Top */}
        <AdSenseBanner slot="2000000001" className="bg-white" />

        {/* Step 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-amber-500 text-slate-950 font-extrabold text-lg rounded-xl flex items-center justify-center shadow">
              1
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Vertrag finden &amp; Rahmendaten prüfen
            </h2>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3 pl-0 sm:pl-13">
            <p>
              Im ersten Schritt sichten Sie das gewünschte Leasingfahrzeug und prüfen alle zentralen Eckdaten des laufenden Leasingvertrags:
            </p>
            <ul className="list-disc list-inside space-y-1.5 font-medium text-slate-800">
              <li><strong>Monatliche Leasingrate:</strong> Brutto- bzw. Nettorate inkl. Mehrwertsteuer.</li>
              <li><strong>Restlaufzeit:</strong> Verbleibende Anzahl an Monaten bis zum Vertragsende.</li>
              <li><strong>Inklusivkilometer:</strong> Verbleibendes Kilometerkontingent und Mehrkilometer-Satz.</li>
              <li><strong>Übernahmegebühr:</strong> Welcher Vertragspartner übernimmt die Umschreibungsgebühr der Bank?</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-amber-500 text-slate-950 font-extrabold text-lg rounded-xl flex items-center justify-center shadow">
              2
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Selbstauskunft &amp; Bonitätsprüfung durch die Bank
            </h2>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3 pl-0 sm:pl-13">
            <p>
              Nach der Einigung zwischen Alt- und Neu-Leasingnehmer wird die Umschreibung bei der finanzierenden Leasingbank beantragt. Der Nachfolger muss folgende Unterlagen einreichen:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 font-bold block text-sm">Für Privatpersonen:</strong>
                <p className="text-xs text-slate-600">
                  • Ausgefüllte Selbstauskunft<br/>
                  • Personalausweis / Pass Kopie<br/>
                  • Die letzten 3 Gehaltsnachweise<br/>
                  • Einwandfreie Schufa-Auskunft
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-900 font-bold block text-sm">Für Gewerbekunden / Firmen:</strong>
                <p className="text-xs text-slate-600">
                  • Gewerbeanmeldung / Handelsregisterauszug<br/>
                  • BWA der letzten 2 Jahre / Jahresabschluss<br/>
                  • Ausweis des Vertretungsberechtigten<br/>
                  • Positives Creditreform-Rating
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AdSense Mid */}
        <AdSenseBanner slot="2000000002" className="bg-white" />

        {/* Step 3 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-amber-500 text-slate-950 font-extrabold text-lg rounded-xl flex items-center justify-center shadow">
              3
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Vertragsübernahmevertrag unterzeichnen
            </h2>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3 pl-0 sm:pl-13">
            <p>
              Sobald die Leasinggesellschaft die Bonitätsprüfung positiv abgeschlossen hat, stellt sie die <strong>Dreiecksvereinbarung (Übernahmevertrag)</strong> aus. Dieser Vertrag wird vom Alt-Leasingnehmer, dem Neu-Leasingnehmer und der Bank unterzeichnet.
            </p>
            <p>
              Mit Wirksamkeit des Übertragungsstichtags gehen alle Rechte und Pflichten aus dem Leasingvertrag (inklusive der Haftung für den Fahrzeugzustand bei Vertragsende) auf den neuen Leasingnehmer über.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-amber-500 text-slate-950 font-extrabold text-lg rounded-xl flex items-center justify-center shadow">
              4
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Fahrzeugübergabe &amp; Übergabeprotokoll
            </h2>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3 pl-0 sm:pl-13">
            <p>
              Am Tag der Übergabe treffen sich beide Parteien zur Fahrzeugübergabe. Es ist extrem wichtig, ein sorgfältiges <strong>Schriftliches Übergabeprotokoll</strong> anzufertigen:
            </p>
            <ul className="list-disc list-inside space-y-1.5 font-medium text-slate-800">
              <li>Genaue Dokumentation des exakten Kilometerstands am Stichtag.</li>
              <li>Auflistung aller bestehenden Gebrauchsspuren, Kratzer oder Dellen mit Fotos.</li>
              <li>Prüfung des Servicehefts (lückenlose Wartung beim Vertragshändler).</li>
              <li>Übergabe aller Fahrzeugschlüssel, Zulassungsbescheinigung Teil I (Fahrzeugschein) und Bordbuch.</li>
            </ul>
            <div className="pt-2">
              <Link to="/checkliste">
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Kostenloses Muster-Übergabeprotokoll öffnen</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}