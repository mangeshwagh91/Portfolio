'use client'; // needed if using app directory in Next.js

import { useEffect } from 'react';

interface TypewriterProps {
  elementId: string;
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenTexts?: number;
}

export default function Typewriter({
  elementId,
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenTexts = 2000,
}: TypewriterProps) {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return; // ⛔️ Exit early if null

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = texts[textIndex % texts.length];

      if (!element) return; // ⛔️ Guard inside the recursive call too

      if (isDeleting) {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        setTimeout(type, typingSpeed);
      } else {
        const speed = isDeleting ? erasingSpeed : typingSpeed;
        setTimeout(type, speed);
      }
    }

    type();
  }, [elementId, texts, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return null; // this component modifies the DOM externally
}
