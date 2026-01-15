import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, TrendingUp, Clock } from "lucide-react";
import { api } from "@/lib/api";

interface OngoingProject {
  _id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  expectedCompletion: string;
  progress: number;
  category: string;
  imageUrl: string;
  clientName?: string;
}

const OngoingProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projects, setProjects] = useState<OngoingProject[]>([]);

  useEffect(() => {
    api.getOngoingProjects().then((data) => setProjects(data || [])).catch(() => setProjects([]));
  }, []);

  return (
    <section id="ongoing" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Ongoing Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Projects <span className="gradient-text">In Progress</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Track our current developments as we continue to build tomorrow's landmarks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Progress Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="font-bold text-sm">{project.progress}%</span>
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  {project.category}
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Project Progress</span>
                    <span className="font-bold text-primary">{project.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${project.progress}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Start Date
                    </div>
                    <div className="font-semibold text-sm">
                      {new Date(project.startDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Expected Completion
                    </div>
                    <div className="font-semibold text-sm">
                      {new Date(project.expectedCompletion).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {project.clientName && (
                  <div className="pt-4 border-t border-border text-sm">
                    <span className="text-muted-foreground">Client: </span>
                    <span className="font-semibold">{project.clientName}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No ongoing projects at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
