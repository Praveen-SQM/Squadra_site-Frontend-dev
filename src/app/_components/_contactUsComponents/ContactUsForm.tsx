// eslint-disable-next-line @typescript-eslint/ban-ts-comment
"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactUsForm() {
  const [activeTab] = useState("quote");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Custom dropdown states
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    clearErrors,
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
    subject: string;
    services: string;
    terms: boolean;
  };

  const serviceOptions = [
    { value: "it", label: "IT" },
    { value: "e-learning-content-development", label: "E-Learning Content Development" },
    { value: "branding-creative", label: "Branding & Creative" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "e-commerce-website-development", label: "E-Commerce / Website Development" },
    { value: "2d-3d-animation-content", label: "2D / 3D Animation Content" },
  ];

  const selectedOption = serviceOptions.find(
    (option) => option.value === selectedService
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceSelect = (value: string) => {
    setSelectedService(value);
    setIsDropdownOpen(false);
    // Update your form value
    setValue("services", value);
    // Clear any existing errors
    clearErrors("services");
  };

  // Validate phone number
  const validatePhoneNumber = (phoneValue: string) => {
    if (!phoneValue || phoneValue.length < 10) {
      setPhoneError("Please enter a valid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form data:", data);

    // Validate phone number
    if (!validatePhoneNumber(phone)) {
      return;
    }

    setLoading(true);

    // Determine dynamic service-based CC
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
        serviceCcEmail = ""; // fallback if no match
        break;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [
            // process.env.NEXT_PUBLIC_EMAIL_CC,
            ...(serviceCcEmail ? [serviceCcEmail] : []),
            process.env.NEXT_PUBLIC_EMAIL_CC_2,
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
              <p><b>Phone number: </b> ${phone}</p>
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
          phoneNumber: phone,
          message: data?.message,
          leadSource: "Squadra Website",
          service: data.services || "",
        });
        reset();
        setPhone(""); // Reset phone input
        setPhoneError(""); // Reset phone error
        setSelectedService(""); // Reset dropdown selection
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

  const maxChars = 1000;
  const charCount = watch("message")?.length || 0;

  return (
    <div className="flex flex-col pt-24 sm:pt-15 lg:flex-col  md:mt-0 justify-between p-10 px-[20px] md:p-10 lg:pt-[144px] lg:pb-[72px] md:pt-[144px] md:pb-[72px] sm:px-[20px] space-y-10 bg-[#FAFAFA] items-center">
      {/* top Section */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[54px] font-[400] mb-3">
          Let&apos;s Talk
        </h2>
        <p className="text-[#6D6D6D] text-center lg:max-w-[663px]">
          We value your insights and look forward to meaningful discussions.
          Share your thoughts with us, and let&apos;s explore the possibilities
          together.
        </p>
      </div>

      {/* bottom Section */}
      <div className="w-full lg:w-[840px] md:w-[714px] bg-[#FFFFFF] p-[32px]">
        <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormData>)}>
          {/* First Name and Last Name */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm mb-2">
                First Name*
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter first name"
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/, // Allows only letters and spaces
                    message: "First name must contain only letters",
                  },
                })}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.firstName?.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm mb-2">
                Last Name*
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Enter last name"
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/, // Allows only letters and spaces
                    message: "Last name must contain only letters",
                  },
                })}
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.lastName?.message?.toString()}
                </p>
              )}
            </div>
          </div>

          {/* Email and Phone Number */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email*
              </label>
              <input
                id="email"
                placeholder="Enter email"
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
                  {errors?.email?.message?.toString()}
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="phone" className="block text-sm mb-2">
                Phone Number*
              </label>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => {
                  setPhone(value);
                  if (phoneError) {
                    validatePhoneNumber(value);
                  }
                }}
                onBlur={() => validatePhoneNumber(phone)}
                inputStyle={{
                  width: "100%",
                  height: "52px",
                  fontSize: "14px",
                  border: phoneError
                    ? "1px solid #ef4444"
                    : "1px solid #D1D1D1",
                  borderRadius: "8px",
                  paddingLeft: "48px",
                }}
                containerStyle={{
                  width: "100%",
                  position: "relative",
                }}
                buttonStyle={{
                  border: phoneError
                    ? "1px solid #ef4444"
                    : "1px solid #D1D1D1",
                  borderRadius: "8px 0 0 8px",
                }}
                dropdownStyle={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  zIndex: 999,
                  backgroundColor: "white",
                  border: "1px solid #D1D1D1",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  maxHeight: "200px",
                  overflowY: "auto",
                  width: "300px",
                }}
              />
              <style jsx>{`
                :global(.react-tel-input .selected-flag.open) {
                  border-radius: 8px !important;
                }
                :global(.react-tel-input .selected-flag.open + input) {
                  border-radius: 8px !important;
                  padding-left: 48px !important;
                }
                :global(.react-tel-input .selected-flag:hover) {
                  border-radius: 8px !important;
                }
                :global(.react-tel-input .selected-flag:hover + input) {
                  border-radius: 8px !important;
                  padding-left: 48px !important;
                }
              `}</style>
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter Your subject"
              {...register("subject")}
              className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
            />
          </div>

          {/* Tell Us More */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm mb-2 flex justify-between"
            >
              Tell us more
              <p>
                {charCount} / {maxChars}
              </p>
            </label>

            <textarea
              id="message"
              placeholder="Brief about your project"
              {...register("message", {
                maxLength: {
                  value: maxChars,
                  message: "Message cannot exceed 1000 characters",
                },
              })}
              className="w-full h-[152px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message?.message?.toString()}
              </p>
            )}
          </div>

          {/* UPDATED SERVICES DROPDOWN */}
          <div className="mb-4 w-full">
            <label htmlFor="services" className="block text-sm mb-2">
              Services
            </label>

            <div className="relative" ref={dropdownRef}>
              {/* Hidden input for form validation */}
              <input
                type="hidden"
                {...register("services", {
                  required: "Please select a service",
                })}
                value={selectedService}
              />

              {/* Custom Select Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full h-[52px] px-[16px] py-[12px] pr-12 
                  border rounded-[8px] 
                  bg-white text-left text-sm font-medium
                  focus:outline-none 
                  transition-all duration-200 ease-in-out
                  ${
                    errors.services
                      ? "border-red-300 focus:border-red-500"
                      : isDropdownOpen
                      ? "border-gray-800"
                      : "border-[#D1D1D1] hover:border-gray-400"
                  }
                  ${!selectedService ? "text-gray-500" : "text-gray-900"}
                `}
              >
                {selectedOption ? selectedOption.label : "Select a service"}
              </button>

              {/* Dropdown Arrow */}
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none `}
              >
                <ChevronDown
                  className={`w-5 h-5 transition-colors duration-200 transition-transform duration-200 text-gray-400 ${
                    errors.services
                      ? "text-red-400"
                      : isDropdownOpen
                      ? " rotate-180"
                      : ""
                  }`}
                />
              </div>

              {/* Custom Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  {serviceOptions.map((option, index) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleServiceSelect(option.value)}
                      className={`w-full px-[16px] py-[12px] text-left text-sm transition-colors duration-150
                        ${
                          selectedService === option.value
                            ? "bg-blue-50 text-blue-900 font-medium"
                            : "text-gray-900 hover:bg-gray-50"
                        }
                        ${
                          index !== serviceOptions.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }
                        focus:outline-none focus:bg-blue-50 focus:text-blue-900
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {errors.services && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.services?.message?.toString()}
              </p>
            )}
          </div>

          {/* Terms and conditions */}
          <div className="mb-6 flex-col py-[16px]">
            <div className="flex gap-[10px]">
              <input
                type="checkbox"
                className={`form-checkbox h-4 cursor-pointer w-4 transition duration-150 ease-in-out border ${
                  errors.terms ? "border-red-500" : ""
                }`}
                style={{ accentColor: "#1E3A76" }}
                {...register("terms", {
                  required: "Please check Privacy Policy",
                })}
              />
              <p className="font-normal text-[13px] leading-[20px] text-[#6d6d6d]">
                I have read the privacy policy and consent to the processing of
                my data for the purpose of handling my enquiry
              </p>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.terms?.message?.toString()}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            disabled={loading}
            type="submit"
            className="w-full h-[48px] float-right bg-black text-white rounded-md"
          >
            {loading && <Loader2 className="animate-spin" />}{" "}
            {loading
              ? "Please wait..."
              : activeTab === "quote"
              ? "Submit"
              : "Submit"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
}
