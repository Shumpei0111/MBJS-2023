import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { wait } from '@/util/wait';

export type CommonCard = {
  image: {
    url: string;
    alt: string;
  };
  coverImage: {
    url: string;
    alt: string;
  };
  title: string;
  genre: string;
  description: string;
  stack: Record<string, string | string[]>[];
  repository?: string;
  eventName?: string;
};

export const ProductCard: React.FC<CommonCard> = ({
  image,
  coverImage,
  title,
  genre,
  description,
  stack,
  repository,
}) => {
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

        await wait(400);
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

  return (
    <div data-component="product-card" className="w-500" ref={targetRef}>
      <div className="w-500 h-500 peer">
        <div className="relative">
          <Image
            className={classNames([
              'object-cover absolute top-0 left-0 z-20 hidden-cover duration-300',
              isIntersecting && 'is-hidden',
            ])}
            src={
              coverImage.url
                ? coverImage.url
                : 'https://placehold.jp/500x500.png'
            }
            alt={coverImage.alt}
            width={500}
            height={500}
            priority={false}
          />
          <Image
            className={classNames([
              'object-contain absolute top-0 left-0',
              'opacity-100 z-10',
            ])}
            src={image.url ? image.url : 'https://placehold.jp/500x500.png'}
            alt={image.alt}
            width={500}
            height={500}
            priority={false}
          />
        </div>
      </div>
      <div data-show="always">
        <p className="text-30 pt-4 font-sans">{title}</p>
        <p className="text-12 pt-4 font-sans">{genre}</p>
      </div>
      <div className="overflow-hidden">
        <div data-show="thum-hover" ref={peerTargetRef}>
          <div className="border-t-1 border-b-1 border-primary mt-4">
            <p className="py-8 text-12 font-sans">{description}</p>
          </div>
          <ul
            className={classNames([
              'pt-4 opacity-0 duration-[300ms] -translate-y-10',
              isStackShow && 'opacity-100 translate-y-0',
            ])}
          >
            {stack.map((item, index) => {
              const key = Object.keys(item)[0];
              const value = item[key];
              return (
                key &&
                value && (
                  <li key={index} className="text-12 tracking-wider font-sans">
                    {key}: {value}
                  </li>
                )
              );
            })}
          </ul>
          {repository && <Link href={repository}>GitHub</Link>}
        </div>
      </div>
    </div>
  );
};
