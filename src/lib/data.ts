import type { CategoryTile, Product, Review } from "./types";

export const SITE = {
  name: "Chocova Valencia",
  tagline: "Pâtisserie artisanale & gâteaux sur mesure",
  address: "Carrer de Matias Perelló, 55, 46005 Valencia, España",
  phone: "962 066 840",
  email: "info@chocovavalencia.com",
  instagram: "https://www.instagram.com/chocovavalencia/",
  ubereats: "https://wa.me/34607232316",
  rating: 4.8,
  reviewCount: 168,
  hours: "Ouvert · Ferme à 19h30",
};

export const NAV_LINKS = [
  { href: "/boutique", label: "Boutique" },
  { href: "/gateaux-sur-mesure", label: "Sur mesure" },
  { href: "/mariage", label: "Mariage" },
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
];

export const CATEGORY_TILES: CategoryTile[] = [
  {
    id: "patisseries",
    title: "Pâtisseries",
    description: "Viennoiseries, entremets et douceurs du jour",
    href: "/boutique/patisseries",
    image: "/cakes/strawberry-verrines.webp",
  },
  {
    id: "gateaux",
    title: "Gâteaux",
    description: "Anniversaires, fêtes et célébrations",
    href: "/boutique/gateaux",
    image: "/cakes/strawberry-cupcakes.webp",
  },
  {
    id: "custom",
    title: "Sur mesure",
    description: "Créez le gâteau de vos rêves",
    href: "/gateaux-sur-mesure",
    image: "/cakes/aperol-spritz.jpg",
  },
  {
    id: "mariage",
    title: "Mariage",
    description: "Pièces montées & consultations",
    href: "/mariage",
    image:
      "/instagram/506395092_1243760020456100_8896445037206883256_n.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "fraisier",
    name: "Fraisier",
    description: "Mousseline vanille, fraises fraîches, génoise légère.",
    price: 28,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    serves: "6 parts",
    leadTime: "24h",
    badge: "best-seller",
    featured: true,
  },
  {
    id: "paris-brest",
    name: "Paris-Brest",
    description: "Praliné noisette, choux caramélisé, crème mousseline.",
    price: 6.5,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    featured: true,
  },
  {
    id: "eclair-chocolat",
    name: "Éclair au chocolat",
    description: "Pâte à choux, crème pâtissière chocolat Valrhona.",
    price: 4.5,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1755630593730-561ef0c3bd29?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    id: "croissant",
    name: "Croissant au beurre",
    description: "Feuilletage artisanal, beurre AOP.",
    price: 1.8,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
  },
  {
    id: "tarte-citron",
    name: "Tarte au citron",
    description: "Crème citron maison, meringue italienne.",
    price: 24,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=900&q=85",
    serves: "8 parts",
    leadTime: "48h",
  },
  {
    id: "gateau-chocolat",
    name: "Gâteau au chocolat",
    description: "Mousse chocolat noir, biscuit moelleux, glaçage miroir.",
    price: 45,
    priceLabel: "À partir de",
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    serves: "10–12 personnes",
    leadTime: "3 jours",
    badge: "best-seller",
    featured: true,
  },
  {
    id: "gateau-fruits",
    name: "Gâteau aux fruits rouges",
    description: "Génoise, crème légère, fruits de saison.",
    price: 42,
    priceLabel: "À partir de",
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    serves: "10 personnes",
    leadTime: "3 jours",
    featured: true,
  },
  {
    id: "number-cake",
    name: "Gâteau chiffre",
    description: "Chiffre personnalisable, crèmes au choix.",
    price: 55,
    priceLabel: "À partir de",
    category: "gateaux",
    image: "/cakes/ocean-eighteen.jpg",
    serves: "12 personnes",
    leadTime: "5 jours",
    badge: "nouveau",
    featured: true,
  },
  {
    id: "wedding-tier",
    name: "Pièce montée mariage",
    description: "Consultation, dégustation et création sur mesure.",
    price: 350,
    priceLabel: "À partir de",
    category: "mariage",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    serves: "50+ personnes",
    leadTime: "Sur consultation",
    badge: "mariage",
    featured: true,
  },
  {
    id: "cupcakes",
    name: "Box de cupcakes",
    description: "6 cupcakes, parfums au choix, décor personnalisé.",
    price: 24,
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    serves: "6 personnes",
    leadTime: "48h",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Maria K.",
    rating: 5,
    text: "Délicieux ! Grande variété de desserts du monde entier. Leurs gâteaux d'anniversaire pour enfants sont toujours savoureux et les décorations sont magnifiques.",
    tag: "Gâteaux anniversaire",
  },
  {
    id: "2",
    author: "Victorine D.",
    rating: 5,
    text: "Je commande mes gâteaux depuis plus de 5 ans, jamais déçue ! Très professionnelle, incroyablement gentille. J'ai hâte de voir mon gâteau de mariage !",
    tag: "Mariage",
  },
  {
    id: "3",
    author: "Sun Shine",
    rating: 5,
    text: "Excellente sélection de pâtisseries sucrées et salées. Le khachapuri était incroyable — croustillant et fondant à l'intérieur.",
    tag: "Pâtisseries",
  },
  {
    id: "4",
    author: "Client Google",
    rating: 5,
    text: "Accueil chaleureux, belles pâtisseries et gâteaux magnifiques. Une adresse incontournable à Valenciennes.",
    tag: "Accueil",
  },
  {
    id: "5",
    author: "Sophie L.",
    rating: 5,
    text: "Le fraisier est une merveille. On sent le travail artisanal dans chaque bouchée.",
    tag: "Pâtisseries",
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: "1",
    image:
      "/instagram/506395092_1243760020456100_8896445037206883256_n.jpg",
    alt: "Gâteau au chocolat",
  },
  {
    id: "2",
    image:
      "/instagram/510957703_18083241469752445_4666203883791157357_n.jpg",
    alt: "Fraisier",
  },
  {
    id: "3",
    image:
      "/instagram/581740305_18096868219752445_6650576276840332859_n.jpg",
    alt: "Gâteau de mariage",
  },
  {
    id: "4",
    image:
      "/instagram/610308441_18102543748752445_3962388717944611297_n.jpg",
    alt: "Viennoiseries",
  },
  {
    id: "5",
    image:
      "/instagram/611665104_18102543685752445_5628411739489225522_n.jpg",
    alt: "Gâteau personnalisé",
  },
  {
    id: "6",
    image:
      "/instagram/620982637_18104295232752445_3470182747740634475_n.jpg",
    alt: "Paris-Brest",
  },
  {
    id: "7",
    image: "/instagram/624160035_18105362659752445_7922337456158117569_n.jpg",
    alt: "Gâteau équestre personnalisé",
  },
  {
    id: "8",
    image: "/instagram/722637648_18118421716752445_430082563389280011_n.jpg",
    alt: "Gâteau de baptême bleu ciel",
  },
  {
    id: "9",
    image: "/instagram/731142429_18120781585752445_2027953214602976917_n.jpg",
    alt: "Gâteau de dix-huit ans thème océan",
  },
  {
    id: "10",
    image: "/instagram/731175343_18120781567752445_7006623568685025379_n.jpg",
    alt: "Gâteau orange Aperol Spritz",
  },
];

export function getProductsByCategory(category: Product["category"]) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}
