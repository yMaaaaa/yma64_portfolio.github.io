import "./Card.css";
import { useState } from "react";

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="card-container">
      <div className={`card-wrapper ${isFlipped ? "flipped" : ""}`}>
        <div className="card card-front">
          <img
            src="https://i.pinimg.com/736x/ae/4b/26/ae4b26120159cb3e8ccb0165ba2bf17c.jpg"
            alt="My profile picture"
            className="profile-picture"
          />
          <h3 className="name">DOUTEAUD Mattéo</h3>
          <p className="title">
            Développeur Web, passionné par le développement et la création de
            projets innovants.
          </p>
          <p className="description">
            Je m'appelle Mattéo, j'ai 22 ans et je suis en BTS SIO afin de
            devenir développeur.
          </p>
          <br />
          <button onClick={toggleFlip}>Cliquez moi pour me tourner !</button>
        </div>

        <div className="card card-back">
          <h3 className="experience-title">Mon Expérience</h3>
          <p className="experience-text">
            <strong>Formation:</strong>
            <br />
            BTS SIO (Services Informatiques aux Organisations) - En cours
            <br />
            Formation DWFS - 5 mois (2025)
            <br />
            L1 LLCER - Anglais (2023-2024)
            <br />
            L1 Informatique (2022-2023)
          </p>
          <p className="experience-text">
            <strong>Compétences:</strong>
            <br />
            React, TypeScript, Java, Python, Angular, PHP, Mysql, CSS3,
            JavaScript, HTML, UI/UX/ Git.
          </p>
          <p className="experience-text">
            Développement de projets innovants et passionné par la création
            d'applications web modernes.
          </p>
          <button onClick={toggleFlip}>Revenir</button>
        </div>
      </div>
    </div>
  );
}
