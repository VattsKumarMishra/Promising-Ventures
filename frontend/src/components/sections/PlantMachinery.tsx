import { motion } from "framer-motion";
import { 
  Hammer, 
  Truck, 
  Gauge, 
  Cog, 
  Container, 
  Wrench,
  BadgeCheck,
  Zap,
  FlaskConical,
  HardHat
} from "lucide-react";

const constructionEquipment = [
  { name: "Cutting Machine", icon: Wrench },
  { name: "Bending Machine", icon: Cog },
  { name: "Mixture Machine", icon: Container },
  { name: "Tractor", icon: Truck },
  { name: "Trolley", icon: Truck },
  { name: "Water Tanker", icon: Truck }
];

const laboratoryEquipment = [
  "100 tone Compression Testing Machine",
  "Slump Cones",
  "Sieves as per IS 460-1962",
  "Weigh Balances",
  "Gas Burners",
  "Cube Moulds",
  "Core-Cutter Machine"
];

const shutteringEquipment = [
  "PVC Shuttering",
  "Props Telescopic adjustable Jack type",
  "Box type Steel Spans Telescopic adjustable",
  "Steel pipes with clamps & Appurtenances"
];

const transportEquipment = [
  "Tower Crane",
  "Monkey Crane",
  "Builder Hoist"
];

const workshopEquipment = [
  "Welding Machine",
  "Grinders",
  "Drillers",
  "Gas Cutting Equipment's",
  "Concrete Breaker",
  "Core Cutters"
];

const dewateringEquipment = [
  "Submersible Pumps",
  "Diesel Pump - 5 HP",
  "Electric Mono block Pumps",
  "Leveling Theodolite"
];

const features = [
  {
    icon: BadgeCheck,
    title: "Regular Maintenance",
    desc: "All equipment undergoes preventive maintenance schedules to ensure optimal performance."
  },
  {
    icon: Gauge,
    title: "Hi-Tech Machinery",
    desc: "Well equipped with modern Hi-Tech machinery to undertake major construction projects."
  },
  {
    icon: FlaskConical,
    title: "Field Laboratory",
    desc: "Complete on-site testing equipment for quality assurance and compliance."
  },
  {
    icon: Zap,
    title: "Quick Deployment",
    desc: "Rapid mobilization of equipment to project sites across Noida and Greater Noida."
  },
];

export default function PlantMachinery() {
  return (
    <section id="plant" className="pv-section">
      <div className="pv-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Equipment Fleet</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Plant & Machinery
          </h2>
          <p className="mt-3 text-muted-foreground">
            The company today has a very broad based construction background and is fully equipped to undertake 
            major construction projects and is well equipped with Hi-Tech machinery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl pv-glass p-5 hover:shadow-lg transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-border/60 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-semibold text-sm mb-1">{f.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Construction Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="rounded-3xl pv-glass p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                <Hammer className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Construction Equipment</h3>
                <p className="text-xs text-muted-foreground">Core machinery for site operations</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {constructionEquipment.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl border border-border/60 p-4 hover:bg-muted/30 transition-colors flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="font-medium text-sm">{item.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid of Equipment Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Field Laboratory Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl pv-glass p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                <FlaskConical className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Field Laboratory Equipment</h3>
                <p className="text-xs text-muted-foreground">Quality testing & compliance</p>
              </div>
            </div>
            <div className="space-y-2">
              {laboratoryEquipment.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-lg border border-border/60 px-4 py-2.5 hover:bg-muted/30 transition-colors text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Shuttering & Scaffolding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl pv-glass p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                <HardHat className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Shuttering & Scaffolding</h3>
                <p className="text-xs text-muted-foreground">Formwork systems</p>
              </div>
            </div>
            <div className="space-y-2">
              {shutteringEquipment.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-lg border border-border/60 px-4 py-2.5 hover:bg-muted/30 transition-colors text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transport Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl pv-glass p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                <Container className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Transport Equipment</h3>
                <p className="text-xs text-muted-foreground">Material handling</p>
              </div>
            </div>
            <div className="space-y-2">
              {transportEquipment.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-lg border border-border/60 px-4 py-2.5 hover:bg-muted/30 transition-colors text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workshop Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl pv-glass p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Workshop Equipment</h3>
                <p className="text-xs text-muted-foreground">Fabrication & repair</p>
              </div>
            </div>
            <div className="space-y-2">
              {workshopEquipment.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-lg border border-border/60 px-4 py-2.5 hover:bg-muted/30 transition-colors text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dewatering Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6"
        >
          <div className="rounded-3xl pv-glass p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Dewatering Equipment</h3>
                <p className="text-xs text-muted-foreground">Water management systems</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {dewateringEquipment.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-lg border border-border/60 px-4 py-2.5 hover:bg-muted/30 transition-colors text-sm text-center"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 p-8 text-center"
        >
          <h3 className="font-display text-2xl font-bold mb-3">
            Need Equipment for Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer equipment rental services for external projects. Contact us for availability and rates.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-shadow"
          >
            Get Equipment Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
