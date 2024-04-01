import Image from 'next/image';
import featured from './smartphone-featured.png';

export default function HomepageHeroBanner() {
  return (
    <div className="bg-[#150800]">
      <div
        className="
          container 
          grid grid-cols-1 md:grid-cols-2
          text-white pt-16
        "
      >
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left pb-14">
          <div className="text-neutral-400 text-2xl font-semibold mb-5">
            Featured Pro.
          </div>
          <div className="text-6xl xl:text-8xl mb-5">
            <span className="font-thin">Item 1L</span>{' '}
            <span className="font-bold">Pro</span>
          </div>
          <div
            className="
              max-w-xs lg:max-w-none mx-auto md:ml-0
              text-neutral-400 text-lg font-medium text-balance 
              mb-8
            "
          >
            The featured product of the shop is shown here. True
          </div>
          <a
            href="#"
            className="
              border border-white rounded-md
              font-medium
              px-14 py-3
            "
          >
            Shop Now
          </a>
        </div>
        <div className="max-w-xs lg:max-w-sm xl:max-w-md mx-auto md:mr-0 2xl:mx-auto">
          <Image
            alt="https://unsplash.com/photos/black-smartphone-displaying-11-00-83ypHTv6J2M"
            src={featured}
          />
        </div>
      </div>
    </div>
  );
}
