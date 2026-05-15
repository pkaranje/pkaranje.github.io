import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
