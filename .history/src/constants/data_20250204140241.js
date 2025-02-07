import images from './images';

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

// ✅ Assign the object to a variable before exporting
const data = { wines, cocktails, awards };

export default data;
