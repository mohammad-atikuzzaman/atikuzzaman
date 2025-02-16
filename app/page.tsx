import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full mx-au">
      <Hero />
      <section className="max-w-screen-xl mx-auto">
        <About />
      </section>
    </div>
  );
}
