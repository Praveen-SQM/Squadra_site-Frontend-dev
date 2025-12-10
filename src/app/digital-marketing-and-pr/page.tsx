import ClientsSection from "../_components/DigitalMarketingAndPr/components/ClientsSection";
// import PeoplesWhoGetThingsDone from "./_components/_landingPageComponents/PeoplesWoGetsThingsDone";
// import CustomerJourneySection from "./_components/_landingPageComponents/CustomerJourneySection";
// import ContactUs from "./_components/_landingPageComponents/ContactUs";
import HeroSection from "../_components/DigitalMarketingAndPr/components/HeroSection";
import ServicesMarquee from "../_components/DigitalMarketingAndPr/components/ServicesMarquee";
import WhoWeAreSection from "../_components/DigitalMarketingAndPr/components/WhoWeAreSection";
import ServicesSection from "../_components/DigitalMarketingAndPr/components/ServicesSection";
import LeadershipSection from "../_components/DigitalMarketingAndPr/components/LeadershipSection";
import CaseStudies from "../_components/DigitalMarketingAndPr/components/CaseStudies";
import PerformanceSection from "../_components/DigitalMarketingAndPr/components/PerformanceSection";
import ContactSection from "../_components/DigitalMarketingAndPr/components/ContactSection";
export default function Home() {
  return (
    <>
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
