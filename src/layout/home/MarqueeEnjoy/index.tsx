type Props = {
  isRight?: boolean;
  hasBorder?: boolean;
};

export const MarqueeEnjoy: React.FC<Props> = ({
  isRight = true,
  hasBorder = false,
}) => {
  const Item: React.FC<Props> = ({ isRight }) => (
    <span
      className={`text-black uppercase text-100 whitespace-nowrap items-center flex pr-6 ${
        isRight ? 'marquee-right' : 'marquee-left'
      }`}
    >
      <span>Enjoy Making it.</span>
    </span>
  );

  return (
    <div
      className={`w-screen h-120 my-0 mx-[calc(50%_-_50vw)] overflow-hidden mt-32 flex items-center bg-primary ${
        hasBorder && 'border-t-1 border-b-1 border-t-black border-b-black'
      }`}
    >
      <Item isRight={isRight} />
      <Item isRight={isRight} />
      <Item isRight={isRight} />
      <Item isRight={isRight} />
    </div>
  );
};
