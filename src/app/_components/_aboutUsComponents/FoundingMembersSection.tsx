import React from "react";
import Image, { StaticImageData } from "next/image";
import AnuImage from "@/utilities/images/Anu JS-about.jpg";
import SandeshImage from "@/utilities/images/sandesh.jpg";
import TarushImage from "@/utilities/images/Tarush Chandnani-about.jpg";

interface Member {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  isFounder: boolean;
}

const foundingMembers: Member[] = [
  {
    id: 1,
    name: "Tarush",
    role: "Co-Founder",
    image: TarushImage,
    isFounder: false,
  },
  {
    id: 2,
    name: "Anu Js",
    role: "Founder",
    image: AnuImage,
    isFounder: true,
  },
  {
    id: 3,
    name: "Sandesh",
    role: "Co-Founder",
    image: SandeshImage,
    isFounder: false,
  },
];

const MemberCard = ({ member, className = "", imageHeight = "h-92" }: { member: Member; className?: string; imageHeight?: string }) => {
  const { name, role, image, isFounder } = member;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${className}`}
    >
      {/* Image Container with dynamic height */}
      <div className={`relative overflow-hidden ${imageHeight}`}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority={isFounder}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div
        className={`p-6 py-3 border-b-4 border-amber-400 ${
          isFounder ? "bg-slate-900" : "bg-white"
        } transition-all duration-300`}
      >
        <div className="text-center space-y-1">
          <h3
            className={`text-xl lg:text-2xl font-bold ${
              isFounder ? "text-white" : "text-gray-900"
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-sm lg:text-base font-medium ${
              isFounder ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {role}
          </p>
        </div>

      </div>
    </div>
  );
};

const FoundingMembersSection = () => {
  return (
    <section className="py-16 bg-[#F5F6F8]">
      <div className="container mx-auto px-4">

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-end justify-center gap-8 lg:gap-12">
          {/* Side Members - smaller height */}
          <MemberCard
            member={foundingMembers[0]}
            className="w-72 lg:w-80"
            imageHeight="h-64 sm:h-80"
          />

          {/* Center Founder - taller height */}
          <MemberCard
            member={foundingMembers[1]}
            className="w-80 lg:w-96 shadow-xl z-10"
            imageHeight="h-80 sm:h-96 lg:h-92"
          />

          {/* Side Members - smaller height */}
          <MemberCard
            member={foundingMembers[2]}
            className="w-72 lg:w-80"
            imageHeight="h-64 sm:h-80"
          />
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden space-y-8">
          {foundingMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <MemberCard
                member={member}
                className="w-80 max-w-sm mx-auto"
                imageHeight={member.isFounder ? "h-96" : "h-80"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingMembersSection;
