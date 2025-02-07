import { AiFillFacebook } from 'react-icons/ai';
import images from './images';
import { FiFacebook,FiTwitter,FiInstagram } from 'react-icons/fi';

const wines = [
  {
    title: 'Santorini Assyrtiko',
    price: '$50',
    tags: 'GR | Bottle',
  },
  {
    title: 'Naoussa Xinomavro',
    price: '$45',
    tags: 'GR | Bottle',
  },
  {
    title: 'Nemea Agiorgitiko',
    price: '$42',
    tags: 'GR | 750 ml',
  },
  {
    title: 'Malagousia Single Vineyard',
    price: '$38',
    tags: 'GR | 750 ml',
  },
  {
    title: 'Retsina Traditional',
    price: '$30',
    tags: 'GR | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Ouzo Lemonade',
    price: '$18',
    tags: 'Ouzo | Fresh Lemon Juice | Soda | Ice',
  },
  {
    title: 'Mastiha Spritz',
    price: '$22',
    tags: 'Mastiha Liqueur | Prosecco | Soda | Mint',
  },
  {
    title: 'Greek Mojito',
    price: '$16',
    tags: 'Mastiha | Lime | Mint | Soda',
  },
  {
    title: 'Metaxa Sunset',
    price: '$20',
    tags: 'Metaxa Brandy | Orange Juice | Grenadine',
  },
  {
    title: 'Aegean Negroni',
    price: '$24',
    tags: 'Gin | Mastiha | Vermouth | Orange Zest',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Star',
    subtitle: 'Awarded to top restaurants for exceptional quality.',
  },
  {
    imgUrl: images.award01,
    title: 'World’s 50 Best Restaurants',
    subtitle: 'Recognizing outstanding restaurants worldwide.',
  },
  {
    imgUrl: images.award05,
    title: 'Gault & Millau',
    subtitle: 'Prestigious rating system for gourmet restaurants.',
  },
  {
    imgUrl: images.award03,
    title: 'Toques d’Or Greece',
    subtitle: 'Award for top Greek fine dining establishments.',
  },
];



export const footerData = {
  contact: {
    address: "9 W 53rd St, New York, NY 10019, USA",
    phone1: "+1 212-344-1230",
    phone2: "+1 212-555-1230",
  },
  logo: {
    text: `"The best way to find yourself is to lose yourself in the service of others."`,
    image: "/path/to/logo1.png",
    spoonImage: "/path/to/spoon.png",
  },
  socialMedia: [
    { icon: <FiFacebook />, link: "https://facebook.com" },
    { icon: <FiTwitter />, link: "https://twitter.com" },
    { icon: <FiInstagram />, link: "https://instagram.com" },
  ],
  workingHours: {
    weekdays: {
      days: "Monday-Friday",
      time: "08:00 am - 12:00 am",
    },
    weekends: {
      days: "Saturday-Sunday",
      time: "07:00 am - 11:00 pm",
    },
  },
};

// Export everything else separately if needed
export const data = { wines, cocktails, awards };


export default data