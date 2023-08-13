import {
  MainVisual,
  MarqueeRecentProject,
  WebsiteSection,
} from '@/layout/home';
import { DefaultLayout } from '@/layout/default';
import { useState } from 'react';
import classNames from 'classnames';

export default function Home() {
  const [isShowInner, setIsShowInner] = useState<boolean>(false);

  const handleShowInner = (): void => {
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
        </div>
      </div>
    </DefaultLayout>
  );
}
