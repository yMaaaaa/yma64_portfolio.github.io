import "./Personal.css";

export default function Personal() {
  const interests = [
    {
      icon: "🎮",
      title: "Gaming",
      description: "Passionné de jeux de stratégie et RPG",
      games: "Baldur's Gate 3, Stardew Valley, Minecraft",
    },
    {
      icon: "❄️",
      title: "Sports d'Hiver",
      description: "Adepte des pistes et de la montagne",
      games: "Ski, Snowboard, Randonnées",
    },
    {
      icon: "🎵",
      title: "Musique",
      description: "Découvreur de nouveaux artistes",
      games: "Rock, Électronique, Synthwave",
    },
    {
      icon: "📚",
      title: "Culture",
      description: "Amoureux de science-fiction",
      games: "Lecture, Films, Documentaires",
    },
    {
      icon: "⚡",
      title: "Innovation",
      description: "Fasciné par les nouvelles technologies",
      games: "IA, Web3, Frameworks modernes",
    },
    {
      icon: "🧠",
      title: "Apprentissage",
      description: "Éternel étudiant passionné",
      games: "Cours en ligne, Certifications",
    },
  ];

  const values = [
    {
      emoji: "🔥",
      title: "Passion",
      description: "Je me donne 100% dans chaque projet et passion",
    },
    {
      emoji: "🤔",
      title: "Curiosité",
      description: "Toujours à la recherche de nouvelles connaissances",
    },
    {
      emoji: "🤝",
      title: "Collaboration",
      description: "Force du travail en équipe et échange d'idées",
    },
    {
      emoji: "⚖️",
      title: "Équilibre",
      description: "Harmonie entre vie pro et perso essentielle",
    },
    {
      emoji: "🎨",
      title: "Créativité",
      description: "Au cœur de tout ce que j'entreprends",
    },
    {
      emoji: "⭐",
      title: "Excellence",
      description: "Constante quête d'amélioration personnelle",
    },
  ];

  return (
    <div className="personal-container">
      {/* Hero Section */}
      <section className="personal-hero">
        <div className="hero-blur"></div>
        <div className="personal-hero-content">
          <h1>Ma Vie Personnelle</h1>
          <p>Au-delà du code, découvrez qui je suis vraiment</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="personal-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Un peu sur moi...</h2>
            <p>
              Je suis bien plus qu'un développeur! Passionné par la technologie,
              mais aussi par les loisirs et activités qui enrichissent la vie.
              Je crois fermement que l'équilibre entre le travail et la vie
              personnelle est essentiel.
            </p>
            <p>
              Quand je ne suis pas en train de coder, tu me trouves probablement
              à explorer des mondes de jeux vidéo, à dévaler les pistes de ski,
              ou à découvrir de nouveaux artistes musicaux.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="container">
          <h2>Mes Intérêts & Passions</h2>
          <div className="interests-grid">
            {interests.map((item, idx) => (
              <div
                key={idx}
                className="interest-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="interest-emoji">{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="interest-desc">{item.description}</p>
                <p className="interest-detail">{item.games}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Mes Valeurs</h2>
          <p className="values-intro">
            Ce qui guide mes actions et ma vision du monde
          </p>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="value-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="value-emoji">{value.emoji}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="personal-closing">
        <div className="closing-content">
          <h2>Voyons ce que nous pouvons créer ensemble!</h2>
          <p>Passionné, curieux, et toujours prêt pour un nouveau défi</p>
          <a href="/contact" className="cta-button primary">
            Démarrons un projet
          </a>
        </div>
      </section>
    </div>
  );
}
