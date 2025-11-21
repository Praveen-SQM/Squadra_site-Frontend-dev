"use client";

import { useEffect } from "react";
import Hero from "../_components/SquadraVerseComponents/Hero";
import Capabilities from "../_components/SquadraVerseComponents/Capabilities";
import Industries from "../_components/SquadraVerseComponents/Industries";
import ContactForm from "../_components/SquadraVerseComponents/ContactForm";
import WhyUs from "../_components/SquadraVerseComponents/Whyus";
import Casestudies from "../_components/SquadraVerseComponents/Casestudies";
import Ecosystem from "../_components/SquadraVerseComponents/Ecosystem";
import VideoShowcase from "../_components/SquadraVerseComponents/Videoshowcase";
import FloatingActionButton from "../_components/SquadraVerseComponents/Floatingactionbutton";

export default function Page() {
  useEffect(() => {
    // Add GTM script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K7RW3ZDV');
    `;
    document.head.appendChild(script);

    // Cleanup function - runs when navigating away
    return () => {
      // Remove the inline script
      document.head.removeChild(script);

      // Remove GTM-related scripts
      const gtmScripts = document.querySelectorAll(
        'script[src*="googletagmanager.com"]'
      );
      gtmScripts.forEach((s) => s.remove());

      // Clear dataLayer
      if (window.dataLayer) {
        window.dataLayer = [];
      }
    };
  }, []);

  return (
    <main>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K7RW3ZDV"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Hero />
      <Capabilities />
      <Industries />
      <WhyUs />
      <Casestudies />
      <VideoShowcase />
      <Ecosystem />
      <ContactForm />
      <FloatingActionButton />
    </main>
  );
}
