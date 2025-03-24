// components/HeroSection.js
import Image from "next/image";
import Logo from "../ui/logo";
import Link from "next/link";
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
          src="/mobile-hero-bg.jpg"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100} // Set the quality to maximum to prevent blurriness
          priority // Ensures the image loads immediately without delay
        />
      </div>

      {/* Content on top of the banner */}
      <div className="w-screen h-screen flex flex-col items-center mt-2 gap-12 justify-between px-4 sm:px-8">
        <div className="flex flex-col gap-6 items-center justify-center">
          <Logo />
          <Typewriter />
        </div>

        {/* Navigation Links */}
        {/* <nav className="text-4xl md:text-xl items-start md:text-center border-0 sm:border-4 font-bold sm:border-gray-50 rounded-full flex flex-col sm:flex-row justify-between mb-12 gap-4 sm:gap-8 w-full sm:w-1/2 px-6 py-3">
          <Link
            className="text-stroke-orange text-center sm:text-left"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="text-stroke-orange text-center sm:text-left"
            href={"#customItins"}
          >
            Custom Writing
          </Link>
          <Link
            className="text-stroke-orange text-center sm:text-left"
            href={"/custom-itineries"}
          >
            Custom Itineraries
          </Link>
          <Link
            className="text-stroke-orange text-center sm:text-left"
            href={"/contact"}
          >
            Contact
          </Link>
        </nav> */}
      </div>
    </section>
  );
};

export default HeroSection;
