import { motion } from "framer-motion";
import { Building2, ShieldCheck, TimerReset } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pv-section bg-background relative overflow-hidden">
      <div className="pv-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground">About us</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              A construction partner built on discipline.
            </h2>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Promising Venture is a leading construction firm based in Noida and Greater Noida
                delivering high-quality Hotel, residential, commercial, and infrastructure projects. With a
                focus on innovation, timely delivery, and client satisfaction, we combine skilled expertise
                and modern techniques to create durable, efficient structures. Committed to integrity and
                excellence, we build lasting relationships and contribute to Noida's urban growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safety culture",
                  desc: "Toolbox talks, audits, PPE compliance, and on-site discipline.",
                },
                {
                  icon: TimerReset,
                  title: "On-time delivery",
                  desc: "Structured schedules with practical sequencing and tracking.",
                },
                {
                  icon: Building2,
                  title: "Execution quality",
                  desc: "Standard checklists, approvals, and workmanship control.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl pv-glass p-6 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <c.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
