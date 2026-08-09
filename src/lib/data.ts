import type { CategoryTile, Product, Review } from "./types";

export const SITE = {
  name: "Sunny Cakes",
  tagline: "Pâtisserie artisanale & gâteaux sur mesure",
  address: "76T Rue du Quesnoy, 59300 Valenciennes, France",
  phone: "+33 9 56 62 64 73",
  email: "contact@sunnycakes.fr",
  instagram: "https://instagram.com",
  ubereats: "https://ubereats.com",
  rating: 4.8,
  reviewCount: 76,
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
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
  },
  {
    id: "gateaux",
    title: "Gâteaux",
    description: "Anniversaires, fêtes et célébrations",
    href: "/boutique/gateaux",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  },
  {
    id: "custom",
    title: "Sur mesure",
    description: "Créez le gâteau de vos rêves",
    href: "/gateaux-sur-mesure",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5aa?w=800&q=80",
  },
  {
    id: "mariage",
    title: "Mariage",
    description: "Pièces montées & consultations",
    href: "/mariage",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
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
    name: "Number Cake",
    description: "Chiffre personnalisable, crèmes au choix.",
    price: 55,
    priceLabel: "À partir de",
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    alt: "Gâteau au chocolat",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    alt: "Fraisier",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    alt: "Gâteau de mariage",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    alt: "Viennoiseries",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5aa?w=600&q=80",
    alt: "Gâteau personnalisé",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    alt: "Paris-Brest",
  },
];

export function getProductsByCategory(category: Product["category"]) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}
