import Image from 'next/image';
import logo from './logo.svg';

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
        <button>
          <Image alt="Go to Homepage" src={logo} />
        </button>
        <button className="inline-flex px-1">
          <span className="material-symbols-rounded text-4xl">menu</span>
        </button>
      </header>
      <main className="flex-1 bg-gray-200">main</main>
      <footer className="container text-center bg-black text-white py-12">
        <Image alt="Cyber Logo" src={logo} className="mx-auto invert" />
      </footer>
    </div>
  );
}
