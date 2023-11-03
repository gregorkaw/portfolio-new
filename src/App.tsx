import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import { useRef } from "react";
import Projects from "./sections/Projects";

function App() {
  const projects = useRef<HTMLElement>(null);
  const cs = useRef<HTMLElement>(null);
  const heropage = useRef<HTMLElement>(null);

  const handleHeroScroll = () => {
    window.scrollTo({
      top: heropage.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleProjectsScroll = () => {
    window.scrollTo({
      top: projects.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCSScroll = () => {
    window.scrollTo({
      top: cs.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <Navbar
          handleProjectsScroll={handleProjectsScroll}
          handleCSScroll={handleCSScroll}
          handleHeroScroll={handleHeroScroll}
        />
      </nav>
      <section ref={heropage}>
        <Hero handleProjectsScroll={handleProjectsScroll} />
      </section>
      <section ref={projects}>
        <Projects />
      </section>
      <section ref={cs}>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
