import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import { useCallback, useMemo, useState } from 'react';

export default function ReactUseCallbackAndUseMemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log('useCallback');

    setCount((p) => p + 1);
  }, []);

  const [count2, setCount2] = useState(0);

  const doubleCount = useMemo(() => {
    console.log('useMemo');
    return count2 * 2;
  }, [count2]);

  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle="React useCallback and useMemo"
        pagePath={'dev/react-use-callback-and-usememo'}
      />
      <section className="pt-[100px]">
        <h2 className="text-40">react use callback and usememo</h2>
        <div>
          <h3 className="text-30">useCallback</h3>
          <div className="grid grid-cols-[80px_180px] items-center">
            <p className="text-20">count: {count}</p>
            <button
              className="font-blog border-1 border-primary rounded-3xl px-2 py-1"
              onClick={increment}
            >
              increment
            </button>
          </div>
        </div>
        <div className="pt-10">
          <h3 className="text-30">useMemo</h3>
          <div className="grid grid-cols-[80px_130px_180px] items-center">
            <p className="text-20">count2: {count2}</p>
            <p className="text-20">doubleCount: {doubleCount}</p>
            <button
              className="font-blog border-1 border-primary rounded-3xl px-2 py-1"
              onClick={() => setCount2((p) => 1 + p)}
            >
              increment
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
