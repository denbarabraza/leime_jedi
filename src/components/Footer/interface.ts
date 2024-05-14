import { StaticImageData } from 'next/image';

export interface ISocialMedia {
  id: number;
  alt: string;
  icon: StaticImageData;
  link: string;
}

export interface IBlog {
  id: number;
  description: string;
  avatar: StaticImageData;
  date: string;
}

export interface IFooterData {
  address: string;
  phone: string;
  email: string;
  socialMedia: ISocialMedia[];
  blogs: IBlog[];
}
