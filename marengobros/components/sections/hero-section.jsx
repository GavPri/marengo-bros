// components/HeroSection.js
import Image from "next/image";
import Logo from "../ui/logo";
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
          quality={100} // Set the quality to maximum to prevent blurriness
          priority // Ensures the image loads immediately without delay
        />
      </div>
      <div className="md:hidden absolute top-0 left-0 w-full h-full -z-10">
        <Image
          objectPosition="bottom"
          src="/mobile-hero-bg.jpg"
          alt="Hero Banner"
          layout="fill"
          quality={100} // Set the quality to maximum to prevent blurriness
          priority // Ensures the image loads immediately without delay
        />
      </div>

      {/* Content on top of the banner */}
      <div className="w-screen h-screen flex flex-col items-center gap-4 justify-between px-4 sm:px-8 pt-5 md:pt-10">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Logo />
          <Typewriter />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
