import Image from "next/image";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

export default function MarengoBrothersProfile() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image - Redwood Forest */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/redwood-bg.png"
          alt="Redwood Forest Background"
          layout="fill"
          objectFit="cover"
          className="brightness-90"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:flex-row md:items-center md:justify-center md:gap-24 lg:gap-32">
        {/* Scott's Profile Card */}
        <div className="relative w-[240px] mb-16 md:mb-0">
          {/* Floating Profile Image */}
          <div className="absolute left-1/2 -top-20 z-10 h-52 w-36 -translate-x-1/2 transform overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
            <Image
              src="/s-marengo-profilepic.png"
              alt="Scott Marengo"
              fill
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="pt-28 rounded-3xl bg-[#7a7336] text-white shadow-xl border-2 border-white px-4 pb-6 text-center">
            <p className="text-base leading-snug mt-6">
              Scott Marengo is a writer inspired by interesting people
              navigating impactful places. He has traveled extensively from
              Myanmar to Corfu, and from New Zealand to his favorite destination
              of all — the mountains of his native California. His work is
              featured on Yosemite.com, and has appeared in{" "}
              <em>The Literary Review, Wired, Boston Review, Tampa Review</em>{" "}
              and <em>Confrontation</em>.
            </p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="mb-12 md:mb-0 flex flex-col items-center">
          <div className="p-4 shadow-xl rounded-3xl">
            <Logo />
            <div className="flex flex-col gap-6 mt-4 text-center">
              <Button className="bg-[#77721f] border-2 rounded-full text-stroke-orange border-white text-xl hover:cursor-pointer">
                <a href="mailto:info@marengobros.com">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Dan's Profile Card */}
        <div className="relative w-[240px] mb-16 md:mb-0">
          {/* Floating Profile Image */}
          <div className="absolute left-1/2 -top-20 z-10 h-52 w-36 -translate-x-1/2 transform overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
            <Image
              src="/d-marengo-profilepic.png"
              alt="Dan Marengo"
              fill
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="pt-28 rounded-3xl bg-[#7a7336] text-white shadow-xl border-2 border-white px-4 pb-6 text-center">
            <p className="text-base leading-snug mt-6">
              There's no place Dan Marengo would rather be than in the wild. A
              career travel writer and destination marketer, Dan approaches creative
              assignments with a native NorCal perspective fueled by a worldly
              (some might say otherworldly) imagination. Dan has explored
              California extensively, from the cables at Half Dome to the Baja
              coast, birdwatching in Berkeley to the boulder fields of Joshua
              Tree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
