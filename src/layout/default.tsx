import { TheFooter } from '@/components/TheFooter';
import { TheHeader } from '@/components/TheHeader';

type Props = {
  children: React.ReactNode;
  isShowInner?: boolean;
  className?: string;
};

export const DefaultLayout: React.FC<Props> = ({
  children,
  isShowInner = true,
}) => {
  const now = new Date().toISOString();
  const dateObj = new Date(now);
  const buildDate = `${dateObj.getFullYear()}/${String(
    dateObj.getMonth() + 1,
  ).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`;

  return (
    <>
      <TheHeader className={'duration-[2800ms]'} isShowInner={isShowInner} />
      <div className="px-4">
        <main className="min-h-[calc(100dvh_-140px_-600px)] pt-[100px] md:pt-[140px] container mx-auto">
          {children}
        </main>
        <TheFooter />
        <p className="font-blog text-10 pb-10 text-center uppercase">
          last update: {buildDate}
        </p>
      </div>
    </>
  );
};
