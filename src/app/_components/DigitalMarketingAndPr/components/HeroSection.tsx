'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://squadra-media.s3.ap-south-1.amazonaws.com/video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--squadra-dark))]/80 via-[hsl(var(--squadra-dark))]/70 to-[hsl(var(--squadra-dark))]" />
      </div>

      <div className="container relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--squadra-gold))]" />
            <span className="text-sm font-medium text-white">Digital Growth Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1] mb-6 text-white">
            360° Digital Marketing.
            <br />
            <span className="text-gradient">Performance. Growth.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-8 leading-relaxed">
            We&apos;re not a typical vendor.
            <br />
            We&apos;re a digital growth company blending
            <span className="text-white font-medium"> creativity, data, and intelligence</span> to deliver 
            performance brands can measure.
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-7 rounded-full btn-primary shadow-lg group"
          >
            Start Your Growth Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats Cards - Overlapping Video */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "150+", label: "Campaigns Delivered" },
            { value: "150+", label: "Team of Experts" },
            { value: "50K+", label: "Content Minutes" },
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
            >
              <p className="text-3xl lg:text-4xl font-display font-bold text-[hsl(var(--squadra-gold))] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;