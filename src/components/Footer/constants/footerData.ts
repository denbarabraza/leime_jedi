import { IFooterData } from '@/components/Footer/interface';

import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import linkidin from '../assets/linkidin.png';
import twitter from '../assets/twitter.png';

export const footerData: IFooterData = {
  address: '28 Jackson Btvd Ste\n1020 Chicago\nIL 60604-2340',
  phone: '800-2345-6789',
  email: 'info@demolink.org',
  socialMedia: [
    { id: 0, alt: 'facebook', icon: facebook, link: 'https://leime.co/' },
    { id: 1, alt: 'twitter', icon: twitter, link: 'https://leime.co/' },
    { id: 2, alt: 'google', icon: google, link: 'https://leime.co/' },
    { id: 3, alt: 'linkidin', icon: linkidin, link: 'https://leime.co/' },
  ],
  blogs: [
    {
      id: 0,
      description: 'Believe in the Business',
      avatar: avatar1,
      date: '04/30/2014',
    },
    {
      id: 1,
      description: 'Color solutions for the office',
      avatar: avatar2,
      date: '05/01/2014',
    },
    {
      id: 2,
      description: 'Anti-stress Joke Therapy',
      avatar: avatar3,
      date: '04/28/2014',
    },
  ],
};
