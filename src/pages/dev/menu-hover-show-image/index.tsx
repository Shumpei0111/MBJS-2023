import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import Image from 'next/image';
import Link from 'next/link';

const ImageList = [
  { src: '01_tennyopng.webp', menuTitle: 'projects' },
  { src: '05_oiwa.webp', menuTitle: 'about' },
  { src: '09_tuzura_yokai.webp', menuTitle: 'career' },
  { src: '02_bake_neko.webp', menuTitle: 'contacts' },
];

const Presenter = () => {
  return (
    <div className="mx-auto pt-0 md:pt-20 px-4 grid grid-cols-1">
      <nav>
        <div data-name="nav-wrapper" className="w-[inherit] relative">
          <div data-name="nav-title">
            <hgroup>
              <h2 className="text-40">Menu Hover Show Image</h2>
              <p>メニューにホバーするとイメージ画像が表示される</p>
            </hgroup>
          </div>
          <div>
            <section className="pt-10">
              <h3 className="text-26 uppercase">Development</h3>
              <ul>
                <li className="text-20">- css</li>
              </ul>
            </section>
            <Link href={'/dev'} className="underline pt-8 inline-block">
              一覧に戻る
            </Link>
          </div>
        </div>
      </nav>
      <section className="pt-20">
        <div className="text-center">
          <span className="text-center text-24 border-1 rounded-full border-primary py-2 px-4 inline-block leading-6 uppercase">
            please hover this menu!
          </span>
        </div>
        <ul data-name="menu" className="flex gap-16 justify-center pt-10">
          {ImageList.map((item) => (
            <li
              data-name="item"
              key={item.src}
              className="relative group/image"
            >
              <a
                href="#"
                data-name="link"
                className="uppercase text-40 mix-blend-difference z-10 relative"
              >
                {item.menuTitle}
              </a>
              <div className="w-full h-1 bg-primary -mt-3" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-0 duration-500 scale-x-[1.5] scale-y-[1] group-hover/image:opacity-100 blur-[15px] contrast-[700%] group-hover/image:blur-[0] group-hover/image:contrast-[100%] group-hover/image:scale-x-[1] group-hover/image:scale-y-[1] group-hover/image:rotate-12">
                <Image
                  src={`/images/dev/ukiyoe/${item.src}`}
                  alt={item.src}
                  data-name="img"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="200px 200px"
                  priority={false}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default function menuHoverShowImage() {
  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle={'Menu Hover Show Image'}
        pagePath={'dev/menu-hover-show-image'}
      />
      <Presenter />
    </DefaultLayout>
  );
}
