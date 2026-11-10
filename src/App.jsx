
import { motion } from 'framer-motion';

import Scene3D from './three/Scene3D';
import Navbar from './components/Navbar';
import About from './sections/About';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import ProfileVisual from './components/ProfileVisual';

function App() {
  return (
    <main className="portfolio">

      <Loader />

      <Scene3D />

      <Navbar />

      <section className="hero-section" id="home">

        <div className="container hero-layout">

          {/* LEFT CONTENT */}

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="hero-label">
              ✦ WELCOME TO MY DIGITAL WORLD
            </p>

            <h1 className="hero-heading">
              MOHAMED
              <br />
              <span className="gradient-text">
                THAJEEM A T
              </span>
            </h1>

            <h2 className="hero-role">
              Creative Web Developer
            </h2>

            <p className="hero-description">
              I'm a Computer Science Engineering student
              passionate about building beautiful,
              interactive and modern digital experiences
              using modern web technologies.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Contact Me
              </a>

            </div>

            <div className="hero-stats">
              <div>
                <strong>02+</strong>
                <span>Years Learning</span>
              </div>

              <div>
                <strong>05+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>05+</strong>
                <span>Technologies</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT VISUAL */}

          <div className="hero-visual">
            <ProfileVisual />
          </div>

        </div>

      </section>

      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />

      <ScrollToTop />

    </main>
  );
}

export default App;
