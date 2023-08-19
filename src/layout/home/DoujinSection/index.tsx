import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { ProductCard } from '@/components/ProductCard';
import { doujinData } from '@/features/home/doujinData';

export const DoujinSection: React.FC = () => {
  return (
    <div className="relative">
      <CategoryBackGround titleFirst={'Doujin'} titleSecond={'Artwork'} />
      <div className="w-560">
        <p className="text-20 pb-2 leading-5 border-b-2 border-primary inline-block">
          同人活動「なな爺」名義にて活動中
        </p>
        <p className="mt-4 text-justify text-14 leading-6">
          【ファッションイラスト×アニメ】をコンセプトに、同人サークル「1月の朝」でガルパン（ガールズアンドパンツァー）やプリキュアなどの二次創作をしています。アナログ感のある、ガーリーでちょっとクラシカルなイラストを制作しています。
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-y-10">
        {doujinData.map((book) => (
          <ProductCard
            key={book.title}
            coverImage={book.coverImage}
            image={book.image}
            title={book.title}
            genre={book.genre}
            description={book.description}
            stack={book.stack}
            repository={book.repository}
            eventName={book.eventName}
          />
        ))}
      </div>
    </div>
  );
};
