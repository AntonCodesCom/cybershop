'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  description?: string;
}

export default function CommonNotFound({
  description = 'Page could not be found.',
}: Readonly<Props>) {
  const router = useRouter();
  return (
    <div className="container text-center pt-10 lg:pt-20 pb-20 lg:pb-40">
      <h1 className="text-4xl font-bold mb-8">404 Not Found</h1>
      <p className="mb-10">{description}</p>
      <div className="max-w-sm md:max-w-md mx-auto flex flex-col md:flex-row gap-2">
        <button
          onClick={() => router.back()}
          className="btn btn-lg btn-filled md:flex-1"
        >
          Go Back
        </button>
        <Link href="/" className="btn btn-lg md:flex-1">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
