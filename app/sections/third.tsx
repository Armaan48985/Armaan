'use client'
import { useEffect, useState } from "react";
import { HeroScrollDemo } from "../scrollProject";

export default function ThirdSection() {
  const [glitchedText, setGlitchedText] = useState('Work');
  const [isGlitching, setIsGlitching] = useState(false);

  // Random character generator
  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  // Glitch effect function
  const glitchEffect = () => {
    setIsGlitching(true);
    const splitText = 'Work'.split('');
    const glitchInterval = setInterval(() => { // Changed let to const here
      const glitchedLetters = splitText.map((letter) =>
        Math.random() > 0.5 ? getRandomChar() : letter
      );
      setGlitchedText(glitchedLetters.join(''));
    }, 100);

    // Stop glitching after 2 seconds and revert to original text
    setTimeout(() => {
      clearInterval(glitchInterval);
      setGlitchedText('Work');
      setIsGlitching(false);
    }, 2000);
  };

  useEffect(() => {
    // Trigger glitch effect on mount
    glitchEffect();

    // Set interval to trigger glitch effect every 5 seconds
    const glitchInterval = setInterval(() => {
      glitchEffect();
    }, 4000);

    return () => clearInterval(glitchInterval); // Cleanup interval on component unmount
  });

  return (
    <div className="text-center mt-16" id="thirdSection">
      <h1 className="text-8xl font-semibold uppercase">
        {glitchedText.split('').map((letter, index) => (
          <span key={index} className={` ${isGlitching ? 'glitch-active' : ''}`}>
            {letter}
          </span>
        ))}
      </h1>

      <HeroScrollDemo />
    </div>
  );
}
