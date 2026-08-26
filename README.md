# Chocova Valencia

Sitio web de **Chocova Valencia**, pastelería artesanal y tartas personalizadas en Valencia.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

## Pages

| Ruta | Descripción |
|-------|-------------|
| `/` | Inicio (hero, categorías, selección, reseñas, Instagram y contacto) |
| `/boutique` | Catálogo completo |
| `/boutique/patisseries` | Pastelería |
| `/boutique/gateaux` | Tartas listas para encargar |
| `/gateaux-sur-mesure` | Configurador por pasos (presupuesto) |
| `/mariage` | Tartas para celebraciones y galería |
| `/notre-histoire` | Nuestra historia |
| `/contact` | Formulario y mapa |
| `/galerie` | Galería de fotos |

## Desarrollo

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

## Sistema de diseño

- **Colores:** Cream `#FAF6F0`, Chocova Valencia `#F4C542`, Caramel `#C4956A`, Chocolate `#3D2B1F`
- **Tipografía:** Playfair Display (títulos), Source Sans 3 (texto)

## Próximos pasos

- Sustituir las fotos de Unsplash por imágenes propias
- Conectar el formulario y el configurador a un backend (correo, CRM)
- Añadir cesta y pagos con Stripe para los dulces
- Actualizar los enlaces reales de Instagram y Uber Eats
