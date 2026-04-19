import "./ContactForm.css";
import { useState } from "react";

interface ContactFormProps {
  recipientEmail?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  recipientEmail = "mdouteaud.pro@gmail.com",
}) => {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/" + recipientEmail,
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
            _subject: `Nouveau message de ${formData.name} - ${formData.subject}`,
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {isSubmitted && (
        <div className="success-message">
          Merci! Votre message a été envoyé avec succès.
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Votre nom *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Mattéo"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Votre email *</label>
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
        <label htmlFor="subject">Sujet *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Parlez-moi de votre projet"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Votre message ici..."
        ></textarea>
      </div>
      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
};

export default ContactForm;
