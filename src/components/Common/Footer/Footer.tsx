import Image from 'next/image';
import CommonLogo from '../Logo';
import github from './github.svg';
import linkedin from './linkedin-in.svg';

export default function CommonFooter() {
  return (
    <footer className="bg-black text-neutral-300 text-sm text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-7">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <CommonLogo fill="white" />
            <div className="mb-5" />
            <p className="mx-auto lg:ml-0 text-balance leading-loose px-4 lg:px-0">
              This webpage was built by AntonCodes on Next.js and Tailwind CSS
              based on a free design.
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
            <a
              href="https://github.com/AntonCodesCom"
              className="inline-flex justify-center w-6 h-6"
            >
              <Image alt="github" src={github} className="invert" />
            </a>
            <a
              href="https://www.linkedin.com/in/antoncodes"
              className="inline-flex justify-center w-6 h-6"
            >
              <Image alt="linkedin" src={linkedin} className="invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
