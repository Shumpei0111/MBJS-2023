import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { ProductCard } from '@/components/ProductCard';

export const OtherSection: React.FC = () => {
  return (
    <div className="relative pt-[500px]">
      <CategoryBackGround titleFirst={'Other'} titleSecond={'Artwork'} />
      <div className="flex flex-row flex-wrap justify-between gap-y-10">
        <ProductCard
          coverImage={{
            url: '/images/project/cover-counter.png',
            alt: 'シンプル文字数カウンターのスクリーンショット',
          }}
          image={{
            url: '/images/project/counter.png',
            alt: 'シンプル文字数カウンターのスクリーンショット',
          }}
          title={'シンプル文字数カウンター'}
          genre={'Chrome拡張'}
          description={
            '入力欄に文字を入力すると文字数のカウントと、入力した最新の文字列を保存することができるカウンター。閉じると入力した文字が消えるので、「読み込み」をクリックすると保存した文字列が入力欄に挿入されます。'
          }
          stack={[
            {
              'Front-End': 'HTML/CSS/Vanilla JavaScript',
            },
            {
              Period: '3days',
            },
          ]}
          repository={''}
        />
      </div>
    </div>
  );
};
