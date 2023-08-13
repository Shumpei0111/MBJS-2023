import { useCounter } from '@/features/home/useCounter';
import classNames from 'classnames';

type Props = {
  isShowInner: boolean;
  handleShowInner: () => void;
};

export const Count: React.FC<Props> = ({ isShowInner, handleShowInner }) => {
  const { current } = useCounter({
    start: 0,
    end: 100,
    onEnd: () => {
      handleShowInner();
    },
  });

  return (
    <div
      data-component="count"
      className={classNames([
        'duration-[1200ms]',
        isShowInner ? 'opacity-0 h-0' : 'opacity-100',
      ])}
    >
      <div className="h-screen bg-primary relative">
        <div className="bg-black h-1/2" style={{ width: `${current}vw` }} />
        <div
          className="duration-[2000ms] bg-black"
          style={{ height: isShowInner ? '100vh' : '0' }}
        />
        <span
          className={classNames([
            'pointer-events-none text-black absolute text-[200px] bottom-0 duration-[400ms]',
            isShowInner && 'translate-y-[100dvh]',
          ])}
        >
          {current}
        </span>
      </div>
    </div>
  );
};
