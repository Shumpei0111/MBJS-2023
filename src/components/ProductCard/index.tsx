import Image from 'next/image';
import classNames from 'classnames';
import { useProductCard } from '@/hooks/useProductCard';
import { AlwaysShow } from '@/features/home/AlwaysShow';
import { ThumbnailHover } from '@/features/home/ThumbnailHover';

export type CommonCard = {
  pageUrl: string;
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
};

export const ProductCard: React.FC<CommonCard> = ({
  pageUrl,
  image,
  coverImage,
  title,
  genre,
  description,
  stack,
  repository,
}) => {
  const { targetRef, peerTargetRef, isIntersecting, isStackShow } =
    useProductCard();

  return (
    <article
      data-component="product-card"
      className="min-h-full grid justify-center items-center"
      ref={targetRef}
    >
      <div className="relative">
        <div
          className={classNames([
            'absolute top-0 left-0 overflow-hidden z-20 hidden-cover duration-300 min-h-full',
            isIntersecting && 'is-hidden',
          ])}
        >
          <a href={pageUrl} target="_blank" rel="noopener noreferrer">
            <Image
              className={'object-cover'}
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
          </a>
        </div>
        <div
          className={classNames([
            'object-cover overflow-hidden top-0 left-0 min-h-full opacity-100 z-10',
          ])}
        >
          <Image
            className={'object-cover'}
            src={image.url ? image.url : 'https://placehold.jp/500x500.png'}
            alt={image.alt}
            width={500}
            height={500}
            priority={false}
          />
        </div>
      </div>
      <div className="max-w-[500px]">
        <AlwaysShow title={title} genre={genre} />
        <ThumbnailHover
          description={description}
          stack={stack}
          isStackShow={isStackShow}
          peerTargetRef={peerTargetRef}
        />
      </div>
    </article>
  );
};
