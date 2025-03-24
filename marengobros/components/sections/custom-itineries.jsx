import Image from "next/image";
import Logo from "../ui/logo";

const CustomItins = () => {
  return (
    <section
      id="customItins"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Hero Banner Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/yosemite-cliff.png"
          alt="Yosemite Cliff"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column - Title and Tagline */}
          <div className="w-full md:w-5/12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4 mb-8">
              <Logo />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#cf6d2e] text-stroke">
                Custom Yosemite Itineraries
              </h1>
              <p className="text-lg md:text-xl text-stroke-orange max-w-md">
                Personalized itineraries from local experts whether you're
                traveling solo or with the family.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-7/12 text-stroke-orange p-6 bg-white/40 md:p-8 rounded-lg">
            <div className="space-y-8">
              {/* Why Use Us Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Why use us?
                </h2>
                <p className="text-base md:text-lg text-white">
                  We understand that online search tools are becoming
                  increasingly advanced, but we hold firm that there's no
                  substitute for experience. If you don't have time for a deep
                  dive, or you'd rather get first-hand tips from pros, then
                  choose the Marengo Bros to craft your personalized Yosemite
                  itinerary.
                </p>
              </div>

              {/* How It Works Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  How It Works
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Step 1: The journey begins with our{" "}
                      <em>Yosemite Wish List</em>,
                    </h3>
                    <p className="text-base md:text-lg text-white">
                      a brief questionnaire to determine your "travel persona"
                      and help us better understand your travel needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Step 2: After receiving your Yosemite Wish List,
                    </h3>
                    <p className="text-base md:text-lg text-white">
                      we provide a follow up email to clarify any outstanding
                      questions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Step 3: We then create a multi-day itinerary that
                      includes:
                    </h3>
                    <p className="text-base md:text-lg text-white">
                      iconic and under-the-radar attractions; suggested
                      activities; lodging and dining options; driving and
                      essential travel tips.
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="w-full sm:pt-4 flex justify-center pb-16 sm:pb-4">
                <a
                  href="mailto:info@marengobros.com"
                  className="inline-block px-6 py-3 text-white font-semibold bg-[#cf6d2e] rounded-full hover:bg-orange-600 transition duration-300 border-2 border-white mx-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomItins;
