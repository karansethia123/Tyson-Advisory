import ImageWithData from "@/components/ImageWithData";
import HeroCarousel from "./HeroCarousel";
import HomeTimeline from "./HomeTimeline";
import ServiceCards from "./ServiceCards";
import TestimonialSection from "./TestimonialSection";
import BlogCards from "@/components/BlogCards";
import BrandCarousel from "./BrandCarousal";

export default function Home() {

   const brandLogos = [
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9xcBFT4ALTuWjGx1pbi625nRrAha3EzMPZKDs", alt: "Brand 1" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9w2rbtKcY3AepVWHBJvRKrMFiwCb9qZxSlIcT", alt: "Brand 2" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9OaZyVNiVixKW8pD6Roj0QGmycFvNkb51sXBd", alt: "Brand 3" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9cCvXOzx3mstD4JAzkpPHjyhYqC1geQLbTXnx", alt: "Brand 4" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9mJAuBE8BESupc3KwDzo4tbeGVHYWUAdQyl5j", alt: "Brand 5" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9lnAUjyea9GPbsBc8qemrgU21ypdoCI6HEfSR", alt: "Brand 6" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9AofqVAuO4h9zUp1a6MJqneWdFYX87yo52wmj", alt: "Brand 7" },
    { src: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Uskn3NOBLZFXglqw2pirfk7VabSWnUJoK5zm", alt: "Brand 8" },
  ]

  return (
    <main>
      <HeroCarousel />
      <ServiceCards />
      <HomeTimeline />
      <TestimonialSection />
      <ImageWithData
        image="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Zlq2qm6QPiWMqQjw4ktaL1lK3z2EXHm6scGg"
        header="Build brand and grow your business with Consultic."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata"
        ctaText="Schedule Consultation"
        ctaLink="/contact-us"
      />
      <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold font-header font-stretch-200% tracking-tight mb-2">Trusted by leading brands</h2>
          <p className="text-muted-foreground max-w-2xl font-content mx-auto">
            Join thousands of companies using our platform to grow their business
          </p>
        </div>

        <BrandCarousel logos={brandLogos} autoScrollInterval={2000} className="max-w-5xl mx-auto" />
      </div>
    </section>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Blog</h2>
          <BlogCards />
        </div>
      </section>
    </main>
  )
}

