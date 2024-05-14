import { StaticImageData } from 'next/image';

export interface IListItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}
