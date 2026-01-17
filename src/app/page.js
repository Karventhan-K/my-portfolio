"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typingTextRef = useRef(null);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Typing Animation Effect
  useEffect(() => {
    const phrases = ["Senior Full Stack Developer", "Software Engineer", "AI Enthusiast", "Cloud Architect"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeoutId;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      const typeTarget = typingTextRef.current;

      if (!typeTarget) return;

      if (isDeleting) {
        typeTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typeTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before next word
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  // Scroll Animation & Navbar Effect
  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScrollState);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScrollState);
      observer.disconnect();
    };
  }, []);

  // Smooth Scroll Handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="glass-overlay"></div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Karventhan.</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar" style={isMenuOpen ? { transform: "rotate(-45deg) translate(-5px, 6px)" } : {}}></span>
          <span className="bar" style={isMenuOpen ? { opacity: 0 } : {}}></span>
          <span className="bar" style={isMenuOpen ? { transform: "rotate(45deg) translate(-5px, -6px)" } : {}}></span>
        </div>
      </nav>

      <header id="hero" className="hero-section">
        <div className="hero-content">
          <p className="greeting">Hello, I am</p>
          <h1 className="hero-name">Karventhan</h1>
          <h2 className="hero-headline">
            <span ref={typingTextRef} id="typing-text"></span>
            <span className="cursor">|</span>
          </h2>
          <div className="cta-buttons">
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn btn-primary">Hire Me</a>
            <a href="/karventhan.pdf" target="_blank" className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <Image
              src="/karventhan.jpg"
              alt="Karventhan"
              width={350}
              height={350}
              className="hero-img"
              priority
            />
          </div>
          <div className="glass-card float-animation">
            <i className="fas fa-code"></i>
            <span>Full Stack</span>
          </div>
          <div className="glass-card float-animation delay-1">
            <i className="fas fa-server"></i>
            <span>Backend</span>
          </div>
          <div className="glass-card float-animation delay-2">
            <i className="fas fa-cloud"></i>
            <span>DevOps</span>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content glass-panel scroll-reveal">
            <p>
              I am a results-driven <strong>Senior Software Engineer</strong> based in Coimbatore, India, with extensive experience in building scalable web applications and AI-driven solutions.
              Currently at <strong>Episyche Technologies</strong>, I lead full-stack development, optimize backend architectures, and integrate cutting-edge AI technologies like OpenAI&apos;s GPT and DALL·E.
              My journey has taken me from building responsive frontends with <strong>Next.js</strong> to architecting robust backends with <strong>Django</strong> and <strong>FastAPI</strong>, deployed on <strong>AWS</strong>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I enjoy mentoring junior developers and solving complex problems that require a mix of creativity and technical discipline.
              With a &quot;New Year, New You&quot; mindset, I am constantly evolving my skills to deliver state-of-the-art digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-category glass-panel scroll-reveal">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="tag">React.js</span>
                <span className="tag">Next.js</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
            {/* Backend */}
            <div className="skill-category glass-panel scroll-reveal delay-1">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Bash Scripting</span>
              </div>
            </div>
            {/* Database & Cloud */}
            <div className="skill-category glass-panel scroll-reveal delay-2">
              <h3>Database & Cloud</h3>
              <div className="skill-tags">
                <span className="tag">PostgreSQL</span>
                <span className="tag">SQL</span>
                <span className="tag">AWS (EC2, S3)</span>
                <span className="tag">Linux (Debian)</span>
                <span className="tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="repo-card scroll-reveal">
              <div className="repo-header">
                <div className="repo-title-row">
                  <i className="fas fa-book-bookmark repo-icon"></i>
                  <span className="repo-username">karventhan-k / </span>
                  <span className="repo-name">debitmydata.com</span>
                </div>
                <div className="repo-avatar">
                  <Image src="/karventhan.jpg" alt="Avatar" width={40} height={40} className="avatar-img" />
                </div>
              </div>
              <p className="repo-description-top">
                Full-Stack platform enabling user data monetization with AI-driven features.
              </p>
              <div className="repo-stats-row">
                <div className="stat-item"><i className="fas fa-users"></i> 4</div>
                <div className="stat-item"><i className="far fa-dot-circle"></i> 12</div>
                <div className="stat-item"><i className="far fa-star"></i> 8</div>
                <div className="stat-item"><i className="fas fa-code-branch"></i> 3</div>
              </div>
              <div className="repo-footer">
                <div className="repo-footer-content">
                  <h3 className="footer-title">Debitmydata.com</h3>
                  <p className="footer-desc">Engineered end-to-end modules, smooth auth flows (SSO), and AI-driven features. Integrated Stripe for subscriptions and optimized high-traffic APIs.</p>
                  <div className="footer-meta">
                    <div className="meta-left">
                      <span className="star-badge"><i className="far fa-star"></i> 8</span>
                      <span className="fork-badge"><i className="fas fa-code-branch"></i> 3</span>
                    </div>
                    <div className="meta-right">
                      <span className="language-dot python-dot"></span>
                      <span className="language-name">Python</span>
                    </div>
                  </div>
                  <div className="tech-badges">
                    <span className="tech-badge">FASTAPI</span>
                    <span className="tech-badge">DJANGO</span>
                    <span className="tech-badge">NEXT.JS</span>
                    <span className="tech-badge">OPENAI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="repo-card scroll-reveal delay-1">
              <div className="repo-header">
                <div className="repo-title-row">
                  <i className="fas fa-book-bookmark repo-icon"></i>
                  <span className="repo-username">karventhan-k / </span>
                  <span className="repo-name">cofetti.ai</span>
                </div>
                <div className="repo-avatar">
                  <Image src="/karventhan.jpg" alt="Avatar" width={40} height={40} className="avatar-img" />
                </div>
              </div>
              <p className="repo-description-top">
                AI-powered image and text generation platform using OpenAI DALL·E 3.
              </p>
              <div className="repo-stats-row">
                <div className="stat-item"><i className="fas fa-users"></i> 3</div>
                <div className="stat-item"><i className="far fa-dot-circle"></i> 8</div>
                <div className="stat-item"><i className="far fa-star"></i> 15</div>
                <div className="stat-item"><i className="fas fa-code-branch"></i> 5</div>
              </div>
              <div className="repo-footer">
                <div className="repo-footer-content">
                  <h3 className="footer-title">Cofetti.ai</h3>
                  <p className="footer-desc">Implemented OpenAI DALL·E 3 & ChatCompletion. Built a robust credit system with Stripe and managed AWS deployment.</p>
                  <div className="footer-meta">
                    <div className="meta-left">
                      <span className="star-badge"><i className="far fa-star"></i> 15</span>
                      <span className="fork-badge"><i className="fas fa-code-branch"></i> 5</span>
                    </div>
                    <div className="meta-right">
                      <span className="language-dot python-dot"></span>
                      <span className="language-name">Django</span>
                    </div>
                  </div>
                  <div className="tech-badges">
                    <span className="tech-badge">DJANGO</span>
                    <span className="tech-badge">POSTGRESQL</span>
                    <span className="tech-badge">OPENAI</span>
                    <span className="tech-badge">AWS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="repo-card scroll-reveal delay-2">
              <div className="repo-header">
                <div className="repo-title-row">
                  <i className="fas fa-book-bookmark repo-icon"></i>
                  <span className="repo-username">karventhan-k / </span>
                  <span className="repo-name">elevenflo.com</span>
                </div>
                <div className="repo-avatar">
                  <Image src="/karventhan.jpg" alt="Avatar" width={40} height={40} className="avatar-img" />
                </div>
              </div>
              <p className="repo-description-top">
                Modern frontend for a digital services platform with advanced search using Next.js.
              </p>
              <div className="repo-stats-row">
                <div className="stat-item"><i className="fas fa-users"></i> 5</div>
                <div className="stat-item"><i className="far fa-dot-circle"></i> 20</div>
                <div className="stat-item"><i className="far fa-star"></i> 10</div>
                <div className="stat-item"><i className="fas fa-code-branch"></i> 4</div>
              </div>
              <div className="repo-footer">
                <div className="repo-footer-content">
                  <h3 className="footer-title">elevenflo.com</h3>
                  <p className="footer-desc">Developed responsive UI with Next.js and Tailwind. Implemented advanced search and authentication modules.</p>
                  <div className="footer-meta">
                    <div className="meta-left">
                      <span className="star-badge"><i className="far fa-star"></i> 10</span>
                      <span className="fork-badge"><i className="fas fa-code-branch"></i> 4</span>
                    </div>
                    <div className="meta-right">
                      <span className="language-dot js-dot"></span>
                      <span className="language-name">JavaScript</span>
                    </div>
                  </div>
                  <div className="tech-badges">
                    <span className="tech-badge">NEXT.JS</span>
                    <span className="tech-badge">TAILWIND</span>
                    <span className="tech-badge">REACT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="repo-card scroll-reveal">
              <div className="repo-header">
                <div className="repo-title-row">
                  <i className="fas fa-book-bookmark repo-icon"></i>
                  <span className="repo-username">karventhan-k / </span>
                  <span className="repo-name">bandbooker.com</span>
                </div>
                <div className="repo-avatar">
                  <Image src="/karventhan.jpg" alt="Avatar" width={40} height={40} className="avatar-img" />
                </div>
              </div>
              <p className="repo-description-top">
                Real-time booking platform with WebSocket-based live chat system.
              </p>
              <div className="repo-stats-row">
                <div className="stat-item"><i className="fas fa-users"></i> 2</div>
                <div className="stat-item"><i className="far fa-dot-circle"></i> 15</div>
                <div className="stat-item"><i className="far fa-star"></i> 12</div>
                <div className="stat-item"><i className="fas fa-code-branch"></i> 2</div>
              </div>
              <div className="repo-footer">
                <div className="repo-footer-content">
                  <h3 className="footer-title">bandbooker.com</h3>
                  <p className="footer-desc">Built the frontend with Google SSO and a real-time WebSocket-based live chat system.</p>
                  <div className="footer-meta">
                    <div className="meta-left">
                      <span className="star-badge"><i className="far fa-star"></i> 12</span>
                      <span className="fork-badge"><i className="fas fa-code-branch"></i> 2</span>
                    </div>
                    <div className="meta-right">
                      <span className="language-dot js-dot"></span>
                      <span className="language-name">React</span>
                    </div>
                  </div>
                  <div className="tech-badges">
                    <span className="tech-badge">NEXT.JS</span>
                    <span className="tech-badge">WEBSOCKETS</span>
                    <span className="tech-badge">GOOGLE SSO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="repo-card scroll-reveal delay-1">
              <div className="repo-header">
                <div className="repo-title-row">
                  <i className="fas fa-book-bookmark repo-icon"></i>
                  <span className="repo-username">karventhan-k / </span>
                  <span className="repo-name">webopt.ai</span>
                </div>
                <div className="repo-avatar">
                  <Image src="/karventhan.jpg" alt="Avatar" width={40} height={40} className="avatar-img" />
                </div>
              </div>
              <p className="repo-description-top">
                Chrome extension and internal tools for performance tracking.
              </p>
              <div className="repo-stats-row">
                <div className="stat-item"><i className="fas fa-users"></i> 6</div>
                <div className="stat-item"><i className="far fa-dot-circle"></i> 9</div>
                <div className="stat-item"><i className="far fa-star"></i> 25</div>
                <div className="stat-item"><i className="fas fa-code-branch"></i> 7</div>
              </div>
              <div className="repo-footer">
                <div className="repo-footer-content">
                  <h3 className="footer-title">webopt.ai</h3>
                  <p className="footer-desc">Developed Chrome extensions for performance tracking and Django backends for role-based access control.</p>
                  <div className="footer-meta">
                    <div className="meta-left">
                      <span className="star-badge"><i className="far fa-star"></i> 25</span>
                      <span className="fork-badge"><i className="fas fa-code-branch"></i> 7</span>
                    </div>
                    <div className="meta-right">
                      <span className="language-dot python-dot"></span>
                      <span className="language-name">Django</span>
                    </div>
                  </div>
                  <div className="tech-badges">
                    <span className="tech-badge">DJANGO</span>
                    <span className="tech-badge">CHROME EXT</span>
                    <span className="tech-badge">ANALYTICS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-wrapper glass-panel scroll-reveal">

            <div className="contact-info">
              <h2 className="contact-heading">Let&apos;s create something amazing together?</h2>
              <p className="contact-subtext">
                I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="info-item">
                <div className="icon-box"><i className="fas fa-envelope"></i></div>
                <span>karventhanalpm@gmail.com</span>
              </div>

              <div className="info-item">
                <div className="icon-box"><i className="fas fa-map-marker-alt"></i></div>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>

              <div className="social-links-container">
                <p className="social-label">SOCIALS</p>
                <div className="social-icons">
                  <a href="https://github.com/karventhan-k" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/karventhan-k" target="_blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
                  <a href="mailto:karventhanalpm@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hello, I would like to talk about..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
                </button>

                {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                {status === 'error' && <p className="status-msg error">Failed to send message. Please try again.</p>}
              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer-simple">
        <div className="container">
          <p className="copyright-text">&copy; 2026 Karventhan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
