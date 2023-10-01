import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { splitImage } from '@/lib/splitImage';
import Link from 'next/link';

const HeroRow: React.FC<{
  children: React.ReactNode;
  hasSeparator?: boolean;
}> = ({ children, hasSeparator = false }) => {
  return (
    <div data-name="hero-row" className="">
      <div
        data-name="hero-row-text"
        className="flex justify-between w-full overflow-hidden h-[25vh]"
      >
        {children}
      </div>
      {hasSeparator && (
        <div
          data-name="hero-row-separator"
          className="border-1 border-primary z-10"
        />
      )}
    </div>
  );
};

const Presenter = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const initHero = (): void => {
    const heroTitles = heroRef.current?.querySelectorAll(
      '[data-name="hero-row-heading"]',
    );
    const heroSubtitles = heroRef.current?.querySelectorAll(
      '[data-name="hero-row-subheading"]',
    );
    const heroSeparator = heroRef.current?.querySelectorAll(
      '[data-name="hero-row-separator"]',
    );
    const heroMedia = heroRef.current?.querySelectorAll(
      '[data-name="hero-media"]',
    );

    if (heroRef.current === null) return;
    heroTitles && gsap.set(heroTitles, { y: '101%' });
    heroSubtitles && gsap.set(heroSubtitles, { autoAlpha: 0 });
    heroSeparator && gsap.set(heroSeparator, { width: 0 });

    const showHero = (): void => {
      heroTitles &&
        heroSubtitles &&
        heroSeparator &&
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .to(
            heroTitles,
            {
              duration: 1.75,
              y: 0,
              stagger: 0.055,
            },
            0,
          )
          .to(
            heroSubtitles,
            {
              duration: 1,
              autoAlpha: 1,
              ease: 'expo.in',
              stagger: 0.055,
            },
            0,
          )
          .to(
            heroSeparator,
            {
              duration: 1.75,
              width: '100%',
              stagger: 0.095,
            },
            0,
          )
          .fromTo(
            '.cell',
            {
              height: '0',
              scale: 0.5,
            },
            {
              duration: 1.25,
              height: '100%',
              scale: 1,
              stagger: 0.025,
              ease: 'expo.inOut',
            },
          );
    };

    if (!document.querySelector('.cell-grid')) {
      const elms =
        heroMedia &&
        heroMedia[0] &&
        splitImage(4, '/images/dev/ukiyoe/14_shishi.webp', '', heroMedia[0]);
      console.log(elms);
    }

    showHero();
  };

  useEffect(() => {
    initHero();
  }, []);

  return (
    <div className="mx-auto px-4 md:pt-20 pt-0">
      <hgroup>
        <h2 className="text-40">Hero Reveal Animation</h2>
        <p>分割して画像を表示する</p>
      </hgroup>
      <section
        ref={heroRef}
        data-name="hero"
        className="relative w-full h-screen"
      >
        <div data-name="hero-wrapper" className="w-[inherit] h-[inherit]">
          <div data-name="hero-media" data-rows="4" className="  w-full">
            <div className="fixed -z-[1] pointer-events-none w-screen h-screen mx-[calc(50%_-_50vw)] top-0 left-1/2 -translate-x-1/2"></div>
          </div>
          <HeroRow hasSeparator>
            <p
              data-name="hero-row-heading"
              className="text-[18.75vh] font-bold leading-[2]"
            >
              HIROSHIGE
            </p>
            <p data-name="hero-row-subheading" className="text-20 leading-[2]">
              HOKUSAI
            </p>
          </HeroRow>
          <HeroRow hasSeparator>
            <p data-name="hero-row-subheading" className="text-20 leading-[2]">
              KYOSAI
            </p>
            <p
              data-name="hero-row-heading"
              className="text-[18.75vh] font-bold leading-[2]"
            >
              JYAKUCHU
            </p>
          </HeroRow>
          <HeroRow hasSeparator>
            <p
              data-name="hero-row-heading"
              className="text-[18.75vh] font-bold leading-[2]"
            >
              HISHIKAWA
            </p>
            <p data-name="hero-row-subheading" className="text-20 leading-[2]">
              KIYONAGA
            </p>
          </HeroRow>
          <HeroRow>
            <p data-name="hero-row-subheading" className="text-20 leading-[2]">
              SHARAKU
            </p>
            <p
              data-name="hero-row-heading"
              className="text-[18.75vh] font-bold leading-[2]"
            >
              UTAMARO
            </p>
          </HeroRow>
        </div>
        <section className="pt-10">
          <h3 className="text-26 uppercase">Development</h3>
          <ul>
            <li className="text-20">- gsap</li>
          </ul>
        </section>
        <Link href={'/dev'} className="underline pt-8 inline-block">
          一覧に戻る
        </Link>
      </section>
    </div>
  );
};

export default function HeroRevealAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <DefaultLayout>
      <SeoMeta pageTitle={'HeroRevealAnimation'} pagePath={'dev/hero-reveal'} />
      <Presenter />
    </DefaultLayout>
  );
}
