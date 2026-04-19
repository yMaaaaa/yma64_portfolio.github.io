import "./Projects.css";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const projects: Project[] = [
    {
      title: "Gestion d'Actifs IT",
      description:
        "Système de gestion d'inventaire numérique pour identifier et tracker les ressources informatiques en temps réel.",
      technologies: ["MySQL", "PHP", "JavaScript", "UI/UX"],
      category: "Backend",
      icon: "🖥️",
    },
    {
      title: "Système de Support Utilisateur",
      description:
        "Plateforme complète de gestion des demandes de support et des incidents avec suivi en temps réel et notifications.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL"],
      category: "Full Stack",
      icon: "🎯",
    },
    {
      title: "Portal de Présence en Ligne",
      description:
        "Développement et évolution de sites web d'entreprise avec optimisation SEO et promotion digitale.",
      technologies: ["React", "Next.js", "SEO", "CSS3"],
      category: "Frontend",
      icon: "🌐",
    },
    {
      title: "Outil de Gestion de Projets",
      description:
        "Application de suivi de projets avec analyse des objectifs et évaluation des indicateurs de performance.",
      technologies: ["Angular", "TypeScript", "Java", "PostgreSQL"],
      category: "Full Stack",
      icon: "📊",
    },
  ];

  const categories = ["Tous", "Frontend", "Backend", "Full Stack"];

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const competencies = [
    {
      title: "Support IT",
      emoji: "🖥️",
      description: "Gestion d'actifs, support utilisateur, incidents",
    },
    {
      title: "Développement Web",
      emoji: "💻",
      description: "Conception et développement d'applications modernes",
    },
    {
      title: "Architecture",
      emoji: "🏗️",
      description: "Design scalable et bonnes pratiques",
    },
    {
      title: "Base de Données",
      emoji: "🗄️",
      description: "MySQL, PostgreSQL, optimisation requêtes",
    },
  ];

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-blur"></div>
        <div className="projects-hero-content">
          <h1>Mes Réalisations</h1>
          <p>Découvrez les projets que j'ai développés pendant ma formation</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-techs">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="category-badge">{project.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="competencies-section">
        <div className="container">
          <h2>Domaines de Compétences</h2>
          <div className="competencies-grid">
            {competencies.map((comp, idx) => (
              <div key={idx} className="competency-item">
                <div className="comp-icon">{comp.emoji}</div>
                <h3>{comp.title}</h3>
                <p>{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="cta-content">
          <h2>Intéressé par un projet similaire?</h2>
          <p>Je suis toujours ouvert à de nouveaux défis et opportunités</p>
          <a href="/contact" className="cta-button primary">
            Commençons ensemble
          </a>
        </div>
      </section>
    </div>
  );
}
