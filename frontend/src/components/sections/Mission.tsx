import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

export default function Mission() {
  return (
    <section className="pv-section bg-muted/30">
      <div className="pv-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl pv-glass p-8"
          >
            <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To establish Promising Venture Pvt. Ltd. as the premier construction contracting firm by
              consistently delivering superior quality, innovative, and sustainable building solutions —
              executed with uncompromising safety, integrity, and efficiency. We aim to exceed client
              expectations through timely project delivery, cutting-edge technology, and a skilled
              workforce, contributing to the dynamic growth and development of Noida and beyond.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl pv-glass p-8"
          >
            <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Promising Ventures, our mission is to deliver end-to-end construction contracting
              solutions that set benchmarks for quality, innovation, and reliability in the industry. We are
              dedicated to:
            </p>
            <div className="space-y-4">
              {[
                "Translating client visions into exceptional projects through expert engineering, detailed project management, and transparent communication.",
                "Maintaining the highest standards of safety, regulatory compliance, and ethical business conduct on every site.",
                "Leveraging modern construction technologies and sustainable practices to achieve long-lasting value and environmental responsibility.",
                "Fostering a collaborative, growth-oriented culture that empowers our team and contributes positively to the communities we serve.",
                "Ensuring that every project we undertake enhances our clients' trust and supports the ongoing development of Noida's urban landscape."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
