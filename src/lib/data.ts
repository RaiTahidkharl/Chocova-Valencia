import type { CategoryTile, Product, Review } from "./types";

export const SITE = {
  name: "Chocova Valencia",
  tagline: "Pastelería artesanal y tartas personalizadas",
  address: "Carrer de Matias Perelló, 55, 46005 Valencia, España",
  phone: "962 066 840",
  whatsapp: "34607232316",
  whatsappDisplay: "607 232 316",
  email: "info@chocovavalencia.com",
  instagram: "https://www.instagram.com/chocovavalencia/",
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
    title: "Repostería",
    description: "Donuts, brownies, muffins, cupcakes y cookies",
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
    title: "Eventos",
    description: "Mesas dulces y tartas para cada celebración",
    href: "/gateaux-sur-mesure",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/tarta_adultos.jpg",
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
    id: "tartas-especiales",
    name: "Tartas Especiales",
    description: "Diseños destacados para celebrar una ocasión que merece algo único.",
    category: "tartas-especiales",
    image: "/cakes/aperol-spritz.jpg",
    cta: "quote",
    featured: true,
  },
  {
    id: "tartas-personalizadas",
    name: "Tartas Personalizadas",
    description: "Una tarta creada contigo para reflejar tu historia, tema y estilo.",
    category: "tartas-personalizadas",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/martina.jpg",
    cta: "quote",
    featured: true,
  },
  {
    id: "tartas-impresion",
    name: "Tartas de Impresión",
    description: "Diseño comestible impreso para personalizar el acabado de tu tarta.",
    category: "tartas-impresion",
    image: "https://chocovavalencia.com/wp-content/uploads/2021/12/Tarta-impresion-2-1536x2048.jpg",
    cta: "quote",
    featured: true,
  },
  {
    id: "tartas-numero",
    name: "Tartas Número",
    description: "Una tarta con el número protagonista de tu celebración.",
    category: "tartas-numero",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/11/tarta_numeros.jpg",
    cta: "quote",
    featured: true,
  },
  {
    id: "tartas-nevera",
    name: "Tartas de Nevera",
    description: "Tartas frescas para conservar en frío y disfrutar bien refrigeradas.",
    category: "tartas-nevera",
    image: "https://chocovavalencia.com/wp-content/uploads/2021/01/2020-11-10-13.12.42-768x1024.jpg",
    cta: "quote",
  },
  {
    id: "donuts-rellenos",
    name: "Donuts Rellenos",
    description: "Donuts preparados para rellenar y decorar al gusto.",
    category: "donuts-rellenos",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/11/2020-11-11-10.46.46-768x1024.jpg",
    cta: "cart",
    featured: true,
  },
  {
    id: "brownies",
    name: "Brownies",
    description: "Porciones de brownie para disfrutar o compartir.",
    category: "brownies",
    image: "https://chocovavalencia.com/wp-content/uploads/2021/01/2020-10-20-12.21.57-768x1024.jpg",
    cta: "cart",
  },
  {
    id: "muffins",
    name: "Muffins",
    description: "Muffins tiernos para desayunos, meriendas y mesas dulces.",
    category: "muffins",
    image: "https://chocovavalencia.com/wp-content/uploads/2021/01/2020-11-13-12.12.00-768x1024.jpg",
    cta: "cart",
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "Cupcakes decorados para disfrutar en cualquier ocasión.",
    category: "cupcakes",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/cupcakes-768x1024.jpeg",
    cta: "cart",
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Cookies artesanales para acompañar tus momentos más dulces.",
    category: "cookies",
    image: "https://chocovavalencia.com/wp-content/uploads/2021/01/cookies-1-768x1024.jpeg",
    cta: "cart",
  },
  {
    id: "mesas-dulces",
    name: "Mesas Dulces",
    description: "Una composición dulce completa para vestir tu celebración.",
    category: "mesas-dulces",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/mesas_dulces.jpg",
    cta: "quote",
    featured: true,
  },
  {
    id: "cumpleanos",
    name: "Cumpleaños",
    description: "Una tarta pensada para hacer inolvidable tu celebración.",
    category: "cumpleanos",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/martina.jpg",
    cta: "quote",
  },
  {
    id: "bautizos",
    name: "Bautizos",
    description: "Diseños delicados para acompañar un día especial en familia.",
    category: "bautizos",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/IMGefrwefwefwef7.jpg",
    cta: "quote",
  },
  {
    id: "comuniones",
    name: "Comuniones",
    description: "Creaciones cuidadas para celebrar y compartir en familia.",
    category: "comuniones",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/comunion.jpg",
    cta: "quote",
  },
  {
    id: "bodas",
    name: "Bodas",
    description: "Tartas nupciales personalizadas para vuestro gran día.",
    category: "bodas",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/IMG_0378.jpg",
    cta: "quote",
  },
  {
    id: "eventos-corporativos",
    name: "Eventos Corporativos",
    description: "Propuestas dulces a medida para eventos y equipos.",
    category: "eventos-corporativos",
    image: "https://chocovavalencia.com/wp-content/uploads/2020/12/tartas_empresa-1.jpg",
    cta: "quote",
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
    alt: "Creación dulce de Chocova Valencia",
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

export function getProductsByCategories(categories: Product["category"][]) {
  return PRODUCTS.filter((p) => categories.includes(p.category));
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}
