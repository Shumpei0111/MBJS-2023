import { CommonCard } from '@/components/ProductCard';
import classNames from 'classnames';

export const AlwaysShow: React.FC<
  Pick<CommonCard, 'title' | 'genre'> & { url: string; isStackShow: boolean }
> = ({ title, genre, url, isStackShow }) => (
  <div data-show="always" className="pt-4">
    <a
      href={url}
      className="flex items-center gap-x-2 relative group/title"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-30 font-sans">{title}</span>
      <span
        className={classNames(
          'text-30 relative group-hover/title:pl-4 group-hover/title:opacity-100 opacity-0 duration-200',
          isStackShow && 'pl-4 opacity-100',
        )}
      >
        Visit?
      </span>
    </a>
    <p className="text-12 pt-4 font-sans">{genre}</p>
  </div>
);
