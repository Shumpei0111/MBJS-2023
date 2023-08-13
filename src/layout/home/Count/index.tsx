import { useCounter } from '@/features/home/useCounter';
import classNames from 'classnames';
import { useEffect, useState, useMemo } from 'react';

type Props = {
  isShowInner: boolean;
  handleShowInner: () => void;
};

export const Count: React.FC<Props> = ({ isShowInner, handleShowInner }) => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);
  const durationValue = useMemo(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('visited'))
      return 2000;
    return 100;
  }, []);

  useEffect(() => {
    // 初回訪問時かどうかを判定
    const visited = sessionStorage.getItem('visited');

    if (!visited) {
      setIsFirstVisit(true);
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  const { current } = useCounter({
    start: 0,
    end: 100,
    duration: durationValue,
    onEnd: () => {
      handleShowInner();
    },
  });

  if (!isFirstVisit) return null;

  return (
    <div
      data-component="count"
      className={classNames([isShowInner ? 'opacity-0 h-0' : 'opacity-100'])}
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
