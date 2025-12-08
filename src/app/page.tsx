import ClientsSection from "./_components/_landingPageComponents/ClientsSection";
// import PeoplesWhoGetThingsDone from "./_components/_landingPageComponents/PeoplesWoGetsThingsDone";
// import CustomerJourneySection from "./_components/_landingPageComponents/CustomerJourneySection";
// import ContactUs from "./_components/_landingPageComponents/ContactUs";
import HeroSection from "./_components/_landingPageComponents/HeroSection";
import ServicesMarquee from "./_components/_landingPageComponents/ServicesMarquee";
import WhoWeAreSection from "./_components/_landingPageComponents/WhoWeAreSection";
import ServicesSection from "./_components/_landingPageComponents/ServicesSection";
import LeadershipSection from "./_components/_landingPageComponents/LeadershipSection";
import CaseStudies from "./_components/_landingPageComponents/CaseStudies";
import PerformanceSection from "./_components/_landingPageComponents/PerformanceSection";
import ContactSection from "./_components/_landingPageComponents/ContactSection";
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
