import 'server-only';
import collections from '@/data/collections';
import ProductCollection from '@/types/Product/Collection';

export default function getCollectionBySlug(
  slug: string,
): ProductCollection | null {
  return collections.find((x) => x.slug === slug) ?? null;
}
