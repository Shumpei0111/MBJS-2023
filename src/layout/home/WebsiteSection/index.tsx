import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { ProductCard } from '@/components/ProductCard';
import { websiteData } from '@/features/home/websiteData';

export const WebsiteSection: React.FC = () => {
  return (
    <div className="relative">
      <CategoryBackGround titleFirst={'Website'} titleSecond={'Artwork'} />
      <ul className="grid grid-cols-2 gap-y-10 gap-x-4 pt-[460px]">
        {websiteData.map((site) => (
          <li key={site.title}>
            <ProductCard
              coverImage={site.coverImage}
              image={site.image}
              title={site.title}
              genre={site.genre}
              description={site.description}
              stack={site.stack}
              repository={site.repository}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
