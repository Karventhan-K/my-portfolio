import { useEffect } from 'react';

export const useTypingText = (phrases, typingRef) => {
    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        let timeoutId;

        const type = () => {
            const currentPhrase = phrases[phraseIndex];
            const typeTarget = typingRef.current;

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
    }, [phrases, typingRef]);
};
