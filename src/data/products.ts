import smartphone from './images/smartphone-product.png';
import headphones from './images/headphones.png';
import ProductItem from '@/types/Product/Item';

const products: ProductItem[] = [
  {
    name: 'Item 1L Pro 256GB ExtraZoom Orange',
    imageSrc: smartphone,
    imageAlt:
      'https://unsplash.com/photos/iphone-screen-showing-icons-on-screen-Uae7ouMw91A',
    price: 900,
  },
  {
    name: 'Custom Headphones',
    imageSrc: headphones,
    imageAlt:
      'https://unsplash.com/photos/white-apple-magic-mouse-beside-of-magic-keyboard-and-headphones--RBuQ2PK_L8',
    price: 2535,
  },
  {
    name: 'Smart Watch 1050 SuperLight',
    imageSrc: headphones,
    imageAlt:
      'https://unsplash.com/photos/white-apple-magic-mouse-beside-of-magic-keyboard-and-headphones--RBuQ2PK_L8',
    price: 399,
  },
  {
    name: 'Item 137XD Silver',
    imageSrc: smartphone,
    imageAlt:
      'https://unsplash.com/photos/iphone-screen-showing-icons-on-screen-Uae7ouMw91A',
    price: 549,
  },
];

export default products;
