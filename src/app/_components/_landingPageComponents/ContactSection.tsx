'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Check } from "lucide-react";
// import { toast } from "sonner";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    website: "",
    budget: "",
    goal: "",
    message: "",
    sendCaseStudies: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      company: "",
      designation: "",
      email: "",
      website: "",
      budget: "",
      goal: "",
      message: "",
      sendCaseStudies: false,
    });
  };

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
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-display font-bold text-[hsl(var(--squadra-dark))] mb-6">
              Start Your Growth Journey
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl"
                />
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <Input
                placeholder="Website URL"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="rounded-xl"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--squadra-gold))]"
                >
                  <option value="">Monthly Budget</option>
                  <option value="<5L">Under ₹5 Lakhs</option>
                  <option value="5-15L">₹5-15 Lakhs</option>
                  <option value="15-30L">₹15-30 Lakhs</option>
                  <option value=">30L">Above ₹30 Lakhs</option>
                </select>

                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--squadra-gold))]"
                >
                  <option value="">Primary Goal</option>
                  <option value="leads">Lead Generation</option>
                  <option value="revenue">Revenue Growth</option>
                  <option value="brand">Brand Building</option>
                  <option value="all">All of the Above</option>
                </select>
              </div>

              <Textarea
                placeholder="Tell us about your growth challenges..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="rounded-xl resize-none"
              />

              <div className="flex items-center gap-3">
                <Checkbox 
                  id="caseStudies"
                  checked={formData.sendCaseStudies}
                  onCheckedChange={(checked) => setFormData({ ...formData, sendCaseStudies: checked as boolean })}
                />
                <label htmlFor="caseStudies" className="text-sm text-muted-foreground cursor-pointer">
                  Send me Squadra&apos;s latest case studies
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-base py-6 rounded-xl btn-primary group"
              >
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;