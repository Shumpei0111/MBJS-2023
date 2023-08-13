import classNames from 'classnames';
import { TheHeader } from '@/components/TheHeader';

type Props = {
  children: React.ReactNode;
  isShowInner?: boolean;
};

export const DefaultLayout: React.FC<Props> = ({
  children,
  isShowInner = true,
}) => {
  return (
    <div>
      <TheHeader
        className={classNames([
          'duration-[2800ms]',
          isShowInner ? 'opacity-100' : 'opacity-0',
        ])}
        isShowInner={isShowInner}
      />
      {children}
    </div>
  );
};
