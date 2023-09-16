import {
  MainVisual,
  MarqueeRecentProject,
  WebsiteSection,
  MarqueeContactUs,
  MailAddress,
  MarqueeEnjoy,
  RotateMarqueeEnjoy,
} from '@/layout/home';
import { DefaultLayout } from '@/layout/default';
import { useState } from 'react';
import classNames from 'classnames';
import { wait } from '@/util/wait';
import { DoujinSection } from '@/layout/home/DoujinSection';
import { OtherSection } from '@/layout/home/OtherSection';

export default function Home() {
  const [isShowInner, setIsShowInner] = useState<boolean>(false);

  const handleShowInner = async (): Promise<void> => {
    await wait(300);
    setIsShowInner(true);
  };

  return (
    <DefaultLayout isShowInner={isShowInner}>
      <div className="flex flex-col container mx-auto">
        <MainVisual
          isShowInner={isShowInner}
          handleShowInner={handleShowInner}
        />
        <div className={classNames([!isShowInner && 'hidden'])}>
          <MarqueeRecentProject />
          <WebsiteSection />
          <DoujinSection />
          <OtherSection />
          <MarqueeContactUs />
          <MailAddress />
          <div className="relative">
            <MarqueeEnjoy />
            <div className="absolute top-0 right-0 w-full">
              <RotateMarqueeEnjoy />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
