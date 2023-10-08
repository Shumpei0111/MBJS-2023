import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, createRef, useEffect, useRef } from 'react';

const ImageList = [
  { src: '01_tennyopng.webp', top: '10.3rem', left: '1.3rem', zIndex: 1 },
  { src: '05_oiwa.webp', top: '5rem', left: '19.5rem' },
  { src: '09_tuzura_yokai.webp', top: '28.5rem', left: '10.6rem', zIndex: 2 },
  { src: '02_bake_neko.webp', top: '1rem', right: '2.6rem' },
  { src: '06_onibi.webp', top: '39rem', right: '7rem' },
  { src: '10_hebi_onna.webp', top: '34rem', right: '16rem' },
];

const HeroGalleryFrame: React.FC<{
  src: string;
}> = ({ src }) => {
  return (
    <div
      data-name="hero-gallery-frame-figure"
      className="w-250 h-500 relative hover:blur-md duration-300"
    >
      <Image
        src={`/images/dev/ukiyoe/${src}`}
        alt={src}
        fill
        data-name="hero-gallery-frame-image"
        style={{ objectFit: 'cover' }}
        sizes="250px"
        className="opacity-95"
        priority
      />
    </div>
  );
};

const Presenter: React.FC = () => {
  const splitTitle = 'TRADITIONAL'.split('');

  let isEnabled = false;

  const navRef = useRef<HTMLElement>(null);
  const heroTitleRefs = useRef<RefObject<HTMLSpanElement>[]>([]);
  splitTitle.forEach(
    (_, i) => (heroTitleRefs.current[i] = createRef<HTMLSpanElement>()),
  );
  const heroGalleryRef = useRef<HTMLDivElement>(null);
  const heroFrameRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  ImageList.forEach(
    (_, i) => (heroFrameRefs.current[i] = createRef<HTMLDivElement>()),
  );

  const initHero = (): void => {
    if (navRef.current === null || heroGalleryRef.current === null) return;

    gsap.set([navRef.current, heroGalleryRef.current], { autoAlpha: 0 });
    heroTitleRefs.current.forEach((r) => gsap.set(r.current, { y: '-100%' }));
    heroFrameRefs.current.forEach((r) => gsap.set(r.current, { height: 0 }));

    showHero();
  };

  const showHero = (): void => {
    const directHeroFrames =
      heroFrameRefs.current &&
      document.querySelectorAll('[data-name="hero-gallery-frame"]');

    navRef.current &&
      heroTitleRefs.current &&
      heroGalleryRef.current &&
      heroFrameRefs.current &&
      gsap
        .timeline()
        .to(
          navRef.current,
          {
            duration: 1.2,
            autoAlpha: 1,
            ease: 'expo.inOut',
          },
          0,
        )
        .to(
          heroTitleRefs.current[0].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[1].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[2].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[3].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[4].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[5].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[6].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[7].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[8].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[9].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroTitleRefs.current[10].current,
          {
            duration: 1.8,
            y: 0,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          heroGalleryRef.current,
          {
            duration: 0.5,
            autoAlpha: 1,
            ease: 'expo.inOut',
            stagger: 0.025,
          },
          0,
        )
        .to(
          directHeroFrames,
          {
            duration: 1.8,
            height: 'auto',
            ease: 'expo.inOut',
            stagger: {
              each: 0.025,
              from: 'random',
              grid: 'auto',
              ease: 'expo.inOut',
            },
            onComplete: () => {
              isEnabled = true;
            },
          },
          0.1,
        );
  };

  const animateImages = (e: MouseEvent): void => {
    heroFrameRefs.current.forEach((frames) => {
      if (frames.current) {
        let xPos = e.clientX / window.innerWidth - 0.5;
        let yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(frames.current, {
          duration: 0.5,
          rotationX: yPos * 10,
          rotationY: xPos * 10,
          stagger: 0.055,
        });
      }
    });
  };

  useEffect(() => {
    initHero();

    window.addEventListener('mousemove', (e) => {
      if (!isEnabled) return;
      animateImages(e);
    });

    return () => {
      window.removeEventListener('mousemove', (e) => {
        if (!isEnabled) return;
        animateImages(e);
      });
    };
  }, []);

  return (
    <div className="mx-auto pt-0 md:pt-20 px-4 h-[600vh]">
      <nav
        className="md:fixed top-1/2 translate-y-1/3 left-0 w-full z-[999999] p-[3rem]"
        ref={navRef}
      >
        <div data-name="nav-wrapper" className="w-[inherit] relative">
          <div data-name="nav-title">
            <hgroup className="bg-black inline-block">
              <h2 className="text-40">Mouse Move Animation</h2>
              <p>
                マウスの動きに追従してパースを変更する（PCで閲覧してください）
              </p>
              <p>Please view on PC.</p>
            </hgroup>
          </div>
          <div className="bg-black inline-block">
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
      <section
        data-name="hero"
        className="relative w-full overflow-hidden top-[-130px] hidden md:block"
      >
        <div
          data-name="hero-wrapper"
          className="flex imtes-center justify-center w-[inherit] h-[inherit]"
        >
          <div
            data-name="hero-gallary"
            className="relative w-full h-[88rem]"
            style={{ perspective: '1000px' }}
            ref={heroGalleryRef}
          >
            {ImageList.map((image, i) => (
              <div
                data-name="hero-gallery-frame"
                className="absolute border-1 border-primary rounded-md overflow-hidden w-auto h-auto bg-black"
                style={{
                  filter: 'drop-shadow(0px 1.125px 36px rgba(0,0,0,0.15))',
                  top: image.top,
                  left: image.left,
                  right: image.right,
                  zIndex: image.zIndex,
                }}
                key={i}
                ref={heroFrameRefs.current[i]}
              >
                <HeroGalleryFrame {...image} src={image.src} />
              </div>
            ))}
          </div>

          <div
            data-name="hero-title"
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-10 overflow-hidden mix-blend-difference inline-flex items-center justify-center"
          >
            {splitTitle.map((str, i) => (
              <span
                data-name={`split-title/${str}-${i}`}
                className="text-200 text-center text-white leading-[1]"
                key={i}
                ref={heroTitleRefs.current[i]}
              >
                {str}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default function ThreeDPerspective() {
  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle={'3D Perspective'}
        pagePath={'dev/threed-perspective'}
      />
      <Presenter />
    </DefaultLayout>
  );
}
