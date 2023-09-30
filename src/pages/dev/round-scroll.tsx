import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';

export default function RoundScroll() {
  return (
    <DefaultLayout>
      <SeoMeta pageTitle={'RoundScroll'} pagePath={`dev/round-scroll`} />
      <div className="md:max-w-[960px] mx-auto pt-20 px-4">round</div>
    </DefaultLayout>
  );
}
