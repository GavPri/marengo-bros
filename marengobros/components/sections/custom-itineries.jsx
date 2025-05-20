import Image from "next/image";
import Logo from "../ui/logo";

const CustomItins = () => {
  return (
    <section
      id="customItins"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image - Modified for full coverage */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/yosemite-cliff-itins.png"
          alt="Yosemite Cliff"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
          priority
        />
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 pb-2 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-5/12 text-center md:text-left">
            <div className="flex flex-col items-center justify-start gap-4 md:gap-2 mb-8">
              <Logo />
              <p className="text-stroke-orange text-2xl tracking-tighter text-center font-bold">
                Custom Yosemite Itineraries
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-7/12 text-stroke-orange p-6 md:p-8 rounded-lg ml-24">
            <div className="space-y-8">
              <div className="md:pt-24 md:ml-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mt-20">
                  Why use us?
                </h2>
                <p className="text-base md:text-lg text-white w-[450px] mb-4">
                  We understand that online search tools are becoming
                  increasingly advanced, but we hold firm that there's no
                  substitute for experience. If you don't have time for a deep
                  dive, or you'd rather get first-hand tips from pros, then
                  choose the Marengo Bros to craft your personalized Yosemite
                  itinerary.
                </p>
                <p className="text-base md:text-lg text-white w-[450px]">
                  From solo backcountry adventures to family outings in Gold
                  Rush gateway towns, we know the region and understand what
                  travelers want.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="w-full sm:pt-4 flex justify-center pb-16 sm:pb-4">
                <a
                  href="mailto:info@marengobros.com"
                  className="bg-[#77721f] hover:bg-black inline-block px-3 py-1.5 text-white font-semibold rounded-full transition duration-300 border-2 border-white mx-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomItins;
