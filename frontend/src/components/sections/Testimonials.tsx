import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "AKM Buildcon Pvt. Ltd.",
    position: "Construction of IT Park",
    company: "Plot No. A2, Sector – 136, Noida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&q=80",
    rating: 5,
    text: "Promising Ventures delivered our 2.2 lakh sq ft IT Park in Sector 136, Noida with exceptional quality. Their expertise in handling large-scale projects worth Rs. 9 Crore is commendable.",
  },
  {
    name: "Aman Netcom Pvt. Ltd.",
    position: "Construction of IT Park",
    company: "Plot No. A62, Sector – 136, Noida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&q=80",
    rating: 5,
    text: "The IT Park construction at Plot A62 was completed seamlessly. Their professionalism and attention to detail throughout the 1.8 lakh sq ft project was outstanding. Highly recommended.",
  },
  {
    name: "Bhole Baba Milk Food Industries Pvt. Ltd.",
    position: "Construction of IT Building",
    company: "Plot No. A113, Sector – 136, Noida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&q=80",
    rating: 4,
    text: "Our IT Building in Noida was built to perfection. Promising Ventures handled the 55,000 sq ft construction with great expertise and maintained excellent timelines.",
  },
  {
    name: "VAD Compusoft Pvt. Ltd.",
    position: "Construction of IT Building",
    company: "Plot No. A113, Sector – 136, Noida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&q=80",
    rating: 5,
    text: "Professional, reliable, and committed to excellence. The IT Building they constructed for us exceeded expectations. Their project management for our Rs. 7.8 Crore project was world-class.",
  },
  {
    name: "Greenwire Technologies",
    position: "Construction of IT Park",
    company: "Plot No. 166, Sector – 136, Noida",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&q=80",
    rating: 4,
    text: "The IT Park at Sector 136 was delivered with great precision. Their transparency in reporting and adherence to quality standards makes them a trusted partner.",
  },
  {
    name: "Ganadhipati Construction Pvt. Ltd.",
    position: "Construction of Hotel Lime Tree",
    company: "Plot No. A62, Ansal Golf Link, G.Noida",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=200&fit=crop&q=80",
    rating: 5,
    text: "The Hotel Lime Tree construction at Ansal Golf Link was executed flawlessly. Their expertise in hospitality projects and commitment to timelines is exceptional.",
  },
];

export default function Testimonials() {
  return (
    <section className="pv-section bg-muted/30">
      <div className="pv-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Testimonials</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Don't just take our word for it. Here's what industry leaders and partners have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl pv-glass p-8 hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-border/60 flex items-center justify-center mb-4">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
