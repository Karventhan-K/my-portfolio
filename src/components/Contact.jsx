"use client";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Reset status when user starts typing again after error
        if (status === 'error') {
            setStatus('');
            setResponseMsg('');
        }
    };

    const validateForm = () => {
        if (!formData.name.trim() || formData.name.length < 2) {
            return "Name must be at least 2 characters.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            return "Please enter a valid email address.";
        }
        if (!formData.message.trim() || formData.message.length < 10) {
            return "Message must be at least 10 characters.";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'sending') return;

        const errorMsg = validateForm();
        if (errorMsg) {
            setStatus('error');
            setResponseMsg(errorMsg);
            return;
        }

        setStatus('sending');
        setResponseMsg('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setResponseMsg(data.message || 'Message sent successfully!');
            } else {
                setStatus('error');
                setResponseMsg(data.message || 'Failed to send message.');
            }
        } catch (error) {
            setStatus('error');
            setResponseMsg('Something went wrong. Please try again.');
        }
    };

    return (
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
                            <span>karventhan.work@gmail.com</span>
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
                                <a href="mailto:karventhan.work@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
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

                            {status === 'success' && <p className="status-msg success">{responseMsg}</p>}
                            {status === 'error' && <p className="status-msg error">{responseMsg}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
