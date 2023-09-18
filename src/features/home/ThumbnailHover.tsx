import { CommonCard } from '@/components/ProductCard';
import classNames from 'classnames';
import { RefObject } from 'react';

export const ThumbnailHover: React.FC<
  Pick<CommonCard, 'description' | 'stack' | 'repository'> & {
    peerTargetRef: RefObject<HTMLDivElement>;
    isStackShow: boolean;
  }
> = ({ description, stack, peerTargetRef, isStackShow, repository }) => (
  <div className="overflow-hidden">
    <div data-show="thum-hover" ref={peerTargetRef}>
      <div className="border-t-1 border-b-1 border-primary mt-4">
        <p className="py-8 text-12 font-sans">{description}</p>
      </div>
      <ul
        className={classNames([
          'pt-4 opacity-0 duration-[300ms] -translate-y-10',
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
