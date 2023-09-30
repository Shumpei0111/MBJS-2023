import { useEffect, useRef, useState } from 'react';

export const useInterSectionObserver = () => {
  const scrollRef = useRef<HTMLParagraphElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        } else {
          setIntersecting(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      },
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return { scrollRef, isIntersecting };
};
