import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useRoundScroll = ({ ImageList }: { ImageList: string[] }) => {
  const wheelRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>('.wheel-card');

      const setup = () => {
        const radius =
          (wheelRef.current && wheelRef.current?.offsetWidth / 2) || 0;
        const center =
          (wheelRef.current && wheelRef.current?.offsetWidth / 2) || 0;
        const total = ImageList.length;
        const slice = (Math.PI * 2) / total;

        images.forEach((item, i) => {
          const angle = i * slice;

          const x = center + radius * Math.sin(angle);
          const y = center + radius * Math.cos(angle);

          gsap.set(item, {
            rotation: angle + '-rad',
            xPercent: -50,
            yPercent: -50,
            x,
            y,
          });
        });
      };

      if (wheelRef.current) {
        gsap.to('#wheel', {
          rotate: () => -360,
          ease: 'none',
          duration: images.length,
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 1,
            snap: 1 / images.length,
            invalidateOnRefresh: true,
          },
          paused: true,
        });

        setup();
        window.addEventListener('resize', setup);
      }
    });

    return () => {
      // window.removeEventListener('resize', setup);
      ctx.revert();
    };
  }, []);

  return {
    wheelRef,
  };
};
