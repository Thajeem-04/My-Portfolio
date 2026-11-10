
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Terminal,
  Sparkles
} from 'lucide-react';

const skills = [
  {
    name: 'HTML5',
    category: 'Web Structure',
    description: 'Building semantic and accessible web pages.',
    icon: Code2,
    color: '#E87945'
  },
  {
    name: 'CSS3',
    category: 'Web Styling',
    description: 'Creating responsive and beautiful layouts.',
    icon: Palette,
    color: '#429BFF'
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    description: 'Developing interactive web experiences.',
    icon: Braces,
    color: '#E8C84A'
  },
  {
    name: 'React.js',
    category: 'Frontend',
    description: 'Building reusable component-based interfaces.',
    icon: Atom,
    color: '#55D8EF'
  },
  {
    name: 'Python',
    category: 'Programming',
    description: 'Writing clean and practical Python programs.',
    icon: Terminal,
    color: '#70C99B'
  }
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            MY TECHNICAL EXPERTISE
          </span>

          <h2 className="section-title">
            Skills & <span className="gradient-text">
              Technologies
            </span>
          </h2>

          <p className="section-subtitle">
            Technologies I'm learning and using to
            create modern digital experiences.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                className="skill-card glass-card"
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12
                }}
                whileHover={{
                  y: -12,
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.03
                }}
              >
                <div
                  className="skill-icon"
                  style={{
                    '--skill-color': skill.color
                  }}
                >
                  <Icon size={34} strokeWidth={1.7} />
                </div>

                <span className="skill-category">
                  {skill.category}
                </span>

                <h3>{skill.name}</h3>

                <p>{skill.description}</p>

                <div className="skill-card-footer">
                  <span>TECHNOLOGY</span>
                  <Sparkles size={16} />
                </div>

              </motion.div>
            );
          })}

        </div>

        <div className="skills-note glass-card">
          <Sparkles size={22} />

          <p>
            Always learning, always building.
            I'm continuously exploring new technologies
            and improving my development skills.
          </p>
        </div>

      </div>
    </section>
  );
}
