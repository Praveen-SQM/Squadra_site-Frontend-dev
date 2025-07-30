'use client';
import Image, { ImageProps } from "next/image";
import { useState } from "react";

// Import all images
import expressjsImage from "@/utilities/images/express-image (2).svg";
import pythonImage from "@/utilities/images/pythonframe.png";
import graphqlImage from "@/utilities/images/graphql-image (2).svg";
import mongodbImage from "@/utilities/images/mongodb-image (2).svg";
import mysqlImage from "@/utilities/images/mysql-image (2).svg";
import javaImage from "@/utilities/images/java-image.svg";
import springImage from "@/utilities/images/spring-image.svg";
import nestImage from "@/utilities/images/nest-image.svg";
import goImage from "@/utilities/images/go-image.svg";
import phpImage from "@/utilities/images/php-image.svg";
import oracleImage from "@/utilities/images/oracle-image.svg";
import redisImage from "@/utilities/images/redis-image.svg";
import reactImage from "@/utilities/images/react-image.svg";
import angularImage from "@/utilities/images/angular-image.svg";
import vueImage from "@/utilities/images/vuejs-image.svg";
import nextjsImage from "@/utilities/images/nextjs-image.svg";
import javascriptImage from "@/utilities/images/javascript-image.svg";
import typescriptImage from "@/utilities/images/Typescript-image.svg";
import tailwindImage from "@/utilities/images/tailwind-image.svg";
import svelteImage from "@/utilities/images/svelte-image.svg";
import nuxtImage from "@/utilities/images/nuxt-image.svg";
import solidjsImage from "@/utilities/images/solid-image.svg";
import gatsbyImage from "@/utilities/images/gatsby-image.svg";
import remixjsImage from "@/utilities/images/remixjs-image.svg";
import androidImage from "@/utilities/images/android-image.svg";
import iosImage from "@/utilities/images/ios-image.svg";
import flutterImage from "@/utilities/images/flutter-image.svg";
import reactNativeImage from "@/utilities/images/react-native-image.svg";
import awsImage from "@/utilities/images/aws-image.svg";
import azureImage from "@/utilities/images/azure-image.svg";
import gcpImage from "@/utilities/images/gcp-image.svg";
import dockerImage from "@/utilities/images/docker-image.svg";
import kubernetesImage from "@/utilities/images/kubernetes-image.svg";
import terraformImage from "@/utilities/images/terraform-image.svg";
import firebaseImage from "@/utilities/images/firebase-image.svg";
import serverlessImage from "@/utilities/images/serverless-image.svg";
import apacheImage from "@/utilities/images/apache-image.svg";
import vmImage from "@/utilities/images/vm-image.svg";
import jenkinsImage from "@/utilities/images/jenkins-image.svg";
import ga4Image from "@/utilities/images/ga4-image.svg";
import gtmImage from "@/utilities/images/gtm-image.svg";
import nodeImage from '@/utilities/images/node-image.svg';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Backend");
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const itemsPerSlide = 4;

  const tabs = ["Backend", "Frontend", "Mobile", "DevOps", "Analytics & Engagement"];

  const backendTools = [
    { name: "Node.js", logo: nodeImage },
    { name: "Express.js", logo: expressjsImage },
    { name: "Python", logo: pythonImage },
    { name: "GraphQL", logo: graphqlImage },
    { name: "MongoDB", logo: mongodbImage },
    { name: "MySQL", logo: mysqlImage },
    { name: "Java", logo: javaImage },
    { name: "Spring Boot", logo: springImage },
    { name: "Nestjs", logo: nestImage },
    { name: "GO", logo: goImage },
    { name: "PHP", logo: phpImage },
    { name: "Oracle", logo: oracleImage },
    { name: "Redis", logo: redisImage },
  ];

  const frontendTools = [
    { name: "React", logo: reactImage },
    { name: "Angular", logo: angularImage },
    { name: "Vue JS", logo: vueImage },
    { name: "Next js", logo: nextjsImage },
    { name: "Javascript", logo: javascriptImage },
    { name: "Tailwind", logo: tailwindImage },
    { name: "Typescript", logo: typescriptImage },
    { name: "Svelte", logo: svelteImage },
    { name: "Nuxt", logo: nuxtImage },
    { name: "Solidjs", logo: solidjsImage },
    { name: "Gatsby", logo: gatsbyImage },
    { name: "Remixjs", logo: remixjsImage },
  ];

  const mobileTools = [
    { name: "Android", logo: androidImage },
    { name: "IOS", logo: iosImage },
    { name: "Flutter", logo: flutterImage },
    { name: "React Native", logo: reactNativeImage },
  ];

  const devopsTools = [
    { name: "AWS", logo: awsImage },
    { name: "Azure", logo: azureImage },
    { name: "GCP", logo: gcpImage },
    { name: "Docker", logo: dockerImage },
    { name: "kubernetes", logo: kubernetesImage },
    { name: "Terraform", logo: terraformImage },
    { name: "Firebase", logo: firebaseImage },
    { name: "Serverless", logo: serverlessImage },
    { name: "Apache Kafka", logo: apacheImage },
    { name: "VMWare", logo: vmImage },
    { name: "Jenkins", logo: jenkinsImage },
  ];

  const analyticsTools = [
    { name: "GA 4", logo: ga4Image },
    { name: "GTM", logo: gtmImage },
  ];

  const toolsMap: { [key: string]: { name: string; logo: ImageProps["src"] }[] } = {
    Backend: backendTools,
    Frontend: frontendTools,
    Mobile: mobileTools,
    DevOps: devopsTools,
    "Analytics & Engagement": analyticsTools,
  };

  const tools = toolsMap[activeTab] || [];
  const totalSlides = Math.ceil(tools.length / itemsPerSlide);
  const currentSlideItems = tools.slice(
    slideIndex * itemsPerSlide,
    (slideIndex + 1) * itemsPerSlide
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    const minSwipe = 50;

    if (distance > minSwipe && slideIndex < totalSlides - 1) {
      setSlideIndex((prev) => prev + 1);
    } else if (distance < -minSwipe && slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#FAFAFA]">
      {/* Tabs */}
      <div className="flex w-[713px] space-x-8 border-b border-[#F3EBDC] mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-[18px] leading-[21.48px] py-[30px] px-4 ${
              activeTab === tab
                ? "border-b-2 border-[#FBAE17] text-[#06135B] font-semibold"
                : "text-[#A1A1A1]"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setSlideIndex(0);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards with Swipe */}
      <div className="w-[713px] overflow-hidden">
        <div
          className="flex justify-center gap-[30px] flex-wrap transition-transform duration-500 ease-in-out mt-[50px] mb-[50px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentSlideItems.map((tool) => (
            <div
              key={tool.name}
              className="w-[150px] h-[150px] bg-white border border-[#E8E8E8] flex flex-col items-center justify-center gap-[8px] rounded-lg"
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 mb-[50px]">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === slideIndex ? "bg-[#1F2B6C]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => setSlideIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
