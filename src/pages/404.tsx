import { TransitionItem } from '@/features/animation/transitionItem';
import { DefaultLayout } from '@/layout/default';
import Link from 'next/link';

export default function NotFound() {
  return (
    <DefaultLayout>
      <div className="md:max-w-[960px] mx-auto md:pt-20 px-4">
        <TransitionItem transitionIndex={0}>
          <h2 className="text-center">
            <span className="text-100">404</span>
          </h2>
          <p className="uppercase text-50 md:text-100">
            Sorry, This pase could not be found.
          </p>
          <div className="text-center p-6">
            <Link href={'/'} className="text-32 border-b-1 border-primary">
              Return to Home
            </Link>
          </div>
        </TransitionItem>
      </div>
    </DefaultLayout>
  );
}
