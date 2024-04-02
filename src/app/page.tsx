import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import smartphone from './smartphone-product.png';
import headphones from './headphones.png';
import CommonHeader from '@/components/Common/Header';
import CommonFooter from '@/components/Common/Footer';
import HomepageCategories from '@/components/Homepage/Categories';
import HomepageHeroBanner from '@/components/Homepage/HeroBanner';

// data
const products = [
  {
    name: 'Item 1L Pro 256GB ExtraZoom Orange',
    imageSrc: smartphone,
    imageAlt:
      'https://unsplash.com/photos/iphone-screen-showing-icons-on-screen-Uae7ouMw91A',
    price: 900,
  },
  {
    name: 'Custom Headphones',
    imageSrc: headphones,
    imageAlt:
      'https://unsplash.com/photos/white-apple-magic-mouse-beside-of-magic-keyboard-and-headphones--RBuQ2PK_L8',
    price: 2535,
  },
  {
    name: 'Smart Watch 1050 SuperLight',
    imageSrc: headphones,
    imageAlt:
      'https://unsplash.com/photos/white-apple-magic-mouse-beside-of-magic-keyboard-and-headphones--RBuQ2PK_L8',
    price: 399,
  },
  {
    name: 'Item 137XD Silver',
    imageSrc: smartphone,
    imageAlt:
      'https://unsplash.com/photos/iphone-screen-showing-icons-on-screen-Uae7ouMw91A',
    price: 549,
  },
];

/**
 * route component
 */
export default function RouteHome() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <CommonHeader />
      <main className="flex-1">
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
              <div
                key={i}
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
                      alt={x.imageAlt}
                      src={x.imageSrc}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center h-[3em] mb-3">
                  <div className="text-center font-medium line-clamp-2">
                    {x.name}
                  </div>
                </div>
                <div className="text-center text-2xl font-semibold whitespace-nowrap mb-4">
                  $ {x.price}
                </div>
                <div>
                  <button className="w-full rounded-lg bg-black py-3">
                    <span className="text-white text-sm font-medium">
                      Buy Now
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CommonFooter />
    </div>
  );
}
