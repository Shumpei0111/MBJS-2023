import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { ProductCard } from '@/components/ProductCard';
import { websiteData } from '@/features/home/websiteData';

export const WebsiteSection: React.FC = () => {
  return (
    <div className="relative">
      <CategoryBackGround titleFirst={'Website'} titleSecond={'Artwork'} />
      <div className="flex flex-row flex-wrap justify-between gap-y-10">
        {websiteData.map((site) => (
          <ProductCard
            key={site.title}
            coverImage={site.coverImage}
            image={site.image}
            title={site.title}
            genre={site.genre}
            description={site.description}
            stack={site.stack}
            repository={site.repository}
          />
        ))}
      </div>
    </div>
  );
};
