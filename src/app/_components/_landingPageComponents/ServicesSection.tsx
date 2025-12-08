import { 
  Palette, Video, Target, Settings, 
  Globe, Smartphone, Megaphone, GraduationCap
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Creative",
    items: [
      "Brand identity & positioning",
      "Logo & visual systems",
      "Creative campaigns",
      "Graphic design",
    ],
  },
  {
    icon: Video,
    title: "Content & Production",
    items: [
      "Cinematic video production",
      "Reels & social content",
      "Photography",
      "Motion graphics & animations",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media & Marketing",
    items: [
      "Social media strategy & management",
      "Influencer & UGC campaigns",
      "Community growth systems",
      "Reputation management",
    ],
  },
  {
    icon: Target,
    title: "Performance Marketing",
    items: [
      "Meta, Google, LinkedIn ads",
      "Conversion funnels & A/B testing",
      "Lead generation systems",
      "Media planning & optimization",
    ],
  },
  {
    icon: Globe,
    title: "Web & Digital Experience",
    items: [
      "Website design & development",
      "Landing pages",
      "UI/UX",
      "Conversion-optimized web experiences",
    ],
  },
  {
    icon: Settings,
    title: "CRM, Automation & Tech",
    items: [
      "CRM setup (Zoho, HubSpot, custom)",
      "Marketing automation",
      "WhatsApp & email flows",
      "AI-powered reporting dashboards",
    ],
  },
  {
    icon: GraduationCap,
    title: "E-Learning & Animation",
    items: [
      "2D/3D animated training modules",
      "LMS content production",
      "Interactive learning experiences",
    ],
  },
  {
    icon: Smartphone,
    title: "IT, Product & Engineering",
    items: [
      "Custom LMS & web apps",
      "Mobile app development",
      "Integrations & backend systems",
      "Cloud, DevOps & security",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
            What We Deliver
          </p>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
            360° Digital <span className="text-gradient">Growth Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything your brand needs—under one roof, fully integrated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="card-clean p-6 group hover:border-[hsl(var(--squadra-gold))]"
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--squadra-gold))] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <service.icon className="w-6 h-6 text-[hsl(var(--squadra-dark))]" />
              </div>
              
              <h3 className="text-lg font-display font-bold mb-4 text-[hsl(var(--squadra-dark))]">
                {service.title}
              </h3>
              
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--squadra-gold))] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;