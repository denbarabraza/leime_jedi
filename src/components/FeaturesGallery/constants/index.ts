import { IGalleryImage } from '@/components/FeaturesGallery/interface';

import tablet from '../assets/tablet.png';
import womenWithBalloons from '../assets/womenWithBalloons.png';
import womenWithCup from '../assets/womenWithCup.png';

export const galleryImages: IGalleryImage[] = [
  {
    id: 1,
    categories: ['All', 'BUSINESS', 'INFRASTRUCTURE', 'INDUSTRIAL'],
    src: womenWithBalloons,
    alt: 'Women with balloons',
  },
  {
    id: 2,
    categories: ['All', 'CREATIVE', 'OTHER'],
    src: womenWithCup,
    alt: 'Women with cup',
  },
  {
    id: 3,
    categories: ['All', 'BUSINESS', 'PORTFOLIO', 'INDUSTRIAL'],
    src: tablet,
    alt: 'Image 3',
  },
];

export const categoryOptions: string[] = [
  'ALL',
  'BUSINESS',
  'CREATIVE',
  'PORTFOLIO',
  'INFRASTRUCTURE',
  'INDUSTRIAL',
  'OTHER',
];
