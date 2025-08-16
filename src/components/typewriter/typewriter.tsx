'use client'; // Needed if using app directory in Next.js

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
  typingSpeed = 90,
  erasingSpeed = 60,
  delayBetweenTexts = 1300,
}: TypewriterProps) {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = texts[textIndex % texts.length];

      if (!element) return;

      if (isDeleting) {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let nextSpeed = isDeleting ? erasingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        // Done typing → wait, then start deleting
        isDeleting = true;
        nextSpeed = delayBetweenTexts;
      } else if (isDeleting && charIndex === 0) {
        // Done deleting → move to next word
        isDeleting = false;
        textIndex++;
        nextSpeed = typingSpeed;
      }

      setTimeout(type, nextSpeed);
    }

    type();
  }, [elementId, texts, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return null;
}
