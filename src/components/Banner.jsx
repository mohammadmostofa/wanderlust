import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div
      className="
        bg-[url('/assets/banner.png')]
        bg-cover
        bg-center
        text-white
        min-h-screen
        flex
        flex-col
        justify-between
      "
    >
      {/* HERO CONTENT */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-5">
        
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-base md:text-2xl mt-5 max-w-4xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-8">
          
          <button
  className="
    uppercase
    bg-cyan-500
    hover:bg-cyan-600
    hover:scale-105
    transition-all
    duration-300
    px-6
    py-3
    cursor-pointer
    rounded-md
    shadow-lg
    hover:shadow-cyan-500/40
  "
>
  Explore Now
</button>

<button
  className="
    uppercase
    px-6
    py-3
    bg-white/20
    backdrop-blur-md
    border
    border-white/20
    hover:bg-white/10
    hover:scale-105
    transition-all
    duration-300
    cursor-pointer
    rounded-md
    shadow-lg
    hover:shadow-cyan-500/30
  "
>
  View Destination
</button>

        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="w-full flex justify-center px-5 pb-8">
        
        <div
          className="
            w-full
            bg-white/10
            backdrop-blur-md
            rounded-2xl
            p-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          
          {/* LOCATION */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs text-gray-200">
              Address, City or Zip
            </p>
          </div>

          <Separator
            className="hidden md:block h-10"
            orientation="vertical"
          />

          {/* DATE */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">Date/Duration</h3>
            <p className="text-xs text-gray-200">
              Anytime / 3 Days
            </p>
          </div>

          <Separator
            className="hidden md:block h-10"
            orientation="vertical"
          />

          {/* BUDGET */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs text-gray-200">
              $0 - $3000
            </p>
          </div>

          <Separator
            className="hidden md:block h-10"
            orientation="vertical"
          />

          {/* PEOPLE */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs text-gray-200">
              5 - 10
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="
              bg-cyan-500
              hover:bg-cyan-600
              transition
              px-6
              py-3
              rounded-md
              font-semibold
              cursor-pointer
            "
          >
            Search
          </button>

        </div>
      </div>
    </div>
  );
};

export default Banner;