"use client";
import { useRef } from "react";
import Image from "next/image";
import { handleScroll } from "../utils/scroll";
import { useTypingText } from "../hooks/useTypingText";

const TITLES = [
    "Senior MERN Stack Developer",
    "MongoDB • Express • React • Node.js",
    "Full-Stack Web Architect",
    "Scalable APIs & Cloud Deployments"
];

export default function Hero({ onOpenShare }) {
    const typingTextRef = useRef(null);
    useTypingText(TITLES, typingTextRef);

    return (
        <header id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-status-pill">
                    <span className="pulsing-green-dot"></span>
                    <span>Available for Urgent MERN Stack Roles</span>
                </div>

                <p className="greeting">Hello, I am</p>
                <h1 className="hero-name">Karventhan K</h1>
                
                <h2 className="hero-headline">
                    <span ref={typingTextRef} id="typing-text"></span>
                    <span className="cursor">|</span>
                </h2>

                <p className="hero-summary-text">
                    Specialized in architecting high-traffic full-stack applications with <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>. Built platforms including <strong>Debitmydata.com</strong> with seamless authentication, payment gateways, and cloud scalability.
                </p>

                <div className="cta-buttons">
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "contact")}
                        className="btn btn-primary"
                    >
                        <i className="fas fa-paper-plane"></i> Contact Me
                    </a>
                    
                    <a
                        href="#resume"
                        onClick={(e) => handleScroll(e, "resume")}
                        className="btn btn-secondary"
                    >
                        <i className="fas fa-file-alt"></i> View Resume
                    </a>

                    <button
                        type="button"
                        onClick={onOpenShare}
                        className="btn btn-glass"
                        title="Share this portfolio"
                    >
                        <i className="fas fa-share-alt"></i> Share
                    </button>
                </div>

                <div className="hero-trust-badges">
                    <div className="trust-item">
                        <i className="fas fa-check-circle"></i>
                        <span>4+ Yrs Experience</span>
                    </div>
                    <div className="trust-item">
                        <i className="fas fa-code-branch"></i>
                        <span>Debitmydata.com Lead</span>
                    </div>
                    <div className="trust-item">
                        <i className="fas fa-bolt"></i>
                        <span>Immediate Joiner</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <Image
                            src="/karventhan.jpg"
                            alt="Karventhan K - Senior MERN Stack Developer"
                            width={350}
                            height={350}
                            className="hero-img"
                            priority
                        />
                    </div>

                    {/* MERN Floating Badges */}
                    <div className="glass-card mern-float mern-react float-animation">
                        <i className="fab fa-react" style={{ color: "#00d8ff" }}></i>
                        <span>React.js</span>
                    </div>
                    <div className="glass-card mern-float mern-node float-animation delay-1">
                        <i className="fab fa-node-js" style={{ color: "#68a063" }}></i>
                        <span>Node.js</span>
                    </div>
                    <div className="glass-card mern-float mern-mongo float-animation delay-2">
                        <i className="fas fa-database" style={{ color: "#47a248" }}></i>
                        <span>MongoDB</span>
                    </div>
                    <div className="glass-card mern-float mern-express float-animation delay-3">
                        <i className="fas fa-server" style={{ color: "#e0e6ed" }}></i>
                        <span>Express.js</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
