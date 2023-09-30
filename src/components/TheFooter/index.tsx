import Link from 'next/link';

export const TheFooter = () => {
  return (
    <footer className="pt-[448px] pb-[258px] flex flex-col md:flex-row items-center container mx-auto md:justify-between justify-center gap-y-6">
      <ul role="navigation" className="flex gap-x-6 pr-4">
        <li className="hover:duration-75 text-52 relative">
          <Link
            href={'/archives/1'}
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
            <span className="h-1 bg-primary block w-full absolute bottom-2" />
          </Link>
        </li>
        <li className="hover:duration-75 text-52 relative">
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
            <span className="h-1 bg-primary block w-full absolute bottom-2" />
          </Link>
        </li>
        <li className="hover:duration-75 text-52 relative">
          <Link
            href="/dev"
            className="relative block overflow-hidden group/dev"
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
            <span className="h-1 bg-primary block w-full absolute bottom-2" />
          </Link>
        </li>
      </ul>
      <small className="text-22 px-4 md:px-0">
        <p className="uppercase text-center md:text-left">
          MB.js | copyright Shumpei <br className="md:hidden block" />
          All Rights Reserved.
        </p>
      </small>
    </footer>
  );
};
