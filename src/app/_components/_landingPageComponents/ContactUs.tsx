"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const router = useRouter();
  
  return (
    <section className="w-full mx-auto px-4 py-16 lg:py-24 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        
        {/* Image Section */}
        <div className="relative group">
          <div className="bg-white p-2 rounded-3xl transition-all duration-300">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={"https://squadra-media.s3.ap-south-1.amazonaws.com/tinified+(1)/contact.webp"}
                alt="Person working on laptop"
                width={500}
                height={500}
                className="object-cover rounded-xl w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              CONTACT US
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Get in touch 
              <span className="block">with us!</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Feel free to reach out with any thoughts, questions, or suggestions. 
            Whether it&apos;s a brief conversation or a deeper discussion, 
            we&apos;re here to connect.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={() => router.push("/contact-us")}   
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
