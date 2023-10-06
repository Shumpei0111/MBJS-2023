import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import Link from 'next/link';

export default function DevIndex() {
  const urlList = [
    {
      href: 'round-scroll',
      title:
        'スクロールに応じて要素を回転させる Around &ldquo;Yokai inUkiyoe&ldquo;',
      tag: ['gsap', 'scroll', 'image'],
    },
    {
      href: 'hero-reveal',
      title: 'うにょっと表示させるヒーローセクション Hero Reveal Animation',
      tag: ['gsap', 'image'],
    },
    {
      href: 'threed-perspactive',
      title: 'マウスの動きに追従してパースを変更する Three-D Perspactive',
      tag: ['gsap', 'scroll', 'image'],
    },
    {
      href: 'scroll-wider',
      title: 'スクロールすると文字のレイアウトが横に広がる Scroll Wider',
      tag: ['gsap', 'scroll', 'text'],
    },
    {
      href: 'mask-cursor-effect',
      title:
        '文字の上をホバーするとエフェクトが発生する Mask Cursor Effect Text',
      tag: ['framer motion', 'text'],
    },
  ];

  return (
    <DefaultLayout>
      <SeoMeta pageTitle={'DevIndex'} pagePath={`dev`} />
      <section className="md:max-w-[960px] mx-auto pt-0 md:pt-20 px-4">
        <hgroup>
          <h1 className="text-40">DevIndex</h1>
          <p className="text-14">技術的な実験の場</p>
        </hgroup>
        <section className="pt-10 md:pl-4">
          <ul className="grid grid-cols-1 gap-4">
            {urlList.map((item, i) => (
              <li key={i} className="w-fit">
                <Link
                  href={`/dev/${item.href}`}
                  className="underline duration-300 ease-in hover:tracking-wider"
                >
                  #{i + 1} {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </DefaultLayout>
  );
}
