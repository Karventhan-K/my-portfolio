"use client";

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header-center">
                    <span className="badge-pill mern-pill">Professional Profile</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Passionate software architect focused on clean code, scalable MERN architectures, and rapid product delivery.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-content glass-panel scroll-reveal">
                        <h3 className="about-subtitle">
                            Senior MERN Stack & Full-Stack Engineer based in Coimbatore, India
                        </h3>
                        <p>
                            With over <strong>4+ years of professional engineering experience</strong> at <strong>Episyche Technologies</strong>, I specialize in building robust, high-traffic web applications with the <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong> alongside <strong>Next.js</strong> and modern cloud infrastructure.
                        </p>
                        <p className="mt-3">
                            As the lead full-stack engineer for flagship projects like <strong>Debitmydata.com</strong> and <strong>Cofetti.ai</strong>, I have designed end-to-end authentication flows (Google SSO, JWT), integrated AI capabilities (OpenAI APIs), implemented Stripe recurring billing, and optimized high-throughput database systems.
                        </p>
                        <p className="mt-3">
                            I am currently open and <strong>urgently available</strong> for challenging Senior MERN Stack Developer roles where I can drive system design, elevate user experiences, and mentor high-performing engineering teams.
                        </p>

                        <div className="about-key-points">
                            <div className="key-point-item">
                                <i className="fas fa-check-circle accent-icon"></i>
                                <span>End-to-End MERN & Next.js Architecture</span>
                            </div>
                            <div className="key-point-item">
                                <i className="fas fa-check-circle accent-icon"></i>
                                <span>High-Performance APIs & Microservices</span>
                            </div>
                            <div className="key-point-item">
                                <i className="fas fa-check-circle accent-icon"></i>
                                <span>Cloud Deployment (AWS EC2, S3, PM2, Nginx)</span>
                            </div>
                            <div className="key-point-item">
                                <i className="fas fa-check-circle accent-icon"></i>
                                <span>Stripe Payments, WebSockets & AI Integration</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats-panel glass-panel scroll-reveal delay-1">
                        <div className="stat-card">
                            <div className="stat-number">4+</div>
                            <div className="stat-desc">Years Production Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-desc">Enterprise & Client Platforms</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">99.9%</div>
                            <div className="stat-desc">Cloud Uptime on AWS</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100%</div>
                            <div className="stat-desc">Dedication to Clean Code</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
