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
        'fixed z-10 w-full',
        !isShowInner ? 'blur-md' : 'blur-none',
      ])}
    >
      <div className="container mx-auto mt-10 flex flex-row items-start">
        <Link href="/">
          <hgroup className="flex flex-row items-end">
            <h1 className={classNames(['text-115 leading-[0.75]'])}>MB.js</h1>
            <span className=" leading-4 text-18">
              Shumpei&apos;s Portfolio site
            </span>
          </hgroup>
        </Link>
        {isShowNavigation && (
          <ul role="navigation" className="flex flex-row ml-auto gap-10">
            <li className="hover:duration-75 relative text-19">
              <Link href="/archives/1">BLOG</Link>
              <span className="h-1 bg-primary block w-full absolute bottom-1" />
            </li>
            <li className="hover:duration-75 relative text-19">
              <Link href="/about">ABOUT</Link>
              <span className="h-1 bg-primary block w-full absolute bottom-1" />
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
