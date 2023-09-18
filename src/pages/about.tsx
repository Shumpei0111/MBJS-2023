import { NoFooterLayout } from '@/layout/noFooter';
import { LeftSection } from '@/layout/about/LeftSection';
import { RightSection } from '@/layout/about/RightSection';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { SeoMeta } from '@/components/Seo';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <NoFooterLayout>
      <SeoMeta pageTitle={'About'} pagePath={'about'} />
      <aside className="relative hidden md:block">
        <LeftSection />
      </aside>
      <div
        className={classNames([
          'absolute top-[-140px] md:top-0 right-[-100vw]',
          isLoaded && 'fade-right',
        ])}
      >
        <RightSection />
      </div>
    </NoFooterLayout>
  );
}
