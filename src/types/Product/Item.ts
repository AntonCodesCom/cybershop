import { StaticImageData } from 'next/image';

export default interface ProductItem {
  name: string;
  price: number;
  imageSrc: StaticImageData;
  imageAlt: string;
}
