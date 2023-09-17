import { NoFooterLayout } from '@/layout/noFooter';
import { LeftSection } from '@/layout/about/LeftSection';
import { RightSection } from '@/layout/about/RightSection';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <NoFooterLayout>
      <aside className="relative">
        <LeftSection />
      </aside>
      <div
        className={classNames([
          'absolute top-0 right-[-100vw]',
          isLoaded && 'fade-right',
        ])}
      >
        <RightSection />
      </div>
    </NoFooterLayout>
  );
}
