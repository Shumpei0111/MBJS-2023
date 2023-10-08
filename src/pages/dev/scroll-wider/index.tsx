import { DefaultLayout } from '@/layout/default';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import classNames from 'classnames';
import Link from 'next/link';

const Navigation = () => (
  <div className="pt-20 -mb-20">
    <h2 className="text-40">Scroll Wider</h2>
    <p>
      スクロールに応じてテキストの位置変更・画像をズームさせる（PCで閲覧してください）
    </p>
    <p>Please view on PC.</p>
    <section className="pt-10">
      <h3 className="text-26 uppercase">Development</h3>
      <ul className="flex gap-6">
        <li className="text-20">- gsap</li>
        <li className="text-20">- locomotive-scroll</li>
      </ul>
    </section>
    <Link href={'/dev'} className="underline pt-8 inline-block">
      一覧に戻る
    </Link>
  </div>
);

const LoadingComponent = ({ isInit }: { isInit: boolean }) => (
  <div
    className={classNames([
      'w-screen bg-black h-screen fixed md:mx-[calc(50%_-_50vw)] left-0 top-0',
      isInit ? 'opacity-0 -z-10' : 'opacity-100 z-[999]',
    ])}
    style={{ transitionDuration: '600ms' }}
  >
    <p className="fixed top-1/2 left-1/2 -translate-x-1/2 text-80">
      Loading...
    </p>
  </div>
);

const TextSection = () => (
  <section
    data-name="section copy"
    className="relative md:flex justify-center hidden"
  >
    <div data-name="section-wrapper" className="max-w-[1400px]">
      <div data-name="content">
        <p className="md:text-40">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </section>
);

const Presenter: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const [isInit, setIsInit] = useState(false);

  useLayoutEffect(() => {
    let locoScroll: any;
    const ctx = gsap.context(() => {
      const options = {
        el: document.querySelector('#scroll-container'),
        smooth: true,
        lerp: 0.08,
      };

      // 動的に読み込まないと document is not defined になる
      import('locomotive-scroll').then((locomotiveModule) => {
        locoScroll = new locomotiveModule.default(options);
        locoScroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy('.smooth-scroll', {
          scrollTop(v) {
            return arguments.length
              ? locoScroll && locoScroll.scrollTo(v, 0, 0)
              : locoScroll && locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: scrollRef.current?.style.transform ? 'transform' : 'fixed',
        });

        const vh = (coef: number) => window.innerHeight * (coef / 100);

        const heroScroller = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: '.head-1',
            // trigger: headRef.current,
            scroller: '.smooth-scroll',
            pin: '.pin-wrappper',
            start: 'top 10%',
            scrub: true,
            end: `${vh(30)}`,
          },
        });

        heroScroller
          .to(
            '.head-1',
            {
              duration: 2,
              scale: 2,
              y: vh(60),
              xPercent: -10,
            },
            'heroScroll',
          )
          .to(
            '.head-3',
            {
              duration: 2,
              scale: 2,
              y: vh(100),
              xPercent: -10,
            },
            'heroScroll',
          )
          .to(
            '.head-2',
            {
              duration: 2,
              scale: 2,
              y: vh(100),
              xPercent: 90,
            },
            'heroScroll',
          )
          .to(
            '#heroImage',
            {
              duration: 1,
              scaleY: 2.5,
            },
            'heroScroll',
          )
          .to(
            '#heroImage .image',
            {
              duration: 1,
              scaleX: 2.5,
              xPercent: 50,
            },
            'heroScroll',
          );

        // ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
        locoScroll.update();
        ScrollTrigger.refresh();

        setTimeout(() => {
          setIsInit(true);
        }, 800);
      });
    });

    return () => {
      ctx.revert();
      if (!!locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, []);

  return (
    <div className="mx-auto pt-0 px-4">
      <LoadingComponent isInit={isInit} />
      <div
        id={'scroll-container'}
        className={classNames(
          'smooth-scroll opacity-0',
          `${isInit && 'opacity-100'}`,
        )}
        ref={scrollRef}
      >
        <div data-name="hero-scroller" className="h-[250vh] hidden md:block">
          <section
            data-name="section"
            className="relative flex min-h-screen pt-100 justify-center"
          >
            <div data-name="section-wrapper" className="max-w-[1400px] w-full">
              <div data-name="content" className="w-full mx-auto">
                <h1
                  className="hero-header head-1 text-30 md:text-180 leading-[150px] m-0 uppercase z-10 "
                  ref={headRef}
                >
                  the great
                </h1>
                <h1 className="hero-header head-2 text-30 md:text-180 leading-[150px] m-0 uppercase z-10  text-right">
                  outdoors
                </h1>
                <h1 className="hero-header head-3 text-30 md:text-180 leading-[150px] m-0 uppercase z-10 ">
                  volume
                </h1>
              </div>
              <div className="pin-wrappper max-w-[700px] mx-auto">
                <div
                  data-name="image-wrapper"
                  id="heroImage"
                  className="relative overflow-hidden w-full h-[400px]"
                >
                  <Image
                    src={'/images/dev/photo/myanmar-2494826_1280.jpg'}
                    alt=""
                    className="image"
                    width={200}
                    height={200}
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      right: '0',
                      bottom: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <TextSection />
      <div className="pt-10">
        <Navigation />
      </div>
    </div>
  );
};

export default function ScrollWider() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <DefaultLayout>
      <Presenter />
    </DefaultLayout>
  );
}
