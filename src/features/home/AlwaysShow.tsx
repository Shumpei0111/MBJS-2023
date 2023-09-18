import { CommonCard } from '@/components/ProductCard';

export const AlwaysShow: React.FC<Pick<CommonCard, 'title' | 'genre'>> = ({
  title,
  genre,
}) => (
  <div data-show="always">
    <p className="text-30 pt-4 font-sans">{title}</p>
    <p className="text-12 pt-4 font-sans">{genre}</p>
  </div>
);
