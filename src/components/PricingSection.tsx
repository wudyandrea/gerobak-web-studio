import { Store, Rocket, Building2, Wrench, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const packages = [
  {
    id: "minimal",
    name: "Mini Web",
    badge: null,
    originalPrice: "250rb",
    price: "100rb",
    description: "Cocok untuk Pedagang kaki lima dan UMKM yang mau tampilkan menu, link, atau kontak usaha.",
    icon: Store,
    features: ["1 halaman landing", "Tampilkan menu / link bio", "Nomor WA & lokasi Maps", "Mobile friendly", "Revisi 1x"],
    highlight: false,
  },
  {
    id: "starter",
    name: "Starter",
    badge: "Populer",
    originalPrice: "500rb",
    price: "300rb",
    description: "Mulai tampil di era digital. Cocok untuk UMKM yang baru mau go online.",
    icon: Rocket,
    features: ["Hingga 2 halaman", "Home, About", "WhatsApp button", "Google Maps embed", "Mobile friendly", "Revisi 1x"],
    highlight: true,
  },
  {
    id: "standard",
    name: "Standard",
    badge: null,
    originalPrice: "900rb",
    price: "500rb",
    description: "Landing page atau company profile yang lebih lengkap untuk usaha tingkat menengah.",
    icon: Building2,
    features: ["Hingga 4 halaman", "Desain lebih custom", "Form kontak", "WhatsApp & Maps integration", "Mobile friendly", "Revisi 2x"],
    highlight: false,
  },
  {
    id: "custom",
    name: "Kustom",
    badge: "Fleksibel",
    originalPrice: null,
    price: "Hubungi Dulu",
    description: "Punya kebutuhan spesifik? Desain atau fitur tertentu? Cerita dulu, gw kasih penawaran.",
    icon: Wrench,
    features: ["Desain dari nol", "Fitur sesuai kebutuhan", "Diskusi langsung", "Penawaran custom", "Timeline fleksibel"],
    highlight: false,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="px-4 py-20 lg:py-28">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Pilih Paket yang <span className="gradient-text">Cocok</span>
          </h2>
          <p className="text-muted-foreground">
            Harga jujur, tidak ada biaya kejutan. Semua paket include revisi sesuai ketentuan.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`relative rounded-xl p-6 flex flex-col ${
                pkg.highlight
                  ? "border-2 border-primary bg-primary/5 shadow-xl shadow-primary/15"
                  : "border border-border bg-card"
              } card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {pkg.badge && (
                <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-bold rounded-full gradient-primary text-primary-foreground">
                  {pkg.badge}
                </span>
              )}

              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <pkg.icon size={22} className="text-primary" />
              </div>

              <h3 className="font-heading font-bold text-xl text-card-foreground">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{pkg.description}</p>

              <div className="mb-5">
                {pkg.originalPrice && (
                  <span className="text-sm text-red-500 text-muted-foreground line-through mr-2">Rp {pkg.originalPrice}</span>
                )}
                <span className="text-2xl font-bold font-heading text-foreground">
                  {pkg.price.startsWith("Hubungi") ? pkg.price : `Rp ${pkg.price}`}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-secondary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlight ? "gradient" : "heroOutline"}
                className="w-full"
                onClick={() => scrollTo("#contact")}
              >
                {pkg.id === "custom" ? "Diskusi Sekarang" : "Pilih Paket Ini"}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Harga belum termasuk domain dan hosting. Gw bantu setup dan rekomendasiin yang paling hemat.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
