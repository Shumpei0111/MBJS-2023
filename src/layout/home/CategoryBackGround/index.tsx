export const CategoryBackGround: React.FC<{
  titleFirst: string;
  titleSecond?: string;
}> = ({ titleFirst, titleSecond }) => {
  return (
    <svg
      className="overflow-visible pt-40"
      width="750"
      height="416"
      viewBox="0 -20 750 306"
    >
      <text
        className="fill-transparent text-160 stroke-primary stroke-[0.2]"
        transform="scale(2)"
      >
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
  );
};