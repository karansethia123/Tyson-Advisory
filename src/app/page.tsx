import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="snap-y max-w-[1280px] w-full mx-auto">
      <Hero />
      <Services />
      <Mission />
    </div>
  );
}
