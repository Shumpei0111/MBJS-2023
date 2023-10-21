import classNames from 'classnames';

export const MainVisual: React.FC<{ isShowInner: boolean }> = ({
  isShowInner,
}) => {
  return (
    <section data-section="MainVisual" className="relative h-screen">
      <div className="relative container mx-auto">
        <div
          className={classNames([
            'container mx-auto absolute left-1/4 -translate-x-1/4  duration-[2800ms]',
            isShowInner ? 'opacity-100 top-0' : 'opacity-0 -top-[600px]',
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
            // isShowInner ? 'opacity-100' : undefined,
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
