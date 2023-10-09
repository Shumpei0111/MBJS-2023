import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import classNames from 'classnames';
import Link from 'next/link';
import style from './animation.module.css';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const HeaderWrapper: React.FC<{ hasDataText?: boolean }> = ({
  hasDataText = false,
}) => (
  <div
    data-name="header-wrapper"
    className={classNames([
      "hidden after:content-[''] after:absolute after:left-[-20px] after:w-[110%] after:h-[82px] after:bg-black after:mx-auto",
      hasDataText ? 'after:top-[0]' : 'after:top-[0]',
    ])}
  />
);

const Presenter = () => {
  let tl = gsap.timeline();

  function revealSite() {
    tl.to("[data-name='pre-loader']", {
      duration: 1,
      opacity: 0,
      display: 'none',
      ease: 'power2.inOut',
    });

    tl.to(
      '[data-name="nav-title"]',
      {
        duration: 1.8,
        top: '-20px',
        opacity: 1,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.2,
        },
      },
      '-=1.2',
    );

    tl.to(
      '[data-name="nav-stack"]',
      {
        duration: 1,
        top: '-20px',
        opacity: 1,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.4,
        },
      },
      '-=1.2',
    );
  }

  useLayoutEffect(() => {
    tl.to("[data-name='pre-loader-btn']", {
      duration: 0.3,
      opacity: 1,
      delay: 1.4,
    });
  }, []);

  return (
    <div className="pt-[100px]">
      <nav>
        <div data-name="nav-wrapper" className="w-[inherit]">
          <div className="relative top-[20px] opacity-0" data-name="nav-title">
            <hgroup className="text-right">
              <h2 className="text-140">Reveal Typography</h2>
              <p className="pt-6">
                テキストが表示されたら一部にエフェクトがかかる
              </p>
            </hgroup>
          </div>
          <div data-name="nav-stack" className="relative top-[20px] opacity-0">
            <section className="pt-10 flex justify-between w-full items-center">
              <h3 className="text-32 uppercase font-blog">Development</h3>
              <ul className="text-right">
                <li className="text-16 font-blog">gsap</li>
                <li className="text-16 font-blog">css animation</li>
              </ul>
            </section>
            <div className="text-right pt-10">
              <Link href={'/dev'} className="underline pt-8 font-mono text-12">
                一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-[100px]">
        <div
          data-name="pre-loader"
          className="fixed w-full h-full bg-black text-white flex justify-center items-center z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div data-name="ore-loader-container">
            <div data-name="pre-loader-header">
              <div
                data-name="header concat"
                className="relative w-max mx-auto flex"
              >
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                >
                  A creator of
                </h1>
                <HeaderWrapper />
              </div>
              <div data-name="header" className="relative w-max mx-auto flex">
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                  data-text="sound"
                >
                  sound
                </h1>
                &nbsp;&nbsp;
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                >
                  From pure
                </h1>
                <HeaderWrapper hasDataText />
              </div>
              <div data-name="header" className="relative w-max mx-auto">
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                >
                  noise of melody,
                </h1>
                <HeaderWrapper />
              </div>
              <div data-name="header" className="relative w-max mx-auto">
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                >
                  everyday life
                </h1>
                <HeaderWrapper />
              </div>
              <div data-name="header" className="relative w-max mx-auto flex">
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                >
                  is her
                </h1>
                &nbsp;&nbsp;
                <h1
                  className={classNames([
                    'relative uppercase text-center text-[7vw] leading-[90%] text-black',
                    style['header-animation'],
                  ])}
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}
                  data-text="symphony"
                >
                  symphony
                </h1>
                <HeaderWrapper hasDataText />
              </div>
            </div>
            <div className="w-full text-center">
              <button
                data-name="pre-loader-btn"
                className="relative mt-[3em] mb-[1em] text-20 cursor-pointer z-20 opacity-0"
                onClick={revealSite}
              >
                <div
                  data-name="btn"
                  className="flex items-center justify-center text-24 font-sans"
                >
                  Click anyware
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68 10"
                    className="relative w-80 top-0 px-[0.4em]"
                  >
                    <defs></defs>
                    <path
                      fill="#e2e2dd"
                      d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6z"
                    ></path>
                  </svg>
                  <span className="text-[#b0282c]">to enable the sound</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function RevealTypography() {
  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle="Reveal Typography"
        pagePath={'dev/reveal-typography'}
      />
      <Presenter />
    </DefaultLayout>
  );
}
