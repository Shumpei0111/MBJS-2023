import { TextCard } from '@/components/TextCard';
import { otherWorkData } from '@/features/home/otherWorkData';
import { CategoryBackGround } from '@/layout/home/CategoryBackGround';

export const OtherSection: React.FC = () => {
  return (
    <section className="relative pt-[500px]">
      <CategoryBackGround titleFirst={'Other'} titleSecond={'Artwork'} />
      <ul className="grid md:grid-cols-2 gap-y-10 gap-x-4">
        {otherWorkData.map((site) => (
          <li key={site.title} className="h-full">
            <TextCard
              pageUrl={site.pageUrl}
              title={site.title}
              genre={site.genre}
              description={site.description}
              stack={site.stack}
              repository={site.repository}
              blog={site.blog}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
