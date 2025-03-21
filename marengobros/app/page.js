import AboutSection from "@/components/sections/about-section";
import Contact from "@/components/sections/contact";
import CustomItins from "@/components/sections/custom-itineries";
import HeroSection from "@/components/sections/hero-section";
import Resources from "@/components/sections/resources-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CustomItins />
      <Resources />
      <Contact />
    </>
  );
}
