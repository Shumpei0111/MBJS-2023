import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import Link from 'next/link';
import style from './mask-image.module.css';
import classNames from 'classnames';
import { useMousePosition } from '@/hooks/mask-cursor/useMousePosition';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TransitionItem } from '@/features/animation/transitionItem';

export const Presenter: React.FC = () => {
  const [isHovered, setIseHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="mx-auto pt-0 md:pt-20 px-4 grid grid-cols-1 gap-[6rem]">
      <nav>
        <div data-name="nav-wrapper" className="w-[inherit] relative">
          <div data-name="nav-title">
            <hgroup>
              <h2 className="text-40">Mask Curosor Effect Text</h2>
              <p>文字の上をホバーするとエフェクトが発生する</p>
            </hgroup>
          </div>
          <div>
            <section className="pt-10">
              <h3 className="text-26 uppercase">Development</h3>
              <ul>
                <li className="text-20">- framer motion</li>
              </ul>
            </section>
            <Link href={'/dev'} className="underline pt-8 inline-block">
              一覧に戻る
            </Link>
          </div>
        </div>
      </nav>
      <TransitionItem transitionIndex={0}>
        <p className="text-100 text-center">↓ hover?</p>
      </TransitionItem>
      <div className="relative h-screen">
        <section
          className="h-screen"
          // className="h-screen absolute left-1/2 w-full top-0 -translate-x-1/2"
        >
          <motion.div
            data-name="mask"
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: 'tween', ease: 'backOut' }}
            className={classNames(
              'absolute w-full h-full flex items-center justify-center',
              style['mask-image'],
            )}
          >
            <p
              onMouseEnter={() => {
                console.log('enter');
                setIseHovered(true);
              }}
              onMouseLeave={() => {
                console.log('leave');
                setIseHovered(false);
              }}
              className="leading-10 text-center md:max-w-[600px] max-w-[300px]"
            >
              「ではみなさんは、そういうふうに川だと言われたり、乳の流れたあとだと言われたりしていた、このぼんやりと白いものがほんとうは何かご承知ですか」先生は、黒板につるした大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指しながら、みんなに問いをかけました。カムパネルラが手をあげました。それから四、五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれが
            </p>
          </motion.div>
          <div
            data-name="body"
            className={classNames(
              'w-full h-full flex items-center justify-center',
            )}
          >
            <p className="leading-10 text-center md:max-w-[600px] max-w-[300px]">
              「ではみなさんは、そういうふうに川だと言われたり、乳の流れたあとだと言われたりしていた、このぼんやりと白いものがほんとうは何かご承知ですか」先生は、黒板につるした大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指しながら、みんなに問いをかけました。カムパネルラが手をあげました。それから四、五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれが
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default function MaskCursorEffect() {
  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle={'Mask Curosor Effect'}
        pagePath={'dev/mask-cursor-effect'}
      />
      <Presenter />
    </DefaultLayout>
  );
}
