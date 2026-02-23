import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, Eye, ExternalLink, Clock } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import portfolioBlog from "@/assets/portfolio-blog.png";
import portfolioFidih from "@/assets/portfolio-fidih.png";
import portfolioOpenSlot from "@/assets/portfolio-open-slot.png";

interface CardData {
  title: string;
  description: string;
  tags: string[];
  status: "coming_soon" | "open" | "live";
  previewDescription: string;
  url?: string;
  thumbnail: string;
}

const cards: CardData[] = [
  {
    title: "Blog Fidi Hartato",
    description: "Blog pribadi dengan konten teknologi dan pengembangan web",
    tags: ["Blog", "Personal"],
    status: "live",
    previewDescription:
      "Blog pribadi Fidi Hartato yang membahas topik seputar teknologi, coding, dan pengembangan web. Dibangun dengan desain yang bersih dan mudah dinavigasi.",
    url: "https://blog.fidihartato.my.id",
    thumbnail: portfolioBlog,
  },
  {
    title: "Portfolio Fidi Hartato",
    description: "Website portfolio personal developer",
    tags: ["Portfolio", "GitHub Pages"],
    status: "live",
    previewDescription:
      "Website portfolio personal yang menampilkan project dan skill seorang developer. Di-host di GitHub Pages dengan performa cepat dan ringan.",
    url: "https://fidih.github.io/",
    thumbnail: portfolioFidih,
  },
  {
    title: "Slot Terbuka",
    description: "Jadilah klien pertama GerobakWeb",
    tags: ["Mini Web", "PKL"],
    status: "open",
    previewDescription:
      "Slot ini terbuka untuk kamu! Jadilah salah satu klien pertama GerobakWeb dan dapatkan harga promo spesial.",
    thumbnail: portfolioOpenSlot,
  },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section id="portfolio" className="px-4 py-20 lg:py-28 bg-muted/50">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground">
            GerobakWeb baru lahir — tapi bukan berarti hasilnya amatir. Gw lagi
            bangun portfolio dan justru itu alasan harga gw lebih terjangkau
            sekarang.
          </p>
          <p className="text-primary font-semibold mt-3">
            Kamu bisa jadi salah satu project pertama dengan harga terbaik! 🎯
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              onClick={() => setSelectedCard(card)}
              className={`rounded-xl p-6 transition-all duration-300 cursor-pointer group ${
                card.status === "open"
                  ? "border-2 border-primary bg-primary/5 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
                  : card.status === "live"
                  ? "border-2 border-green-500/30 bg-card shadow-md hover:shadow-lg hover:border-green-500/50 hover:-translate-y-1"
                  : "border-2 border-dashed border-border bg-card hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-40 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {card.status === "live" && (
                  <span className="absolute top-2 right-2 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-green-500 text-white">
                    <ExternalLink size={12} /> Live
                  </span>
                )}
                {card.status === "open" && (
                  <span className="absolute top-2 right-2 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                    <Sparkles size={12} /> Tersedia
                  </span>
                )}
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {card.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Eye
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Dialog */}
      <Dialog
        open={!!selectedCard}
        onOpenChange={(open) => !open && setSelectedCard(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading flex items-center gap-2">
              {selectedCard?.status === "live" ? (
                <ExternalLink size={20} className="text-green-500" />
              ) : selectedCard?.status === "open" ? (
                <Sparkles size={20} className="text-primary" />
              ) : (
                <Clock size={20} className="text-muted-foreground" />
              )}
              {selectedCard?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedCard?.previewDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCard?.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {selectedCard?.status === "live" && selectedCard?.url ? (
            <div className="mt-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <p className="text-sm text-foreground font-medium mb-3">
                🌐 Project ini sudah live!
              </p>
              <Button
                variant="gradient"
                className="w-full"
                onClick={() => window.open(selectedCard.url, "_blank")}
              >
                <ExternalLink size={16} />
                Lihat Website
              </Button>
            </div>
          ) : selectedCard?.status === "open" ? (
            <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground font-medium mb-3">
                🎯 Slot ini tersedia untuk kamu!
              </p>
              <Button
                variant="gradient"
                className="w-full"
                onClick={() => {
                  setSelectedCard(null);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ExternalLink size={16} />
                Hubungi Sekarang
              </Button>
            </div>
          ) : (
            <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
              <p className="text-sm text-muted-foreground">
                ⏳ Project ini masih dalam pengerjaan. Cek lagi nanti untuk
                melihat hasilnya!
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
