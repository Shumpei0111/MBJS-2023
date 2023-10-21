import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import classNames from 'classnames';
import gsap from 'gsap';

export const MainVisual: React.FC<{ isShowInner: boolean }> = ({
  isShowInner,
}) => {
  useIsomorphicLayoutEffect(() => {
    gsap.to(document.querySelector('[data-name="my-stack"]'), {
      duration: 1.7,
      top: '0',
      ease: 'power4.inOut',
    });

    gsap.to(document.querySelector('[data-name="my-stack2"]'), {
      duration: 2,
      top: '0',
      ease: 'power4.inOut',
    });
  }, []);

  return (
    <section data-section="MainVisual" className="relative h-screen">
      <div className="relative container mx-auto">
        <div
          className={classNames([
            'container mx-auto absolute left-1/4 -translate-x-1/4  duration-[2800ms] ease-out',
            isShowInner ? 'top-0' : '-top-[600px]',
          ])}
        >
          <div className="relative translate-y-[-70%] sm:translate-y-[-40%] md:translate-y-[-20%] left-0 md:left-[10%] -z-[1]">
            <div
              className="flow-arm max-w-[523px] w-full pt-[calc(876/543_*_100%)]"
              data-taihi="w-full sm:w-460 md:w-523 "
            >
              <img
                src={'/images/arm_and_sign.png'}
                alt=""
                className="w-full h-auto opacity-80 absolute top-0 left-0 object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div
          className={classNames([
            'absolute left-[16px] md:left-auto md:right-0 top-[168px] duration-[4800ms]',
          ])}
        >
          <hgroup>
            <div
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            >
              <h2
                data-name="my-stack"
                className="uppercase text-43 relative top-40"
              >
                Web front-end developer
                <br />& Doujin creator
              </h2>
            </div>
            <div
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            >
              <p
                data-name="my-stack2"
                className="text-27 before:content-['{'] before:pr-1 after:content-['}'] after:pl-1 relative top-20 mt-10"
              >
                Illustration : Graphic Design : Manga
              </p>
            </div>
          </hgroup>
          <span className="arrow down !hidden md:!block" />
        </div>
      </div>
    </section>
  );
};
