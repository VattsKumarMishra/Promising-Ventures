import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Home,
  Factory,
  HardHat,
  Ruler,
  Wrench,
  Lightbulb,
  Shield,
} from "lucide-react";

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description:
        "State-of-the-art commercial complexes, office buildings, and retail spaces designed for modern businesses.",
      features: ["High-rise buildings", "Shopping malls", "Corporate offices"],
    },
    {
      icon: Home,
      title: "Residential Projects",
      description:
        "Luxury apartments, villas, and housing societies that redefine comfortable living.",
      features: ["Luxury villas", "Apartment complexes", "Gated communities"],
    },
    {
      icon: Factory,
      title: "Infrastructure Development",
      description:
        "Roads, bridges, and public infrastructure that connect communities and drive progress.",
      features: ["Highway construction", "Bridge engineering", "Urban development"],
    },
    {
      icon: HardHat,
      title: "Project Management",
      description:
        "End-to-end project management services ensuring timely delivery and quality execution.",
      features: ["Timeline management", "Budget control", "Quality assurance"],
    },
    {
      icon: Ruler,
      title: "Design & Planning",
      description:
        "Innovative architectural design and meticulous planning for every construction phase.",
      features: ["3D modeling", "Structural design", "Site planning"],
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description:
        "Transform existing structures with our expert renovation and modernization services.",
      features: ["Interior remodeling", "Structural upgrades", "Modernization"],
    },
    {
      icon: Lightbulb,
      title: "Consulting Services",
      description:
        "Expert consultation for construction feasibility, cost estimation, and technical guidance.",
      features: ["Feasibility studies", "Cost estimation", "Technical audits"],
    },
    {
      icon: Shield,
      title: "Quality Control",
      description:
        "Rigorous quality control measures ensuring every project meets international standards.",
      features: ["Material testing", "Safety compliance", "ISO certified processes"],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Comprehensive Construction{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to completion, we offer a full spectrum of construction services tailored
            to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-primary/50"
          >
            Request a Consultation
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
