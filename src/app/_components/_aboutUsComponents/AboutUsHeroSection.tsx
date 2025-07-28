import Image from "next/image";
import HeroImage from "@/utilities/images/AboutUs_hero.jpg"

 function AboutUsHeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <Image
        src={HeroImage}
        alt="Background"
        fill
        className="object-cover"
        priority // optional: loads image eagerly
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-8xl pt-60 md:pt-22 lg:pt-[24rem]"> {/* Added padding-top here */}
           <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-tight md:font-semibold lg:font-bold md:text-4xl lg:text-[clamp(2.5rem,2.5vw+1rem,3.75rem)] lg:leading-[clamp(3rem,3vw+1rem,4.5rem)] md:leading-snug">
      Expertise Meets Excellence.
</h1>

            <p className="mt-2 text-center text-lg text-gray-200 sm:text-xl md:text-xl lg:text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] lg:leading-[clamp(2.25rem,2vw+1rem,3rem)]">
             Our team united by passion and innovation </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHeroSection