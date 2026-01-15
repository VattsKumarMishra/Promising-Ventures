import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Ongoing from "@/components/sections/Ongoing";
import PlantMachinery from "@/components/sections/PlantMachinery";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <Projects />
        <Ongoing />
        <PlantMachinery />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
