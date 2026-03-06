export const PRODUCTS = {
  watch: {
    name: 'Swatch 3D Vision',
    description: 'Montre connectée 3D avec affichage OLED.',
    price: 450,
    rating: 4.3,
    reviews: 545,
    modelPath: '/models/watch.glb',
    emoji: '⌚',
    label: 'Montre',
  },
  iphone: {
    name: 'iPhone 17 Pro',
    description: 'Smartphone haut de gamme avec écran OLED.',
    price: 1550,
    rating: 4.6,
    reviews: 1265,
    modelPath: '/models/iphone.glb',
    emoji: '📱',
    label: 'iPhone',
  },
  shoe: {
    name: 'Nike Air 3D Pro',
    description: 'Chaussure running haute performance.',
    price: 139,
    rating: 4.8,
    reviews: 245,
    modelPath: '/models/shoe.glb',
    emoji: '👟',
    label: 'Chaussure',
  },
};


export const VARIANTS = [
  { id:'white', label:'Blanc', hex:'#F8FAFC' },
  { id:'black', label:'Noir',  hex:'#1E293B' },
  { id:'red',   label:'Rouge', hex:'#EF4444' },
  { id:'blue',  label:'Bleu',  hex:'#3B82F6' },
  { id:'gold',  label:'Or',    hex:'#F59E0B' },
  { id:'green', label:'Vert',  hex:'#10B981' },
];
