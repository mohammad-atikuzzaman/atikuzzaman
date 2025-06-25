import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/skills/Skills";


export default function Home() {
  return (
    <div className="min-h-screen w-full mx-au">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
