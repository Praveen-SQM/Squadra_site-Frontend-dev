"use client";

import { useEffect } from "react";
import ClientsSection from "../_components/DigitalMarketingAndPr/components/ClientsSection";
import HeroSection from "../_components/DigitalMarketingAndPr/components/HeroSection";
import ServicesMarquee from "../_components/DigitalMarketingAndPr/components/ServicesMarquee";
import WhoWeAreSection from "../_components/DigitalMarketingAndPr/components/WhoWeAreSection";
import ServicesSection from "../_components/DigitalMarketingAndPr/components/ServicesSection";
import LeadershipSection from "../_components/DigitalMarketingAndPr/components/LeadershipSection";
import CaseStudies from "../_components/DigitalMarketingAndPr/components/CaseStudies";
import PerformanceSection from "../_components/DigitalMarketingAndPr/components/PerformanceSection";
import ContactSection from "../_components/DigitalMarketingAndPr/components/ContactSection";

export default function Home() {
  useEffect(() => {
    // Add GTM script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KWFLP99D');
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
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KWFLP99D"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <HeroSection />
      <ServicesMarquee />
      <WhoWeAreSection />
      <ServicesSection />
      <ClientsSection />
      <LeadershipSection />
      <CaseStudies />
      <PerformanceSection />
      <ContactSection />
      {/* <PeoplesWhoGetThingsDone /> */}
      {/* <CustomerJourneySection /> */}
      {/* <ContactUs /> */}
    </>
  );
}
