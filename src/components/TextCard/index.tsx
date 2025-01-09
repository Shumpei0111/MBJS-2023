import { AlwaysShow } from '@/features/home/AlwaysShow';
import { ThumbnailHover } from '@/features/home/ThumbnailHover';
import { useProductCard } from '@/hooks/useProductCard';
import { type CommonCard } from '../ProductCard';

export const TextCard: React.FC<Omit<CommonCard, 'image' | 'coverImage'>> = ({
  pageUrl,
  title,
  genre,
  description,
  stack,
  repository,
  blog,
}) => {
  const { targetRef, peerTargetRef, isIntersecting, isStackShow } =
    useProductCard();

  return (
    <article
      data-component="text-card"
      className="min-h-full grid justify-center bg-[rgba(0,0,0,0.75)] pb-4"
      ref={targetRef}
    >
      <div className="max-w-[500px]">
        <AlwaysShow
          title={title}
          genre={genre}
          url={pageUrl}
          isStackShow={isStackShow}
        />
        {blog && (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener"
            className="font-sans text-14"
          >
            BLOG / {blog.title}
          </a>
        )}
        <ThumbnailHover
          description={description}
          stack={stack}
          isStackShow={isStackShow}
          peerTargetRef={peerTargetRef}
          repository={repository}
        />
      </div>
    </article>
  );
};
