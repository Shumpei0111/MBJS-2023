import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import {
  MailAddress,
  MainVisual,
  MarqueeContactUs,
  MarqueeEnjoy,
  MarqueeRecentProject,
  RotateMarqueeEnjoy,
  WebsiteSection,
} from '@/layout/home';
import { Count } from '@/layout/home/Count';
import { DoujinSection } from '@/layout/home/DoujinSection';
import { OtherSection } from '@/layout/home/OtherSection';
import { wait } from '@/util/wait';
import classNames from 'classnames';
import { useState } from 'react';

export default function Home() {
  const [isShowInner, setIsShowInner] = useState<boolean>(false);

  const handleShowInner = async (): Promise<void> => {
    await wait(300);
    setIsShowInner(true);
  };

  return (
    <DefaultLayout isShowInner={isShowInner}>
      <SeoMeta />
      <div className="flex flex-col container mx-auto">
        <Count isShowInner={isShowInner} handleShowInner={handleShowInner} />
        <MainVisual isShowInner={isShowInner} />
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
