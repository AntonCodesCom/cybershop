import ProductItem from '@/types/Product/Item';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Props {
  product: ProductItem;
}

export default function ProductCard({ product }: Readonly<Props>) {
  const { name, imageAlt, imageSrc, price } = product;
  return (
    <div
      className="
    rounded-lg
    bg-neutral-100
    px-3 pt-4 pb-6
  "
    >
      <div className="text-right mb-1">
        <button className="inline-flex p-1">
          <HeartIcon className="w-7 h-7 text-neutral-400" />
        </button>
      </div>
      <div className="px-4 mb-4">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            alt={imageAlt}
            src={imageSrc}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
      <div className="flex items-center justify-center h-[3em] mb-3">
        <div className="text-center font-medium line-clamp-2">{name}</div>
      </div>
      <div className="text-center text-2xl font-semibold whitespace-nowrap mb-4">
        $ {price}
      </div>
      <div>
        <button className="w-full rounded-lg bg-black py-3">
          <span className="text-white text-sm font-medium">Buy Now</span>
        </button>
      </div>
    </div>
  );
}
