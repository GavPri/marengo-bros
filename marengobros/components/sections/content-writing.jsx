import Image from "next/image";

export default function ContentWriting() {
  return (
    <section id="contact" className="relative">
      <div className="relative w-screen h-screen">
        {/* Background Image */}
        <Image
          src="/contact-page-bg.png"
          alt="animated redwood trees"
          quality={100}
          fill
          priority
          className="object-cover w-full h-full hidden md:block"
        />

        <Image
          src="/content-writing-mobile.png"
          alt="Redwood Forest Background"
          layout="fill"
          objectFit="cover"
          className="brightness-90 block md:hidden"
          priority
        />

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 "></div>

        {/* Centered Content */}
        <div className="min-h-screen flex flex-col items-start mt-12 sm:items-center justify-center px-4">
          {/* Glass Panel */}
          <div className="max-w-2xl w-full px-6 py-10 rounded-2xl shadow-xl text-stroke-orange text-center z-10 relative">
            {/* Content Writing Section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-xl text-stroke-orange ">
              Content Writing
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-lg text-center sm:max-w-1/2 mx-auto text-stroke-orange ">
              Travel content rich in voice and infused with the enduring spirit
              of the great outdoors.
            </p>

            {/* Custom Yosemite Itineraries Section */}
            <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-lg font-bold">
              The Marengo Bros believe in the synergy between wide open spaces
              and nuanced storytelling. As native Californians with decades of
              experience in travel marketing, their writing is energized by a
              lifetime of adventure and their deep love for the Golden State.
            </p>

            <p className="text-white mb-8 font-bold text-xl">
              Check out{" "}
              <span className="text-stroke-orange">
                <a href="https://www.yosemite.com/author/danm/" target="_blank">
                  MarengoBros Stories
                </a>
              </span>{" "}
              on Yosemite.com
            </p>

            {/* Button */}
            <a
              href="mailto:info@marengobros.com"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 text-lg shadow-md border-2 border-black flex items-center justify-center w-48 mx-auto transition-all duration-200 z-10 rounded-full"
            >
              Request Now <span className="ml-2">➤</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
