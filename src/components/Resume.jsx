"use client";
import { useState } from "react";
import { resumeData } from "../data/resume";

export default function Resume() {
    const [activeTab, setActiveTab] = useState("experience");
    const [copied, setCopied] = useState(false);
    const [showDownloadMenu, setShowDownloadMenu] = useState(false);

    const handleCopySummary = () => {
        const textToCopy = `Karventhan K - Senior MERN Stack Developer
Email: ${resumeData.personalInfo.email}
Phone: ${resumeData.personalInfo.phone}
LinkedIn: ${resumeData.personalInfo.linkedin}
Location: ${resumeData.personalInfo.location}

PROFESSIONAL SUMMARY:
${resumeData.personalInfo.summary}

FLAGSHIP PROJECTS:
1. Debitmydata.com - Lead MERN & Full-Stack Architect
2. Cofetti.ai - Full-Stack Generative AI SaaS
3. BandBooker.com - Real-Time Booking & WebSockets Platform

CORE SKILLS:
MongoDB, Express.js, React.js, Node.js, Next.js, TypeScript, RESTful APIs, AWS EC2/S3, Docker`;

        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleDownloadAtsText = () => {
        const atsResumeContent = `=====================================================
KARVENTHAN K - SENIOR MERN STACK DEVELOPER
=====================================================
Email: ${resumeData.personalInfo.email}
Phone: ${resumeData.personalInfo.phone}
LinkedIn: ${resumeData.personalInfo.linkedin}
Location: ${resumeData.personalInfo.location}
Status: ${resumeData.personalInfo.availability}

-----------------------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------------------
${resumeData.personalInfo.summary}

-----------------------------------------------------
CORE TECHNICAL SKILLS
-----------------------------------------------------
MERN Stack: MongoDB, Express.js, React.js, Node.js
Frontend: Next.js, Redux, Tailwind CSS, TypeScript, JavaScript (ES6+), HTML5, CSS3
Backend: Node.js, Express, REST APIs, GraphQL, WebSockets, Python, FastAPI, Django
Databases: MongoDB (Mongoose), PostgreSQL, Redis, SQL
Cloud & DevOps: AWS (EC2, S3), Docker, Linux (Debian), Nginx, PM2, Git

-----------------------------------------------------
WORK EXPERIENCE
-----------------------------------------------------
${resumeData.experience.map(exp => `
${exp.role.toUpperCase()}
${exp.company} | ${exp.location} (${exp.period})
${exp.projects.map(p => `
* Project: ${p.name} (${p.role})
${p.points.map(pt => `  - ${pt}`).join("\n")}
`).join("\n")}
`).join("\n")}

-----------------------------------------------------
EDUCATION
-----------------------------------------------------
${resumeData.education.map(e => `${e.degree} - ${e.institution} (${e.period})`).join("\n")}

-----------------------------------------------------
LEADERSHIP & MENTORSHIP
-----------------------------------------------------
${resumeData.leadership.map(l => `* ${l}`).join("\n")}
`;

        const blob = new Blob([atsResumeContent], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Karventhan_MERN_Resume_ATS.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setShowDownloadMenu(false);
    };

    const handlePrint = () => {
        window.print();
        setShowDownloadMenu(false);
    };

    return (
        <section id="resume" className="section resume-section">
            <div className="container">
                <div className="section-header-center">
                    <span className="badge-pill mern-pill">Curriculum Vitae</span>
                    <h2 className="section-title">Interactive Resume</h2>
                    <p className="section-subtitle">
                        Comprehensive summary of professional experience, MERN stack expertise, and production achievements.
                    </p>
                </div>

                {/* Resume Card Container */}
                <div className="resume-container glass-panel scroll-reveal">
                    
                    {/* Top Action Bar */}
                    <div className="resume-action-bar">
                        <div className="candidate-meta">
                            <h3 className="candidate-name">{resumeData.personalInfo.name}</h3>
                            <p className="candidate-title">{resumeData.personalInfo.title}</p>
                            <div className="candidate-chips">
                                <span><i className="fas fa-map-marker-alt"></i> {resumeData.personalInfo.location}</span>
                                <span className="urgent-tag"><i className="fas fa-bolt"></i> {resumeData.personalInfo.availability}</span>
                            </div>
                        </div>

                        {/* Download Options Group */}
                        <div className="resume-actions-wrapper">
                            <div className="download-dropdown-container">
                                <button
                                    type="button"
                                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                                    className="btn btn-primary btn-sm download-main-btn"
                                    id="download-resume-btn"
                                    aria-expanded={showDownloadMenu}
                                >
                                    <i className="fas fa-download"></i>
                                    <span>Download Resume</span>
                                    <i className={`fas fa-chevron-down dropdown-arrow ${showDownloadMenu ? 'rotated' : ''}`}></i>
                                </button>

                                {showDownloadMenu && (
                                    <div className="download-dropdown-menu">
                                        <a
                                            href={resumeData.personalInfo.pdfUrl}
                                            download="Karventhan_MERN_Resume.pdf"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="dropdown-item"
                                            onClick={() => setShowDownloadMenu(false)}
                                        >
                                            <i className="fas fa-file-pdf text-red"></i>
                                            <div>
                                                <strong>Official PDF Resume</strong>
                                                <small>Formatted for HR & Recruiters</small>
                                            </div>
                                        </a>

                                        <a
                                            href={resumeData.personalInfo.pdfUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="dropdown-item"
                                            onClick={() => setShowDownloadMenu(false)}
                                        >
                                            <i className="fas fa-external-link-alt text-cyan"></i>
                                            <div>
                                                <strong>View PDF in Browser</strong>
                                                <small>Open in new tab to read or share</small>
                                            </div>
                                        </a>

                                        <button
                                            type="button"
                                            onClick={handleDownloadAtsText}
                                            className="dropdown-item btn-dropdown-action"
                                        >
                                            <i className="fas fa-file-alt text-green"></i>
                                            <div>
                                                <strong>ATS Plain Text (.txt)</strong>
                                                <small>Ideal for automated ATS systems</small>
                                            </div>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handlePrint}
                                            className="dropdown-item btn-dropdown-action"
                                        >
                                            <i className="fas fa-print text-purple"></i>
                                            <div>
                                                <strong>Print / Save as PDF</strong>
                                                <small>Print directly from browser</small>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleCopySummary}
                                className="btn btn-glass btn-sm"
                                title="Copy professional summary to clipboard"
                            >
                                <i className={copied ? "fas fa-check text-green" : "fas fa-copy"}></i>
                                <span>{copied ? "Copied!" : "Copy Summary"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Metric Stats */}
                    <div className="resume-stats-row">
                        {resumeData.highlights.map((item, idx) => (
                            <div key={idx} className="resume-stat-item">
                                <span className="stat-label">{item.label}</span>
                                <strong className="stat-value">{item.value}</strong>
                            </div>
                        ))}
                    </div>

                    {/* Tab Navigation */}
                    <div className="resume-tabs-container">
                        <div className="resume-tabs">
                            <button
                                className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
                                onClick={() => setActiveTab("experience")}
                            >
                                <i className="fas fa-briefcase"></i>
                                <span>Work Experience</span>
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                                onClick={() => setActiveTab("skills")}
                            >
                                <i className="fas fa-layer-group"></i>
                                <span>MERN & Tech Matrix</span>
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                                onClick={() => setActiveTab("education")}
                            >
                                <i className="fas fa-graduation-cap"></i>
                                <span>Education & Leadership</span>
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="resume-tab-content">
                        
                        {/* Tab 1: Experience */}
                        {activeTab === "experience" && (
                            <div className="tab-pane active fade-in">
                                <div className="timeline">
                                    {resumeData.experience.map((exp, index) => (
                                        <div key={index} className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <div className="timeline-header">
                                                    <div>
                                                        <h4 className="role-title">{exp.role}</h4>
                                                        <span className="company-name">{exp.company} • {exp.location}</span>
                                                    </div>
                                                    <span className="period-badge">{exp.period}</span>
                                                </div>

                                                <div className="project-blocks">
                                                    {exp.projects.map((proj, pIdx) => (
                                                        <div key={pIdx} className="project-block">
                                                            <div className="project-block-title">
                                                                <i className="fas fa-chevron-right accent-icon"></i>
                                                                <strong>{proj.name}</strong> 
                                                                <span className="role-chip">{proj.role}</span>
                                                            </div>
                                                            <ul className="project-bullet-points">
                                                                {proj.points.map((pt, ptIdx) => (
                                                                    <li key={ptIdx}>{pt}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tab 2: Skills */}
                        {activeTab === "skills" && (
                            <div className="tab-pane active fade-in">
                                <div className="resume-skills-grid">
                                    
                                    {/* MERN Core Focus */}
                                    <div className="resume-skill-card highlight-card">
                                        <h4><i className="fab fa-react"></i> MERN Stack Core Proficiency</h4>
                                        <div className="mern-bars">
                                            {resumeData.skills.mern.map((item, idx) => (
                                                <div key={idx} className="mern-skill-pill">
                                                    <i className={item.icon}></i>
                                                    <div className="mern-info">
                                                        <span className="name">{item.name}</span>
                                                        <span className="level">{item.level}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Frontend */}
                                    <div className="resume-skill-card">
                                        <h4><i className="fas fa-desktop"></i> Frontend Ecosystem</h4>
                                        <div className="skill-chip-wrap">
                                            {resumeData.skills.frontend.map((s, idx) => (
                                                <span key={idx} className="skill-chip">{s}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Backend */}
                                    <div className="resume-skill-card">
                                        <h4><i className="fas fa-server"></i> Backend & APIs</h4>
                                        <div className="skill-chip-wrap">
                                            {resumeData.skills.backend.map((s, idx) => (
                                                <span key={idx} className="skill-chip">{s}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Database */}
                                    <div className="resume-skill-card">
                                        <h4><i className="fas fa-database"></i> Databases & Storage</h4>
                                        <div className="skill-chip-wrap">
                                            {resumeData.skills.database.map((s, idx) => (
                                                <span key={idx} className="skill-chip">{s}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cloud & DevOps */}
                                    <div className="resume-skill-card">
                                        <h4><i className="fas fa-cloud"></i> Cloud, DevOps & Tools</h4>
                                        <div className="skill-chip-wrap">
                                            {resumeData.skills.devops.map((s, idx) => (
                                                <span key={idx} className="skill-chip">{s}</span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* Tab 3: Education & Leadership */}
                        {activeTab === "education" && (
                            <div className="tab-pane active fade-in">
                                <div className="edu-lead-grid">
                                    <div className="resume-card-box">
                                        <h4><i className="fas fa-graduation-cap"></i> Formal Education</h4>
                                        {resumeData.education.map((edu, idx) => (
                                            <div key={idx} className="edu-item">
                                                <h5>{edu.degree}</h5>
                                                <p className="edu-institution">{edu.institution}</p>
                                                <p className="edu-meta">{edu.location} | {edu.period}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="resume-card-box">
                                        <h4><i className="fas fa-users-cog"></i> Leadership & Mentorship</h4>
                                        <ul className="lead-points">
                                            {resumeData.leadership.map((pt, idx) => (
                                                <li key={idx}><i className="fas fa-check-circle text-accent"></i> {pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Developer Updatable Notice */}
                    <div className="resume-editable-footer">
                        <i className="fas fa-info-circle"></i>
                        <span>
                            To update your resume details or download file anytime: edit <code>src/data/resume.js</code> or replace <code>public/karventhan.pdf</code>.
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
