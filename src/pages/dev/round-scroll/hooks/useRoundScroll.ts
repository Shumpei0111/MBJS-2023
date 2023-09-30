import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useRoundScroll = ({ ImageList }: { ImageList: string[] }) => {
  const wheelRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (wheelRef.current) {
      const images = gsap.utils.toArray<HTMLElement>('.wheel-card');

      const setup = () => {
        const radius =
          (wheelRef.current && wheelRef.current?.offsetWidth / 2) || 0;
        const center =
          (wheelRef.current && wheelRef.current?.offsetWidth / 2) || 0;
        const total = ImageList.length;
        const slice = (Math.PI * 2) / total;

        images.forEach((item, i) => {
          let angle = i * slice;

          let x = center + radius * Math.sin(angle);
          let y = center + radius * Math.cos(angle);

          gsap.set(item, {
            rotation: angle + '-rad',
            xPercent: -50,
            yPercent: -50,
            x,
            y,
          });
        });
      };

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
      });

      setup();
      window.addEventListener('resize', setup);
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return {
    wheelRef,
  };
};
