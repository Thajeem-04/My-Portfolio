
import { motion } from 'framer-motion';

import {
  Award,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Python Full Stack Development',
    organization: 'COMBO SQUARE',
    category: 'Professional Training',
    description:
      'Completed training in Python Full Stack Development, gaining exposure to frontend and backend development concepts.',
    year: 'Completed',
    icon: GraduationCap,
    theme: 'certificate-purple'
  }
];

export default function Certificates() {
  return (
    <section
      className="section certificates-section"
      id="certificates"
    >
      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            MY ACHIEVEMENTS
          </span>

          <h2 className="section-title">
            Certificates & <span className="gradient-text">
              Achievements
            </span>
          </h2>

          <p className="section-subtitle">
            My learning journey, professional training
            and achievements.
          </p>

        </div>

        <div className="certificates-grid">

          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <motion.article
                className="certificate-card glass-card"
                key={certificate.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02
                }}
              >

                <div className={`certificate-art ${certificate.theme}`}>

                  <div className="certificate-glow" />

                  <div className="certificate-emblem">
                    <Icon size={55} />
                  </div>

                  <div className="certificate-ribbon">
                    <Award size={17} />
                    TRAINING COMPLETED
                  </div>

                  <span className="certificate-art-text">
                    CERTIFICATE
                  </span>

                </div>

                <div className="certificate-info">

                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                  <h3>{certificate.title}</h3>

                  <p>{certificate.description}</p>

                  <div className="certificate-details">

                    <div>
                      <span>INSTITUTION</span>
                      <strong>{certificate.organization}</strong>
                    </div>

                    <div>
                      <span>STATUS</span>
                      <strong>{certificate.year}</strong>
                    </div>

                  </div>

                  <div className="certificate-footer">
                    <span>
                      <ShieldCheck size={17} />
                      Training completed
                    </span>

                    <Sparkles size={19} />
                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        <div className="achievement-note">
          <Sparkles size={20} />
          <p>
            Every new skill is another step towards
            becoming a better developer.
          </p>
        </div>

      </div>
    </section>
  );
}
