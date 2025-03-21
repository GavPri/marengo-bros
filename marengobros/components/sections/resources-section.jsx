import Image from "next/image";

const resources = [
  { title: "Half Dome", src: "half-dome", position: "top-left" },
  { title: "Tenaya Lake", src: "tenaya-lake", position: "top-right" },
  {
    title: "Mariposa Grove of Giant Sequoias",
    src: "mariposa",
    position: "bottom-left",
  },
  { title: "Yosemite Falls", src: "yosemite-falls", position: "bottom-right" },
];

const links = [
  { text: "Yosemite National Park Website", url: "#" },
  { text: "Yosemite Mariposa County Tourism", url: "#" },
  { text: "Yosemite Trailheads Map", url: "#" },
  { text: "Marengo Bros Yosemite Stories", url: "#" },
  { text: "Yosemite Tours", url: "#" },
  { text: "The John Muir Trail", url: "#" },
];

const Resources = () => {
  return (
    <section id="resources" className="relative bg-black text-white py-10 px-5 min-h-screen flex flex-col items-center justify-start">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        YOSEMITE RESOURCES
      </h2>

      {/* Links Section */}
      <ul className="text-lg text-center space-y-2 mb-8">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Image Positions for Larger Screens */}
      <div className="hidden md:block">
        {resources.map((item, index) => (
          <div
            key={index}
            className={`
              absolute w-40 h-40 md:w-48 md:h-48
              ${item.position === "top-left" && "top-15 left-15"}
              ${item.position === "top-right" && "top-15 right-15"}
              ${item.position === "bottom-left" && "bottom-15 left-15"}
              ${item.position === "bottom-right" && "bottom-15 right-15"}
            `}
          >
            <Image
              src={`/${item.src}.png`} // Make sure images exist in /public/images/
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Grid Layout for Small Screens */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {resources.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-36 h-36">
              <Image
                src={`/${item.src}.png`}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-2 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
