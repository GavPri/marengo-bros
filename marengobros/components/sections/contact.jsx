export default function Contact() {
  return (
    <section id="contact">
      <div className="relative w-screen h-screen">
        {/* Background Image */}

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        {/* Centered Content */}
        <div className="max-w-1/2 mx-auto absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-stroke-orange">
          {/* Content Writing Section */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
            Content Writing
          </h2>
          <p className="text-lg md:text-xl  drop-shadow-lg mb-10">
            Travel content rich in voice and infused with the enduring spirit of
            the great outdoors.
          </p>

          {/* Custom Yosemite Itineraries Section */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2  drop-shadow-lg">
            Custom Yosemite Itineraries
          </h2>
          <p className="text-lg md:text-xl  drop-shadow-lg mb-6">
            Personalized itineraries from local experts whether you're traveling
            solo or with the family.
          </p>

          {/* Button */}
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md border-2 border-black flex items-center justify-center w-48"
          >
            Request Now <span className="ml-2">➤</span>
          </a>
        </div>
      </div>
    </section>
  );
}
