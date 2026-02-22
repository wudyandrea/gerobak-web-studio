import { Truck, MapPin, MessageCircle, Mail } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Kenapa Gw", href: "#why_choose" },
  { label: "Paket", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

const paketLinks = [
  { label: "Mini Web", href: "#pricing" },
  { label: "Starter", href: "#pricing" },
  { label: "Standard", href: "#pricing" },
  { label: "Kustom", href: "#pricing" },
];

const contacts = [
  { icon: MapPin, text: "Seluruh Indonesia (Remote)" },
  { icon: MessageCircle, text: "628XXXXXXXXXX" },
  { icon: Mail, text: "hello@gerobakweb.com" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-dark">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Truck className="text-secondary" size={24} />
              <span className="font-heading font-bold text-lg text-[hsl(0,0%,98%)]">
                Gerobak<span className="text-primary">Web</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Jasa Website untuk Usaha Kecil yang Mau Tampil Besar.
            </p>
            <p className="text-xs opacity-50 mt-2">
              Dikerjain langsung, bukan didelegate.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-heading font-semibold text-[hsl(0,0%,98%)] mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-sm opacity-70 hover:text-primary hover:opacity-100 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Paket */}
          <div>
            <h4 className="font-heading font-semibold text-[hsl(0,0%,98%)] mb-4">Paket</h4>
            <ul className="space-y-2">
              {paketLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)} className="text-sm opacity-70 hover:text-primary hover:opacity-100 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading font-semibold text-[hsl(0,0%,98%)] mb-4">Kontak</h4>
            <ul className="space-y-3">
              {contacts.map((c) => (
                <li key={c.text} className="flex items-start gap-2 text-sm opacity-70">
                  <c.icon size={16} className="text-primary shrink-0 mt-0.5" />
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[hsl(217,33%,18%)] mt-10 pt-6 text-center text-xs opacity-50">
          © 2025 GerobakWeb. Dibuat dengan kode dan kopi ☕
        </div>
      </div>
    </footer>
  );
};

export default Footer;
