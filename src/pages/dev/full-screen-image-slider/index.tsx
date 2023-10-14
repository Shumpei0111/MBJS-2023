import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const BgCover = () => (
  <div
    data-name="slider-content"
    className="absolute left-0 w-screen h-[calc(100vh_+_140px)] bg-[rgba(0,0,0,0.5)] z-[10000] top-0"
  />
);

const Presenter = () => {
  let currentSlideIndex = 0;
  let isAnimating = false;
  let currentTopValue = 0;

  const elements = [
    { selector: '[data-name="prefix"]', delay: 0 },
    { selector: '[data-name="names"]', delay: 0.15 },
    { selector: '[data-name="years"]', delay: 0.3 },
  ];

  useLayoutEffect(() => {
    const slides = document.querySelectorAll('[data-name="slide"]');

    slides.forEach((slide, i) => {
      if (i !== 0) {
        const img = slide.querySelector('img');
        gsap.set(img, { scale: 2, top: '4em' });
      }
    });

    function showSlide(i: number) {
      if (isAnimating) return;

      isAnimating = true;
      const slide = slides[i];
      const img = slide.querySelector('img');

      currentTopValue -= 29;

      elements.forEach((elm) => {
        gsap.to(document.querySelector(elm.selector), {
          y: `${currentTopValue}px`,
          duration: 2,
          ease: 'power4.inOut',
          delay: elm.delay,
        });
      });

      gsap.to(img, {
        scale: 1,
        top: '0%',
        duration: 2,
        ease: 'power3.inOut',
      });

      gsap.to(slide, {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
        duration: 2,
        ease: 'power4.inOut',
        onCompolete: () => {
          new Promise((r) => setTimeout(r, 1000)).then(
            () => (isAnimating = false),
          );
        },
      });
    }

    function hideSlide(i: number) {
      if (isAnimating) return;
      isAnimating = true;
      const slide = slides[i];
      const img = slide.querySelector('img');

      currentTopValue += 29;

      elements.forEach((elm) => {
        gsap.to(document.querySelector(elm.selector), {
          y: `${currentTopValue}px`,
          duration: 2,
          ease: 'power4.inOut',
          delay: elm.delay,
        });
      });

      gsap.to(slide, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        duration: 2,
        ease: 'power4.inOut',
      });

      gsap.to(img, {
        scale: 2,
        top: '4em',
        duration: 2,
        ease: 'power3.inOut',
      });

      gsap.to(slide, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        duration: 2,
        ease: 'power4.inOut',
        onComplete: () => {
          isAnimating = false;
        },
      });
    }

    window.addEventListener('wheel', (e) => {
      if (isAnimating) return;
      if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
        currentSlideIndex++;
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        currentSlideIndex--;
      }
    });

    return () => {
      window.removeEventListener('wheel', (e) => {
        if (isAnimating) return;
        if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
          showSlide(currentSlideIndex + 1);
          currentSlideIndex++;
        } else if (e.deltaY < 0 && currentSlideIndex > 0) {
          hideSlide(currentSlideIndex);
          currentSlideIndex--;
        }
      });
    };
  }, []);

  return (
    <div
      data-name="slider-content"
      className="absolute left-0 w-screen h-[calc(100vh_+_140px)] bg-[rgba(0,0,0,0.5)] z-[10000] top-0"
    >
      <BgCover />
      <div
        data-name="slide-number"
        className="absolute top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 flex gap-2 z-[10001] text-white text-18"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30px, 0 20px)' }}
      >
        <div data-name="prefix" className="relative top-0 font-blog">
          <p>1</p>
          <p className="pt-[2px]">2</p>
          <p className="pt-[2px]">3</p>
          <p className="pt-[2px]">4</p>
          <p className="pt-[2px]">5</p>
        </div>
        <div data-name="postfix relative top-[-4px]">
          <span className="font-blog">/</span>
          <span className="font-blog"> 5</span>
        </div>
      </div>
      <div
        data-name="slide-name"
        className="absolute top-1/2 left-1/2 md:left-[30%] -translate-x-1/2 -translate-y-1/2 text-white text-18 z-[10001]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30px, 0 20px)' }}
      >
        <div data-name="names" className="relative top-0 font-blog">
          <div>Ether Shift Mode</div>
          <div>Solar Thread</div>
          <div>Quantum Sheen Veil</div>
          <div>Flux Aura</div>
          <div>Echo Numbus</div>
        </div>
      </div>
      <div
        data-name="slide-year"
        className="absolute top-1/2 right-0 md:right-[20%] -translate-x-1/2 -translate-y-1/2 text-white text-18 z-[10001]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30px, 0 20px)' }}
      >
        <div data-name="years" className="relative top-0 font-blog">
          <div>2023</div>
          <div>2021</div>
          <div>2022</div>
          <div>2021</div>
          <div>2023</div>
        </div>
      </div>
      <div data-name="slider" className="relative w-screen h-screen">
        <div
          data-name="slide"
          className="flex flex-col min-h-screen absolute bottom-0 left-0 w-full h-full overflow-hidden"
          id="slide-1"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/images/dev/dark/doll.jpeg"
            alt=""
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '0 30%',
            }}
            sizes={'100vw'}
            className="flex-1 w-full h-auto"
          />
        </div>
        <div
          data-name="slide"
          className="flex flex-col min-h-screen absolute bottom-0 left-0 w-full h-full overflow-hidden"
          id="slide-2"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/images/dev/dark/doll-2.jpeg"
            alt=""
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes={'100vw'}
            className="flex-1 w-full h-auto"
          />
        </div>
        <div
          data-name="slide"
          className="flex flex-col min-h-screen absolute bottom-0 left-0 w-full h-full overflow-hidden"
          id="slide-3"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/images/dev/dark/doll-3.jpg"
            alt=""
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes={'100vw'}
            className="flex-1 w-full h-auto"
          />
        </div>
        <div
          data-name="slide"
          className="flex flex-col min-h-screen absolute bottom-0 left-0 w-full h-full overflow-hidden"
          id="slide-4"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/images/dev/dark/merry-go-round.jpg"
            alt=""
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes={'100vw'}
            className="flex-1 w-full h-auto"
          />
        </div>
        <div
          data-name="slide"
          className="flex flex-col min-h-screen absolute bottom-0 left-0 w-full h-full overflow-hidden"
          id="slide-5"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/images/dev/photo/myanmar-2494826_1280.jpg"
            alt=""
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes={'100vw'}
            className="flex-1 w-full h-auto"
          />
        </div>
        <div className="h-[400vh]" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-[10000]">
          <p className="text-center">Gsap</p>
          <Link href="/dev" className="underline text-24">
            Back to DevIndex
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function FullScreenImageSlider() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle="Full Screen Image Slider"
        pagePath="dev/full-screen-image-slider"
      />
      <Presenter />
    </DefaultLayout>
  );
}
