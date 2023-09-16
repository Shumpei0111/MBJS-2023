import { CategoryBackGround } from '@/layout/home/CategoryBackGround';
import { DoujinCard } from '@/components/DoujinCard';
import { doujinData } from '@/features/home/doujinData';
import { useRef, createRef, useEffect, RefObject } from 'react';

export const DoujinSection: React.FC = () => {
  const cardRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const scrollSliderRef = useRef<HTMLUListElement | null>(null);

  doujinData.forEach((_, index) => {
    cardRefs.current[index] = createRef<HTMLDivElement>();
  });

  useEffect(() => {
    // カードを横に並べる
    if (cardRefs.current) {
      cardRefs.current.forEach((card, ind) => {
        if (card.current) {
          card.current.style.left = `${1000 * ind}px`;
        }
      });
    }

    window.addEventListener('scroll', () => {
      handleUpdateTranslate(scrollSliderRef.current);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        handleUpdateTranslate(scrollSliderRef.current);
      });
    };
  }, []);

  const getWidthFirstItem = () => {
    if (cardRefs.current) {
      const f = cardRefs.current[0];
      return f && f.current ? f.current.getBoundingClientRect().width : 0;
    }
    return 0;
  };

  const getDistance = () => {
    let t = 0;
    if (cardRefs.current) {
      return (
        cardRefs.current.forEach((e, s) => {
          s === 0 || s === cardRefs.current.length - 1
            ? (t += e && e.current ? e.current.offsetWidth / 2 : 0)
            : (t += e && e.current ? e.current.offsetWidth : 0);
        }),
        (t += (cardRefs.current.length - 1) * 100),
        t
      );
    }
    return t;
  };

  const handleUpdateTranslate = (elm: HTMLUListElement | null) => {
    if (!elm) return;
    const firstItemWidth = getWidthFirstItem();
    console.log('firstItemWidth: ', firstItemWidth);

    const parentHeight = parentRef.current
      ? parentRef.current.getBoundingClientRect().height
      : 0;
    const parentWidth = parentRef.current
      ? parentRef.current.getBoundingClientRect().width
      : 0;

    const distance = getDistance() - document.documentElement.scrollTop;

    elm.style.transform = `translate(${
      (parentWidth + firstItemWidth) / 3 + distance
    }px, ${parentHeight / 20}px)`;
  };

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
        <div className="h-screen sticky top-0 left-0 bg-primary mt-6 w-screen mx-[calc(50%_-_50vw)]">
          <ul className="relative" data-scroll-slider ref={scrollSliderRef}>
            {doujinData.map((book, index) => (
              <li key={book.title} data-scroll-slider-item>
                <DoujinCard
                  className="absolute top-0 left-0 sm:w-[100vw] md:w-[85vw] w-[50vw] text-black"
                  ref={cardRefs.current[index]}
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
