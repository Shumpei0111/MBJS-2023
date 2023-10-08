import { SeoMeta } from '@/components/Seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useLayoutEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { DefaultLayout } from '@/layout/default';
import classNames from 'classnames';
import Link from 'next/link';

const Presenter = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '[data-name="image"]',
          scrub: true,
        },
      })
      .to('[data-name="image"]', {
        stagger: 0.2,
        y: -700,
        scrub: true,
      });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="h-auto">
      <section className="grid h-screen grid-cols-2 md:grid-cols-3 mx-auto">
        <div data-name="line" />
        <div data-name="line" />
        <div data-name="line" />
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 mx-auto">
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/dark/doll.jpeg")',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/dark/doll-2.jpeg")',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/dark/doll-3.jpg")',
            backgroundPosition: 'center',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/ukiyoe/15_kirin.webp")',
            backgroundPosition: 'center',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/ukiyoe/07_oni_green.webp")',
            backgroundPosition: 'right',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/ukiyoe/04_rock_neck.webp")',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/ukiyoe/10_hebi_onna.webp")',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage: 'url("/images/dev/dark/merry-go-round.jpg")',
          }}
        />
        <div
          data-name="image"
          className={classNames([
            "w-full h-[700px] relative bg-cover -z-[1] before:content-[''] before:absolute before:h-screen before:w-full before:z-10 before:top-0 before:left-0 before:border-r-1 before:border-black",
          ])}
          style={{
            backgroundImage:
              'url("/images/dev/photo/myanmar-2494826_1280.jpg")',
          }}
        />
      </section>
      <nav>
        <div data-name="nav-wrapper" className="w-[inherit]">
          <div data-name="nav-title">
            <hgroup className="">
              <h2 className="text-40">Modern Gallary</h2>
              <p>スクロールしたらズレながら画像が表示されるギャラリー</p>
            </hgroup>
          </div>
          <div className="">
            <section className="pt-10">
              <h3 className="text-26 uppercase">Development</h3>
              <ul>
                <li className="text-20">- gsap</li>
                <li className="text-20">- lenis</li>
              </ul>
            </section>
            <Link href={'/dev'} className="underline pt-8 inline-block">
              一覧に戻る
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default function ModernGallary() {
  useEffect(() => {
    if (document) {
      document.body.style.overscrollBehavior = 'none';
    }
  }, []);
  return (
    <DefaultLayout>
      <SeoMeta pageTitle={'Modern Gallary'} pagePath={`dev/modern-gallary`} />
      <Presenter />
    </DefaultLayout>
  );
}
