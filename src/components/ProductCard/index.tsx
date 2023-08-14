import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useEffect, useRef, use } from 'react';

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
  stack: Record<string, string>[];
  repository?: string;
};

const wait = async (ms: number): Promise<() => void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

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
  const [isIntersecting, setIntersecting] = useState(false);

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

  return (
    <div className="w-500" ref={targetRef}>
      <div className="w-500 h-500">
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
      <p className="text-30 mt-4 font-sans">{title}</p>
      <p className="text-12 mt-4 font-sans">{genre}</p>
      <div className="border-t-1 border-b-1 border-primary mt-4">
        <p className="py-8 text-12 font-sans">{description}</p>
      </div>
      <ul className="mt-4">
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
  );
};
