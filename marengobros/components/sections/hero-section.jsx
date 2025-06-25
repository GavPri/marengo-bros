// components/HeroSection.js
import Image from "next/image";
import Logo from "../ui/logo";
import MobileHomeLogo from "../ui/mobile-home-logo"; // Make sure this exists
import Typewriter from "../ui/typewriter";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Banner Image */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/mb-banner.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="md:hidden absolute top-0 left-0 w-full h-full -z-10">
        <Image
          objectPosition="bottom"
          src="/mobile-hero-bg.jpg"
          alt="Hero Banner"
          layout="fill"
          quality={100}
          priority
        />
      </div>

      {/* Content on top of the banner */}
      <div className="w-screen h-screen flex flex-col items-center gap-4 justify-between px-4 sm:px-8 pt-5 md:pt-10">
        <div className="flex flex-col gap-6 items-center justify-center mt-15 sm:mt-0">
          {/* Desktop logo */}
          <div className="hidden md:block">
            <Logo />
          </div>

          {/* Mobile logo */}
          <div className="block md:hidden">
            <MobileHomeLogo />
          </div>

          <Typewriter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
