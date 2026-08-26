import type { CategoryTile, Product, Review } from "./types";

export const SITE = {
  name: "Chocova Valencia",
  tagline: "Pastelería artesanal y tartas personalizadas",
  address: "Carrer de Matias Perelló, 55, 46005 Valencia, España",
  phone: "962 066 840",
  email: "info@chocovavalencia.com",
  instagram: "https://www.instagram.com/chocovavalencia/",
  ubereats: "https://wa.me/34607232316",
  rating: 4.8,
  reviewCount: 168,
  hours: "Abierto · Cerramos a las 19:30",
};

export const NAV_LINKS = [
  { href: "/boutique", label: "Tienda" },
  { href: "/gateaux-sur-mesure", label: "Personalizadas" },
  { href: "/mariage", label: "Celebraciones" },
  { href: "/notre-histoire", label: "Nuestra historia" },
  { href: "/contact", label: "Contacto" },
];

export const CATEGORY_TILES: CategoryTile[] = [
  {
    id: "patisseries",
    title: "Pastelería",
    description: "Bollería, postres y dulces preparados cada día",
    href: "/boutique/patisseries",
    image: "/cakes/strawberry-verrines.webp",
  },
  {
    id: "gateaux",
    title: "Tartas",
    description: "Cumpleaños, fiestas y grandes celebraciones",
    href: "/boutique/gateaux",
    image: "/cakes/strawberry-cupcakes.webp",
  },
  {
    id: "custom",
    title: "Sur mesure",
    description: "Crea la tarta que imaginas",
    href: "/gateaux-sur-mesure",
    image: "/cakes/aperol-spritz.jpg",
  },
  {
    id: "celebrations",
    title: "Celebraciones",
    description: "Tartas para los momentos más especiales",
    href: "/mariage",
    image:
      "/instagram/506395092_1243760020456100_8896445037206883256_n.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "fraisier",
    name: "Fraisier",
    description: "Crema de vainilla, fresas frescas y bizcocho ligero.",
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
    description: "Praliné de avellana, pasta choux caramelizada y crema suave.",
    price: 6.5,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    featured: true,
  },
  {
    id: "eclair-chocolat",
    name: "Éclair de chocolate",
    description: "Pasta choux con crema pastelera de chocolate Valrhona.",
    price: 4.5,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1755630593730-561ef0c3bd29?auto=format&fit=crop&w=900&q=85",
    featured: true,
  },
  {
    id: "croissant",
    name: "Croissant de mantequilla",
    description: "Hojaldre artesanal con mantequilla de calidad.",
    price: 1.8,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
  },
  {
    id: "tarte-citron",
    name: "Tarta de limón",
    description: "Crema de limón casera y merengue italiano.",
    price: 24,
    category: "patisseries",
    image:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=900&q=85",
    serves: "8 parts",
    leadTime: "48h",
  },
  {
    id: "gateau-chocolat",
    name: "Tarta de chocolate",
    description: "Mousse de chocolate negro, bizcocho tierno y glaseado espejo.",
    price: 45,
    priceLabel: "Desde",
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    serves: "10–12 personas",
    leadTime: "3 días",
    badge: "best-seller",
    featured: true,
  },
  {
    id: "gateau-fruits",
    name: "Tarta de frutos rojos",
    description: "Bizcocho, crema ligera y fruta de temporada.",
    price: 42,
    priceLabel: "Desde",
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    serves: "10 personas",
    leadTime: "3 días",
    featured: true,
  },
  {
    id: "number-cake",
    name: "Tarta número",
    description: "Número personalizado con la crema que elijas.",
    price: 55,
    priceLabel: "Desde",
    category: "gateaux",
    image: "/cakes/ocean-eighteen.jpg",
    serves: "12 personas",
    leadTime: "5 días",
    badge: "nouveau",
    featured: true,
  },
  {
    id: "wedding-tier",
    name: "Tarta nupcial de varios pisos",
    description: "Asesoramiento, degustación y creación personalizada.",
    price: 350,
    priceLabel: "Desde",
    category: "mariage",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    serves: "50+ personas",
    leadTime: "A consultar",
    badge: "mariage",
    featured: true,
  },
  {
    id: "cupcakes",
    name: "Caja de cupcakes",
    description: "6 cupcakes, sabores a elegir y decoración personalizada.",
    price: 24,
    category: "gateaux",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    serves: "6 personas",
    leadTime: "48 h",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Maria K.",
    rating: 5,
    text: "¡Delicioso! Gran variedad de postres de todo el mundo. Sus tartas de cumpleaños infantiles siempre están riquísimas y la decoración es preciosa.",
    tag: "Cumpleaños",
  },
  {
    id: "2",
    author: "Victorine D.",
    rating: 5,
    text: "Llevo más de 5 años encargando mis tartas y nunca me han decepcionado. Un trato muy profesional y cercano. ¡Estoy deseando ver mi tarta nupcial!",
    tag: "Bodas",
  },
  {
    id: "3",
    author: "Sonia R.",
    rating: 5,
    text: "Excelente selección de dulces y propuestas saladas. El khachapuri estaba increíble: crujiente y fundente por dentro.",
    tag: "Pastelería",
  },
  {
    id: "4",
    author: "Client Google",
    rating: 5,
    text: "Atención cercana, dulces deliciosos y tartas preciosas. Una visita imprescindible en Valencia.",
    tag: "Atención",
  },
  {
    id: "5",
    author: "Sophie L.",
    rating: 5,
    text: "La tarta de fresas es una maravilla. Se nota el trabajo artesanal en cada bocado.",
    tag: "Pastelería",
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: "1",
    image:
      "/instagram/506395092_1243760020456100_8896445037206883256_n.jpg",
    alt: "Tarta de chocolate",
  },
  {
    id: "2",
    image:
      "/instagram/510957703_18083241469752445_4666203883791157357_n.jpg",
    alt: "Tarta de fresas",
  },
  {
    id: "3",
    image:
      "/instagram/581740305_18096868219752445_6650576276840332859_n.jpg",
    alt: "Tarta nupcial",
  },
  {
    id: "4",
    image:
      "/instagram/610308441_18102543748752445_3962388717944611297_n.jpg",
    alt: "Bollería",
  },
  {
    id: "5",
    image:
      "/instagram/611665104_18102543685752445_5628411739489225522_n.jpg",
    alt: "Tarta personalizada",
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
    alt: "Tarta ecuestre personalizada",
  },
  {
    id: "8",
    image: "/instagram/722637648_18118421716752445_430082563389280011_n.jpg",
    alt: "Tarta de bautizo azul cielo",
  },
  {
    id: "9",
    image: "/instagram/731142429_18120781585752445_2027953214602976917_n.jpg",
    alt: "Tarta de dieciocho años con temática oceánica",
  },
  {
    id: "10",
    image: "/instagram/731175343_18120781567752445_7006623568685025379_n.jpg",
    alt: "Tarta naranja Aperol Spritz",
  },
];

export function getProductsByCategory(category: Product["category"]) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}
