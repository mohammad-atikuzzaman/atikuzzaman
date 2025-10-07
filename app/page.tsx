import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atikuzzaman | MERN Stack Developer | Portfolio",
  description: "Atikuzzaman - Professional MERN Stack Developer. Expert in React.js, Node.js, Express.js, and MongoDB.",
};

export default function Home() {
  return (
    <main className="pt-16 lg:pt-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
