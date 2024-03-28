import Image from 'next/image';
import logo from './logo.svg';
import facebook from './facebook.svg';
import tiktok from './tiktok.svg';
import instagram from './instagram.svg';

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
      <main className="flex-1 bg-gray-200">main</main>
      <footer className="container text-center bg-black text-gray-300 text-sm text-white py-12">
        <Image alt="Cyber Logo" src={logo} className="mx-auto invert" />
        <div className="mb-5" />
        <p className=" leading-loose px-4">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
        <div className="mb-7" />
        <div className="text-white text-base font-semibold mb-3">Services</div>
        <div className="flex flex-col items-center gap-3 font-extralight">
          <a href="#">Bonus program</a>
          <a href="#">Gift cards</a>
          <a href="#">Credit and payment</a>
          <a href="#">Service contracts</a>
          <a href="#">Non-cash account</a>
          <a href="#">Payment</a>
        </div>
        <div className="mb-7" />
        <div className="text-white text-base font-semibold mb-3">
          Assistance to the buyer
        </div>
        <div className="flex flex-col items-center gap-3 font-extralight">
          <a href="#">Find an order</a>
          <a href="#">Terms of delivery</a>
          <a href="#">Exchange and return of goods</a>
          <a href="#">Guarantee</a>
          <a href="#">Frequently asked questions</a>
          <a href="#">Terms of use of the site</a>
        </div>
        <div className="mb-7" />
        <div className="flex justify-center gap-x-8 text-white">
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
      </footer>
    </div>
  );
}
