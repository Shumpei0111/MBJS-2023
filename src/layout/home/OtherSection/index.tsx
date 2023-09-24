import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { ProductCard } from '@/components/ProductCard';
import { otherWorkData } from '@/features/home/otherWorkData';

export const OtherSection: React.FC = () => {
  return (
    <section className="relative pt-[500px]">
      <CategoryBackGround titleFirst={'Other'} titleSecond={'Artwork'} />
      <ul className="grid md:grid-cols-2 gap-y-10 gap-x-4 justify-center items-start">
        {otherWorkData.map((site) => (
          <li key={site.title}>
            <ProductCard
              pageUrl={site.pageUrl}
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
    </section>
  );
};
