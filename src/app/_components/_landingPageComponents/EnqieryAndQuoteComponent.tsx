"use client";
import React, { useState } from "react";

export default function EnqieryAndQuoteComponent() {
  const [activeTab, setActiveTab] = useState("quote");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-56  md:mt-0 justify-between p-8 space-y-10 lg:space-y-0 lg:space-x-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="md:text-[54px] font-[400] mb-8">
          Discover Digital Transformation
        </h2>
        <p className="text-[#6D6D6D] max-w-[400px]">
          Please feel free to share your thoughts and we can discuss it over a
          cup of tea.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <div className="mb-10">
          <div className="flex space-x-8">
            <button
              className={`py-2 text-lg border-b-2 ${
                activeTab === "quote" ? "border-b-yellow-500" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick("quote")}
            >
              Get a Quote
            </button>
            <button
              className={`py-2 text-lg border-b-2 ${
                activeTab === "inquiry" ? "border-b-yellow-500" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick("inquiry")}
            >
              General Inquiry
            </button>
          </div>
        </div>

        <form>
          {/* First Name and Last Name (side by side on large screens) */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm mb-2">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] mb-4 placeholder:text-sm"
              />
            </div>

            <div>
              <label htmlFor="last-name" className="block text-sm mb-2">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] mb-4 placeholder:text-sm"
              />
            </div>
          </div>

          {/* Email and Phone Number (side by side on large screens) */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] mb-4 placeholder:text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] mb-4 placeholder:text-sm"
              />
            </div>
          </div>

          {/* Tell Us More Textarea */}
          <div className="mb-4">
            <div className="mb-2">
              <label htmlFor="message" className="block text-sm mb-2">
                Tell us more
              </label>
            </div>
            <textarea
              id="message"
              placeholder="Tell us more"
              className="w-full h-[152px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] mb-4 placeholder:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white float-right rounded-md"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
