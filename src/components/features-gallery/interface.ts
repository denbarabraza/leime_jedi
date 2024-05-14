import { StaticImageData } from 'next/image';

export interface IGalleryImage {
  id: number;
  categories: string[];
  src: StaticImageData;
  alt: string;
}
