const services = [
  "Digital Marketing",
  "Performance Marketing",
  "Social Media Management",
  "Content Production",
  "Brand Strategy",
  "Video Production",
  "UI/UX Design",
  "Web Development",
  "SEO & SEM",
  "Influencer Marketing",
  "Media Planning",
  "Growth Consulting",
];

const ServicesMarquee = () => {
  return (
    <section className="py-6 bg-[hsl(var(--squadra-gold))] overflow-hidden">
      <div className="flex animate-marquee">
        {[...services, ...services].map((service, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-lg md:text-xl font-display font-bold text-[hsl(var(--squadra-dark))] whitespace-nowrap px-8">
              {service}
            </span>
            <span className="text-[hsl(var(--squadra-dark))]/60">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesMarquee;
