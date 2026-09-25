import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Mail, MapPin, Phone, ShieldCheck, Scale, AlertCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Impressum | Leasingübernahme.de"
        description="Rechtliche Angaben und Impressum gemäß § 5 DDG sowie § 18 MStV für das unabhängige Informationsportal Leasingübernahme.de."
        canonicalPath="/impressum"
      />
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Impressum
          </h1>
          <p className="mt-2 text-slate-600 text-base">
            Anbieterkennzeichnung gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 18 MStV (Medienstaatsvertrag)
          </p>
        </div>

        {/* Anbieterkennzeichnung */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-amber-600" />
              Angaben gemäß § 5 DDG
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-slate-700">
            <div className="font-semibold text-lg text-slate-900">
              Jens Kathe
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
              <div>
                <p>Hansastraße 6</p>
                <p>34119 Kassel</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:jens@kathe.org" className="text-amber-700 hover:text-amber-800 font-semibold underline">
                  jens@kathe.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+491786652623" className="text-amber-700 hover:text-amber-800 font-semibold">
                  +49 178 6652623
                </a>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Verantwortlich nach MStV */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-slate-700 space-y-1">
            <p className="font-semibold text-slate-900">Jens Kathe</p>
            <p>Hansastraße 6</p>
            <p>34119 Kassel</p>
            <p>Deutschland</p>
          </CardContent>
        </Card>

        {/* Streitbeilegung */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              Verbraucherstreitbeilegung & Universalschlichtungsstelle
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-slate-700">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-700 hover:text-amber-800 underline font-semibold break-all"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Haftungsausschluss (Disclaimer) & Transparenzhinweis
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 text-slate-700 text-sm leading-relaxed">
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Unabhängiges Informationsportal</h3>
              <p>
                leasingübernahme.de ist ein unabhängiges Informations- und Vergleichsportal. Wir stehen in keinem gesellschaftsrechtlichen Verhältnis zu den auf dieser Seite genannten Automobilherstellern, Autohäusern oder Leasinggesellschaften. Alle geschützten Markennamen und Logos sind Eigentum der jeweiligen Rechteinhaber und dienen auf dieser Website ausschließlich der sachlichen Information.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Haftung für Links & Affiliate-Hinweise</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter (* Partnerlink / Werbelink), auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}