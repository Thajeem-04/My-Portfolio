
import { motion } from 'framer-motion';

import {
  ClipboardList,
  UserRound,
  ArrowLeftRight,
  ShoppingBag,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Students Registration Form',
    category: 'Web Development',
    description:
      'A student registration interface designed to collect and organize student information.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    icon: ClipboardList,
    theme: 'project-blue'
  },
  {
    number: '02',
    title: 'Personal Portfolio',
    category: 'Personal Website',
    description:
      'A personal portfolio website to introduce my background, skills and development projects.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    icon: UserRound,
    theme: 'project-purple'
  },
  {
    number: '03',
    title: 'Currency Converter',
    category: 'Web Application',
    description:
      'A currency conversion application created to make currency conversion simple and convenient.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    icon: ArrowLeftRight,
    theme: 'project-cyan'
  },
  {
    number: '04',
    title: 'Cartivo',
    category: 'E-Commerce Website',
    description:
      'An e-commerce website project focused on creating a modern online shopping experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    icon: ShoppingBag,
    theme: 'project-pink'
  }
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12
      }}
      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: -2
      }}
    >

      {/* PROJECT PREVIEW */}

      <div className={`project-preview ${project.theme}`}>

        <span className="project-number">
          {project.number}
        </span>

        <div className="project-art">
          <div className="project-art-ring" />
          <div className="project-art-circle">
            <Icon size={65} strokeWidth={1.3} />
          </div>
          <div className="project-art-orbit" />
        </div>

        <span className="project-preview-label">
          {project.category}
        </span>

      </div>

      {/* PROJECT DETAILS */}

      <div className="project-info">

        <span className="project-index">
          PROJECT / {project.number}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-footer">
          <span>PERSONAL PROJECT</span>
          <Icon size={19} />
        </div>

      </div>

    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">

      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            MY CREATIVE WORK
          </span>

          <h2 className="section-title">
            Featured <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p className="section-subtitle">
            A collection of projects where I turn
            ideas into interactive digital experiences.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}

        </div>

        <div className="projects-bottom">
          <p>
            More creative projects and experiments
            coming soon.
          </p>
        </div>

      </div>

    </section>
  );
}
