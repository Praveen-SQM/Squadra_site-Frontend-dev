"use client";

import {
  TrendingUp,
  Users,
  Eye,
  Smartphone,
  Globe,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const caseStudies = [
  {
    title:
      "IBM Dubai — Driving Hyper-Niche Cybersecurity Demand Through Precision Lead Gen",
    subtitle:
      "125x ROI on ad spend. $500K in product revenue from a $4K budget.",
    image: "/images/casestudies/ibm-dubai.jpg",
    industry: "Technology / B2B",
    challenge:
      "In 2023, IBM Dubai was launching a new Cybersecurity product. The audience was extremely niche: Cybersecurity heads in the UAE only. They needed to fill a high-intent webinar with the right decision-makers, do it on a tight budget of $4,000 for one month, and convert interest into real pipeline for a premium, enterprise product.",
    solution:
      "We built a lead-gen engine designed for precision over volume. Every layer—from targeting to creative to follow-ups—was optimized to attract UAE-based cybersecurity leaders and push them toward webinar registration.",
    whatWeDid: [
      "Lead generation campaigns focused on UAE-only cybersecurity leadership roles",
      "High-intent funnel setup for webinar sign-ups (message match → landing flow → conversion optimization)",
      "Conversion-led creative tailored to enterprise security pain points and the product's launch value",
      "Campaign optimization throughout the month to reduce cost per signup and improve attendee quality",
    ],
    results: [
      { icon: TrendingUp, value: "125x", label: "ROI on Ad Spend" },
      { icon: Users, value: "30", label: "Qualified Attendees" },
      { icon: Target, value: "$500K", label: "Revenue Generated" },
    ],
    insight:
      "Laser-focused targeting beat broad reach. We prioritized decision-makers, not vanity traffic. Enterprise-specific messaging spoke directly to cybersecurity heads' real concerns in the UAE market. A funnel built for intent, not clicks—every step reduced friction and qualified leads before they hit the webinar.",
    cta: "IBM's Dubai launch proved that even with a small budget, hyper-niche B2B campaigns can drive massive outcomes when the strategy is engineered for precision.",
  },
  {
    title: "Seaverse (LMS App) — From Training Provider to Digital Powerhouse",
    subtitle: "Built, branded, marketed, and scaled end-to-end by Squadra.",
    image: "/images/casestudies/seaverse.png",
    industry: "Maritime / E-Learning",
    challenge:
      "When Seaverse set out to modernize maritime training, they needed more than just content. They needed a complete digital ecosystem.",
    solution: "Squadra became their one-stop growth partner.",
    whatWeDid: [
      "1200+ minutes of cinematic 2D/3D e-learning modules created for global fleets",
      "Custom offline-first LMS designed for ships, with SCORM, multilingual support, role systems, and analytics",
      "Unified brand voice across web, social, and product",
      "End-to-end digital marketing that positioned Seaverse as a category leader",
    ],
    results: [
      { icon: TrendingUp, value: "10x", label: "Digital Presence Growth" },
      { icon: Globe, value: "Global", label: "Fleet Adoption" },
      { icon: Smartphone, value: "Full", label: "Ecosystem Delivered" },
    ],
    insight:
      "Training, technology, content, and marketing were all built under one roof. No fragmentation. No delays. Just one aligned growth system.",
    cta: "",
  },
  {
    title: "OIA — Making Asia's Largest Pub Go Viral",
    subtitle: "26,000 followers in 60 days. Full bookings even on weekdays.",
    image: "/images/casestudies/oia.jpg",
    industry: "F&B / Hospitality",
    challenge:
      "When Oia launched in Bangalore, the challenge was massive—87,000 sq. ft., premium pricing, surrounded by top pubs, and zero digital presence.",
    solution:
      "Squadra rebuilt their entire social identity from scratch with a content + cinematic + performance system designed for fast visibility.",
    whatWeDid: [
      "Developed a fresh visual identity that matched Oia's ambience",
      "Shot cinematic reels and photos across property zones",
      "Built high-recall content buckets for daily engagement",
      "Ran targeted influencer integrations",
      "Created performance funnels for enquiries & reservations",
    ],
    results: [
      { icon: Users, value: "26K", label: "Followers in 2 months" },
      { icon: TrendingUp, value: "10x", label: "Reach & Engagement" },
      { icon: Eye, value: "1M+", label: "Organic Reel Views" },
    ],
    insight:
      'Because we didn\'t "post content." We built a brand experience, optimized for F&B virality and conversion.',
    cta: "If you want your restaurant, pub, or cafe to scale the same way, Squadra Media is the growth partner.",
  },
  {
    title: "Prime Golf — Turning a Sports Facility into a Lifestyle Brand",
    subtitle: "5x ROI on ad campaigns. 200% increase in membership sign-ups.",
    image: "/images/casestudies/prime-golf.jpg",
    industry: "Sports & Lifestyle",
    challenge:
      "Prime Golf needed to transform from a sports facility into a premium lifestyle brand that resonates with their target audience.",
    solution:
      "We partnered with Prime Golf to craft a social media experience that matched their premium positioning.",
    whatWeDid: [
      "Cinematic video campaigns showcasing the premium experience",
      "Influencer collaborations with lifestyle personalities",
      "Paid funnels optimized for membership conversions",
      "Conversion-led content strategy",
    ],
    results: [
      { icon: TrendingUp, value: "5x", label: "ROI on Ad Campaigns" },
      { icon: Eye, value: "1M+", label: "Organic Views" },
      { icon: Users, value: "200%", label: "Membership Growth" },
    ],
    insight:
      "Prime Golf became the blueprint for how regional businesses can scale digitally with Squadra's ecosystem.",
    cta: "",
  }
];

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="case-studies"
      className="py-20 lg:py-28 relative overflow-hidden bg-[hsl(var(--squadra-gray))]"
    >
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
            Proof of Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
            Case Studies That{" "}
            <span className="text-gradient">Define Growth</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {caseStudies.map((study, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <div className="card-clean overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover object-top"
                          fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--squadra-dark))]/60 to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[hsl(var(--squadra-gold))] text-[hsl(var(--squadra-dark))] text-xs font-semibold">
                          {study.industry}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-8">
                        <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 text-[hsl(var(--squadra-dark))]">
                          {study.title}
                        </h3>
                        <p className="text-[hsl(var(--squadra-gold))] font-semibold mb-4 text-sm lg:text-base">
                          {study.subtitle}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div>
                            <p className="text-xs font-semibold text-[hsl(var(--squadra-dark))] uppercase tracking-wider mb-1">
                              The Challenge
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {study.challenge}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[hsl(var(--squadra-dark))] uppercase tracking-wider mb-1">
                              Our Approach
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {study.solution}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[hsl(var(--squadra-dark))] uppercase tracking-wider mb-2">
                              What We Did
                            </p>
                            <ul className="space-y-1">
                              {study.whatWeDid.slice(0, 3).map((item, j) => (
                                <li
                                  key={j}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--squadra-gold))] mt-1.5 flex-shrink-0" />
                                  <span className="line-clamp-1">{item}</span>
                                </li>
                              ))}
                              {study.whatWeDid.length > 3 && (
                                <li className="text-xs text-muted-foreground italic pl-3.5">
                                  +{study.whatWeDid.length - 3} more initiatives
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border mb-4">
                          {study.results.map((result, j) => (
                            <div key={j} className="text-center">
                              <result.icon className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(var(--squadra-gold))] mx-auto mb-1" />
                              <p className="text-lg lg:text-xl font-display font-bold text-[hsl(var(--squadra-gold))]">
                                {result.value}
                              </p>
                              <p className="text-[9px] lg:text-[10px] text-muted-foreground uppercase">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Insight */}
                        <div className="bg-[hsl(var(--squadra-gray))] rounded-xl p-3 lg:p-4">
                          <p className="text-xs font-semibold text-[hsl(var(--squadra-gold))] uppercase tracking-wider mb-1">
                            Why It Worked
                          </p>
                          <p className="text-xs lg:text-sm text-[hsl(var(--squadra-dark))] italic line-clamp-3">
                            {study.insight}
                          </p>
                        </div>

                        {study.cta && (
                          <p className="text-xs lg:text-sm text-muted-foreground mt-4 font-medium line-clamp-2">
                            {study.cta}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[hsl(var(--squadra-gold))] hover:text-[hsl(var(--squadra-dark))] transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[hsl(var(--squadra-gold))] hover:text-[hsl(var(--squadra-dark))] transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[hsl(var(--squadra-gold))]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[hsl(var(--squadra-gold))] transition-all duration-300 ease-linear"
                style={{
                  width: `${((currentSlide + 1) / caseStudies.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
