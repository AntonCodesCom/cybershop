import CommonFooter from '@/components/Common/Footer';
import CommonHeader from '@/components/Common/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function LayoutMain({ children }: Readonly<Props>) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <CommonHeader />
      <main className="flex-1">{children}</main>
      <CommonFooter />
    </div>
  );
}
