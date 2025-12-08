import Image from "next/image";

const leaders = [
  {
    name: "Anu J.S",
    role: "Founder & CEO",
    description: "Overseeing Squadra's vision, product innovation, and overall growth across verticals.",
    image: "/images/team/anu.jpg",
  },
  {
    name: "Tarush Chandnani",
    role: "Co-Founder & Head of Sales & Marketing",
    description: "Leads strategy, partnerships, and business growth, driving revenue and long-term client success.",
    image: "/images/team/tarush.jpg",
  },
  {
    name: "Sandesh K",
    role: "Co-Founder & COO",
    description: "The backbone of Squadra's operations, ensures flawless delivery, process discipline, and scalability.",
    image: "/images/team/sandesh.jpg",
  },
  {
    name: "Namish",
    role: "Account Director",
    description: "Bridging business objectives with creative execution, ensuring every campaign aligns with brand goals.",
    image: "/images/team/namish.jpg",
  },
  {
    name: "Nikhil",
    role: "Creative Director",
    description: "Crafting brand narratives, visual identities, and campaign concepts that break clutter and build recall.",
    image: "/images/team/nikhil.jpg",
  },
  {
    name: "Shawn",
    role: "Content Strategist",
    description: "Transforming ideas into high-impact content strategies that engage and convert.",
    image: "/images/team/shawn.jpg",
  },
  {
    name: "Bhavika",
    role: "Account Lead",
    description: "Driving campaign execution with precision, communication, and accountability.",
    image: "/images/team/bhavika.jpg",
  },
  {
    name: "Sujata",
    role: "Account Lead",
    description: "Driving campaign execution with precision, communication, and accountability.",
    image: "/images/team/sujata.jpg",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <p className="text-[hsl(var(--squadra-gold))] font-semibold uppercase text-sm tracking-wider mb-4">
            Meet The Team
          </p>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[hsl(var(--squadra-dark))]">
            Leadership That <span className="text-gradient">Drives Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Behind every strategy and campaign is a leadership team obsessed with measurable results.
          </p>
          <p className="text-base text-muted-foreground italic">
            They don&apos;t sit above the team. They build, refine, and run things with them.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {leaders.map((leader, i) => (
            <div 
              key={i} 
              className="card-clean p-6 text-center group hover:border-[hsl(var(--squadra-gold))]"
            >
              <div className="w-24 h-24 rounded-full bg-[hsl(var(--squadra-gray))] mx-auto mb-4 overflow-hidden">
                <Image
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="text-lg font-display font-bold text-[hsl(var(--squadra-dark))] mb-1">
                {leader.name}
              </h3>
              <p className="text-sm text-[hsl(var(--squadra-gold))] font-semibold mb-3">
                {leader.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Photo Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[hsl(var(--squadra-gray))] rounded-2xl overflow-hidden">
            <div className="relative">
              <Image
                src="/images/team/team.jpg" 
                alt="Squadra Team"
                className="w-full h-auto object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--squadra-dark))]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  150<span className="text-[hsl(var(--squadra-gold))]">+</span> Member Team
                </p>
                <p className="text-white/80 text-lg">
                  Designers • Filmmakers • Editors • Marketers • Developers
                </p>
              </div>
            </div>
            <div className="p-8 text-center">
              <p className="text-lg text-[hsl(var(--squadra-dark))] leading-relaxed mb-4">
                Each trained to think like a founder and execute like a specialist.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                We&apos;re a young, ambitious agency that operates with the structure and precision of the top agencies in the country.
              </p>
              <p className="text-lg font-display font-bold text-[hsl(var(--squadra-dark))]">
                That balance of creativity and process is what sets Squadra apart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;