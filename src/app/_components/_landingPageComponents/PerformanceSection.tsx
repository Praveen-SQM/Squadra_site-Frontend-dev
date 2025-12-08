import { Brain, Zap, BarChart3, Target, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI-led Audience Insights",
    description: "Deep audience understanding powered by machine learning.",
  },
  {
    icon: Zap,
    title: "Automated CRM Systems",
    description: "Seamless lead management and nurturing flows.",
  },
  {
    icon: BarChart3,
    title: "Data-backed Creative Testing",
    description: "Every creative decision backed by performance data.",
  },
  {
    icon: Target,
    title: "ROI Dashboards",
    description: "Built for leadership visibility and decision making.",
  },
];

const PerformanceSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="container relative">
        {/* Beyond Creativity */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
            Beyond Creativity
          </p>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
            The Power of <span className="text-gradient">Performance</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            At Squadra, creativity is just the beginning. Our performance marketing system turns ideas into outcomes.
          </p>

          {/* Growth System Loop */}
          <div className="bg-[hsl(var(--squadra-gray))] rounded-2xl p-8 mb-8">
            <p className="text-sm text-muted-foreground mb-4">Every campaign is built using a full-stack loop:</p>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-medium text-[hsl(var(--squadra-dark))]">
              <span className="px-3 py-1.5 bg-white rounded-full border border-border">AI Insights</span>
              <ArrowRight className="w-4 h-4 text-[hsl(var(--squadra-gold))]" />
              <span className="px-3 py-1.5 bg-white rounded-full border border-border">Content Design</span>
              <ArrowRight className="w-4 h-4 text-[hsl(var(--squadra-gold))]" />
              <span className="px-3 py-1.5 bg-white rounded-full border border-border">Targeted Execution</span>
              <ArrowRight className="w-4 h-4 text-[hsl(var(--squadra-gold))]" />
              <span className="px-3 py-1.5 bg-white rounded-full border border-border">Real-time Optimization</span>
              <ArrowRight className="w-4 h-4 text-[hsl(var(--squadra-gold))]" />
              <span className="px-3 py-1.5 bg-[hsl(var(--squadra-gold))] text-[hsl(var(--squadra-dark))] rounded-full">Measurable ROI</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              This gives our clients a transparent view of what works, why it works, and how fast it scales.
            </p>
          </div>

          <p className="text-lg text-[hsl(var(--squadra-dark))] font-semibold">
            We call this the <span className="text-[hsl(var(--squadra-gold))]">Squadra Growth System</span>—a unified framework that connects strategy, content, and performance through automation and AI.
          </p>
        </div>

        {/* New Age Section */}
        <div className="border-t border-border pt-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
              The New Age
            </p>
            
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
              The Future of Digital Marketing
            </h3>
            
            <p className="text-lg text-muted-foreground">
              We&apos;re not here to sell services. We build growth infrastructures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {capabilities.map((cap, i) => (
              <div 
                key={i} 
                className="card-clean p-6 text-center group hover:border-[hsl(var(--squadra-gold))]"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--squadra-gold))]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(var(--squadra-gold))]/20 transition-colors">
                  <cap.icon className="w-6 h-6 text-[hsl(var(--squadra-gold))]" />
                </div>
                <h4 className="text-base font-display font-bold mb-2 text-[hsl(var(--squadra-dark))]">
                  {cap.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-display font-bold text-[hsl(var(--squadra-dark))]">
              Our work doesn&apos;t stop at impressions. <span className="text-[hsl(var(--squadra-gold))]">It starts with results.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;