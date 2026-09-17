import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CustomTeaser } from "@/components/home/CustomTeaser";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { TrustStrip } from "@/components/home/TrustStrip";
import { VisitSection } from "@/components/home/VisitSection";
import { PortfolioGallery } from "@/components/gallery/PortfolioGallery";
import { getPortfolioPreviews } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <CustomTeaser />
      <section className="bg-[#FFF8FA] py-16 md:py-24"><div className="mx-auto max-w-7xl px-4 md:px-8"><PortfolioGallery collections={getPortfolioPreviews()} preview /></div></section>
      <ReviewsSection />
      <StoryTeaser />
      <InstagramGallery />
      <VisitSection />
    </>
  );
}
