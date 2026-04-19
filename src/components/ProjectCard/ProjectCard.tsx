import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
  date?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
  date,
}) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-image">
          <img src={imageUrl} alt={title} />
          <div className="project-overlay">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir le projet →
              </a>
            )}
          </div>
        </div>
      )}
      <div className="project-content">
        {date && <span className="project-date">{date}</span>}
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
