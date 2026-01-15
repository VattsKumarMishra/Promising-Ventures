import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/cn";

type QuoteItem = {
  text: string;
  author?: string;
};

const QUOTES: QuoteItem[] = [
  {
    text: "We don’t build structures. We build trust that lasts decades.",
    author: "PROMISING VENTURES",
  },
  {
    text: "Safety is not a slogan—it's our daily discipline.",
    author: "Site Leadership",
  },
  {
    text: "The real finish is on-time delivery with zero compromise.",
    author: "Project Team",
  },
  {
    text: "Strong foundations are made of clarity, planning, and workmanship.",
    author: "Engineering",
  },
];

const HERO_IMAGES = [
  // Publicly hosted photos (replace with your own)
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80",
];

function useRotatingIndex(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return index;
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const quoteIndex = useRotatingIndex(QUOTES.length, 6500);
  const imageIndex = useRotatingIndex(HERO_IMAGES.length, 8000);

  const q = QUOTES[quoteIndex];
  const bg = HERO_IMAGES[imageIndex];

  const highlight = useMemo(() => {
    const parts = ["PROMISING", "VENTURES", "NOIDA", "QUALITY", "SAFETY"];
    return parts[Math.floor(Math.random() * parts.length)];
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
        {/* Dark overlay with warm gradient - adaptive for light/dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/60 dark:from-black/70 dark:via-black/50 dark:to-background" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,#000_70%,transparent_100%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </motion.div>

      <motion.div className="pv-container relative pt-32 sm:pt-36" style={{ opacity }}>
        <div className="pv-section">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/25 text-white">
                <span className="h-2 w-2 rounded-full bg-primary animate-soft-float" />
                Noida • Civil & Infrastructure
              </div>

              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Building what the city relies on.
              </h1>
              <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
                PROMISING VENTURES PVT LTD delivers construction and infrastructure projects with
                disciplined execution, transparent reporting, and on-ground safety culture.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "rounded-xl bg-primary text-primary-foreground px-5 py-3",
                    "font-semibold shadow-sm hover:shadow-md transition-shadow"
                  )}
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className={cn(
                    "inline-flex items-center justify-center",
                    "rounded-xl border border-white/30 bg-black/20 dark:bg-white/10 px-5 py-3",
                    "text-white font-semibold hover:bg-black/30 dark:hover:bg-white/15 transition-colors backdrop-blur-md"
                  )}
                >
                  Discuss a Tender
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { k: "Quality", v: "ISO-aligned processes" },
                  { k: "Safety", v: "Toolbox talks + audits" },
                  { k: "Delivery", v: "Milestone-driven plans" },
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/25 p-4 text-white">
                    <div className="text-xs text-white/80">{m.k}</div>
                    <div className="mt-1 font-semibold">{m.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-black/25 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/25 p-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-black/20 dark:bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70">Refreshing thought</div>
                    <motion.blockquote
                      key={quoteIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-2 text-lg leading-relaxed"
                    >
                      “{q.text}”
                    </motion.blockquote>
                    <div className="mt-3 text-sm text-white/70">— {q.author ?? ""}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
                  <div className="text-xs text-white/70">Today’s focus</div>
                  <div className="mt-1 font-semibold">{highlight}</div>
                  <div className="mt-2 text-sm text-white/70">
                    Plan the work. Work the plan. Document the progress.
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "Noida", l: "Base" },
                    { v: "Civil", l: "Core" },
                    { v: "Infra", l: "Scope" },
                  ].map((x) => (
                    <div key={x.l} className="rounded-2xl bg-black/25 border border-white/10 p-3">
                      <div className="text-sm font-semibold">{x.v}</div>
                      <div className="text-xs text-white/70">{x.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
