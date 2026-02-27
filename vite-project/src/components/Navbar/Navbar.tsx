import "./Navbar.css";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => handleScroll(e, "home")}
              className="nav-link"
            >
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => handleScroll(e, "about")}
              className="nav-link"
            >
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => handleScroll(e, "projects")}
              className="nav-link"
            >
              Projets
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => handleScroll(e, "contact")}
              className="nav-link"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
