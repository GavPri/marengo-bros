import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative ">
      <div className="relative w-screen h-screen ">
        {/* Background Image */}
        <Image
          src="/contact-page-bg.png"
          alt="animated redwood trees"
          quality={100}
          fill
          priority
          className="object-cover w-full h-full"
        />

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0  bg-opacity-50"></div>

        {/* Centered Content */}
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
          {/* Glass Panel */}
          <div className="max-w-2xl w-full px-6 py-10 text-stroke-orange backdrop-blur-md bg-black/30 rounded-2xl shadow-xl border border-white/10 text-center z-10 relative">
            {/* Content Writing Section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg text-white">
              Content Writing
            </h2>
            <p className="text-lg md:text-xl drop-shadow-lg mb-10 text-gray-200">
              Travel content rich in voice and infused with the enduring spirit
              of the great outdoors.
            </p>

            {/* Custom Yosemite Itineraries Section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg text-white">
              Custom Yosemite Itineraries
            </h2>
            <p className="text-lg md:text-xl drop-shadow-lg mb-6 text-gray-200">
              Personalized itineraries from local experts whether you're
              traveling solo or with the family.
            </p>

            {/* Button */}
            <a
              href="mailto:info@marengobros.com"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md border-2 border-black flex items-center justify-center w-48 mx-auto transition-all duration-200 z-10"
            >
              Request Now <span className="ml-2">➤</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
