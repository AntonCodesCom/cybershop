import Image from 'next/image';
import CommonLogo from '../Logo';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import tiktok from './tiktok.svg';

export default function CommonFooter() {
  return (
    <footer className="bg-black text-neutral-300 text-sm text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-7">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <CommonLogo fill="white" />
            <div className="mb-5" />
            <p className="mx-auto text-balance leading-loose px-4 lg:px-0">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
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
  );
}
