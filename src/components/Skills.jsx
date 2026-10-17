"use client";

const SKILL_GROUPS = [
    {
        category: "MERN Stack Core",
        icon: "fab fa-react",
        featured: true,
        skills: [
            { name: "MongoDB", note: "Aggregations, Mongoose, Indexing" },
            { name: "Express.js", note: "REST APIs, Middleware, JWT" },
            { name: "React.js", note: "Hooks, Context, State Management" },
            { name: "Node.js", note: "Event Loop, Streams, Async" }
        ]
    },
    {
        category: "Frontend Ecosystem",
        icon: "fas fa-code",
        featured: false,
        skills: [
            { name: "Next.js", note: "App Router, SSR, SSG" },
            { name: "Tailwind CSS", note: "Responsive, Modern UI" },
            { name: "JavaScript (ES6+)", note: "Modern Syntax & Standards" },
            { name: "TypeScript", note: "Static Typing & Interfaces" },
            { name: "Redux / Zustand", note: "Global State Management" },
            { name: "HTML5 / CSS3", note: "Semantic & Responsive" }
        ]
    },
    {
        category: "Backend & Microservices",
        icon: "fas fa-server",
        featured: false,
        skills: [
            { name: "Node.js & Express", note: "Scalable API Servers" },
            { name: "RESTful APIs", note: "Clean Architecture" },
            { name: "WebSockets", note: "Bidirectional Real-Time Chat" },
            { name: "Python / FastAPI", note: "High-Performance APIs" },
            { name: "Django", note: "Admin & ORM Systems" },
            { name: "Authentication", note: "OAuth 2.0, SSO, JWT" }
        ]
    },
    {
        category: "Databases & Storage",
        icon: "fas fa-database",
        featured: false,
        skills: [
            { name: "MongoDB", note: "NoSQL Collections" },
            { name: "PostgreSQL", note: "Relational Queries & Views" },
            { name: "Redis", note: "In-Memory Caching" },
            { name: "SQL", note: "Joins & Normalization" }
        ]
    },
    {
        category: "DevOps & Cloud Infrastructure",
        icon: "fas fa-cloud",
        featured: false,
        skills: [
            { name: "AWS (EC2, S3)", note: "Cloud Instances & Storage" },
            { name: "Docker", note: "Containerization" },
            { name: "Linux / Debian", note: "Server Administration" },
            { name: "Nginx & PM2", note: "Process Management & Proxy" },
            { name: "Git & GitHub", note: "Version Control & Sprints" },
            { name: "Stripe Integration", note: "Billing & Webhooks" }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header-center">
                    <span className="badge-pill mern-pill">Core Competencies</span>
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        Specialized skill set centered around modern full-stack JavaScript, MERN development, and cloud systems.
                    </p>
                </div>

                <div className="skills-grid-modern">
                    {SKILL_GROUPS.map((group, index) => {
                        const delayClass = index === 0 ? "" : `delay-${index % 3}`;

                        return (
                            <div
                                key={group.category}
                                className={`skill-category-card glass-panel scroll-reveal ${delayClass} ${group.featured ? "featured-skill-card" : ""}`}
                            >
                                <div className="skill-card-top">
                                    <div className="skill-icon-bubble">
                                        <i className={group.icon}></i>
                                    </div>
                                    <div className="skill-title-group">
                                        <h3>{group.category}</h3>
                                        {group.featured && (
                                            <span className="pill-primary">Primary Stack</span>
                                        )}
                                    </div>
                                </div>

                                <div className="skill-items-list">
                                    {group.skills.map((skill) => (
                                        <div key={skill.name} className="skill-item-row">
                                            <div className="skill-item-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-note">{skill.note}</span>
                                            </div>
                                            <i className="fas fa-check skill-check"></i>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
