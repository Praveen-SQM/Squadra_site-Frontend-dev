// eslint-disable-next-line @typescript-eslint/ban-ts-comment
"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import contactImage from '@/utilities/images/CONTACT.png'
import Image from "next/image";

export default function ContactUsForm() {
  const [activeTab, setActiveTab] = useState("quote");
  const [loading, setLoading] = useState(false);

const {
  register,
  handleSubmit,
  reset,
  watch, // 👈 Add this line
  formState: { errors },
} = useForm<FormData>({
  mode: "onChange",
});

  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    services: string;
    subject: string;
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    let serviceCcEmail = "";
    switch (data.services) {
      case "IT":
        serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_1 || "";
        break;
      case "digital-marketing":
        serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_2 || "";
        break;
      case "branding-creative":
        serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_3 || "";
        break;
      case "E-Learning":
        serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_4 || "";
        break;
      default:
        serviceCcEmail = "";
        break;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [
            ...(serviceCcEmail ? [serviceCcEmail] : []),
            process.env.NEXT_PUBLIC_EMAIL_CC_2,
            process.env.NEXT_PUBLIC_EMAIL_CC_3,
          ],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject:
              activeTab === "inquiry" ? `GENERAL INQUIRY` : `QUOTE ENQUIRY`,
            text: "YOUR TEXT",
            html: `
              <html>
                <head></head>
                <body>
                  <p>Hello Team</p>
                  <p><b>Full Name:</b> ${data.firstName}  ${data.lastName}</p>
                  <p><b>Email:</b> ${data.email}</p>
                  <p><b>Phone number:</b> ${data.phone}</p>
                  ${
                    activeTab === "inquiry"
                      ? `<p><b>Subject:</b> ${data.subject}</p>`
                      : ""
                  }
                  <p><b>Message:</b> ${data.message}</p>
                  <br>
                  <p>Thank you & Regards,<br><b>Team</b></p>
                </body>
              </html>`,
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message, { duration: 3000 });
        await axios.post("/api/zoho", {
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: data?.email,
          phoneNumber: data?.phone,
          message: data?.message,
          leadSource: "Squadra Website",
          service: data.services || "",
        });
        reset();
      } else {
        toast.error(result.message || "Failed to send email", {
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred while sending the email");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div
      id="contact-section"
      className="relative w-full h-[900px] bg-[#06135B] flex pt-[60px] gap-8 pl-[120px] pr-[124px] justify-between overflow-hidden"
    >
      {/* Background Image Block */}
      <div className="absolute left-[%] top-[39%] -translate-y-1/2 opacity-60 text-[#2828A0] w-[784.65px] h-[151.96px] z-0" >
      <Image
  src={contactImage}
  alt="Background Strip"
  width={784}
  height={152}
  className="absolute left-0 top-1/2 -translate-y-1/2 opacity-60 z-0"
/></div>

      {/* Left Section */}
      <div className="flex flex-col z-10">
        <div className="flex flex-col gap-[12px]">
          <p className="font-bold text-[20px] leading-[23.87px] text-[#FFFFFF]">
            Contact Us.
          </p>
          <div className="w-[30px] h-[4px] bg-[#FFFFFF]"></div>
        </div>
        <div className="flex flex-col gap-[24px] mt-[281.32px]">
          <h2 className="text-[56px] leading-[70px] text-[#FFFFFF] font-[700]">
            Let’s talk about your{" "}
            <span className="text-[#FBAE17]">project</span>.
          </h2>
          <p className="text-[#FFFFFF] font-normal text-[16px] leading-[32px] w-[443px]">
            Please feel free to share your thoughts and we can discuss it over a
            cup of tea.
          </p>
        </div>
      </div>

      {/* Right Section */}
    <div className="w-full lg:max-w-[677px] h-[715px] bg-white mt-[12px] py-[63px] px-[32px] rounded-[12px] z-10 mx-auto">
  <div className="mb-10">
    <div className="flex space-x-8">
      <button
        className={`py-2 text-lg border-b-2 ${
          activeTab === "quote"
            ? "border-b-yellow-500"
            : "border-b-transparent"
        }`}
        onClick={() => handleTabClick("quote")}
      >
        Get a Quote
      </button>
      {/* Uncomment if needed
      <button
        className={`py-2 text-lg border-b-2 ${
          activeTab === "inquiry"
            ? "border-b-yellow-500"
            : "border-b-transparent"
        }`}
        onClick={() => handleTabClick("inquiry")}
      >
        General Inquiry
      </button> */}
    </div>
  </div>

  <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormData>)}>
    {/* First & Last Name */}
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="first-name" className="block text-sm mb-2">First Name*</label>
        <input
          id="first-name"
          type="text"
          placeholder="Enter First Name"
          {...register("firstName", {
            required: "First name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "First name must contain only letters",
            },
          })}
          className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstName.message?.toString()}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm mb-2">Last Name*</label>
        <input
          id="last-name"
          type="text"
          placeholder="Enter Last Name"
          {...register("lastName", {
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Last name must contain only letters",
            },
          })}
          className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.lastName.message?.toString()}
          </p>
        )}
      </div>
    </div>

    {/* Email & Phone */}
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="email" className="block text-sm mb-2">Email*</label>
        <input
          id="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm mb-2">Phone Number*</label>
        <input
          id="phone"
          type="number"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone number is required",
            minLength: { value: 10, message: "Phone number must be 10 digits" },
            maxLength: { value: 10, message: "Phone number must be 10 digits" },
          })}
          className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phone.message?.toString()}
          </p>
        )}
      </div>
    </div>

    {/* Subject (Conditional) */}
    {activeTab === "inquiry" && (
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
        <input
          id="subject"
          type="text"
          placeholder="Enter Subject"
          {...register("subject")}
          className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
        />
      </div>
    )}

    {/* Message */}
    <div className="mb-4 relative">
  <div className="flex justify-between items-center mb-2">
    <label htmlFor="message" className="text-sm">Tell us more</label>
    <span className="text-xs text-gray-400">
      {watch("message")?.length || 0}/1000
    </span>
  </div>
  <textarea
    id="message"
    placeholder="Brief about your project"
    maxLength={1000}
    {...register("message")}
    className="w-full h-[152px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm resize-none"
  ></textarea>
</div>

    {/* Submit Button */}
    <div className="flex justify-end">
      <Button
        disabled={loading}
        type="submit"
        className="w-[188px] h-[48px] text-[16px] font-normal mt-8 rounded-[8px] py-[16px] px-[24px] bg-[#06135B]"
      >
        {loading && <Loader2 className="animate-spin" />}{" "}
        {loading
          ? "Please wait..."
          : activeTab === "quote"
          ? "Send Enquiry"
          : "Submit"}
        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </div>
  </form>
</div>


    </div>
  );
}
