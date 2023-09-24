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
      pageUrl,
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
        <p className="text-12 font-sans">{description}</p>
      </div>
    );

    const StackBox = () => (
      <ul data-component="StackBox" className="pt-4">
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
      <div className="flex flex-col md:w-500 -mt-16 md:mt-0">
        <TitleBox />
        <GenreBox />
        <StackBox />
        {repository && <Link href={repository}>Pixiv</Link>}
      </div>
    );

    const ImagesContainer = () => (
      <div className="h-320 md:h-full -mt-16 md:mt-0">
        <div className="relative">
          <div
            className={classNames([
              'absolute top-0 left-0 overflow-hidden z-20 hidden-cover duration-1000 min-h-full',
              isIntersecting && 'is-hidden',
            ])}
          >
            <Image
              className={'object-cover'}
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
          </div>
        </div>
        <div
          className={classNames([
            'object-cover overflow-hidden top-0 left-0 min-h-full opacity-100 z-10',
          ])}
        >
          <a href={pageUrl} target="_blank" rel="noopener noreferrer">
            <Image
              className={'object-cover'}
              src={image.url ? image.url : 'https://placehold.jp/500x500.png'}
              alt={image.alt}
              width={400}
              height={300}
              priority={false}
            />
          </a>
        </div>
      </div>
    );

    return (
      <div
        data-component="doujin-card"
        className={classNames([className])}
        ref={containerRef}
      >
        <div data-ref="targetRef" ref={targetRef}>
          <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 w-700">
            <ImagesContainer />
            <DescriptionSet />
          </div>
        </div>
      </div>
    );
  },
);

DoujinCard.displayName = 'DoujinCardComponent';
