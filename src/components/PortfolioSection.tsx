import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles } from "lucide-react";

const cards = [
  { title: "Coming Soon", description: "Project pertama sedang dalam pengerjaan", tags: ["Landing Page", "UMKM"], status: "coming_soon" as const },
  { title: "Coming Soon", description: "Slot portfolio tersedia", tags: ["Company Profile"], status: "coming_soon" as const },
  { title: "Slot Terbuka", description: "Jadilah klien pertama GerobakWeb", tags: ["Mini Web", "PKL"], status: "open" as const },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="px-4 py-20 lg:py-28 bg-muted/50">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Portfolio</h2>
          <p className="text-muted-foreground">
            GerobakWeb baru lahir — tapi bukan berarti hasilnya amatir. Gw lagi bangun portfolio dan justru itu alasan harga gw lebih terjangkau sekarang.
          </p>
          <p className="text-primary font-semibold mt-3">
            Kamu bisa jadi salah satu project pertama dengan harga terbaik! 🎯
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 transition-all duration-300 ${
                card.status === "open"
                  ? "border-2 border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-2 border-dashed border-border bg-card"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {card.status === "open" && (
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mb-3">
                  <Sparkles size={16} /> Tersedia
                </div>
              )}
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
