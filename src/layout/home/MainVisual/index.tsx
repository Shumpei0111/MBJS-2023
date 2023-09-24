import { Count } from '@/layout/home/Count';
import { ComponentProps, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type Props = ComponentProps<typeof Count>;

export const MainVisual: React.FC<Props> = ({
  isShowInner,
  handleShowInner,
}) => {
  const [isInitLoad, setIsInitLoad] = useState<boolean>(false);

  useEffect(() => {
    // 初回訪問時かどうかを判定
    const visited = sessionStorage.getItem('visited');

    if (!visited) {
      setIsInitLoad(true);
    }
  }, []);

  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      data-section="MainVisual"
      className="relative"
      style={{ height: innerRef.current?.clientHeight ?? 0 + 1000 }}
    >
      <Count isShowInner={isShowInner} handleShowInner={handleShowInner} />
      <div className="relative container mx-auto">
        <div
          className={classNames([
            'container mx-auto absolute left-1/4 -translate-x-1/4  duration-[2800ms]',
            isShowInner
              ? 'opacity-100 top-0 blur-none'
              : 'opacity-0 -top-[600px] blur-md',
          ])}
        >
          <div
            className="absolute translate-y-[-60%] md:translate-y-[-30%] left-[10%] -z-[1]"
            ref={innerRef}
          >
            <div className="w-full md:w-400 flow-arm">
              <img
                src={'/images/arm_and_sign.png'}
                alt=""
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>
        </div>
        <div
          className={classNames([
            'absolute left-[16px] md:left-auto md:right-0 top-[30vh] duration-[2800ms]',
            isShowInner
              ? 'opacity-100 top-0 blur-none'
              : 'opacity-0 -top-[600px] blur-md',
          ])}
        >
          <hgroup>
            <h2 className="uppercase text-43">
              Web front-end developer
              <br />& Doujin creator
            </h2>
            <p className="text-27 before:content-['{'] before:pr-1 after:content-['}'] after:pl-1 mt-10 ">
              Illustration : Graphic Design : Manga
            </p>
          </hgroup>
          <span className="arrow down !hidden md:!block" />
        </div>
      </div>
    </section>
  );
};
