import { HeroSection } from "@/components/sections/HeroSection";
import { EventDetails } from "@/components/sections/EventDetails";
import { PhotoMemory } from "@/components/sections/PhotoMemory";
import { StorySection } from "@/components/sections/StorySection";
import { Gallery } from "@/components/sections/Gallery";
import { FooterRSVP } from "@/components/sections/FooterRSVP";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <HeroSection />
      <EventDetails />
      <PhotoMemory />
      <StorySection />
      {/* <Gallery /> */}
      <FooterRSVP />
    </main>
  );
}
