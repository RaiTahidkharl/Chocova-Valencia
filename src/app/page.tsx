import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CustomTeaser } from "@/components/home/CustomTeaser";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { TrustStrip } from "@/components/home/TrustStrip";
import { VisitSection } from "@/components/home/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <CustomTeaser />
      <ReviewsSection />
      <StoryTeaser />
      <InstagramGallery />
      <VisitSection />
    </>
  );
}
