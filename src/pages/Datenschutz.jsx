import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Eye, Mail, Lock } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead 
        title="Datenschutzerklärung | Leasingübernahme.de"
        description="Datenschutzerklärung nach Art. 13 & 14 DSGVO für Leasingübernahme.de: Transparenz bei Datenverarbeitung, Vercel-Hosting & Zero-CDN Typografie."
        canonicalPath="/datenschutz"
      />
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="mt-2 text-slate-600 text-base">
            Informationen zur Datenverarbeitung nach Art. 13 & 14 DSGVO
          </p>
        </div>

        {/* 1. Übersicht */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-600" />
              1. Datenschutz auf einen Blick & Verantwortlicher
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-medium text-slate-900 space-y-1">
              <p className="font-bold text-base">Jens Kathe</p>
              <p>Vollständige Anschrift und Kontaktdaten siehe <a href="/Impressum" className="text-amber-700 underline font-semibold">Impressum</a>.</p>
              <p>E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-700 underline font-semibold">jens@kathe.org</a></p>
            </div>
          </CardContent>
        </Card>

        {/* 2. Zero-CDN & Privacy */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-600" />
              2. Zero-CDN Policy & System Schriften
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              <strong>100% DSGVO-konforme Typografie:</strong> Auf unserer Website werden KEINE Schriften von externen Servern (wie Google Fonts oder Adobe Fonts) geladen. Es kommt ausschließlich der native System-Schriftarten-Stack Ihres Endgeräts zum Einsatz. Dadurch wird beim Aufruf der Seite Ihre IP-Adresse nicht an Drittanbieter oder Server in Drittstaaten übertragen.
            </p>
          </CardContent>
        </Card>

        {/* 3. Hosting */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-600" />
              3. Webhosting über Vercel
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              Unsere Website wird bei Vercel Inc. (340 S Lemon Ave #4133 Walnut, CA 91789, USA) gehostet. Bei dem Aufruf von Seiten erfasst Vercel automatisiert Server-Log-Dateien (u. a. IP-Adresse, Browsertyp, Referrer URL, Zeitstempel), um den Betrieb und die Sicherheit der Infrastruktur zu gewährleisten. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </CardContent>
        </Card>

        {/* 4. Einbindung von Affiliate-Rechnern (Tarifcheck) */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-600" />
              4. Einbindung von Kfz-Versicherungsrechnern
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>
              Auf dieser Website ist ein Tarifrechner für Kfz-Versicherungen der TARIFCHECK24 GmbH (Zollstr. 11b, 21465 Wentorf bei Hamburg) eingebunden. Bei der Nutzung des Rechners wird eine direkte Verbindung zu den Servern von Tarifcheck aufgebaut, wobei Ihre IP-Adresse und ggf. Browsereinstellungen übertragen werden. Tarifcheck setzt Cookies ein, um die Affiliate-Zuordnung und die Funktionalität des Rechners zu gewährleisten.
            </p>
            <p>
              Die Datenverarbeitung erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) an der Bereitstellung attraktiver Vergleichsangebote zur Refinanzierung dieses redaktionellen Angebots.
            </p>
          </CardContent>
        </Card>

        {/* 5. Ihre Rechte */}
        <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-600" />
              5. Ihre Betroffenenrechte (Art. 15–21 DSGVO)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium text-slate-800">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="pt-2">
              Zur Ausübung wenden Sie sich jederzeit per E-Mail an: <a href="mailto:jens@kathe.org" className="text-amber-700 font-semibold underline">jens@kathe.org</a>.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}