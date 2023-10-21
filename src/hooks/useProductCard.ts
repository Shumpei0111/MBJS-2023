import { wait } from '@/util/wait';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export const useProductCard = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const peerTargetRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [isStackShow, setIsStackShow] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768 && targetRef.current && peerTargetRef.current) {
      gsap.to(peerTargetRef.current, { translateY: -300 });

      const hoverEnter = async () => {
        gsap.to(peerTargetRef.current, {
          translateY: 0,
          opacity: 1,
        });

        await wait(400);
        setIsStackShow((p) => !p);
      };

      const hoverLeave = async () => {
        gsap.to(peerTargetRef.current, {
          translateY: -300,
          opacity: 0,
        });

        await wait(200);
        setIsStackShow((p) => !p);
      };

      targetRef.current.addEventListener('mouseenter', hoverEnter);
      targetRef.current.addEventListener('mouseleave', hoverLeave);

      return () => {
        targetRef?.current?.removeEventListener('mouseenter', hoverEnter);
        targetRef?.current?.removeEventListener('mouseleave', hoverLeave);
      };
    }
  }, []);

  return {
    targetRef,
    peerTargetRef,
    isIntersecting,
    isStackShow,
  };
};
