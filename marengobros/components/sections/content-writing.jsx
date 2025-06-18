import Image from "next/image";

import { Viaoda_Libre } from "next/font/google";

const amar = Viaoda_Libre({
  subsets: ["latin"],
  weight: "400", // Only 400 is available for Amarante
  variable: "--font-amarante",
});


export default function ContentWriting() {
  return (
    <section
      id="contact"
      className="relative w-screen h-screen overflow-y-hidden"
    >
      {/* Container to hold background images */}
      <div className="relative w-full h-full">
        {/* Background Image for desktop */}
        <Image
          src="/starry-night-content-writing.png"
          alt="animated redwood trees"
          quality={100}
          fill
          priority
          className="object-cover hidden md:block"
        />

        {/* Background Image for mobile */}
        <Image
          src="/content-writing-mobile.png"
          alt="Redwood Forest Background"
          fill
          priority
          className="object-cover block md:hidden brightness-90"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-transparent bg-opacity-60 z-10"></div>

        {/* Content container */}
        <div className="absolute inset-0 flex flex-col items-start sm:items-center justify-start md:justify-center px-4 z-20 min-h-screen mt-12 sm:mt-0">
          <div className="max-w-2xl w-full px-6 py-10 rounded-2xl text-center relative">
            <div className=" flex items-center justify-center p-8">
              <h2
                // style={{ fontWeight: 900 }}
                className={`${amar.className} text-4xl md:text-5xl mb-4 text-[#d2691e] text-stroke-white drop-shadow-xl uppercase tracking-wide`}
              >
                Content Writing
              </h2>
            </div>

            <p className="text-lg md:text-xl mb-8 text-stroke-orange md:text-gray-50 drop-shadow-lg font-bold">
              The Marengo Bros. believe in the synergy between wide open spaces
              and nuanced storytelling. As native Californians with decades of
              experience in travel marketing, their writing reflects a lifetime
              of adventure and deep love for the Golden State.
            </p>

            <a
              href="mailto:info@marengobros.com"
              className={`bg-[#77721f] ${amar.className} hover:bg-black border-2 border-white rounded-full text-stroke-orange cursor-pointer font-bold py-0.75 md:py-1.5 px-1.5 md:px-3 text-lg shadow-md flex items-center justify-center w-fit mx-auto transition-all duration-200`}
            >
              Contact Us<span className="ml-2">➤</span>
            </a>

            <p className="text-white mb-8 font-bold text-lg md:text-2xl pt-8 md:pt-16 ">
              Check out <br />
              <span className="text-stroke-orange tracking-wide text-xl md:text-4xl">
                <a
                  href="https://www.yosemite.com/yosemite-mariposa-stories/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${amar.className} my-2 inline-block`}
                >
                  Marengo Bros. <br/>Stories
                </a>
              </span>{" "}
              <br />
              on{" "}
              <a
                href="https://www.yosemite.com/yosemite-mariposa-stories/"
                target="_blank"
                rel="noopener noreferrer"
                className={` my-2 inline-block cursor-pointer`}
              >
                Yosemite.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
