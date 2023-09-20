import classNames from 'classnames';
import { ComponentProps } from 'react';
import Link from 'next/link';

type Props = {
  isShowInner?: boolean;
  isShowNavigation?: boolean;
} & ComponentProps<'header'>;

export const TheHeader: React.FC<Props> = ({
  isShowInner = true,
  isShowNavigation = true,
  className,
}) => {
  return (
    <header
      className={classNames([
        className,
        'md:fixed z-10 w-full px-4 md:px-0',
        !isShowInner ? 'blur-md' : 'blur-none',
      ])}
    >
      <div className="container mx-auto md:mt-10 mt-4 flex flex-row items-start">
        <Link href="/">
          <hgroup className="flex md:flex-row flex-col md:items-end items-start">
            <h1 className={classNames(['text-115 leading-[0.75]'])}>MB.js</h1>
            <span className=" leading-4 text-18 md:pt-0 pt-4">
              Shumpei&apos;s Portfolio site
            </span>
          </hgroup>
        </Link>
        {isShowNavigation && (
          <ul
            role="navigation"
            className="flex md:flex-row flex-col ml-auto md:gap-10 gap-4"
          >
            <li className="hover:duration-75 relative md:text-19 text-24">
              <Link href="/archives/1">BLOG</Link>
              <span className="h-1 bg-primary block w-full absolute bottom-1" />
            </li>
            <li className="hover:duration-75 relative md:text-19 text-24">
              <Link href="/about">ABOUT</Link>
              <span className="h-1 bg-primary block w-full absolute bottom-1" />
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
