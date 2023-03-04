// import hero slider images
import HeroSlideImage1 from './assets/dogs/dog-dog-slide-1.png';
import HeroSlideImage2 from './assets/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/dogs/dog-slide-3.png';
// import dog category images
import DogCateg1 from './assets/dogs/dog-categ-1.png';
import DogCateg2 from './assets/dogs/dog-categ-2.png';
import DogCateg3 from './assets/dogs/dog-categ-3.png';
import DogCateg4 from './assets/dogs/dog-categ-4.png';
// import social icons
import { AiFillInstagram  } from 'react-icons/ai';

export const navigation = [
  {
    name: 'home',
    href: '#',
  },
  {
    name: 'prices',
    href: '#',
  },
  {
    name: 'contact',
    href: '#',
  },
  {
    name: 'book an appointment',
    href: '#',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'Lorem ipsum',
    image: <HeroSlideImage1 />,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.',
    buttonText: 'Book appointment',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit.',
    image: <HeroSlideImage2 />,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.',
    buttonText: 'Book an appointment',
  },
  {
    id: 3,
    title: 'Nunc odio in et, lectus sit.',
    image: <HeroSlideImage3 />,
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.',
    buttonText: 'Book an appointment',
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: 'small',
    dogCategory: '1 - 9 kg',
    services: [
      {
        name: 'standard',
        price: 200,
        list: ['washing'],
      },
      {
        name: 'premium',
        price: 400,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: '',
        price: 600,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <DogCateg2 />,
    dogCategory: '10 - 19 kg',
    services: [
      {
        name: 'standard',
        price: 800,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 1000,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 1200,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'big',
    image: <DogCateg3 />,
    dogCategory: '20 - 29 kg',
    services: [
      {
        name: 'standard',
        price: 1400,
        list: ['wash'],
      },
      {
        name: 'premium',
        price: 1600,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 1800,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'super',
    image: <DogCateg4 />,
    dogCategory: '30 - 39 kg',
    services: [
      {
        name: 'standard',
        price: 2000,
        list: ['wash'],
      },
      {
        name: 'premium',
        price: 2100,
        list: [
          'all standard services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 2200,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
];

export const social = [
   {
    icon: <AiFillInstagram />,
    href: '#',
  }
];