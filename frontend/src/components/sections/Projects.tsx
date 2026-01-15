import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, IndianRupee, Maximize2, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const completedProjects = [
  {
    id: 1,
    client: "AKM Buildcon Pvt. Ltd.",
    title: "Construction of IT Park",
    location: "Plot No. A2, Sector – 136, Noida, U.P",
    value: "9.0 Crore",
    area: "2,20,000 SQFT",
    type: "IT Park",
    image: "/projects/it-park-a2.png"
  },
  {
    id: 2,
    client: "Aman Netcom Pvt. Ltd.",
    title: "Construction of IT Park",
    location: "Plot No. A62, Sector – 136, Noida, U.P",
    value: "6.5 Crore",
    area: "1,80,000 SQFT",
    type: "IT Park",
    image: "/projects/it-park-a62.png"
  },
  {
    id: 3,
    client: "Bhole Baba Milk Food Industries Pvt. Ltd.",
    title: "Construction of IT Park",
    location: "Plot No. A88, Sector – 136, Noida, U.P",
    value: "7.2 Crore",
    area: "55,000 SQFT",
    type: "IT Park",
    image: "/projects/it-park-a88.png"
  },
  {
    id: 4,
    client: "VAD Compusoft Pvt. Ltd.",
    title: "Construction of IT Park",
    location: "Plot No. A01A, Sector – 136, Noida, U.P",
    value: "7.8 Crore",
    area: "55,000 SQFT",
    type: "IT Park",
    image: "/projects/it-park-a01a.png"
  },
  {
    id: 5,
    client: "Greenwire Technologies",
    title: "Construction of IT Park",
    location: "Plot No. A166, Sector – 136, Noida, U.P",
    value: "1.35 Crore",
    area: "55,000 SQFT",
    type: "IT Park",
    image: "/projects/it-park-a166.png"
  },
  {
    id: 6,
    client: "Ganadhipati Construction Pvt. Ltd.",
    title: "Construction of IT Park",
    location: "Plot No. A113, Sector – 136, Noida, U.P",
    value: "1.20 Crore",
    area: "28,000 SQFT",
    type: "IT Park",
    image: "/projects/it-park-a113.png"
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerView = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % completedProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + completedProjects.length) % completedProjects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(completedProjects[(currentIndex + i) % completedProjects.length]);
    }
    return visible;
  };

  return (
    <section id="projects" className="pv-section">
      <div className="pv-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Our Portfolio</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Completed Projects
          </h2>
          <p className="mt-3 text-muted-foreground">
            A snapshot of projects completed with a focus on quality, timelines, and coordination.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? 1200 : -1200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -1200 : 1200, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="grid md:grid-cols-2 gap-6 w-full"
                >
                  {getVisibleProjects().map((project, i) => (
                    <motion.article
                      key={`${currentIndex}-${i}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-3xl pv-glass overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                    >
                      {/* Project Image */}
                      <div className="h-64 relative overflow-hidden border-b border-border/40">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-primary/10 to-orange-500/10">
                          <Building2 className="h-20 w-20 text-primary/20" />
                        </div>
                        <div className="absolute top-4 right-4 rounded-xl bg-background/80 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold border border-border/60">
                          {project.type}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                          {project.client}
                        </div>
                        
                        <h3 className="font-display text-xl font-bold mb-3 leading-tight">
                          {project.title}
                        </h3>

                        <div className="flex items-start gap-2 text-muted-foreground mb-5">
                          <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed">{project.location}</span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-muted/50 border border-border/40 p-3 hover:bg-muted/70 transition-colors">
                            <div className="flex items-center gap-2 mb-1">
                              <IndianRupee className="h-3.5 w-3.5 text-primary" />
                              <span className="text-xs text-muted-foreground font-medium">Value</span>
                            </div>
                            <div className="font-display font-bold text-base">₹{project.value}</div>
                          </div>

                          <div className="rounded-xl bg-muted/50 border border-border/40 p-3 hover:bg-muted/70 transition-colors">
                            <div className="flex items-center gap-2 mb-1">
                              <Maximize2 className="h-3.5 w-3.5 text-primary" />
                              <span className="text-xs text-muted-foreground font-medium">Area</span>
                            </div>
                            <div className="font-display font-bold text-base">{project.area}</div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <span className="inline-flex items-center gap-2 text-sm">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-muted-foreground font-medium">Successfully Completed</span>
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-xl z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-xl z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {completedProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-1">{completedProjects.length}</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-1">₹33+ Cr</div>
              <div className="text-sm text-muted-foreground">Total Project Value</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary mb-1">8+ Lakh</div>
              <div className="text-sm text-muted-foreground">Sq.Ft Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
