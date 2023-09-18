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

    const TitleBox = () => (
      <div data-component="TitleBox">
        <p>{eventName}</p>
        <p className="text-20">{title}</p>
      </div>
    );

    const GenreBox = () => (
      <div data-component="GenreBox" className="border-y-1 border-black py-10">
        <p>GENRE: {genre}</p>
        <p>{description}</p>
      </div>
    );

    const StackBox = () => (
      <ul data-component="StackBox">
        {stack.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            key &&
            value && (
              <li key={index} className="text-12 tracking-wider font-sans">
                {value} {item.count && `* ${item.count}`}
                {item.sub &&
                  Array.isArray(item.sub) &&
                  item.sub.map((sub, ind) => <p key={ind}>- {sub}</p>)}
              </li>
            )
          );
        })}
      </ul>
    );

    const DescriptionSet: React.FC = () => (
      <div className="flex flex-col md:w-500">
        <TitleBox />
        <GenreBox />
        <StackBox />
        {repository && <Link href={repository}>Pixiv</Link>}
      </div>
    );

    const ImagesContainer = () => (
      <div className="relative w-300 md:w-400 min-h-[300px] h-430 md:h-auto">
        <Image
          className={classNames([
            'object-cover absolute top-0 left-0 z-20 hidden-cover duration-300',
            isIntersecting && 'is-hidden',
          ])}
          src={
            coverImage.url ? coverImage.url : 'https://placehold.jp/500x500.png'
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
    );

    return (
      <div
        data-component="doujin-card"
        className={classNames([className])}
        ref={containerRef}
      >
        <div ref={targetRef}>
          <div className="flex md:flex-row flex-col gap-x-2 md:gap-x-10">
            <ImagesContainer />
            <DescriptionSet />
          </div>
        </div>
      </div>
    );
  },
);

DoujinCard.displayName = 'DoujinCardComponent';
