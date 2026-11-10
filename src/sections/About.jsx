
import { motion } from 'framer-motion';
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket
} from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building modern and responsive websites.'
  },
  {
    icon: GraduationCap,
    title: 'Computer Science',
    description: 'Learning computer science and engineering.'
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description: 'Exploring ideas and solving problems.'
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Improving my skills through projects.'
  }
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">GET TO KNOW ME</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A little introduction about my journey,
            passion and ambitions.
          </p>
        </div>

        <div className="about-layout">

          <motion.div
            className="about-main glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-number">01 / ABOUT</span>

            <h3>
              Hello! I'm <span className="gradient-text">
                Mohamed Thajeem
              </span>
            </h3>

            <p>
              I'm a Computer Science Engineering student
              at Ponjesly College of Engineering and an
              enthusiastic web developer who loves
              creating attractive, responsive and
              interactive digital experiences.
            </p>

            <p>
              I have over 2 years of learning experience
              and have completed 5+ projects. I enjoy
              exploring modern technologies, developing
              creative solutions and continuously
              improving my technical skills.
            </p>

            <p>
              My goal is to grow as a skilled developer
              and build meaningful digital products
              through creativity and innovation.
            </p>

            <div className="about-tags">
              <span>Web Development</span>
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="highlight-card glass-card"
                  key={item.title}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="highlight-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
