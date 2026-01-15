import { motion } from "framer-motion";
import {
  HardHat,
  Compass,
  Cable,
  Building,
  Route,
  ClipboardCheck,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    title: "Civil Construction",
    icon: Building,
    desc: "RCC works, foundations, structural execution, finishing supervision.",
  },
  {
    title: "Infrastructure",
    icon: Route,
    desc: "Roads, drainage, culverts, internal development and site works.",
  },
  {
    title: "Project Planning",
    icon: Compass,
    desc: "Scheduling, BOQ coordination, procurement sequencing, risk planning.",
  },
  {
    title: "MEP Coordination",
    icon: Cable,
    desc: "Site coordination with MEP teams for clash-free execution.",
  },
  {
    title: "QA/QC Systems",
    icon: ClipboardCheck,
    desc: "Checklists, inspection points, approvals and documentation.",
  },
  {
    title: "Site Safety",
    icon: HardHat,
    desc: "PPE compliance, toolbox talks, audits, and incident prevention.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pv-section">
      <div className="pv-container">
        <AnimatedSection direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Services</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                What we deliver on-site.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              Practical execution — the kind that respects timelines, budgets, and real-world site constraints.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl pv-glass p-6 hover:shadow-xl transition-shadow"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 font-semibold text-lg">{s.title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
