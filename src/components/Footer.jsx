"use client";
import { handleScroll } from "../utils/scroll";

export default function Footer({ onOpenShare }) {
    const onLinkClick = (e, id) => {
        handleScroll(e, id);
    };

    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-content-row">
                    <div className="footer-left">
                        <div className="footer-logo">
                            Karventhan<span className="logo-dot">.dev</span>
                        </div>
                        <p className="footer-tagline">
                            Senior MERN Stack & Full-Stack Developer • Specialized in scalable web platforms, real-time architectures, and cloud deployments.
                        </p>
                    </div>

                    <div className="footer-nav-links">
                        <a href="#about" onClick={(e) => onLinkClick(e, "about")}>About</a>
                        <a href="#skills" onClick={(e) => onLinkClick(e, "skills")}>Skills</a>
                        <a href="#projects" onClick={(e) => onLinkClick(e, "projects")}>Projects</a>
                        <a href="#resume" onClick={(e) => onLinkClick(e, "resume")}>Resume</a>
                        <a href="#contact" onClick={(e) => onLinkClick(e, "contact")}>Contact</a>
                        <button type="button" onClick={onOpenShare} className="footer-share-link">
                            <i className="fas fa-share-alt"></i> Share
                        </button>
                    </div>
                </div>

                <div className="footer-bottom-row">
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} Karventhan K. Designed & Architected with Next.js & MERN.
                    </p>
                    <div className="footer-socials">
                        <a href="https://github.com/karventhan-k" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/karventhan-k" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:karventhan.work@gmail.com" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
