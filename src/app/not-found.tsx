import CommonFooter from '@/components/Common/Footer';
import CommonHeader from '@/components/Common/Header';
import CommonNotFound from '@/components/Common/NotFound';

/**
 * layout copied from `./(main)/layout.tsx`
 */
export default function RootNotFound() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <CommonHeader />
      <main className="flex-1">
        <CommonNotFound />
      </main>
      <CommonFooter />
    </div>
  );
}
