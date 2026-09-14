import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Index from '@/pages/index';
import Info from '@/pages/Info';
import KostenGebuehren from '@/pages/KostenGebuehren';
import VorteileNachteile from '@/pages/VorteileNachteile';
import Checkliste from '@/pages/Checkliste';
import FAQ from '@/pages/FAQ';
import Marken from '@/pages/Marken';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';
import VercelAnalytics from '@/components/VercelAnalytics';

// Brand pages
import MarkeAudi from '@/pages/MarkeAudi';
import MarkeBMW from '@/pages/MarkeBMW';
import MarkeMercedes from '@/pages/MarkeMercedes';
import MarkeVolkswagen from '@/pages/MarkeVolkswagen';
import MarkeTesla from '@/pages/MarkeTesla';
import MarkeSkoda from '@/pages/MarkeSkoda';
import MarkeCupra from '@/pages/MarkeCupra';
import MarkeSeat from '@/pages/MarkeSeat';
import MarkeOpel from '@/pages/MarkeOpel';
import MarkeFord from '@/pages/MarkeFord';
import MarkeRenault from '@/pages/MarkeRenault';
import MarkePeugeot from '@/pages/MarkePeugeot';
import MarkeHyundai from '@/pages/MarkeHyundai';
import MarkeKia from '@/pages/MarkeKia';
import MarkeToyota from '@/pages/MarkeToyota';
import MarkeFiat from '@/pages/MarkeFiat';
import MarkeMini from '@/pages/MarkeMini';
import MarkeVolvo from '@/pages/MarkeVolvo';
import MarkeCitroen from '@/pages/MarkeCitroen';
import MarkeMazda from '@/pages/MarkeMazda';
import MarkeNissan from '@/pages/MarkeNissan';

// High Intent Model Guides & Transactional Ratgeber
import RechnerEmbed from '@/pages/RechnerEmbed';
import ModellGolf from '@/pages/ModellGolf';
import ModellBmw3er from '@/pages/ModellBmw3er';
import ModellTeslaModelY from '@/pages/ModellTeslaModelY';
import ModellAudiA4 from '@/pages/ModellAudiA4';
import RatgeberKuendigungVsUebernahme from '@/pages/RatgeberKuendigungVsUebernahme';
import RatgeberPrivatGewerbe from '@/pages/RatgeberPrivatGewerbe';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <VercelAnalytics />
      <Layout>
        <Routes>
          {/* Main Ratgeber Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/info" element={<Info />} />
          <Route path="/ablauf" element={<Info />} />
          <Route path="/kosten-gebuehren" element={<KostenGebuehren />} />
          <Route path="/kosten" element={<KostenGebuehren />} />
          <Route path="/vorteile-nachteile" element={<VorteileNachteile />} />
          <Route path="/checkliste" element={<Checkliste />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/marken" element={<Marken />} />
          
          {/* Rechner Embed (Clean Widget Route) */}
          <Route path="/rechner-embed" element={<RechnerEmbed />} />

          {/* High Intent Model Guides */}
          <Route path="/vw-golf-leasinguebernahme" element={<ModellGolf />} />
          <Route path="/golf-leasinguebernahme" element={<ModellGolf />} />

          <Route path="/bmw-3er-leasinguebernahme" element={<ModellBmw3er />} />
          <Route path="/3er-leasinguebernahme" element={<ModellBmw3er />} />

          <Route path="/tesla-model-y-leasinguebernahme" element={<ModellTeslaModelY />} />
          <Route path="/model-y-leasinguebernahme" element={<ModellTeslaModelY />} />

          <Route path="/audi-a4-leasinguebernahme" element={<ModellAudiA4 />} />
          <Route path="/a4-leasinguebernahme" element={<ModellAudiA4 />} />

          {/* Transactional Problem Solver Guides */}
          <Route path="/leasingvertrag-vorzeitig-kuendigen" element={<RatgeberKuendigungVsUebernahme />} />
          <Route path="/kuendigung-vs-uebernahme" element={<RatgeberKuendigungVsUebernahme />} />
          <Route path="/leasinguebernahme-privat-an-gewerbe" element={<RatgeberPrivatGewerbe />} />
          
          {/* Legal Pages */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="/zimpressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          <Route path="/zdatenschutz" element={<Datenschutz />} />

          {/* Brand Guides with aliases */}
          <Route path="/markeaudi" element={<MarkeAudi />} />
          <Route path="/marke-audi" element={<MarkeAudi />} />

          <Route path="/markebmw" element={<MarkeBMW />} />
          <Route path="/marke-bmw" element={<MarkeBMW />} />

          <Route path="/markemercedes" element={<MarkeMercedes />} />
          <Route path="/marke-mercedes" element={<MarkeMercedes />} />
          <Route path="/marke-mercedes-benz" element={<MarkeMercedes />} />

          <Route path="/markevolkswagen" element={<MarkeVolkswagen />} />
          <Route path="/marke-volkswagen" element={<MarkeVolkswagen />} />
          <Route path="/marke-vw" element={<MarkeVolkswagen />} />
          <Route path="/markevw" element={<MarkeVolkswagen />} />

          <Route path="/marketesla" element={<MarkeTesla />} />
          <Route path="/marke-tesla" element={<MarkeTesla />} />

          <Route path="/markeskoda" element={<MarkeSkoda />} />
          <Route path="/marke-skoda" element={<MarkeSkoda />} />

          <Route path="/markecupra" element={<MarkeCupra />} />
          <Route path="/marke-cupra" element={<MarkeCupra />} />

          <Route path="/markeseat" element={<MarkeSeat />} />
          <Route path="/marke-seat" element={<MarkeSeat />} />

          <Route path="/markeopel" element={<MarkeOpel />} />
          <Route path="/marke-opel" element={<MarkeOpel />} />

          <Route path="/markeford" element={<MarkeFord />} />
          <Route path="/marke-ford" element={<MarkeFord />} />

          <Route path="/markerenault" element={<MarkeRenault />} />
          <Route path="/marke-renault" element={<MarkeRenault />} />

          <Route path="/markepeugeot" element={<MarkePeugeot />} />
          <Route path="/marke-peugeot" element={<MarkePeugeot />} />

          <Route path="/markehyundai" element={<MarkeHyundai />} />
          <Route path="/marke-hyundai" element={<MarkeHyundai />} />

          <Route path="/markekia" element={<MarkeKia />} />
          <Route path="/marke-kia" element={<MarkeKia />} />

          <Route path="/marketoyota" element={<MarkeToyota />} />
          <Route path="/marke-toyota" element={<MarkeToyota />} />

          <Route path="/markefiat" element={<MarkeFiat />} />
          <Route path="/marke-fiat" element={<MarkeFiat />} />

          <Route path="/markemini" element={<MarkeMini />} />
          <Route path="/marke-mini" element={<MarkeMini />} />

          <Route path="/markevolvo" element={<MarkeVolvo />} />
          <Route path="/marke-volvo" element={<MarkeVolvo />} />

          <Route path="/markecitroen" element={<MarkeCitroen />} />
          <Route path="/marke-citroen" element={<MarkeCitroen />} />

          <Route path="/markemazda" element={<MarkeMazda />} />
          <Route path="/marke-mazda" element={<MarkeMazda />} />

          <Route path="/markenissan" element={<MarkeNissan />} />
          <Route path="/marke-nissan" element={<MarkeNissan />} />

          {/* Fallback & Legacy Redirects to Home */}
          <Route path="/fahrzeugliste" element={<Navigate to="/" replace />} />
          <Route path="/inserat" element={<Navigate to="/" replace />} />
          <Route path="/admindashboard" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;