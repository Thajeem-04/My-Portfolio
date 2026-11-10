
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const education = [
  {
    year: '2024 – Present',
    title: 'B.E. Computer Science Engineering',
    institution: 'Ponjesly College of Engineering',
    description:
      'Currently pursuing a Bachelor of Engineering in Computer Science.',
    icon: GraduationCap,
    status: 'Currently Studying'
  },
  {
    year: '2022 – 2024',
    title: 'Higher Secondary Education',
    institution:
      'PEARL Matriculation Higher Secondary School',
    description:
      'Completed higher secondary education.',
    icon: BookOpen,
    status: 'Completed'
  },
  {
    year: '2021 – 2022',
    title: 'Secondary School Education',
    institution:
      'PEARL Matriculation Higher Secondary School',
    description:
      'Completed secondary school education.',
    icon: BookOpen,
    status: 'Completed'
  }
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            MY ACADEMIC JOURNEY
          </span>

          <h2 className="section-title">
            Education <span className="gradient-text">
              Journey
            </span>
          </h2>

          <p className="section-subtitle">
            My educational background and learning journey.
          </p>
        </div>

        <div className="timeline">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="timeline-item"
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-marker">
                  <Icon size={22} />
                </div>

                <div className="timeline-card glass-card">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <h4>{item.institution}</h4>

                  <p>{item.description}</p>

                  <span className="timeline-status">
                    {item.status}
                  </span>

                </div>
              </motion.div>
            );
          })}

        </div>

        <motion.div
          className="course-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="course-icon">
            <Award size={30} />
          </div>

          <div>
            <span className="section-label">
              ADDITIONAL QUALIFICATION
            </span>

            <h3>Full Stack Development Course</h3>

            <p>
              Python Full Stack Development
              <br />
              COMBO SQUARE
            </p>
          </div>

          <span className="course-badge">
            Course Completed
          </span>
        </motion.div>

      </div>
    </section>
  );
}
