import "./Home.css";
import { useState } from "react";

const Timeline: React.FC<{
  items: Array<{
    year: string;
    title: string;
    description: string;
    icon?: string;
  }>;
}> = ({ items }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {items.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot">{item.icon || "•"}</div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h4 className="timeline-title">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const timelineItems = [
    {
      year: "2022-2023",
      title: "Début de mes études",
      description: "Entrée en L1 Informatique",
      icon: "🎓",
    },
    {
      year: "2023-2024",
      title: "Changement de voie",
      description: "Entrée en L1 LLCER (Anglais)",
      icon: "📚",
    },
    {
      year: "2024-2025",
      title: "Formation DWFS",
      description:
        "Formation intensive de 5 mois en développement web full stack",
      icon: "🚀",
    },
    {
      year: "2025-2027",
      title: "En cours",
      description: "Début du BTS SIO et développement de projets",
      icon: "⭐",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-blur"></div>
        <div className="hero-content">
          <h1 className="hero-title">Mattéo Douteaud</h1>
          <p className="hero-subtitle">Développeur Web Passionné</p>
          <div className="hero-description">
            <p>Créateur d'expériences numériques modernes et innovantes</p>
          </div>
          <div className="hero-cta">
            <a href="#about" className="cta-button primary">
              Découvrir mon travail
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            {/* Profile Card */}
            <div className="about-left">
              <div
                className={`profile-card-container ${isFlipped ? "flipped" : ""}`}
              >
                <div className="profile-card">
                  <div className="card-front">
                    <div className="profile-image-wrapper">
                      <img
                        src="https://i.pinimg.com/736x/ae/4b/26/ae4b26120159cb3e8ccb0165ba2bf17c.jpg"
                        alt="Profile"
                        className="profile-image"
                      />
                    </div>
                    <h2>Mattéo</h2>
                    <p className="profile-role">Développeur Web</p>
                    <p className="profile-bio">
                      Passionné par créer des solutions digitales élégantes et
                      performantes
                    </p>
                    <button
                      className="flip-btn"
                      onClick={() => setIsFlipped(!isFlipped)}
                    >
                      Voir expérience →
                    </button>
                  </div>
                  <div className="card-back">
                    <div className="experience-content">
                      <h3>Mon Expérience</h3>
                      <div className="exp-item">
                        <strong>Formation</strong>
                        <ul>
                          <li>BTS SIO</li>
                          <li>Formation DWFS (5 mois)</li>
                          <li>L1 Informatique</li>
                        </ul>
                      </div>
                      <div className="exp-item">
                        <strong>Compétences</strong>
                        <ul>
                          <li>React & TypeScript</li>
                          <li>Angular & PHP</li>
                          <li>Java & Python</li>
                        </ul>
                      </div>
                    </div>
                    <button
                      className="flip-btn"
                      onClick={() => setIsFlipped(!isFlipped)}
                    >
                      ← Retour
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Info */}
            <div className="about-right">
              <div className="about-content">
                <h2>À propos de moi</h2>
                <p>
                  Je suis un développeur web passionné en formation au BTS SIO,
                  avec une solide expérience en développement full stack.
                </p>
                <p>
                  Mon objectif est de créer des applications modernes,
                  performantes et accessibles qui résolvent des problèmes réels.
                </p>

                <div className="skills-showcase">
                  <h3>Technologies</h3>
                  <div className="skills-grid">
                    <span className="skill-chip">React</span>
                    <span className="skill-chip">TypeScript</span>
                    <span className="skill-chip">Angular</span>
                    <span className="skill-chip">PHP</span>
                    <span className="skill-chip">Java</span>
                    <span className="skill-chip">Python</span>
                    <span className="skill-chip">MySQL</span>
                    <span className="skill-chip">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Mon Parcours</h2>
          <p className="section-subtitle">
            Une histoire de passion et d'apprentissage continu
          </p>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à collaborer?</h2>
          <p>J'aimerais entendre parler de vos projets</p>
          <a href="/contact" className="cta-button primary">
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
}
