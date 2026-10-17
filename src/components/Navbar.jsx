"use client";
import { useState, useEffect } from "react";
import { handleScroll } from "../utils/scroll";

export default function Navbar({ onOpenShare }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onLinkClick = (e, id) => {
        handleScroll(e, id, () => setIsMenuOpen(false));
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <a href="#hero" onClick={(e) => onLinkClick(e, "hero")} className="logo-link">
                <div className="logo">
                    Karventhan<span className="logo-dot">.dev</span>
                </div>
            </a>

            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li>
                    <a href="#about" onClick={(e) => onLinkClick(e, "about")}>About</a>
                </li>
                <li>
                    <a href="#skills" onClick={(e) => onLinkClick(e, "skills")}>Skills</a>
                </li>
                <li>
                    <a href="#projects" onClick={(e) => onLinkClick(e, "projects")}>Projects</a>
                </li>
                <li>
                    <a href="#resume" onClick={(e) => onLinkClick(e, "resume")} className="nav-resume-link">
                        <i className="fas fa-file-alt"></i> Resume
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => onLinkClick(e, "contact")}>Contact</a>
                </li>
                <li className="nav-cta-item">
                    <button
                        type="button"
                        onClick={() => {
                            setIsMenuOpen(false);
                            if (onOpenShare) onOpenShare();
                        }}
                        className="btn-nav-share"
                        title="Share portfolio link"
                    >
                        <i className="fas fa-share-alt"></i> Share
                    </button>
                </li>
            </ul>

            <div className="navbar-right">
                <button
                    type="button"
                    onClick={onOpenShare}
                    className="btn-nav-share-desktop"
                    title="Share portfolio"
                >
                    <i className="fas fa-share-alt"></i> Share
                </button>

                <div
                    className="hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`bar ${isMenuOpen ? "bar-1-open" : ""}`}></span>
                    <span className={`bar ${isMenuOpen ? "bar-2-open" : ""}`}></span>
                    <span className={`bar ${isMenuOpen ? "bar-3-open" : ""}`}></span>
                </div>
            </div>
        </nav>
    );
}
