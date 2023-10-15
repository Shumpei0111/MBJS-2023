import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';

export default function InvertTextOnScroll() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('[data-name="container"]', {
      '--target': '0%',
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        end: '+=600',
        pin: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle="Invert Text on Scroll"
        pagePath="dev/invert-text-on-scroll"
      />
      <div className="py-20">
        <section>
          <h2 className="text-40">
            <p>Invert Text on Scroll</p>
            <p className="text-14">スクロールに応じて文字色を反転させる</p>
          </h2>
          <article className="pt-10">
            <p>技術スタック</p>
            <p>- gsap</p>
          </article>
        </section>
        <section className="py-40 text-center">
          <div
            data-name="container"
            className="flex h-screen justify-center items-center"
            style={
              {
                '--target': '100%',
                background:
                  'linear-gradient(to right, #000 var(--target), #fff var(--target))',
              } as React.CSSProperties
            }
          >
            <p
              className="text-80 flex flex-col w-full"
              style={
                {
                  background:
                    'linear-gradient(to right, #fff var(--target), #000 var(--target))',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                } as React.CSSProperties
              }
            >
              Develop Scroll Interaction
              <span className="text-14">MB.js - created by Shumpei.</span>
            </p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
