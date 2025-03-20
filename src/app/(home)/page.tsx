import HeroCarousel from "./HeroCarousel";
import HomeTimeline from "./HomeTimeline";
import ServiceCards from "./ServiceCards";
import TestimonialSection from "./TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ServiceCards />
      <HomeTimeline />
      <TestimonialSection />
    </main>
  )
}

