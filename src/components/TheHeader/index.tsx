import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import classNames from 'classnames';
import Link from 'next/link';
import { ComponentProps, useState } from 'react';

type Props = {
  isShowNavigation?: boolean;
  zIndex?: string;
} & ComponentProps<'header'>;

export const TheHeader: React.FC<Props> = ({
  isShowNavigation = true,
  className,
  zIndex = 'z-10',
}) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('wheel', (e) => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener('wheel', (e) => {
        setScrollY(window.scrollY);
      });
    };
  }, []);

  return (
    <header
      className={classNames([
        className,
        'md:fixed w-full px-4 md:px-0',
        zIndex,
      ])}
    >
      <div className="container mx-auto md:mt-10 mt-4 flex flex-row items-start">
        <Link href="/">
          <hgroup className="flex md:flex-row flex-col md:items-end items-start">
            <h1
              className={classNames([
                'text-115 leading-[0.75] duration-300 opacity-100',
                scrollY > 200 && 'text-60 opacity-20',
              ])}
            >
              MB.js
            </h1>
            <span
              className={classNames(
                'leading-4 text-18 md:pt-0 pt-4 duration-300',
              )}
              style={{ opacity: scrollY > 200 ? 0 : 100 }}
            >
              Shumpei&apos;s Portfolio site
            </span>
          </hgroup>
        </Link>
        {isShowNavigation && (
          <ul
            role="navigation"
            className="flex md:flex-row flex-col ml-auto md:gap-10 gap-4"
          >
            <li className="hover:duration-75 relative md:text-19 text-24 w-fit">
              <Link
                href="/archives/1"
                className="relative block overflow-hidden group/blog"
              >
                <span className="top-0 relative block duration-[400ms] ease-in-out group-hover/blog:translate-y-[-100%]">
                  BLOG
                </span>
                <span
                  role="presentation"
                  className="absolute block duration-[400ms] ease-in-out group-hover/blog:translate-y-[-100%]"
                >
                  BLOG
                </span>
                <span className="h-1 bg-primary block w-full absolute bottom-1" />
              </Link>
            </li>
            <li className="hover:duration-75 relative md:text-19 text-24 w-fit">
              <Link
                href="/about"
                className="relative block overflow-hidden group/about"
              >
                <span className="top-0 relative block duration-[400ms] ease-in-out group-hover/about:translate-y-[-100%]">
                  ABOUT
                </span>
                <span
                  role="presentation"
                  className="absolute block duration-[400ms] ease-in-out group-hover/about:translate-y-[-100%]"
                >
                  ABOUT
                </span>
                <span className="h-1 bg-primary block w-full absolute bottom-1" />
              </Link>
            </li>
            <li className="hover:duration-75 relative md:text-19 text-24">
              <Link
                href="/dev"
                className="relative block overflow-hidden group/dev w-fit"
              >
                <span className="top-0 relative block duration-[400ms] ease-in-out group-hover/dev:translate-y-[-100%]">
                  DEV
                </span>
                <span
                  role="presentation"
                  className="absolute block duration-[400ms] ease-in-out group-hover/dev:translate-y-[-100%]"
                >
                  DEV
                </span>
                <span className="h-1 bg-primary block w-full absolute bottom-1" />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
