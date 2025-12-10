import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Performance First",
    description: "Every strategy is built around measurable outcomes and ROI.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Bold ideas that capture attention and drive engagement.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Insights and analytics at the core of every decision.",
  },
  {
    icon: Users,
    title: "Full-Service Team",
    description: "150+ experts across strategy, creative, and tech.",
  },
];

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-20 lg:pb-0 lg:pt-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
              Your Growth Partner,{" "}
              <span className="text-gradient">Not Just an Agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Squadra Media is a full-stack digital growth company that integrates strategy, 
              creative, and performance under one roof. We don&apos;t just run campaigns—we build 
              growth systems that scale.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From brand strategy to performance marketing, content production to web development, 
              we&apos;re the embedded growth team that ambitious brands need to turn attention into revenue.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="text-4xl font-display font-bold text-[hsl(var(--squadra-gold))]">5+</p>
                <p className="text-sm text-muted-foreground">Years in Business</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-[hsl(var(--squadra-gold))]">150+</p>
                <p className="text-sm text-muted-foreground">Campaigns Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-[hsl(var(--squadra-gold))]">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-clean p-6 hover:border-[hsl(var(--squadra-gold))] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--squadra-gold))]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[hsl(var(--squadra-gold))]" />
                </div>
                <h3 className="text-lg font-display font-bold text-[hsl(var(--squadra-dark))] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
