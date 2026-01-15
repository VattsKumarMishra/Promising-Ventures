import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
      bio: "30+ years in construction industry, visionary leader",
      email: "rajesh@promisingventures.in",
    },
    {
      name: "Priya Sharma",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
      bio: "Expert in project management and business strategy",
      email: "priya@promisingventures.in",
    },
    {
      name: "Amit Verma",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80",
      bio: "Specialized in operational excellence and quality control",
      email: "amit@promisingventures.in",
    },
  ];

  const departments = [
    {
      title: "Executive Leadership",
      count: 3,
      description: "Visionary leaders driving company strategy",
    },
    {
      title: "Project Managers",
      count: 15,
      description: "Certified professionals managing site operations",
    },
    {
      title: "Engineering Team",
      count: 50,
      description: "Civil, structural, and MEP engineers",
    },
    {
      title: "Quality & Safety",
      count: 12,
      description: "Ensuring compliance and safety standards",
    },
    {
      title: "Site Supervisors",
      count: 30,
      description: "Experienced supervisors overseeing execution",
    },
    {
      title: "Support Staff",
      count: 40,
      description: "Admin, HR, finance, and logistics",
    },
  ];

  return (
    <section id="team" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Meet the <span className="gradient-text">People Behind Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our diverse team of experts brings together decades of experience and passion for excellence.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-center mb-10">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-display font-bold mb-1">{member.name}</h4>
                    <p className="text-sm text-primary font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-10">Team Structure</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all text-center"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">{dept.count}</div>
                <h4 className="text-lg font-display font-bold mb-2">{dept.title}</h4>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-display font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence. 
            Explore career opportunities at Promising Ventures.
          </p>
          <a
            href="mailto:careers@promisingventures.in"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-primary/50"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
