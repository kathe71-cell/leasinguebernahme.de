import React, { useEffect } from 'react';

export default function KfzRechner() {
  useEffect(() => {
    // Ensure the script is only injected on the client side
    if (typeof window !== 'undefined') {
      const scriptId = 'tcpp-kfz-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-kfz/kfz-iframe.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="w-full space-y-3">
      {/* Container for the Tarifcheck script */}
      <div style={{ width: '100%', minHeight: '600px' }} id="tcpp-iframe-kfz"></div>
      
      {/* Required Affiliate Disclosure (UWG) */}
      <p className="text-[10px] text-slate-400 text-center">
        * Werbelink / Partnerlink: Ein Angebot der TARIFCHECK24 GmbH, Zollstr. 11b, 21465 Wentorf.
      </p>
    </div>
  );
}
