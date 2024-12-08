"use client"
import image from "../../../utilities/icons/contatc-us.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router=useRouter();
  return (
    <section className="w-full mx-auto px-4 py-8 lg:py-16 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="Person working on laptop"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              CONTACT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in touch with us!
            </h2>
          </div>
          <p className="text-gray-400">
            Feel free to reach out with any thoughts, questions, or suggestions. <br /> Whether it&lsquo;s a brief conversation or a deeper discussion, we&apos;re here to connect.
          </p>
          <Button onClick={()=>router.push("/contact-us")}   size={"lg"} variant="outline" className="bg-white px-12 py-6">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
