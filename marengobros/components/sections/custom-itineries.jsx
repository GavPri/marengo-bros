// components/HeroSection.js
import Image from "next/image";
import Logo from "../ui/logo"; // Assuming this is a logo component

const CustomItins = () => {
  return (
    <section id="customItins" className="relative w-full h-screen overflow-hidden bg-black -z-20">
      {/* Hero Banner Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/yosemite-cliff.png" // Path to the uploaded image
          alt="Yosemite Cliff"
          layout="fill"
          objectFit="cover"
          quality={100} // Set the quality to maximum to prevent blurriness
          priority // Ensures the image loads immediately without delay
        />
      </div>

      {/* Content on top of the banner */}
      <div className="w-1/2 h-screen flex flex-col items-start justify-start gap-6 px-4 sm:px-8 py-16">
        <div className="flex flex-col items-start justify-center gap-4 md:ml-6 ">
          <Logo />
          <h1 className="text-2xl sm:text-4xl font-bold text-white text-left text-stroke-orange">
            Custom Yosemite Itineraries
          </h1>
          <p className="text-sm sm:text-lg text-white text-left max-w-md text-stroke-orange">
            Personalized itineraries from local experts whether you're traveling
            solo or with the family.
          </p>
        </div>

        {/* Learn More Button */}
        <div className="mt-6 ml-6">
          <a
            href="#"
            className="inline-block px-6 py-3 text-white font-semibold bg-[#cf6d2e] rounded-full hover:bg-orange-600 transition duration-300 border-4 border-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomItins;
