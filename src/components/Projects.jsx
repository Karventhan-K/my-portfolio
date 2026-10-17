"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header-center">
                    <span className="badge-pill mern-pill">Full-Stack Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Production-grade applications architected with the MERN stack, Next.js, and modern cloud ecosystems.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="project-filter-tabs">
                    <button
                        className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("all")}
                    >
                        All Projects ({projects.length})
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === "mern" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("mern")}
                    >
                        <i className="fab fa-react"></i> MERN & Full-Stack
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === "ai" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("ai")}
                    >
                        <i className="fas fa-brain"></i> AI & Cloud SaaS
                    </button>
                    <button
                        className={`filter-btn ${selectedCategory === "frontend" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("frontend")}
                    >
                        <i className="fas fa-laptop-code"></i> Frontend & Tools
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => {
                        const delayClass = index % 3 === 0 ? '' : `delay-${index % 3}`;
                        const techList = project.techStack || project.badges || [];

                        return (
                            <div
                                key={project.id || project.title}
                                className={`repo-card modern-card scroll-reveal ${delayClass} ${project.featured ? "featured-card" : ""}`}
                            >
                                {project.badge && (
                                    <div className="project-card-badge">
                                        <i className="fas fa-star"></i> {project.badge}
                                    </div>
                                )}

                                <div className="repo-header">
                                    <div className="repo-title-row">
                                        <i className="fas fa-folder-open repo-icon"></i>
                                        <h3 className="project-name-heading">{project.title}</h3>
                                    </div>
                                    <div className="repo-avatar">
                                        <Image
                                            src="/karventhan.jpg"
                                            alt="Karventhan"
                                            width={38}
                                            height={38}
                                            className="avatar-img"
                                        />
                                    </div>
                                </div>

                                <p className="project-subtitle-text">{project.subtitle}</p>
                                <p className="repo-description-top">
                                    {project.description}
                                </p>

                                {project.details && project.details.length > 0 && (
                                    <ul className="project-key-bullets">
                                        {project.details.slice(0, 3).map((detail, dIdx) => (
                                            <li key={dIdx}>
                                                <i className="fas fa-check-circle"></i> {detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="repo-stats-row">
                                    <div className="stat-item" title="Estimated Users">
                                        <i className="fas fa-users"></i> {project.stats?.users || "1k+"}
                                    </div>
                                    <div className="stat-item" title="Stars">
                                        <i className="far fa-star"></i> {project.stats?.stars || 20}
                                    </div>
                                    <div className="stat-item" title="Forks">
                                        <i className="fas fa-code-branch"></i> {project.stats?.forks || 5}
                                    </div>
                                    <div className="stat-item status-pill" title="Deployment Status">
                                        <span className="live-dot"></span> {project.stats?.status || "Production"}
                                    </div>
                                </div>

                                <div className="repo-footer">
                                    <div className="tech-badges">
                                        {techList.map((badge) => (
                                            <span key={badge} className="tech-badge">{badge}</span>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-project-link primary"
                                            >
                                                <i className="fas fa-external-link-alt"></i> Live Platform
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-project-link secondary"
                                            >
                                                <i className="fab fa-github"></i> Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
