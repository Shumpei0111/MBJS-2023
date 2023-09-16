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
      <div className="container mx-auto mt-10 flex flex-row items-start">
        <Link href="/">
          <hgroup className="flex flex-row items-end">
            <h1 className={classNames(['text-100 leading-[0.75]'])}>MB.js</h1>
            <span className=" leading-4">Shumpei's Portfolio site</span>
          </hgroup>
        </Link>
        <ul role="navigation" className="flex flex-row ml-auto gap-10">
          <li className="hover:duration-75 relative">
            BLOG
            <span className="h-1 bg-primary block w-full absolute bottom-1" />
          </li>
          <li className="hover:duration-75 relative">
            <Link href="/about">ABOUT</Link>
            <span className="h-1 bg-primary block w-full absolute bottom-1" />
          </li>
        </ul>
      </div>
    </header>
  );
};
