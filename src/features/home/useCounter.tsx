import { useState, useEffect } from 'react';

interface CounterProps {
  start: number;
  end: number;
  onEnd?: () => void;
  duration?: number;
}

export const useCounter = ({
  start,
  end,
  onEnd,
  duration = 2000,
}: CounterProps) => {
  const [current, setCurrent] = useState(start);
  let startTimestamp: number | null = null;

  const easeOutCubic = (t: number, b: number, c: number, d: number) => {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  const animateCounter = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const elapsed = timestamp - startTimestamp;

    if (elapsed < duration) {
      const newValue = easeOutCubic(elapsed, start, end - start, duration);
      setCurrent(Math.floor(newValue));
      requestAnimationFrame(animateCounter);
    } else {
      setCurrent(end);
      if (onEnd) {
        onEnd();
      }
    }
  };

  useEffect(() => {
    requestAnimationFrame(animateCounter);

    // Cleanup function to prevent potential issues with multiple effects running
    return () => {
      startTimestamp = null;
    };
  }, [end]);

  return { current };
};
