import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import Link from 'next/link';

export default function DevIndex() {
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
            <li className="w-fit">
              <Link
                href={'/dev/round-scroll'}
                className="underline duration-300 ease-in hover:tracking-wider"
              >
                スクロールに応じて要素を回転させる Around &ldquo;Yokai in
                Ukiyoe&ldquo;
              </Link>
            </li>
            <li className="w-fit">
              <Link
                href={'/dev/hero-reveal'}
                className="underline duration-300 ease-in hover:tracking-wider"
              >
                うにょっと表示させるヒーローセクション Hero Reveal Animation
              </Link>
            </li>
            <li className="w-fit">
              <Link
                href={'/dev/threed-perspactive'}
                className="underline duration-300 ease-in hover:tracking-wider"
              >
                マウスの動きに追従してパースを変更する Three-D Perspactive
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </DefaultLayout>
  );
}
