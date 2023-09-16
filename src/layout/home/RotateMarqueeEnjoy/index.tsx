import { MarqueeEnjoy } from '..';

export const RotateMarqueeEnjoy: React.FC = () => {
  return (
    <div className="rotate-[5deg]">
      <MarqueeEnjoy isRight={false} hasBorder />
    </div>
  );
};
