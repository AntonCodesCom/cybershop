import collections from '@/data/collections';

/**
 * component
 */
export default function HomepageCategories() {
  return (
    <div className="bg-neutral-50 py-16">
      <div className="container">
        <div className="text-2xl font-medium mb-10">Browse By Category</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {collections.map((x, i) => (
            <a
              key={i}
              href="#"
              className="text-center rounded-2xl bg-neutral-200 py-8"
            >
              <div className="material-symbols-outlined text-5xl mb-4">
                {x.materialIcon}
              </div>
              <div className="font-medium">{x.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
