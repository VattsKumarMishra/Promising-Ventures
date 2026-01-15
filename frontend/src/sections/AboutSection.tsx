import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Award, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "500+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Client Support" },
    { icon: Target, value: "100%", label: "Quality Assurance" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Building Tomorrow's Infrastructure,{" "}
            <span className="gradient-text">Today</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Promising Ventures Pvt Ltd is a leading construction company based in Noida, India. With
            over 15 years of expertise, we specialize in delivering world-class residential,
            commercial, and infrastructure projects that stand the test of time.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2009, Promising Ventures emerged from a vision to revolutionize the
                construction industry in North India. What started as a small team of passionate
                engineers has grown into a trusted name, synonymous with quality, innovation, and
                timely delivery.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every structure we build is not just concrete and steel, but a
                testament to our commitment to excellence. Our approach combines traditional
                craftsmanship with modern technology, ensuring that every project exceeds
                expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&h=600&fit=crop&q=80"
                alt="Construction site"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-display font-bold text-primary mb-1">ISO</div>
              <div className="text-sm text-muted-foreground">Certified Company</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
