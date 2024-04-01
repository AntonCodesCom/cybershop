'use client';
import classNames from 'classnames';
import { FormEvent, Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  ArrowRightIcon,
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import CommonLogo from '../Logo';

// local data
const mainMenuItems = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Contact Us',
  },
  {
    name: 'Blog',
  },
];

// local data
const iconMenuItems = [
  {
    name: 'Favourites',
    Icon: HeartIcon,
  },
  {
    name: 'Cart',
    Icon: ShoppingCartIcon,
  },
  {
    name: 'Account',
    Icon: UserIcon,
  },
];

// local data
const collections = [
  {
    name: 'Phones',
    materialIcon: 'phone_iphone',
  },
  {
    name: 'Computers',
    materialIcon: 'desktop_mac',
  },
  {
    name: 'Smart Watches',
    materialIcon: 'watch',
  },
  {
    name: 'Cameras',
    materialIcon: 'photo_camera',
  },
  {
    name: 'Headphones',
    materialIcon: 'headphones',
  },
  {
    name: 'Gaming',
    materialIcon: 'sports_esports',
  },
];

// sub-component
function SearchForm() {
  const [query, setQuery] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(`Search query: "${query}"`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center gap-2 h-14 rounded-lg bg-neutral-100 px-0">
        <MagnifyingGlassIcon className="absolute left-4 w-5 h-5 stroke-neutral-500" />
        <input
          name="query"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full rounded-lg bg-transparent text-sm font-medium pl-12 pr-12"
        />
        {query && (
          <button type="submit" className="absolute right-2 p-2">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
}

/**
 * component
 */
export default function CommonHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="container flex flex-col justify-center h-[5.5rem]">
        <nav
          className="flex items-center justify-between gap-8"
          aria-label="Global"
        >
          <a href="#">
            <span className="sr-only">CyberShop</span>
            <CommonLogo fill="black" />
          </a>
          <div className="hidden sm:block flex-1">
            <SearchForm />
          </div>
          <div className="hidden lg:flex gap-6 xl:gap-10">
            {mainMenuItems.map((x, i) => (
              <a
                key={i}
                href="#"
                className={classNames(
                  'font-medium',
                  'hover:underline',
                  i === 0 ? 'text-black' : 'text-neutral-400',
                )}
              >
                {x.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex gap-2 xl:gap-4 -mr-1.5">
            {iconMenuItems.map(({ Icon, ...x }, i) => (
              <a key={i} href="#" className="p-1">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-3.5 inline-flex items-center justify-center p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Main Menu</span>
              <Bars3Icon className="w-9 h-9" />
            </button>
          </div>
        </nav>
      </div>
      <div className="hidden lg:block h-12 bg-[#2e2e2e]">
        <div className="container flex items-center justify-between h-full">
          {collections.map((x, i) => (
            <Fragment key={i}>
              {i > 0 && <div className="h-3/6 border-l border-l-neutral-400" />}
              <a
                href="#"
                className={classNames(
                  'flex items-center gap-2 text-neutral-400 p-2',
                  i === 0 && '-ml-2',
                  i === collections.length - 1 && '-mr-2',
                )}
              >
                <span className="material-symbols-rounded text-xl">
                  {x.materialIcon}
                </span>
                <span className="inline-block font-medium pt-0.5">
                  {x.name}
                </span>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between h-[5.5rem] mb-0">
            <a href="#">
              <span className="sr-only">CyberShop</span>
              <CommonLogo fill="black" />
            </a>
            <button
              type="button"
              className="-m-3.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-9 h-9" aria-hidden="true" />
            </button>
          </div>
          <div className="sm:hidden">
            <SearchForm />
          </div>
          <div className="mb-4" />
          <div className="flex flex-col gap-1">
            {mainMenuItems.map((x, i) => (
              <a
                key={i}
                href="#"
                className={classNames(
                  'block hover:underline py-1.5',
                  i === 0 ? 'font-semibold underline' : 'font-medium',
                )}
              >
                {x.name}
              </a>
            ))}
          </div>
          <hr className="my-4 sm:my-6" />
          <div className="flex flex-col gap-1">
            {iconMenuItems.map(({ Icon, ...x }, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center font-medium hover:underline py-1.5"
              >
                <Icon className="inline w-5 h-5 mr-3" />
                <span>{x.name}</span>
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
