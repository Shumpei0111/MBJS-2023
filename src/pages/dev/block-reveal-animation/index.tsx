import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect } from 'react';

type WrapProps = {
  num: number;
  image: {
    src: string;
  };
};

const ImageList = [
  { src: '/images/dev/dark/doll.jpeg' },
  { src: '/images/dev/dark/doll-2.jpeg' },
  { src: '/images/dev/dark/doll-3.jpg' },
  { src: '/images/dev/dark/merry-go-round.jpg' },
  { src: '/images/dev/dark/doll.jpeg' },
  { src: '/images/dev/dark/doll-2.jpeg' },
  { src: '/images/dev/dark/doll-3.jpg' },
  { src: '/images/dev/dark/merry-go-round.jpg' },
];

const RevealWrap: React.FC<WrapProps> = ({ num, image }) => {
  return (
    <div data-name="reveal-img">
      <div data-name="reveal-img-item">
        <span
          data-name="img-num"
          className="text-40 absolute top-0 left-0 scale-[-1]"
          style={{ writingMode: 'vertical-lr' }}
        >
          {num < 9 ? `00${num}` : `0${num}`}
        </span>
        <div
          data-name="img-inner"
          className="bg-black relative w-full max-w-[400px]"
          style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
        >
          <div
            data-name="img-bl"
            className="overflow-hidden w-full max-w-[400px]"
            style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
          >
            <div
              data-name="img-img"
              className="relative max-w-[400px] max-h-[400px] block will-change-transform w-full h-400"
            >
              <Image
                src={image.src}
                alt={image.src}
                fill
                sizes="400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Presenter: React.FC = () => {
  useLayoutEffect(() => {
    const gsapItem = gsap.utils.toArray(
      '[data-name="reveal-img-item"]',
    ) as HTMLDivElement[];

    gsapItem.forEach((item, i) => {
      const imgNum = item.querySelector('[data-name="img-num"]');
      const imgInner = item.querySelector('[data-name="img-inner"]');
      const imgBl = item.querySelector('[data-name="img-bl"]');
      const imgImg = item.querySelector('[data-name="img-img"]');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
      tl.fromTo(
        imgNum,
        {
          duration: 0.2,
          opacity: 0,
          y: 40,
          ease: 'expo.out',
        },
        {
          opacity: 1,
          duration: 0.5,
          y: 0,
        },
      );
      tl.to(
        imgInner,
        {
          duration: 2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: 'expo.out',
        },
        '-=1',
      );
      tl.to(
        imgBl,
        {
          duration: 2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: 'expo.out',
        },
        '-=1',
      );
      tl.fromTo(
        imgImg,
        { duration: 1, scale: 1.2, filter: 'blur(15px)', ease: 'expo.out' },
        { duration: 2, scale: 1, filter: 'none', ease: 'expo.out' },
        '-=1.7',
      );
    });
  }, []);

  return (
    <div className="mx-auto pt-0 md:pt-20 px-4">
      <nav className="relative h-300">
        <div data-name="nav-wrapper" className="w-[inherit] relative">
          <div data-name="nav-title">
            <hgroup className="">
              <h2 className="text-40">Block Reveal Animation</h2>
              <p>スクロールすると画像とテキストが順に表示される</p>
            </hgroup>
          </div>
          <div className="">
            <section className="pt-10">
              <h3 className="text-26 uppercase">Development</h3>
              <ul>
                <li className="text-20">- gsap</li>
              </ul>
            </section>
            <Link href={'/dev'} className="underline pt-8 inline-block">
              一覧に戻る
            </Link>
          </div>
        </div>
      </nav>
      <section data-name="reveal" className="relative w-full h-auto">
        <ul
          data-name="reveal-wrap"
          className="flex flex-col md:flex-row justify-between flex-wrap gap-[150px] w-full h-auto pb-[170px]"
        >
          {ImageList.map((image, i) => (
            <li
              data-name="reveal-wrap"
              key={i}
              data-index={i}
              className="relative w-full md:w-[calc(50%_-_(150px/2))] h-[550px] pl-[53px] overflow-hidden md:even:translate-y-[150px]"
            >
              <RevealWrap num={i + 1} image={image} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default function BlockRevealAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle={'Block Reveal Animation'}
        pagePath={`dev/block-reveal-animation`}
      />
      <Presenter />
    </DefaultLayout>
  );
}
