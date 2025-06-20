import Logo from "../ui/logo";
import { Button } from "../ui/button";
import Image from "next/image";

export default function MarengoBrothersProfile() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image - Fixed Simulation (Mobile-Safe) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="h-full w-full bg-[url('/redwood-bg.png')] bg-cover bg-center bg-no-repeat"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:flex-row md:items-center md:justify-center md:gap-24 lg:gap-32 bg-transparent">
        {/* Scott's Profile Card */}
        <div className="relative w-[240px] my-16 md:mb-0">
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
        <div className="mb-16 md:mb-0 flex flex-col items-center justify-center gap-4">
          <Logo />
          <Button className="bg-[#064b84] mx-auto border-2 rounded-full text-stroke-orange border-white text-sm hover:cursor-pointer w-3/5">
            <a href="mailto:info@marengobros.com">Contact Us</a>
          </Button>
        </div>

        {/* Dan's Profile Card */}
        <div className="relative w-[240px] my-16 md:mb-0">
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
              career travel writer and destination marketer, Dan approaches
              creative assignments with a native NorCal perspective fueled by a
              worldly (some might say otherworldly) imagination. Dan has
              explored California extensively, from the cables at Half Dome to
              the Baja coast, birdwatching in Berkeley to the boulder fields of
              Joshua Tree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
