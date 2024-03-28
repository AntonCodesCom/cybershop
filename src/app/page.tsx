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
          <Image alt="Home" src={logo} />
        </button>
        <button className="inline-flex px-1">
          <span className="material-symbols-rounded text-4xl">menu</span>
        </button>
      </header>
      <main className="flex-1 bg-gray-200">main</main>
      <footer className="bg-black text-white">
        <span>footer</span>
      </footer>
    </div>
  );
}
