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
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:flex-row md:items-start md:justify-between md:px-12 lg:px-24">
        {/* Scott's Profile Card */}
        <div className="mb-8 w-full max-w-sm md:mb-0 md:w-1/3 ">
          <div className="overflow-hidden rounded-3xl bg-[#7a7336] text-white shadow-xl pt-4 border-white border-2">
            {/* Profile Image with White Border */}
            <div className="mx-auto -mt-1 w-[90%] overflow-hidden rounded-3xl border-4">
              <Image
                src="/scott-about.png"
                alt="Scott Marengo"
                width={300}
                height={300}
                className="h-auto w-full border-2 border-white"
              />
            </div>

            {/* Profile Text */}
            <div className="p-6 text-center">
              <p className="text-lg leading-snug">
                Scott Marengo is a writer inspired by interesting people
                navigating impactful places. He has traveled extensively from
                Myanmar to Corfu, and from New Zealand to his favorite
                destination of all -- the mountains of his native California.
                His work is featured at Yosemite.com, and has appeared in{" "}
                <em>The Literary Review, Wired, Boston Review, Tampa Review</em>{" "}
                and <em>Confrontation</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="mb-8 w-full max-w-xs md:mb-0 md:mt-32 md:w-1/4 flex flex-col items-center">
          <div className="overflow-hidden rounded-3xl p-4 shadow-xl">
            <Logo />
            <div className="flex flex-col gap-8 mt-2 text-center">
              <Button
                className={
                  "bg-orange-500 border-2 rounded-full border-white text-xl hover:cursor-pointer"
                }
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Dan's Profile Card */}
        <div className="w-full max-w-sm md:w-1/3">
          <div className="overflow-hidden rounded-3xl bg-[#7a7336] text-white shadow-xl pt-4 border-2 border-white">
            {/* Profile Image with White Border */}
            <div className="mx-auto -mt-1 w-[90%] overflow-hidden rounded-3xl border-4   bg-white">
              <Image
                src="/dan-about.png"
                alt="Dan Marengo"
                width={300}
                height={300}
                className="h-auto w-full border-2 border-white"
              />
            </div>

            {/* Profile Text */}
            <div className="p-6 text-center">
              <p className="text-lg leading-snug">
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
      </div>
    </section>
  );
}
