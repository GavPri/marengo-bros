import Image from "next/image";

export default function ContentWriting() {
  return (
    <section id="contact" className="relative">
      <div className="relative w-screen h-screen">
        {/* Background Image */}
        <Image
          src="/starry-night-content-writing.png"
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
        <div className="absolute inset-0 bg-black -z-50"></div>

        {/* Centered Content */}
        <div className="min-h-screen flex flex-col items-start mt-12 sm:items-center justify-center px-4">
          {/* Glass Panel */}
          <div className="max-w-2xl w-full px-6 py-10 rounded-2xl text-center z-10 relative">
            {/* Content Writing Section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-xl text-stroke-orange ">
              Content Writing
            </h2>

            {/* Custom Yosemite Itineraries Section */}
            <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-lg font-bold">
              The Marengo Bros believe in the synergy between wide open spaces
              and nuanced storytelling. As native Californians with decades of
              experience in travel marketing, their writing relfects a lifetime
              of adventure and their deep love for the Golden State.
            </p>
            {/* Button */}
            <a
              href="mailto:info@marengobros.com"
              className="bg-[#77721f] hover:bg-black border-2 border-white rounded-full text-stroke-orange over:cursor-pointer text-stroke-orange font-bold py-3 px-6 text-lg shadow-md flex items-center justify-center w-48 mx-auto transition-all duration-200 z-10 "
            >
              Contact Us<span className="ml-2">➤</span>
            </a>
            <p className="text-white mb-8 font-bold text-2xl pt-16">
              Check out <br></br>
              <span className="text-stroke-orange tracking-wide text-4xl">
                <a
                  href="https://www.yosemite.com/yosemite-mariposa-stories/"
                  target="_blank"
                  className="my-6 inline-block"
                >
                  MarengoBros Stories
                </a>
              </span>{" "}
              <br />
              on Yosemite.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
