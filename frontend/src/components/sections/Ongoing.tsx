import { motion } from "framer-motion";
import { MapPin, IndianRupee, Maximize2, Building2 } from "lucide-react";

const ongoingProjects = [
  {
    id: 1,
    client: "Ganadhipati Construction Pvt. Ltd.",
    title: "Hyatt Hotel with Mall Construction Project",
    location: "Plot No. C3, Sector – Pi-01, Greater Noida, U.P",
    value: "10 Crore",
    area: "3,50,000 SQFT",
    image: "/projects/hyatt-hotel.jpg.png",
    progress: 65,
    status: "In Progress"
  }
];

export default function Ongoing() {
  return (
    <section id="ongoing" className="pv-section bg-muted/30">
      <div className="pv-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Live Progress</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Projects Under Construction
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real-time updates from our active construction sites. Transparency is the foundation of trust.
          </p>
        </div>

        <div className="grid gap-6">
          {ongoingProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl pv-glass overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-[400px_1fr] gap-0">
                {/* Image Section */}
                <div className="h-72 lg:h-full bg-muted/40 relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><svg class="h-16 w-16 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>';
                    }}
                  />

                  {/* Status Badge */}
                  <div className="absolute bottom-6 left-6 rounded-xl bg-black/60 backdrop-blur-md px-4 py-2 text-white border border-white/20">
                    <div className="text-sm font-semibold">{project.status}</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">
                      {project.client}
                    </div>
                    
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex items-start gap-2 text-muted-foreground mb-6">
                      <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{project.location}</span>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-muted/50 border border-border/60 p-4 hover:bg-muted/70 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IndianRupee className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">Project Value</span>
                      </div>
                      <div className="font-display font-bold text-xl">₹{project.value}</div>
                    </div>

                    <div className="rounded-2xl bg-muted/50 border border-border/60 p-4 hover:bg-muted/70 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Maximize2 className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">Total Area</span>
                      </div>
                      <div className="font-display font-bold text-xl">{project.area}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
