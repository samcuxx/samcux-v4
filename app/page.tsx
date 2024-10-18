

import About from "../components/About";
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from "../components/Footer";
import HomeWrapper from '../components/HomeWrapper';

export default function Home() {
  return (
    <HomeWrapper>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </HomeWrapper>
  );
}
