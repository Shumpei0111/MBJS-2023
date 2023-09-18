import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { DoujinCard } from '@/components/DoujinCard';
import { doujinData } from '@/features/home/doujinData';
import { useRef, createRef, useEffect, RefObject } from 'react';
import { useSideSlide } from '@/hooks/useSideSlide';

export const DoujinSection: React.FC = () => {
  const { cardRefs, parentRef, scrollSliderRef, handleUpdateTranslate } =
    useSideSlide();

  doujinData.forEach((_, index) => {
    cardRefs.current[index] = createRef<HTMLLIElement>();
  });

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
      {/* NOTE; parentRef カードの枚数で h-[n*100vh] が決まる */}
      <div className="relative h-[350vh]" ref={parentRef}>
        <div className="h-screen sticky top-0 left-0 bg-primary mt-14 w-screen mx-[calc(50%_-_50vw)]">
          <ul className="relative" data-scroll-slider ref={scrollSliderRef}>
            {doujinData.map((book, index) => (
              <li
                key={book.title}
                data-scroll-slider-item
                ref={cardRefs.current[index]}
                className="absolute top-0 left-0 pr-10 md:p-4"
              >
                <DoujinCard
                  className="text-black"
                  coverImage={book.coverImage}
                  image={book.image}
                  title={book.title}
                  genre={book.genre}
                  description={book.description}
                  stack={book.stack}
                  repository={book.repository}
                  eventName={book.eventName}
                />
              </li>
            ))}
          </ul>
          <div className="absolute top-[95%] left-0 w-screen mx-[calc(50%_-_50vw)] h-2 bg-black" />
        </div>
      </div>
    </div>
  );
};
