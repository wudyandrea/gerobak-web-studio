import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const stats = [
  { value: "100%", label: "Dikerjain Langsung" },
  { value: "3-7", label: "Hari Pengerjaan" },
  { value: "Se-Indonesia", label: "Jangkauan Layanan" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient mesh bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="section-container w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              🚀 Harga Promo Terbatas — Jangan Sampai Kehabisan!
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight text-foreground">
              Usahamu Layak{" "}
              <span className="gradient-text">Tampil di Internet.</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg text-muted-foreground max-w-lg">
              Bukan agency besar, tapi hasilnya serius. Gw bantu bikin website buat usaha kamu — simpel, cepat, dan harga yang masuk akal.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3">
              <Button variant="gradient" size="lg" onClick={() => scrollTo("#contact")}>
                Mulai Sekarang <ArrowRight size={18} />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => scrollTo("#pricing")}>
                Lihat Paket <ChevronDown size={18} />
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-8 pt-6 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-heading text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div className="animate-fade-up-delay-2 flex justify-center lg:justify-end">
            <img
              src={heroImg}
              alt="Ilustrasi GerobakWeb - Jasa pembuatan website UMKM"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
