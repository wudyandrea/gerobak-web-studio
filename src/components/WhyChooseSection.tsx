import { User, BadgeCheck, Zap, Settings2, Smartphone, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: User, title: "Langsung ke Orangnya", description: "Tidak ada perantara, tidak ada miskomunikasi. Kamu ngobrol langsung sama yang desain dan coding." },
  { icon: BadgeCheck, title: "Harga Transparan", description: "Tidak ada biaya tersembunyi. Harga sudah termasuk semua yang tertera di paket." },
  { icon: Zap, title: "Respon Cepat", description: "Chat langsung dibalas. Tidak perlu nunggu ticket support atau antri di CS." },
  { icon: Settings2, title: "Fleksibel", description: "Bisa diskusi kebutuhan spesifik usaha kamu. Tidak kaku seperti agency." },
  { icon: Smartphone, title: "Mobile Friendly", description: "Semua website tampil sempurna di HP. Karena mayoritas pelanggan kamu buka dari HP." },
  { icon: Globe, title: "Se-Indonesia", description: "Kamu di mana aja, gw bisa bantu. Seluruh Indonesia, kerja remote, hasil nyata." },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why_choose" className="px-4 py-20 lg:py-28">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Kenapa Pilih <span className="gradient-text">GerobakWeb?</span>
          </h2>
          <p className="text-muted-foreground">
            Kalau kamu ke agency, kamu antri, dealing sama admin, dan bayar harga yang udah di-markup berlapis. Di sini? Langsung ngobrol sama yang ngerjain.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-hover group rounded-xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center mb-3">
                <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-card-foreground ml-2">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
