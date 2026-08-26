import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CartProvider } from "@/components/cart/CartProvider";
import { SITE } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Pastelería artesanal y tartas personalizadas en Valencia. Dulces selectos, tartas de cumpleaños, bodas y creaciones hechas a medida.",
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${sourceSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
