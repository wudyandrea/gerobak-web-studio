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

interface CardData {
  title: string;
  description: string;
  tags: string[];
  status: "coming_soon" | "open";
  previewDescription: string;
}

const cards: CardData[] = [
  {
    title: "Coming Soon",
    description: "Project pertama sedang dalam pengerjaan",
    tags: ["Landing Page", "UMKM"],
    status: "coming_soon",
    previewDescription:
      "Project landing page untuk UMKM sedang dalam tahap pengerjaan. Nantikan hasilnya segera di sini!",
  },
  {
    title: "Coming Soon",
    description: "Slot portfolio tersedia",
    tags: ["Company Profile"],
    status: "coming_soon",
    previewDescription:
      "Slot company profile ini masih tersedia. Bisa jadi project kamu yang tampil di sini!",
  },
  {
    title: "Slot Terbuka",
    description: "Jadilah klien pertama GerobakWeb",
    tags: ["Mini Web", "PKL"],
    status: "open",
    previewDescription:
      "Slot ini terbuka untuk kamu! Jadilah salah satu klien pertama GerobakWeb dan dapatkan harga promo spesial.",
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
                  : "border-2 border-dashed border-border bg-card hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {card.status === "open" && (
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mb-3">
                  <Sparkles size={16} /> Tersedia
                </div>
              )}
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
              {selectedCard?.status === "open" ? (
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

          {selectedCard?.status === "open" ? (
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
