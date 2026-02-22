import { useState, useEffect } from "react";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = localStorage.getItem("gw-countdown-end");
    if (stored) {
      const diff = Math.max(0, Math.floor((Number(stored) - Date.now()) / 1000));
      return diff;
    }
    const end = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem("gw-countdown-end", String(end));
    return 7 * 24 * 60 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const units = [
    { value: days, label: "Hari" },
    { value: hours, label: "Jam" },
    { value: minutes, label: "Menit" },
    { value: seconds, label: "Detik" },
  ];

  return (
    <section className="px-4 gradient-primary py-6">
      <div className="section-container text-center">
        <p className="text-primary-foreground font-semibold text-lg mb-3">
          ⚡ Promo Harga Perdana Berakhir Dalam:
        </p>
        <div className="flex justify-center gap-3 sm:gap-5">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="bg-background/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-3 min-w-[56px] animate-pulse-ring">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-primary-foreground tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs text-primary-foreground/80 mt-1 font-medium">{unit.label}</span>
            </div>
          ))}
        </div>
        <p className="text-primary-foreground/80 text-sm mt-3">
          Dapatkan harga terbaik sebelum promo berakhir!
        </p>
      </div>
    </section>
  );
};

export default CountdownBanner;
