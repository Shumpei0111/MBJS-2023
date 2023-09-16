import classNames from 'classnames';
import { TheHeader } from '@/components/TheHeader';
import { TheFooter } from '@/components/TheFooter';

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
      <main className="min-h-screen pt-[140px] container mx-auto">
        {children}
      </main>
      <TheFooter />
    </div>
  );
};
