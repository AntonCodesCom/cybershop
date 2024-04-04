import ProductCatalog from '@/components/Product/Catalog';
import getCollectionBySlug from '@/loaders/Product/getCollectionBySlug';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    collectionSlug: string;
  };
}

export default function RouteCatalogCollection({ params }: Readonly<Props>) {
  const { collectionSlug } = params;
  const collection = getCollectionBySlug(collectionSlug);
  if (!collection) {
    notFound();
  }
  return <ProductCatalog collection={collection} />;
}
