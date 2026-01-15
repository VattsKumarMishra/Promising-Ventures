import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  User, 
  Award, 
  Mail,
  GraduationCap,
  Building2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const keyStaff = [
  { name: "Deepak Kumar", qualification: "B.Tech", position: "GM", experience: "13" },
  { name: "Shivam Singh", qualification: "B.Tech", position: "PM", experience: "12" },
  { name: "Sameer Raj", qualification: "B.Tech", position: "Manager", experience: "8" },
  { name: "Sushil", qualification: "Diploma", position: "Engineer", experience: "11" },
  { name: "Hariom", qualification: "Diploma", position: "Foreman", experience: "25" },
  { name: "Manish Sharma", qualification: "Diploma", position: "Foreman", experience: "10" },
  { name: "Robin Kumar", qualification: "Diploma", position: "Foreman", experience: "10" },
  { name: "Sujeet Shrivastav", qualification: "Diploma", position: "Procurement", experience: "5" },
  { name: "Sanjeev Yadav", qualification: "Graduate", position: "Supervisor", experience: "5" },
  { name: "Sushil Kumar Yadav", qualification: "Graduate", position: "Supervisor", experience: "3" },
  { name: "Sunil Jha", qualification: "B.Com", position: "Sr. Accountant", experience: "20" }
];

const architects = [
  "M/s Andleys Associates Pvt. Ltd.",
  "M/s Modarch India",
  "M/s RKS Architects",
  "M/s Node Urban Labs",
  "M/s Quick Bricks",
  "M/s PNG Designs Consulting LLP",
  "M/s I.M.P.R.E.S.S.I.O.N.S"
];

const stats = [
  { value: "150+", label: "Team Members" },
  { value: "25+", label: "Senior Engineers" },
  { value: "20+", label: "Years Experience" },
  { value: "7", label: "Partner Architects" },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerView = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % keyStaff.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + keyStaff.length) % keyStaff.length);
  };

  const getVisibleStaff = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(keyStaff[(currentIndex + i) % keyStaff.length]);
    }
    return visible;
  };

  return (
    <section id="team" className="pv-section bg-muted/30">
      <div className="pv-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Our People</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            The Team Behind Every Structure
          </h2>
          <p className="mt-3 text-muted-foreground">
            Experienced professionals committed to excellence, safety, and delivering
            projects that exceed expectations.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl pv-glass p-6 text-center"
            >
              <div className="text-3xl font-display font-bold text-primary mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Management Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl pv-glass p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Our Management</h3>
                <p className="text-sm text-muted-foreground">Leadership with Vision & Experience</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The cornerstone of Promising Ventures success is our highly skilled management team,
                led by a seasoned professional boasting over 20 years of extensive experience in the
                construction sector. Equipped with a B.Tech degree from one of India's premier institutes
                (NIT), our leadership combines strong technical expertise with strategic business acumen.
              </p>
              <p>
                This blend of advanced engineering knowledge and hands-on industry experience enables
                the management to oversee complex projects efficiently, ensuring adherence to quality
                standards, safety protocols, and regulatory compliances. Their visionary approach fosters
                innovation, operational excellence, and sustainable construction practices, driving the
                organization towards consistent growth and market leadership.
              </p>
              <p>
                Committed to upholding transparency, ethics, and client-centric values, our management
                team cultivates a culture of collaboration and continuous improvement, inspiring our
                workforce to deliver superior results and exceed client expectations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Staff Carousel */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Key Personnel</h3>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div className="relative min-h-[280px] flex items-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="grid md:grid-cols-3 gap-6 w-full"
                  >
                    {getVisibleStaff().map((staff, i) => (
                      <div
                        key={`${currentIndex}-${i}`}
                        className="rounded-2xl pv-glass p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shrink-0">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-lg leading-tight mb-1">
                              {staff.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {staff.qualification}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Position</span>
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                              {staff.position}
                            </span>
                          </div>
                          <div className="flex items-center justify-between pt-3 border-t border-border/40">
                            <span className="text-sm text-muted-foreground">Experience</span>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-display font-bold text-primary">
                                {staff.experience}
                              </span>
                              <span className="text-xs text-muted-foreground">Years</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 rounded-full bg-background border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {keyStaff.map((_, i) => (
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
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Architects Section */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Partner Architects</h3>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl pv-glass p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold">Collaborative Expertise</h4>
                <p className="text-sm text-muted-foreground">Working with leading architectural firms</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {architects.map((firm, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl border border-border/60 p-4 hover:bg-muted/30 hover:shadow-lg transition-all flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-medium text-sm leading-tight">{firm}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 p-8 text-center"
        >
          <div className="h-14 w-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
            <Award className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">Join Our Growing Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented engineers, site supervisors, and construction professionals 
            who share our commitment to excellence.
          </p>
          <a
            href="mailto:kumarjapesh1978@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-shadow"
          >
            <Mail className="h-4 w-4" />
            kumarjapesh1978@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
