import Link from 'next/link';

export const TheFooter = () => {
  return (
    <footer className="h-[600px] pt-[200px] flex items-center container mx-auto justify-between">
      <ul role="navigation" className="flex gap-x-6">
        <li className="hover:duration-75 text-52 relative">
          <Link href={'/archives/1'}>BLOG</Link>
          <span className="h-1 bg-primary block w-full absolute bottom-2" />
        </li>
        <li className="hover:duration-75 text-52 relative">
          <Link href="/about">ABOUT</Link>
          <span className="h-1 bg-primary block w-full absolute bottom-2" />
        </li>
      </ul>
      <small className="text-22">
        <p className="uppercase">
          MB.js | copyright Shumpei All Rights Reserved.
        </p>
      </small>
    </footer>
  );
};
