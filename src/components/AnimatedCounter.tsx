import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "1,500+", "98%", "10,000", "4.1★"
  className?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  prefix = '',
  suffix = '',
  duration = 1800,
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  // Extract numeric and non-numeric parts
  const cleanNumberMatch = value.replace(/,/g, '').match(/(\d+\.?\d*)/);
  const numericTarget = cleanNumberMatch ? parseFloat(cleanNumberMatch[0]) : 0;
  const nonNumericSuffix = value.replace(/[\d,.]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = numericTarget * easedProgress;

            if (numericTarget % 1 !== 0) {
              // Float (e.g. 4.1)
              setDisplayValue(currentNum.toFixed(1));
            } else if (numericTarget >= 1000) {
              // Comma format
              setDisplayValue(Math.floor(currentNum).toLocaleString('en-US'));
            } else {
              setDisplayValue(Math.floor(currentNum).toString());
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              // Final exact match
              setDisplayValue(value.replace(/[^\d,.]/g, ''));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated, numericTarget]);

  return (
    <span ref={elementRef} className={`font-mono ${className}`}>
      {prefix}
      {displayValue}
      {nonNumericSuffix}
      {suffix}
    </span>
  );
};
