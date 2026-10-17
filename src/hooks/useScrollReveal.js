import { useEffect } from "react";

export const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Stop observing once visible to save resources
                    // observer.unobserve(entry.target); 
                    // Kept active to match original behavior (if needed) or improved perf: 
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const scrollElements = document.querySelectorAll('.scroll-reveal');
        scrollElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
