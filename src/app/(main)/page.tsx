import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import HomepageCategories from '@/components/Homepage/Categories';
import HomepageHeroBanner from '@/components/Homepage/HeroBanner';
import products from '@/data/products';
import ProductCard from '@/components/Product/Card';

/**
 * route component
 */
export default function RouteHomepage() {
  return (
    <>
      <HomepageHeroBanner />
      <HomepageCategories />
      <div className="container py-14">
        <div className="flex gap-x-4 -ml-1 mb-8">
          <div className="px-2">
            <span className="font-medium">Products</span>
          </div>
          <a href="#" className="text-neutral-400 hover:underline px-2">
            View all
          </a>
        </div>
        {/* TABS */}
        {/* <div className="flex gap-x-4 font-medium -ml-1 mb-8">
          <button className="px-2">
            <span className="border-b-2 border-b-black">New Arrival</span>
          </button>
          <button className="text-neutral-400 px-2">Bestseller</button>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((x, i) => (
            <ProductCard key={i} product={x} />
          ))}
        </div>
      </div>
    </>
  );
}
