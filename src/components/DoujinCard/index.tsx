import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useProductCard } from '@/hooks/useProductCard';
import { type CommonCard } from '../ProductCard';
import { forwardRef } from 'react';

export type DoujinCardProps = CommonCard & {
  eventName?: string;
  className?: string;
};

export const DoujinCard = forwardRef(
  (
    {
      image,
      coverImage,
      title,
      genre,
      description,
      stack,
      repository,
      eventName,
      className,
    }: DoujinCardProps,
    ref,
  ) => {
    const { targetRef, isIntersecting } = useProductCard();
    const containerRef = ref as React.MutableRefObject<HTMLDivElement>;

    return (
      <div
        data-component="doujin-card"
        className={classNames([className])}
        ref={containerRef}
      >
        <div ref={targetRef}>
          <div className="flex flex-row gap-x-10">
            <div className="relative w-400">
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
                width={400}
                height={300}
                priority={false}
              />
              <Image
                className={classNames([
                  'object-contain absolute top-0 left-0',
                  'opacity-100 z-10',
                ])}
                src={image.url ? image.url : 'https://placehold.jp/500x500.png'}
                alt={image.alt}
                width={400}
                height={300}
                priority={false}
              />
            </div>
            <div className="w-400">
              <div>
                <p>{eventName}</p>
                <p className="text-20">{title}</p>
              </div>
              <div className="border-y-1 border-black py-10">
                <p>GENRE: {genre}</p>
                <p>{description}</p>
              </div>
              <ul>
                {stack.map((item, index) => {
                  const key = Object.keys(item)[0];
                  const value = item[key];
                  return (
                    key &&
                    value && (
                      <li
                        key={index}
                        className="text-12 tracking-wider font-sans"
                      >
                        {value} {item.count && `* ${item.count}`}
                        {item.sub &&
                          Array.isArray(item.sub) &&
                          item.sub.map((sub, ind) => <p key={ind}>- {sub}</p>)}
                      </li>
                    )
                  );
                })}
              </ul>
              {repository && <Link href={repository}>Pixiv</Link>}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

DoujinCard.displayName = 'DoujinCardComponent';
