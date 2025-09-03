"use client";
import { Button } from "@/components/ui/button"; // Assuming a button component from shadcn/ui or similar
import { ArrowRight, Loader2, Phone, User, Send } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
// Define the structure of our form data
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acceptPrivacyPolicy: boolean;
};
export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });
  // Watch the message field to update the character count
  const messageValue = watch("message", "");
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      // API call to send email
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [process.env.NEXT_PUBLIC_EMAIL_CC_2],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: `GENERAL INQUIRY: ${data.subject}`,
            html: `
              <html>
                <body>
                  <p>Hello Team,</p>
                  <p>You have received a new general inquiry from the website.</p>
                  <br>
                  <p><b>First Name:</b> ${data.firstName}</p>
                  <p><b>Last Name:</b> ${data.lastName}</p>
                  <p><b>Email:</b> ${data.email}</p>
                  <p><b>Phone Number:</b> ${data.phone}</p>
                  <p><b>Subject:</b> ${data.subject}</p>
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
        toast.success("Your message has been sent successfully!", { duration: 3000 });
        // Optional: Post data to Zoho CRM
        await axios.post("/api/zoho", {
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: data?.email,
          phoneNumber: data?.phone,
          message: data?.message,
          leadSource: "Squadra Website",
        });
        reset(); // Reset form fields
      } else {
        toast.error(result.message || "Failed to send your message.", { duration: 3000 });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };
  const enquiryOptions = [
    {
      title: "General Enquiry",
      phoneNumber: "+91 78984 87331",
      icon: <Phone size={32} />,
    },
    {
      title: "Sales Enquiry",
      phoneNumber: "+91 63667 26944",
      icon: <User size={32} />,
    },
    {
      title: "HR Enquiry",
      phoneNumber: "+91 73377 80837",
      icon: <Send size={32} />,
    },
  ];
  return (
    // Main container
    <div className="flex flex-col lg:flex-row  gap-5 mx-auto max-w-[1192px] p-4 md:p-6 lg:p-0 pl-0 lg:pl-6 xl:pl-0 my-20">
      {/* Left Section */}
      <div className="lg:w-[476px] ml-4 sm:ml-3 md:ml-0 xl:w-[526px] h-full lg:h-[790px] bg-[conic-gradient(from_228.11deg_at_76.14%_55.06%,#06135B_0deg,#010101_360deg)] p-8 rounded-3xl text-white flex flex-col">
        <h2 className="text-4xl font-semibold leading-tight mb-5">
          <span className="text-[#FCC94D]">Discover</span> Digital Transformation
        </h2>
        <p className="font-light text-xl text-[#EFEFEF] leading-8 mb-12">
          Please feel free to share your thoughts and we can discuss it over a cup of tea.
        </p>
        <div className="flex flex-col gap-9">
          {enquiryOptions.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white bg-opacity-5 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg leading-tight text-white">{item.title}</p>
                <p className="font-normal text-base text-[#B0B0B0]">{item.phoneNumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full lg:flex-1 p-4 sm:p-8">
        <div className="mb-10">
          <h3 className="text-lg font-medium text-[#131313] pb-3 border-b border-black inline-block">
            General Enquiry
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="first-name" className="block text-sm font-normal text-[#131313] mb-2">First Name*</label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter first name"
                {...register("firstName", { required: "First name is required" })}
                className="w-full h-[52px] px-4 py-3 border border-[#D1D1D1] rounded-lg placeholder:text-[#888888] text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-normal text-[#131313] mb-2">Last Name</label>
              <input
                id="last-name"
                type="text"
                placeholder="Enter last name"
                {...register("lastName")}
                className="w-full h-[52px] px-4 py-3 border border-[#D1D1D1] rounded-lg placeholder:text-[#888888] text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          {/* Email and Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-normal text-[#131313] mb-2">Email*</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                className="w-full h-[52px] px-4 py-3 border border-[#D1D1D1] rounded-lg placeholder:text-[#888888] text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-normal text-[#131313] mb-2">Phone Number*</label>
              <div className="flex items-center w-full h-[52px] border border-[#D1D1D1] rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                <div className="flex items-center pl-4 pr-3 gap-2">
                   {/* Indian Flag SVG */}
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="#FBAE17" d="M0 4h24v5H0z"/><path fill="#F0F0F0" d="M0 9h24v6H0z"/><path fill="#6DA544" d="M0 15h24v5H0z"/><path fill="#0052B4" d="M12 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m0-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
                   <span className="text-[16px] font-400 text-[#6D6D6D] border-l border-[#D1D1D1] pl-3 pr-3">+91</span>
                </div>
                <input
                  id="phone"
                  type="tel"
                  // placeholder="00000 00000"
                  {...register("phone", { required: "Phone number is required", minLength: { value: 10, message: "Must be 10 digits" }, maxLength: { value: 10, message: "Must be 10 digits" }})}
                  className="w-full h-full pr-4 py-3 bg-transparent  placeholder:text-[#888888] text-sm outline-none"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-normal text-[#131313] mb-2">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Enter Your subject"
              {...register("subject")}
              className="w-full h-[52px] px-4 py-3 border border-[#D1D1D1] rounded-lg placeholder:text-[#888888] text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          {/* Tell Us More */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="message" className="block text-sm font-normal text-[#131313]">Tell Us More</label>
              <span className="text-xs text-[#131313]">{messageValue.length} / 1000</span>
            </div>
            <textarea
              id="message"
              placeholder="Brief about your project"
              {...register("message")}
              maxLength={1000}
              className="w-full h-[158px] px-4 py-3 border border-[#D1D1D1] rounded-lg placeholder:text-[#888888] text-sm resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>
          {/* Privacy Policy Checkbox */}
          <div className="flex items-start gap-3">
            <input
              id="acceptPrivacyPolicy"
              type="checkbox"
              {...register("acceptPrivacyPolicy", { required: "You must accept the terms" })}
              className="mt-1 w-4 h-4 accent-black bg-gray-100 border-gray-300 rounded focus:ring-black"
            />
            <div>
              <label htmlFor="acceptPrivacyPolicy" className="text-sm font-normal text-[#6D6D6D] leading-relaxed">
                I have read the privacy policy and consent to the processing of my data for the purpose of handling my enquiry
              </label>
              {errors.acceptPrivacyPolicy && <p className="text-red-500 text-xs mt-1">{errors.acceptPrivacyPolicy.message}</p>}
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              disabled={loading}
              type="submit"
              className="w-auto h-12 px-6 bg-[#131313] text-white rounded-lg text-base font-normal hover:bg-gray-800 transition-colors"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <>
                  Submit
                  <ArrowRight className="ml-3 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

