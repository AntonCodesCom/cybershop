'use client';
import ProductCard from '@/components/Product/Card';
import collections from '@/data/collections';
import products from '@/data/products';
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

// sub-component
function Filters() {
  return (
    <div className="py-1.5">
      <div className="text-lg font-medium mb-4">Collections</div>
      <ul>
        {collections.map((x, i) => (
          <li key={i} className="">
            <Link
              href="catalog"
              className="block text-neutral-400 hover:text-black py-1"
            >
              {x.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="catalog"
            className="block text-black hover:text-black py-1"
          >
            All Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

// sub-component
function Sorting() {
  return (
    <div className="w-full flex items-center justify-between border rounded-lg p-4 lg:py-2">
      <span className="text-sm">By rating</span>
      <ChevronDownIcon className="text-neutral-400 w-5 h-5" />
    </div>
  );
}

/**
 * route component
 */
export default function RouteCatalog() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <div className="container pb-10">
      <div className="hidden lg:flex items-center gap-4 font-medium pt-10 pb-14">
        <Link href="/" className="text-neutral-400 hover:text-black">
          Home
        </Link>
        <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
        <Link href="catalog" className="text-neutral-400 hover:text-black">
          Catalog
        </Link>
        <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
        <div>Phones</div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:hidden pt-6 mb-8">
        <button
          type="button"
          onClick={() => setFiltersOpen((x) => !x)}
          className="flex items-center justify-between border rounded-lg p-4"
        >
          <span className="text-sm">Filters</span>
          {filtersOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
          )}
        </button>
        <Sorting />
      </div>
      <div
        className={classNames(
          !filtersOpen && 'hidden',
          'border-y lg:hidden mb-8 p-4',
        )}
      >
        <Filters />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8">
        <div className="hidden lg:block">
          <Filters />
        </div>
        <div className="col-span-3">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <div className="font-medium">
              <span className="text-neutral-500">Phones:</span>{' '}
              <span className="text-lg">85</span>
            </div>
            <div className="hidden lg:block w-48">
              <Sorting />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((x, i) => (
              <ProductCard key={i} product={x} />
            ))}
          </div>
          <div className="mb-10" />
          <div className="flex items-center justify-center gap-2 font-medium">
            <a
              href="#"
              className="flex items-center justify-center min-w-8 h-8 rounded px-2"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-w-8 h-8 rounded bg-black text-white px-2"
            >
              1
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-w-8 h-8 rounded bg-neutral-100 px-2"
            >
              2
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-w-8 h-8 rounded bg-neutral-100 px-2"
            >
              3
            </a>
            <div>...</div>
            <a
              href="#"
              className="flex items-center justify-center min-w-8 h-8 rounded bg-neutral-100 px-2"
            >
              12
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-w-8 h-8 rounded px-2"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
