import classNames from 'classnames';
import { TheHeader } from '@/components/TheHeader';

type Props = {
  children: React.ReactNode;
  isShowInner?: boolean;
};

export const NoFooterLayout: React.FC<Props> = ({
  children,
  isShowInner = true,
}) => {
  return (
    <>
      <TheHeader
        className={classNames([
          'duration-[2800ms]',
          isShowInner ? 'opacity-100' : 'opacity-0',
        ])}
        isShowInner={isShowInner}
        isShowNavigation={false}
      />
      <div className="px-4">
        <main className="min-h-screen pt-[140px] container mx-auto relative">
          {children}
        </main>
      </div>
    </>
  );
};
