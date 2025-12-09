'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

type FormData = {
  name: string;
  company: string;
  designation: string;
  email: string;
  website: string;
  budget: string;
  goal: string;
  message: string;
  sendCaseStudies: boolean;
};

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      designation: "",
      email: "",
      website: "",
      budget: "",
      goal: "",
      message: "",
      sendCaseStudies: false,
    }
  });

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
    // Validate phone number
    if (!validatePhoneNumber(phone)) {
      return;
    }

    setLoading(true);

    try {
      // Send Email
      const emailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [process.env.NEXT_PUBLIC_EMAIL_CC_2],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: "Growth Journey Inquiry - Squadra Media",
            text: "New contact form submission",
            html: `
              <html>
                <head></head>
                <body>
                  <h2>New Growth Journey Inquiry</h2>
                  <p><b>Name:</b> ${data.name}</p>
                  <p><b>Company:</b> ${data.company}</p>
                  <p><b>Designation:</b> ${data.designation}</p>
                  <p><b>Email:</b> ${data.email}</p>
                  <p><b>Phone:</b> ${phone}</p>
                  <p><b>Website:</b> ${data.website || "N/A"}</p>
                  <p><b>Monthly Budget:</b> ${data.budget || "Not specified"}</p>
                  <p><b>Primary Goal:</b> ${data.goal || "Not specified"}</p>
                  <p><b>Message:</b> ${data.message || "No message provided"}</p>
                  <p><b>Case Studies Requested:</b> ${data.sendCaseStudies ? "Yes" : "No"}</p>
                  <br>
                  <p>Thank you & Regards,<br><b>Squadra Media Team</b></p>
                </body>
              </html>
            `,
          },
        }),
      });

      const emailResult = await emailResponse.json();

      if (emailResponse.ok) {
        // Send to Zoho CRM
        await axios.post("/api/zoho", {
          firstName: data.name.split(" ")[0] || data.name,
          lastName: data.name.split(" ").slice(1).join(" ") || data.name,
          email: data.email,
          phoneNumber: phone,
          message: data.message || `Budget: ${data.budget}, Goal: ${data.goal}`,
          leadSource: "Squadra Website - Growth Journey",
          service: data.goal || "Growth Inquiry",
          company: data.company,
        });

        toast.success("Thank you! We'll be in touch within 24 hours.", { duration: 3000 });
        
        // Reset form
        reset();
        setPhone("");
        setPhoneError("");
      } else {
        toast.error(emailResult.message || "Failed to send message", {
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred while sending your message");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const maxChars = 1000;
  const charCount = watch("message")?.length || 0;

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-[hsl(var(--squadra-dark))]">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
              Let&apos;s Talk Growth
            </p>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
              Ready to Build Something <span className="text-gradient">Unforgettable?</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Whether you&apos;re a global brand or an emerging disruptor, if you&apos;re looking for an agency that moves with the speed of a startup and the systems of an enterprise, Squadra Media is your growth partner.
            </p>

            <p className="text-xl text-white font-semibold mb-8">
              Let&apos;s build something measurable, scalable, and unforgettable.
            </p>

            <div className="space-y-4">
              {[
                "30-minute deep-dive strategy call",
                "Custom growth roadmap for your brand",
                "No obligations, just actionable insights",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--squadra-gold))] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[hsl(var(--squadra-dark))]" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-4 lg:p-8 shadow-2xl">
            <h3 className="text-xl font-display font-bold text-[hsl(var(--squadra-dark))] mb-6">
              Start Your Growth Journey
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name must contain only letters",
                      },
                    })}
                    className="rounded-xl"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    placeholder="Company Name"
                    {...register("company", {
                      required: "Company name is required",
                    })}
                    className="rounded-xl"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Designation"
                    {...register("designation")}
                    className="rounded-xl"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Work Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="rounded-xl"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div>
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
                  placeholder="Phone Number"
                  inputStyle={{
                    width: "100%",
                    height: "40px",
                    fontSize: "14px",
                    border: phoneError ? "1px solid #ef4444" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    paddingLeft: "48px",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  buttonStyle={{
                    border: phoneError ? "1px solid #ef4444" : "1px solid #e2e8f0",
                    borderRadius: "12px 0 0 12px",
                    backgroundColor: "white",
                  }}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>

              <Input
                placeholder="Website URL (Optional)"
                {...register("website")}
                className="rounded-xl"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  {...register("budget")}
                  className="w-full px-4 py-2.5 rounded-xl border border-input bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--squadra-gold))]"
                >
                  <option value="">Monthly Budget</option>
                  <option value="<5L">Under ₹5 Lakhs</option>
                  <option value="5-15L">₹5-15 Lakhs</option>
                  <option value="15-30L">₹15-30 Lakhs</option>
                  <option value=">30L">Above ₹30 Lakhs</option>
                </select>

                <select
                  {...register("goal")}
                  className="w-full px-4 py-2.5 rounded-xl border border-input bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--squadra-gold))]"
                >
                  <option value="">Primary Goal</option>
                  <option value="leads">Lead Generation</option>
                  <option value="revenue">Revenue Growth</option>
                  <option value="brand">Brand Building</option>
                  <option value="all">All of the Above</option>
                </select>
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your growth challenges..."
                  {...register("message", {
                    maxLength: {
                      value: maxChars,
                      message: `Message cannot exceed ${maxChars} characters`,
                    },
                  })}
                  rows={3}
                  className="rounded-xl resize-none"
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground ml-auto">
                    {charCount} / {maxChars}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox 
                  id="caseStudies"
                  checked={watch("sendCaseStudies")}
                  onCheckedChange={(checked) => setValue("sendCaseStudies", checked as boolean)}
                />
                <label htmlFor="caseStudies" className="text-sm text-muted-foreground cursor-pointer">
                  Send me Squadra&apos;s latest case studies
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={loading}
                className="w-full text-base py-6 rounded-xl btn-primary group"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Start Your Growth Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;