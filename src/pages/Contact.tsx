import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mdouteaud.pro@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Nouveau message de ${formData.name}`,
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else throw new Error("Erreur lors de l'envoi");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-blur"></div>
        <div className="contact-hero-content">
          <h1>Parlons ensemble</h1>
          <p>J'aimerais entendre parler de vos projets et idées</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Restons connectés</h2>
              <p>
                Je suis toujours disponible pour discuter de nouveaux projets,
                opportunités créatives, ou simplement dire bonjour.
              </p>

              <div className="contact-info-items">
                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:mdouteaud.pro@gmail.com">
                      mdouteaud.pro@gmail.com
                    </a>
                  </p>
                  <p className="info-subtext">Réponse sous 24h</p>
                </div>

                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <h3>Localisation</h3>
                  <p>France</p>
                  <p className="info-subtext">Disponible pour discuter</p>
                </div>

                <div className="info-card">
                  <div className="info-icon">🚀</div>
                  <h3>Disponibilité</h3>
                  <p>Ouvert aux offres</p>
                  <p className="info-subtext">Projets intéressants</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Envoyez-moi un message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                {isSubmitted && (
                  <div className="success-message">
                    ✓ Message envoyé avec succès! Merci de m'avoir contacté.
                  </div>
                )}
                {error && <div className="error-message">✕ {error}</div>}

                <div className="form-group">
                  <label htmlFor="name">Votre nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Votre email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Contez-moi votre projet ou votre question..."
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Envoi en cours..." : "Envoyer"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Merci de votre intérêt!</h2>
          <p>Vérifiez vos emails pour ma réponse</p>
        </div>
      </section>
    </div>
  );
}
