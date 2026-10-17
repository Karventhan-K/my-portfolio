"use client";
import { useState, useEffect } from "react";

export default function ShareModal({ isOpen, onClose }) {
    const [copied, setCopied] = useState(false);
    const [portfolioUrl, setPortfolioUrl] = useState("https://github.com/Karventhan-K/my-portfolio");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPortfolioUrl(window.location.origin || window.location.href);
        }
    }, []);

    if (!isOpen) return null;

    const shareText = "Check out Karventhan's Senior MERN Stack & Full-Stack Developer Portfolio:";

    const handleCopy = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(portfolioUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Karventhan | Senior MERN Stack Developer Portfolio",
                    text: shareText,
                    url: portfolioUrl,
                });
            } catch (err) {
                // Ignore cancel errors
            }
        } else {
            handleCopy();
        }
    };

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${portfolioUrl}`)}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(portfolioUrl)}`;
    const mailUrl = `mailto:?subject=${encodeURIComponent("Senior MERN Stack Developer Portfolio - Karventhan")}&body=${encodeURIComponent(`${shareText}\n\n${portfolioUrl}`)}`;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title-wrap">
                        <i className="fas fa-share-alt accent-icon"></i>
                        <h3>Share My Portfolio</h3>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <p className="modal-desc">
                    Share my profile and portfolio directly with recruiters, hiring managers, or team leads looking for a Senior MERN Stack Developer.
                </p>

                {/* Direct Link Copy */}
                <div className="share-link-input-group">
                    <input
                        type="text"
                        readOnly
                        value={portfolioUrl}
                        className="share-url-field"
                    />
                    <button
                        onClick={handleCopy}
                        className={`copy-link-btn ${copied ? 'copied' : ''}`}
                    >
                        <i className={copied ? "fas fa-check" : "fas fa-copy"}></i> {copied ? "Copied!" : "Copy Link"}
                    </button>
                </div>

                {/* Social Share Grid */}
                <div className="social-share-grid">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="share-channel whatsapp">
                        <i className="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer" className="share-channel linkedin">
                        <i className="fab fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href={twitterUrl} target="_blank" rel="noreferrer" className="share-channel twitter">
                        <i className="fab fa-x-twitter"></i>
                        <span>X / Twitter</span>
                    </a>
                    <a href={mailUrl} className="share-channel email">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                    </a>
                </div>

                {/* Native Device Share */}
                {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
                    <button onClick={handleNativeShare} className="btn btn-secondary w-full mt-3">
                        <i className="fas fa-mobile-alt"></i> Share with Device Options
                    </button>
                )}
            </div>
        </div>
    );
}
