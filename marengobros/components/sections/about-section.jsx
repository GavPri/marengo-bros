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
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:flex-row md:justify-between md:px-12 lg:px-24 mt-32 md:mt-0">
        {/* Scott's Profile Card */}
        <div className="relative w-[275px] mb-24 md:mb-0">
          {/* Floating Profile Image */}
          <div className="absolute left-1/2 -top-24 z-10 h-56 w-40 -translate-x-1/2 transform overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
            <Image
              src="/s-marengo-profilepic.png"
              alt="Scott Marengo"
              width={160}
              height={224}
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="pt-32 rounded-3xl bg-[#7a7336] text-white shadow-xl border-2 border-white px-6 pb-6 text-center">
            <p className="text-lg leading-snug mt-[35px]">
              Scott Marengo is a writer inspired by interesting people
              navigating impactful places. He has traveled extensively from
              Myanmar to Corfu, and from New Zealand to his favorite destination
              of all -- the mountains of his native California. His work is
              featured at Yosemite.com, and has appeared in{" "}
              <em>The Literary Review, Wired, Boston Review, Tampa Review</em>{" "}
              and <em>Confrontation</em>.
            </p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="mb-8 w-full max-w-xs md:mb-0 md:mt-32 md:w-1/4 flex flex-col items-center">
          <div className="overflow-hidden rounded-3xl p-4 shadow-xl">
            <Logo />
            <div className="flex flex-col gap-8 mt-4 text-center">
              <Button className="bg-orange-500 border-2 rounded-full border-white text-xl hover:cursor-pointer">
                <a href="mailto:info@marengobros.com">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Dan's Profile Card */}
        <div className="relative w-[275px] mb-24 md:mb-0 mt-32 sm:mt-0">
          {/* Floating Profile Image */}
          <div className="absolute left-1/2 -top-24 z-10 h-56 w-40 -translate-x-1/2 transform overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
            <Image
              src="/d-marengo-profilepic.png"
              alt="Dan Marengo"
              fill
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="pt-32 rounded-3xl bg-[#7a7336] text-white shadow-xl border-2 border-white px-6 pb-6 text-center">
            <p className="text-lg leading-snug mt-[25px]">
              There's no place Dan Marengo would rather be than in the wild. A
              career travel writer and marketer, Dan approaches creative
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
