"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  industry: string;
  message: string;
};

const industries = [
  "Shipping & Maritime",
  "Manufacturing & Logistics",
  "IT & Technology",
  "Healthcare",
  "Education & Government",
  "Hospitality & Retail",
  "Other",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);

    try {
      // Determine dynamic service-based CC based on industry
      let serviceCcEmail = "";
      switch (data.industry) {
        case "IT & Technology":
          serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_1 || "";
          break;
        case "Manufacturing & Logistics":
          serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_2 || "";
          break;
        case "Healthcare":
          serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_3 || "";
          break;
        case "Education & Government":
          serviceCcEmail = process.env.NEXT_PUBLIC_EMAIL_SERVICE_CC_4 || "";
          break;
        default:
          serviceCcEmail = "";
          break;
      }

      // Send email
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [
            ...(serviceCcEmail ? [serviceCcEmail] : []),
            process.env.NEXT_PUBLIC_EMAIL_CC_2,
          ],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: `E-LEARNING INQUIRY - ${data.industry}`,
            text: "E-Learning Contact Form Submission",
            html: `
              <html>
                <head></head>
                <body>
                  <p>Hello Team,</p>
                  <p>New e-learning inquiry received:</p>
                  <br>
                  <p><b>Full Name:</b> ${data.name}</p>
                  <p><b>Email:</b> ${data.email}</p>
                  <p><b>Company:</b> ${data.company}</p>
                  ${
                    data.phone
                      ? `<p><b>Phone Number:</b> ${data.phone}</p>`
                      : ""
                  }
                  <p><b>Industry:</b> ${data.industry}</p>
                  <p><b>Message:</b> ${data.message}</p>
                  <br>
                  <p>Thank you & Regards,<br><b>Squadraverse Team</b></p>
                </body>
              </html>`,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!", {
          duration: 3000,
        });

        // Send to Zoho CRM
        await axios.post("/api/zoho", {
          firstName: data.name.split(" ")[0] || data.name,
          lastName: data.name.split(" ").slice(1).join(" ") || data.name,
          email: data.email,
          phoneNumber: data.phone || "",
          message: data.message,
          leadSource: "Squadraverse Website",
          service: data.industry,
          company: data.company,
        });

        // Show success state
        setIsSubmitted(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        toast.error(result.message || "Failed to send message", {
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred while sending your message");
      console.error("Error sending message:", error);
    }
  };

  const maxChars = 1000;
  const charCount = watch("message")?.length || 0;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Let&apos;s Build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Future of Learning
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Whether you&apos;re launching a new training initiative or
            modernizing existing programs, Squadraverse helps you design
            learning that truly delivers
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ready to transform your organizations learning experience? Our
                team is here to help you create engaging, effective training
                solutions.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a
                    href="mailto:bd@squadramedia.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    bd@squadramedia.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a
                    href="tel:+916366726494"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +91 6366726494
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    532, 16th Cross, 2nd Main Rd,
                    <br />
                    Binnamangala, Indiranagar,
                    <br />
                    Bengaluru, Karnataka
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Additional info */}
            <div className="p-6 bg-slate-950/50 backdrop-blur-sm rounded-2xl border border-slate-800">
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-sm text-gray-400">
                We typically respond within 24 hours during business days. For
                urgent inquiries, please call us directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 bg-slate-950/50 backdrop-blur-sm rounded-2xl border border-slate-800">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-400">
                    We&apos;ve received your message and will get back to you
                    soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Name must contain only letters",
                        },
                      })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Company and Phone - Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company *
                      </label>
                      <input
                        {...register("company", {
                          required: "Company name is required",
                        })}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Company Inc."
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone (Optional)
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Industry *
                    </label>
                    <select
                      {...register("industry", {
                        required: "Please select an industry",
                      })}
                      id="industry"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.industry.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2 flex justify-between"
                    >
                      <span>Message *</span>
                      <span className="text-gray-500">
                        {charCount} / {maxChars}
                      </span>
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Please enter a message",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                        maxLength: {
                          value: maxChars,
                          message: `Message cannot exceed ${maxChars} characters`,
                        },
                      })}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your e-learning needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Start Your E-Learning Project
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
