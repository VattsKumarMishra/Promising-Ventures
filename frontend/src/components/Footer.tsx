import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="pv-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary/15 border border-border/60 flex items-center justify-center">
                <span className="font-display font-bold text-primary">PV</span>
              </div>
              <div>
                <div className="font-display font-bold">PROMISING VENTURES</div>
                <div className="text-xs text-muted-foreground">PVT LTD</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
              Building trust through quality construction, on-time delivery, and unwavering commitment 
              to safety across North India since 2009.
            </p>
            <div className="flex gap-3">
              <a 
                href="tel:+919911381483" 
                className="h-9 w-9 rounded-xl border border-border/60 pv-glass flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                title="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a 
                href="mailto:kumarjapesh1978@gmail.com" 
                className="h-9 w-9 rounded-xl border border-border/60 pv-glass flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                title="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="pv-link">About Us</a></li>
              <li><a href="#services" className="pv-link">Services</a></li>
              <li><a href="#projects" className="pv-link">Projects</a></li>
              <li><a href="#ongoing" className="pv-link">Ongoing Work</a></li>
              <li><a href="#plant" className="pv-link">Plant & Machinery</a></li>
              <li><a href="#team" className="pv-link">Our Team</a></li>
              <li><a href="#contact" className="pv-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Shop No. B41/9, Royal Plaza Market<br />
                  Sector-31, Noida, U.P 201301
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="tel:+919911381483" className="pv-link">+91 99113 81483</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="mailto:kumarjapesh1978@gmail.com" className="pv-link">kumarjapesh1978@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {currentYear} Promising Ventures Pvt Ltd. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
