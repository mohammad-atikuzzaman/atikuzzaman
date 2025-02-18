import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen w-full mx-au">
      <Hero />
      <section className=" ">
        <About />
        <Skills />
        <Contact/>
        <Footer/>
      </section>
    </div>
  );
}
