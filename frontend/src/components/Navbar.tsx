import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Ongoing", href: "#ongoing" },
  { label: "Machinery", href: "#plant" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "backdrop-blur-xl bg-background/98 border-b border-border/60 shadow-xl py-2" 
        : "backdrop-blur-md bg-background/80 border-b border-border/30 shadow-md py-3"
    )}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
            <div className={cn(
              "rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 bg-white flex items-center justify-center",
              scrolled ? "h-12 w-12" : "h-14 w-14"
            )}>
              <img 
                src="/logo.svg" 
                alt="Promising Ventures Logo" 
                className={cn("object-contain transition-all", scrolled ? "h-10 w-10" : "h-12 w-12")}
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src.endsWith('.svg')) {
                    img.src = '/logo.png';
                  } else if (img.src.endsWith('.png')) {
                    img.src = '/logo.jpg';
                  } else {
                    img.style.display = 'none';
                    img.parentElement!.innerHTML = '<span class="font-display font-bold text-xl text-primary flex items-center justify-center h-full">PV</span>';
                  }
                }}
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className={cn(
                "font-display font-bold tracking-tight group-hover:text-primary transition-all duration-300",
                scrolled ? "text-base" : "text-lg"
              )}>PROMISING VENTURES</div>
              <div className="text-[10px] text-muted-foreground/80">Building Your Vision with Promise</div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className="relative px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full border border-border/40 bg-background/50 hover:bg-background hover:border-border transition-all flex items-center justify-center"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-5 py-2 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </a>

            <button
              type="button"
              className="lg:hidden h-9 w-9 rounded-full border border-border/40 bg-background/50 hover:bg-background transition-all flex items-center justify-center"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-2xl pv-glass p-4">
            <div className="grid gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="pv-link text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
