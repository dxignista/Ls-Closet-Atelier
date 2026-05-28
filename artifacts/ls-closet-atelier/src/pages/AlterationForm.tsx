import React from "react";

export function AlterationForm() {
  React.useEffect(() => {
    const TALLY_URL = "https://tally.so/widgets/embed.js";
    if (typeof (window as any).Tally !== "undefined") {
      (window as any).Tally.loadEmbeds();
    } else if (!document.querySelector(`script[src="${TALLY_URL}"]`)) {
      const s = document.createElement("script");
      s.src = TALLY_URL;
      s.onload = () => (window as any).Tally?.loadEmbeds();
      s.onerror = () => (window as any).Tally?.loadEmbeds();
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-200">
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl italic tracking-wide text-stone-900 mb-4">Alteration Request Form</h1>
          <p className="text-stone-600 font-light">Please complete this form to request alterations.</p>
        </div>
        <iframe
          data-tally-src="https://tally.so/embed/vGKjol?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
          loading="lazy"
          width="100%"
          height="2498"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Alteration Request Form"
        />
      </div>
    </div>
  );
}
