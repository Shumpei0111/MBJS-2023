import { CommonCard } from '@/components/ProductCard';
import classNames from 'classnames';
import { RefObject, useEffect, useState } from 'react';
import Link from 'next/link';

export const ThumbnailHover: React.FC<
  Pick<CommonCard, 'description' | 'stack' | 'repository'> & {
    peerTargetRef: RefObject<HTMLDivElement>;
    isStackShow: boolean;
  }
> = ({ description, stack, peerTargetRef, isStackShow, repository }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="overflow-hidden">
      <div data-show="thum-hover" ref={peerTargetRef}>
        <div className="border-t-1 border-b-1 border-primary mt-4">
          <p style={{ padding: '24px 0' }} className="text-12 font-sans">
            {description}
          </p>
        </div>
        <ul
          style={{
            transitionDuration: '300ms',
          }}
          className={classNames([
            'pt-4 ',
            windowWidth > 768
              ? 'opacity-0 -translate-y-10'
              : 'opacity-100 translate-y-0',
            isStackShow && 'opacity-100 translate-y-0',
          ])}
        >
          {stack.map((item, index) => {
            const key = Object.keys(item)[0];
            const value = item[key];
            return (
              key &&
              value && (
                <li key={index} className="text-12 tracking-wider font-sans">
                  {key}: {value}
                </li>
              )
            );
          })}
        </ul>
        {repository && <Link href={repository}>GitHub</Link>}
      </div>
    </div>
  );
};
