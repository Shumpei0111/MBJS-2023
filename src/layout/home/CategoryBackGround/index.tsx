export const CategoryBackGround: React.FC<{
  titleFirst: string;
  titleSecond?: string;
}> = ({ titleFirst, titleSecond }) => {
  return (
    <div className="absolute h-screen top-40">
      <svg
        className="overflow-visible"
        width="750"
        height="416"
        viewBox="0 -20 750 306"
      >
        <text className="fill-transparent text-160 stroke-primary stroke-[0.2] scale-[1] md:scale-[2]">
          <tspan x="0" y="70">
            {titleFirst.toUpperCase()}
          </tspan>
          {titleSecond && (
            <tspan x="0" y="200">
              {titleSecond.toUpperCase()}
            </tspan>
          )}
        </text>
      </svg>
    </div>
  );
};
