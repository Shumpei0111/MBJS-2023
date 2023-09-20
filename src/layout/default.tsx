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
    <>
      <TheHeader
        className={classNames([
          'duration-[2800ms]',
          isShowInner ? 'opacity-100 relative' : 'opacity-0',
        ])}
        isShowInner={isShowInner}
      />
      <div className="px-4">
        <main className="min-h-[calc(100dvh_-140px_-600px)] pt-[140px] container mx-auto">
          {children}
        </main>
        <TheFooter />
      </div>
    </>
  );
};
