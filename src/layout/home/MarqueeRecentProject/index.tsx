export const MarqueeRecentProject: React.FC = () => {
  return (
    <div className="w-screen h-120 my-0 mx-[calc(50%_-_50vw)] overflow-hidden mt-32 border-b-1 border-b-primary">
      <div
        data-scroll="parent"
        className="relative w-screen h-[inherit] my-0 mx-[calc(50%_-_50vw)] overflow-hidden"
      >
        <div
          data-scroll="child-first"
          className="flex flex-row items-center justify-around absolute left-0 top-0 w[inherit] h-[inherit] marquee-child whitespace-nowrap"
        >
          <span className="text-primary uppercase text-100">
            Recent Project
          </span>
          <span className="text-primary uppercase text-80">&nbsp;/&nbsp;</span>
          <span className="text-primary uppercase text-100">
            Recent Project
          </span>
          <span className="text-primary uppercase text-80">&nbsp;/&nbsp;</span>
          <span className="text-primary uppercase text-100">
            Recent Project
          </span>
          <span className="text-primary uppercase text-80">&nbsp;/&nbsp;</span>
        </div>
        <div
          data-scroll="child-second"
          className="flex flex-row items-center justify-around absolute left-0 top-0 w[inherit] h-[inherit] marquee-child whitespace-nowrap"
        >
          <span className="text-primary uppercase text-100">
            Recent Project
          </span>
          <span className="text-primary uppercase text-80">&nbsp;/&nbsp;</span>
          <span className="text-primary uppercase text-100">
            Recent Project
          </span>
          <span className="text-primary uppercase text-80">&nbsp;/&nbsp;</span>
          <span className="text-primary uppercase text-100">
            Recent Project
          </span>
          <span className="text-primary uppercase text-80">&nbsp;/&nbsp;</span>
        </div>
      </div>
    </div>
  );
};
