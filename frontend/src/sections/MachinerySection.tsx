import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Truck, Wrench, Hammer, Cog, Drill, Crane } from "lucide-react";

const MachinerySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const machinery = [
    {
      icon: Crane,
      name: "Tower Cranes",
      count: "12+",
      description: "High-capacity tower cranes for multi-story construction",
      specs: ["50m reach", "10T capacity", "Latest models"],
    },
    {
      icon: Truck,
      name: "Concrete Mixers",
      count: "25+",
      description: "Modern transit mixers ensuring quality concrete delivery",
      specs: ["6-10 cubic meters", "GPS tracking", "Automated batching"],
    },
    {
      icon: Drill,
      name: "Piling Equipment",
      count: "8+",
      description: "Advanced foundation drilling and piling machinery",
      specs: ["Deep foundation", "Rotary drilling", "Hydraulic systems"],
    },
    {
      icon: Wrench,
      name: "Excavators",
      count: "18+",
      description: "Heavy-duty excavators for earthmoving and site preparation",
      specs: ["20-40T capacity", "GPS-guided", "Fuel efficient"],
    },
    {
      icon: Hammer,
      name: "Compactors & Rollers",
      count: "15+",
      description: "Soil and asphalt compaction equipment",
      specs: ["Vibratory rollers", "Pneumatic", "Static weight"],
    },
    {
      icon: Cog,
      name: "Specialized Tools",
      count: "100+",
      description: "Comprehensive range of power tools and equipment",
      specs: ["Power tools", "Safety equipment", "Quality testing gear"],
    },
  ];

  return (
    <section id="machinery" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Plant & Machinery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            State-of-the-Art <span className="gradient-text">Equipment Fleet</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our extensive fleet of modern machinery ensures efficient, safe, and timely project execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold text-primary">{item.count}</div>
                    <div className="text-xs text-muted-foreground">Units</div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1.5">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "100%", label: "Equipment Uptime" },
            { value: "24/7", label: "Maintenance Support" },
            { value: "ISO", label: "Quality Certified" },
            { value: "100+", label: "Total Fleet Size" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-muted/50 rounded-2xl">
              <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MachinerySection;
