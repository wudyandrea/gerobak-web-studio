import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import contactImg from "@/assets/contact-illustration.png";

const paketOptions = ["Mini Web — 250rb", "Starter — 300rb", "Standard — 500rb", "Kustom"];

type Tab = "whatsapp" | "email";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [tab, setTab] = useState<Tab>("whatsapp");
  const [form, setForm] = useState({ nama: "", email: "", usaha: "", paket: "", pesan: "" });

  const set = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo GerobakWeb! 👋\n\nNama: ${form.nama}\nUsaha: ${form.usaha || "-"}\nPaket: ${form.paket}\n\n${form.pesan}`;
    window.open(`https://wa.me/628XXXXXXXXXX?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[GerobakWeb] Inquiry dari ${form.nama}`;
    const body = `Nama: ${form.nama}\nEmail: ${form.email}\nUsaha: ${form.usaha || "-"}\nPaket: ${form.paket}\n\n${form.pesan}`;
    window.open(`mailto:hello@gerobakweb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
  };

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow";

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Siap Mulai? <span className="gradient-text">Cerita Dulu</span> Sama Gw
          </h2>
          <p className="text-muted-foreground">Pilih cara yang paling nyaman buat kamu. Gw balas secepat mungkin.</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Illustration */}
          <div className="hidden lg:flex justify-center">
            <img src={contactImg} alt="Hubungi GerobakWeb" className="w-full max-w-sm rounded-2xl" />
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            {/* Tabs */}
            <div className="flex border-b border-border mb-6">
              <button
                onClick={() => setTab("whatsapp")}
                className={`flex-1 pb-3 text-sm font-semibold transition-colors ${tab === "whatsapp" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
              >
                💬 WhatsApp
              </button>
              <button
                onClick={() => setTab("email")}
                className={`flex-1 pb-3 text-sm font-semibold transition-colors ${tab === "email" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
              >
                📧 Email
              </button>
            </div>

            <form onSubmit={tab === "whatsapp" ? handleWhatsApp : handleEmail} className="space-y-4">
              <input className={inputClass} placeholder="Nama kamu" required value={form.nama} onChange={(e) => set("nama", e.target.value)} />
              {tab === "email" && (
                <input className={inputClass} type="email" placeholder="Email kamu" required value={form.email} onChange={(e) => set("email", e.target.value)} />
              )}
              <input className={inputClass} placeholder="Nama usaha (opsional)" value={form.usaha} onChange={(e) => set("usaha", e.target.value)} />
              <select className={inputClass} required value={form.paket} onChange={(e) => set("paket", e.target.value)}>
                <option value="" disabled>Pilih paket</option>
                {paketOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <textarea className={`${inputClass} min-h-[100px] resize-none`} placeholder="Ceritain kebutuhan kamu singkat aja..." required value={form.pesan} onChange={(e) => set("pesan", e.target.value)} />
              <Button type="submit" variant={tab === "whatsapp" ? "whatsapp" : "gradient"} size="lg" className="w-full">
                {tab === "whatsapp" ? "Kirim via WhatsApp 💬" : "Kirim Email 📧"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
