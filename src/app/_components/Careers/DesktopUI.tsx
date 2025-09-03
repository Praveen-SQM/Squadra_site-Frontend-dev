/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import careerImage from "@/utilities/images/Careers_Hero.png";
import rightArrowIcon from "@/utilities/icons/right-arrow.svg";
import plusIcon from "@/utilities/icons/plus-icon.svg";
import minusIcon from "@/utilities/icons/minus-icon.svg";
import growthIcon from "@/utilities/icons/growth-icon.svg";
import remunerationIcon from "@/utilities/icons/remuneration-icon.svg";
import workplaceIcon from "@/utilities/icons/workplace-icon.svg";
import workEnvironmentIcon from "@/utilities/icons/work-environment-icon.svg";
import TalentIcon from "@/utilities/icons/talent-icon.svg";
import WorkBalanceIcon from "@/utilities/icons/work-balance.svg";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

function DesktopUi() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const openingsParam = searchParams.get("openings");
    if (openingsParam === "true") {
      document
        .getElementById("job-openings")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const employeeBenefits = [
    {
      icon: growthIcon,
      title: "01. Growth Opportunities",
      description:
        "At Squadra Media, we believe learning never stops. We're dedicated to fostering growth and helping employees achieve their best.",
    },
    {
      icon: remunerationIcon,
      title: "02. Competitive Remuneration",
      description:
        "We value our employee's contributions and ensure they're rewarded for their dedication and growth.",
    },
    {
      icon: workplaceIcon,
      title: "03. Eco-friendly Workplace",
      description:
        "Surrounded by nature, our workspace promotes mental well-being while reducing our carbon footprint.",
    },
    {
      icon: workEnvironmentIcon,
      title: "04. An Instagram-worthy Fun Work Environment",
      description:
        "Our beautifully designed office is a productivity booster and an Instagram-worthy spot every day.",
    },
    {
      icon: TalentIcon,
      title: "05.Talent Nurturing Community",
      description:
        "We help employees achieve career goals while encouraging them to explore hidden talents and make a difference.",
    },
    {
      icon: WorkBalanceIcon,
      title: "06. Work-Life Balance",
      description:
        "We promote a healthy balance between work and personal life to enhance happiness, well-being, and productivity.",
    },
  ];

  const dummyJobs = [
    {
      _id: "Storyboard",
      jobsCount: 3,
      jobs: Array.from({ length: 3 }, (_, i) => ({
        _id: `storyboard-${i}`,
        jobTitle: `Storyboard Artist ${i + 1}`,
        location: "Remote",
        employmentType: "Full-time",
        yearsOfExperience: "2",
      })),
    },
    {
      _id: "Illustration",
      jobsCount: 2,
      jobs: Array.from({ length: 2 }, (_, i) => ({
        _id: `illustration-${i}`,
        jobTitle: `Illustrator ${i + 1}`,
        location: "Bangalore",
        employmentType: "Contract",
        yearsOfExperience: "1",
      })),
    },
    {
      _id: "Animation",
      jobsCount: 3,
      jobs: Array.from({ length: 3 }, (_, i) => ({
        _id: `animation-${i}`,
        jobTitle: `Animator ${i + 1}`,
        location: "Mumbai",
        employmentType: "Full-time",
        yearsOfExperience: "3",
      })),
    },
    {
      _id: "Design",
      jobsCount: 1,
      jobs: [
        {
          _id: "design-0",
          jobTitle: "UI/UX Designer",
          location: "Remote",
          employmentType: "Freelance",
          yearsOfExperience: "4",
        },
      ],
    },
    {
      _id: "Writing",
      jobsCount: 2,
      jobs: [
        {
          _id: "writing-0",
          jobTitle: "Content Writer",
          location: "Remote",
          employmentType: "Part-time",
          yearsOfExperience: "2",
        },
        {
          _id: "writing-1",
          jobTitle: "Copywriter",
          location: "Delhi",
          employmentType: "Full-time",
          yearsOfExperience: "3",
        },
      ],
    },
  ];

  const categories = jobs?.data?.length ? jobs.data : dummyJobs;

  return (
    <div className="flex flex-col justify-center">
      {/* Hero Section - Enhanced Responsive */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={careerImage}
            alt="Career opportunities at Squadra Media"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-3/5 sm:h-3/5 lg:h-2/3 pointer-events-none bg-gradient-to-t from-black/90 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto mt-16 sm:mt-24 lg:mt-32">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="font-bold text-white text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight">
                Step into your future with us.
              </h1>
              <p className="font-normal text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-4">
                We aim to bring positivity to every step we take. If you share
                that vision, Squadra Media is the place for you
              </p>
            </div>

            <button
              onClick={() => router.push("/openings")}
              className="w-full max-w-sm h-14 sm:h-16 flex items-center justify-center gap-2 
                       bg-[#FBAE17] hover:bg-[#e09b14] transition-colors duration-200 
                       rounded-full border border-white/20 cursor-pointer"
              aria-label="View all job openings"
            >
              <span className="font-semibold text-black text-lg sm:text-xl">
                All openings
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
              >
                <path
                  d="M4 12.8789H20M20 12.8789L14 6.87891M20 12.8789L14 18.8789"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Current Openings - Optimized Responsive */}
      <section id="job-openings" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-center text-neutral-900">
              Current openings
            </h2>

            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="w-full h-12 rounded-lg" />
                ))}
              </div>
            ) : (
              <div className="space-y-px border border-gray-200 rounded-lg overflow-hidden">
                {categories.slice(0, 5)?.map((category, index) => (
                  <div key={index} className="bg-white">
                    <button
                      className={`w-full flex justify-between items-center p-4 sm:p-6 lg:p-8 text-left transition-colors duration-200 hover:bg-gray-50
                                ${openIndexes.includes(index) ? "bg-blue-50" : ""}`}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openIndexes.includes(index)}
                      aria-controls={`category-${index}`}
                    >
                      <span className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700">
                        {category._id} ({category.jobsCount})
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <Image
                          src={openIndexes.includes(index) ? minusIcon : plusIcon}
                          alt={openIndexes.includes(index) ? "Collapse" : "Expand"}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </div>
                    </button>

                    {openIndexes.includes(index) && (
                      <div id={`category-${index}`} className="border-t border-gray-200">
                        <div className="divide-y divide-gray-100">
                          {category.jobs.map((job) => (
                            <div
                              key={job._id}
                              onClick={() => router.push(`/job-details/${job._id}`)}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 
                                       p-4 sm:px-8 sm:py-6 cursor-pointer transition-colors duration-200 hover:bg-gray-50"
                            >
                              <div className="flex-grow min-w-0">
                                <h3 className="font-medium text-base sm:text-lg lg:text-xl text-gray-800 mb-2">
                                  {job.jobTitle}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-500">
                                  <span>{job.location}</span>
                                  <span className="hidden sm:inline">•</span>
                                  <span>{job.employmentType}</span>
                                  <span className="hidden sm:inline">•</span>
                                  <span>{job.yearsOfExperience}+ Years Experience</span>
                                </div>
                              </div>

                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push(`/job-apply/${job._id}`);
                                }}
                                className="group flex items-center gap-2 sm:gap-3 self-start sm:self-center"
                                role="button"
                                aria-label={`Apply for ${job.jobTitle}`}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200"
                                >
                                  <path
                                    d="M4 12.8789H20M20 12.8789L14 6.87891M20 12.8789L14 18.8789"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="text-sm sm:text-base text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                                  Apply
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-center sm:justify-end">
              <button
                onClick={() => router.push("/openings")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 
                         bg-neutral-900 hover:bg-neutral-800 text-white rounded-md 
                         transition-colors duration-200 min-w-48"
                aria-label="View all job openings"
              >
                <span className="font-medium">See all openings</span>
                <Image src={rightArrowIcon} alt="" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits - Enhanced Grid System */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-neutral-900 max-w-4xl mx-auto">
                We Priorities Our Employee&apos;s{" "}
                <span className="text-[#FBAE17]">Well-Being.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {employeeBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col items-center text-center space-y-6 sm:space-y-8
                            ${index % 2 === 0 ? "bg-white" : "bg-blue-50/30"}`}
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={benefit.icon}
                      alt=""
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-neutral-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Squadra - Improved Mobile Layout */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-neutral-900">
                Life at <span className="text-[#FBAE17]">Squadra Media</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                A space to unlock your true potential, chase your dreams, and embrace your passion all while enjoying every moment with fun and laughter!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* First Row */}
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
                <div className="flex gap-3 sm:gap-4 lg:flex-col">
                  <div className="flex-1 lg:flex-none">
                    <Image
                      src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/5555.webp"
                      alt="Team collaboration at Squadra Media"
                      width={420}
                      height={194}
                      className="w-full h-40 sm:h-48 lg:h-48 xl:h-52 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <Image
                      src="https://squadra-media.s3.ap-south-1.amazonaws.com/7.jpg"
                      alt="Creative workspace at Squadra Media"
                      width={420}
                      height={194}
                      className="w-full h-40 sm:h-48 lg:h-48 xl:h-52 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/444.webp"
                    alt="Office environment at Squadra Media"
                    width={760}
                    height={410}
                    className="w-full h-48 sm:h-64 lg:h-96 xl:h-[430px] object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
                <div className="flex-1 order-2 lg:order-1">
                  <Image
                    src="https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/2.1.webp"
                    alt="Team building activities"
                    width={760}
                    height={400}
                    className="w-full h-48 sm:h-64 lg:h-96 xl:h-[430px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex gap-3 sm:gap-4 lg:flex-col order-1 lg:order-2">
                  <div className="flex-1 lg:flex-none">
                    <Image
                      src="https://squadra-media.s3.ap-south-1.amazonaws.com/333.jpg"
                      alt="Innovation at work"
                      width={420}
                      height={194}
                      className="w-full h-40 sm:h-48 lg:h-48 xl:h-52 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <Image
                      src="https://squadra-media.s3.ap-south-1.amazonaws.com/5.jpg"
                      alt="Company culture"
                      width={420}
                      height={194}
                      className="w-full h-40 sm:h-48 lg:h-48 xl:h-52 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[440px] rounded-lg overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Careers_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 sm:p-8 lg:p-12 xl:p-16 text-white">
                  <h3 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4">
                    Together, We Shape the Future
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                    At Squadra Media, it&apos;s our people who turn ideas into reality.
                    We&apos;re constantly seeking passionate individuals who can take
                    us closer to our vision and make a lasting impact.
                    <br />
                    <br />
                    If you know someone at Squadra, reach out and let us know why
                    you&apos;re the perfect fit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesktopUi;
