import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { q: "Apa itu GerobakWeb?", a: "Jasa website personal — bukan agency, langsung dikerjain sendiri. Lebih cepat, lebih personal, lebih hemat." },
  { q: "Berapa lama website jadi?", a: "Tergantung paket. Mini Web bisa 1–3 hari. Starter 3–5 hari. Standard sekitar 5–7 hari kerja." },
  { q: "Domain dan hosting include tidak?", a: "Belum termasuk. Tapi gw bantu setup dan rekomendasiin platform hosting yang paling hemat sesuai kebutuhan kamu — bahkan ada yang gratis." },
  { q: "Bisa revisi tidak?", a: "Bisa. Mini Web 1x revisi, Starter 2x, Standard 3x. Revisi di luar ketentuan bisa diskusi." },
  { q: "Kalau nanti mau update konten gimana?", a: "Gw ajarin cara updatenya kalau memungkinkan, atau bisa hubungi gw lagi untuk perubahan konten dengan biaya yang sangat terjangkau." },
  { q: "Apakah website bisa dibuka di HP?", a: "Ya, semua paket sudah mobile friendly dan diuji di berbagai ukuran layar." },
  { q: "Cara pembayarannya bagaimana?", a: "50% di awal sebagai tanda jadi, 50% setelah website selesai dan kamu setuju dengan hasilnya." },
  { q: "Melayani seluruh Indonesia?", a: "Ya! Semua dikerjain remote, jadi kamu di mana aja tetap bisa gw bantu." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="px-4 py-20 lg:py-28 bg-muted/50">
      <div className="section-container max-w-3xl" ref={ref}>
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Pertanyaan yang Sering <span className="gradient-text">Ditanya</span>
          </h2>
          <p className="text-muted-foreground">Kalau pertanyaan kamu tidak ada di sini, langsung chat aja.</p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg bg-card px-5 data-[state=open]:border-primary/50">
                <AccordionTrigger className="text-left font-heading font-semibold text-card-foreground hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
