import React, { useState, useEffect } from 'react';

interface CyberGlitchTextProps {
  text: string;
  className?: string;
  scrambleOnMount?: boolean;
}

const GLYPHS = '01#%*&!?_<>[]/~+=XYZ';

export const CyberGlitchText: React.FC<CyberGlitchTextProps> = ({
  text,
  className = '',
  scrambleOnMount = true,
}) => {
  const [displayText, setDisplayText] = useState(scrambleOnMount ? '' : text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!scrambleOnMount) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      iteration += 1;

      const nextText = text
        .split('')
        .map((char, index) => {
          if (char === ' ' || char === '\n') return char;
          if (index < iteration) return text[index];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

      setDisplayText(nextText);

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [text, scrambleOnMount]);

  const triggerGlitch = () => {
    setIsGlitching(true);
    window.setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <span
      onMouseEnter={triggerGlitch}
      className={`inline-block transition-all ${isGlitching ? 'skew-x-2 text-[#ECDFCC] underline' : ''} ${className}`}
    >
      {displayText || text}
    </span>
  );
};
