// import React from 'react'
// import ELearning from '../../app/_components/AnimationandElearningComponents/Index'

// const page = () => {
//   return (
//     <ELearning/>
//   )
// }

// export default page





import Hero from "../_components/SquadraVerseComponents/Hero";
import Capabilities from "../_components/SquadraVerseComponents/Capabilities";
import Industries from "../_components/SquadraVerseComponents/Industries";
import ContactForm from "../_components/SquadraVerseComponents/ContactForm";
import WhyUs from "../_components/SquadraVerseComponents/Whyus";
import Casestudies from "../_components/SquadraVerseComponents/Casestudies";
import Ecosystem from "../_components/SquadraVerseComponents/Ecosystem";
import VideoShowcase from "../_components/SquadraVerseComponents/Videoshowcase";
import FloatingActionButton from "../_components/SquadraVerseComponents/Floatingactionbutton";

export default function page() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero/>
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
