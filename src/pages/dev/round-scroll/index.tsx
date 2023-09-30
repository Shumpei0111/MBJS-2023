import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import classNames from 'classnames';
import { useRoundScroll } from '@/hooks/round-scroll/useRoundScroll';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import style from './animation.module.css';
import { useInterSectionObserver } from '@/hooks/round-scroll/useInterSectionObserver';
import Link from 'next/link';
import { TransitionItem } from '@/features/animation/transitionItem';
import Image from 'next/image';

const ImageList = [
  '01_tennyopng.webp',
  '05_oiwa.webp',
  '09_tuzura_yokai.webp',
  '02_bake_neko.webp',
  '06_onibi.webp',
  '10_hebi_onna.webp',
  '14_shishi.webp',
  '03_okiku.webp',
  '07_oni_green.webp',
  '11_furoshiki.webp',
  '15_kirin.webp',
  '04_rock_neck.webp',
  '08_kitoshi.webp',
  '01_tennyopng.webp',
  '05_oiwa.webp',
  '09_tuzura_yokai.webp',
  '02_bake_neko.webp',
  '06_onibi.webp',
  '10_hebi_onna.webp',
  '14_shishi.webp',
  '03_okiku.webp',
  '07_oni_green.webp',
  '11_furoshiki.webp',
  '15_kirin.webp',
  '04_rock_neck.webp',
  '08_kitoshi.webp',
];

const WheelCard: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Image
      src={src}
      alt={`wheel card item, ${src}`}
      className={classNames([
        'w-full z-[999] relative duration-300',
        style['animation'],
      ])}
      fill
      sizes="300px"
      style={{ objectFit: 'contain' }}
    />
  );
};

const Presenter: React.FC<{
  isIntersecting: boolean;
}> = ({ isIntersecting }) => {
  const { wheelRef } = useRoundScroll({ ImageList });

  return (
    <div className="mx-auto pt-0 md:pt-20 px-4 h-[600vh]">
      <section className="fixed">
        <TransitionItem transitionIndex={0}>
          <h2 className="text-40">Around &quot;Yokai in Ukiyoe&quot;</h2>
          <p className="">スクロールに応じて要素を回転させる</p>
          <section className="pt-10">
            <h3 className="text-26 uppercase">Development</h3>
            <ul>
              <li className="text-20">- gsap</li>
            </ul>
          </section>
          <Link href={'/dev'} className="underline pt-8 inline-block">
            一覧に戻る
          </Link>
        </TransitionItem>
      </section>
      <p className="fixed text-30 left-1/2 -translate-x-1/2 md:top-1/2 top-[35rem] md:translate-y-1/2 border-1 rounded-full px-4 border-primary">
        Scroll {isIntersecting ? 'up' : 'down'}
      </p>
      <section
        data-name="slider-section"
        className="h-[22vh] bottom-0 fixed w-screen mx-[calc(50%_-_50vw)] left-0"
      >
        <ul
          id="wheel"
          ref={wheelRef}
          data-name="wheel"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[300vw] max-w-[4000px] max-h-[4000px]"
        >
          {ImageList.map((src, ind) => (
            <li
              key={`${src}-${ind}`}
              data-name="wheel-card"
              className="wheel-card absolute top-0 left-0 w-[6%] max-w-[300px] aspect-square"
            >
              <WheelCard key={src} src={`/images/dev/ukiyoe/${src}`} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default function RoundScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const { scrollRef, isIntersecting } = useInterSectionObserver();

  return (
    <DefaultLayout>
      <SeoMeta pageTitle={'RoundScroll'} pagePath={`dev/round-scroll`} />
      <Presenter isIntersecting={isIntersecting} />
      <div ref={scrollRef} className=" opacity-0 h-100 w-screen"></div>
    </DefaultLayout>
  );
}
