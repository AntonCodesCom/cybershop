import Image from 'next/image';
import logo from './logo.svg';
import facebook from './facebook.svg';
import tiktok from './tiktok.svg';
import instagram from './instagram.svg';
import featured from './smartphone-featured.png';
import smartphone from './smartphone-product.png';
import headphones from './headphones.png';

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
      <header
        className="
        container
        flex
        items-center
        justify-between
        h-[5.5rem]
      "
      >
        <a href="#">
          <Image alt="Go to Homepage" src={logo} />
        </a>
        <button className="inline-flex px-1">
          <span className="material-symbols-rounded text-4xl">menu</span>
        </button>
      </header>
      <main className="flex-1">
        <div className="bg-[#150800]">
          <div
            className="
          container 
          grid grid-cols-1 md:grid-cols-2
          text-white pt-16
        "
          >
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left pb-14">
              <div className="text-gray-400 text-2xl font-semibold mb-5">
                Featured Pro.
              </div>
              <div className="text-6xl xl:text-8xl mb-5">
                <span className="font-thin">Item 1L</span>{' '}
                <span className="font-bold">Pro</span>
              </div>
              <div
                className="
              max-w-xs lg:max-w-none mx-auto md:ml-0
              text-gray-400 text-lg font-medium text-balance 
              mb-8
            "
              >
                The featured product of the shop is shown here. True
              </div>
              <button
                className="
              border border-white rounded-md
              font-medium
              px-14 py-3
            "
              >
                Shop Now
              </button>
            </div>
            <div className="max-w-xs lg:max-w-sm xl:max-w-md mx-auto md:mr-0 2xl:mx-auto">
              <Image
                alt="https://unsplash.com/photos/black-smartphone-displaying-11-00-83ypHTv6J2M"
                src={featured}
              />
            </div>
          </div>
        </div>
        <div className="container py-14">
          <div className="flex gap-x-4 -ml-1 mb-8">
            <div className="px-2">
              <span className="font-medium">Products</span>
            </div>
            <a href="#" className="text-gray-400 hover:underline px-2">
              View all
            </a>
          </div>
          {/* TABS */}
          {/* <div className="flex gap-x-4 font-medium -ml-1 mb-8">
            <button className="px-2">
              <span className="border-b-2 border-b-black">New Arrival</span>
            </button>
            <button className="text-gray-400 px-2">Bestseller</button>
          </div> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((x, i) => (
              <div
                key={i}
                className="
              rounded-lg
              bg-gray-100
              px-3 py-6
            "
              >
                <div className="text-right mb-1">
                  <button className="inline-flex px-1">
                    <span className="material-symbols-rounded text-3xl text-gray-400">
                      favorite
                    </span>
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
                    <span className="invert text-sm font-medium">Buy Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-black text-gray-300 text-sm text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-7">
            <div className="lg:col-span-2 text-center lg:text-left">
              <Image
                alt="Cyber Logo"
                src={logo}
                className="mx-auto lg:ml-0 invert"
              />
              <div className="mb-5" />
              <p className="mx-auto text-balance leading-loose px-4 lg:px-0">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-white text-base font-semibold mb-3">
                Services
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 font-extralight">
                <a href="#">Bonus program</a>
                <a href="#">Gift cards</a>
                <a href="#">Credit and payment</a>
                <a href="#">Service contracts</a>
                <a href="#">Non-cash account</a>
                <a href="#">Payment</a>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-white text-base font-semibold mb-3">
                Assistance to the buyer
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 font-extralight">
                <a href="#">Find an order</a>
                <a href="#">Terms of delivery</a>
                <a href="#">Exchange and return of goods</a>
                <a href="#">Guarantee</a>
                <a href="#">Frequently asked questions</a>
                <a href="#">Terms of use of the site</a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-x-8 text-white">
              <a href="#" className="inline-flex justify-center w-6 h-6">
                <Image alt="facebook" src={facebook} />
              </a>
              <a href="#" className="inline-flex justify-center w-6 h-6">
                <Image alt="tiktok" src={tiktok} />
              </a>
              <a href="#" className="inline-flex justify-center w-6 h-6">
                <Image alt="instagram" src={instagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
