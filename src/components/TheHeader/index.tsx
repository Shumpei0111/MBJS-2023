import classNames from 'classnames';
import { ComponentProps } from 'react';
import Link from 'next/link';

type Props = {
  isShowInner?: boolean;
} & ComponentProps<'header'>;

export const TheHeader: React.FC<Props> = ({
  isShowInner = true,
  className,
}) => {
  return (
    <header
      className={classNames([
        className,
        'fixed z-10 w-full',
        !isShowInner ? 'blur-md' : 'blur-none',
      ])}
    >
      <div className="container mx-auto mt-16 flex flex-row items-center">
        <Link href="/">
          <hgroup className="flex flex-row items-end">
            <h1 className={classNames(['text-184 leading-[0.75]'])}>MB.js</h1>
            <span className=" leading-4">Shumpei's Portfolio site</span>
          </hgroup>
        </Link>
        <ul className="flex flex-row ml-auto gap-10">
          <li className="hover:underline hover:duration-75">BLOG</li>
          <li className="hover:underline hover:duration-75">
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
