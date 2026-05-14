import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FiArrowUpRight } from 'react-icons/fi';

const DestinationDetailsPage = async ({params}) => {
  const {id} = await params; //এই id দিয়ে database এ query করে matching data আনবো
// তারপর সেই data দিয়ে details page render করবো

const res = await fetch(`http://localhost:5000/destination/${id}`)
const destination = await res.json();

  const { destinationName , country, category, price, duration, departureDate,imageUrl, description} = destination;


  return (
             


    <div>
            

<div className="w-full rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">

  {/* Full Banner Image */}
  <div className="relative overflow-hidden">
    <Image
      src={imageUrl}
      width={1400}
      height={900}
      alt={destinationName}
      className="
        w-full
        h-[550px]
        object-cover
        hover:scale-105
        transition-transform
        duration-700
      "
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    {/* Floating Title */}
    <div className="absolute bottom-8 left-8 text-white">
      <p className="flex items-center gap-2 text-sm mb-2">
        <CiLocationOn className="text-red-400 text-lg" />
        {country}
      </p>

      <h1 className="text-4xl font-bold">
        {destinationName}
      </h1>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-2 space-y-6">

      {/* Price + Duration */}
      <div className="flex flex-wrap gap-4">

        <div className="bg-cyan-50 px-5 py-4 rounded-2xl border border-cyan-100">
          <p className="text-sm text-gray-500">Tour Price</p>
          <h2 className="text-2xl font-bold text-cyan-600">
            ${price}
          </h2>
        </div>

        <div className="bg-orange-50 px-5 py-4 rounded-2xl border border-orange-100">
          <p className="text-sm text-gray-500">Duration</p>
          <h2 className="text-2xl font-bold text-orange-500">
            {duration} Days
          </h2>
        </div>

        <div className="bg-purple-50 px-5 py-4 rounded-2xl border border-purple-100">
          <p className="text-sm text-gray-500">Departure</p>
          <h2 className="text-lg font-bold text-purple-600">
            {departureDate}
          </h2>
        </div>

      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Tour Overview
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="p-4 rounded-2xl bg-gray-50 border">
          ✅ Free cancellation up to 7 days
        </div>

        <div className="p-4 rounded-2xl bg-gray-50 border">
          ✅ Travel insurance included
        </div>

        <div className="p-4 rounded-2xl bg-gray-50 border">
          ✅ 24/7 customer support
        </div>

        <div className="p-4 rounded-2xl bg-gray-50 border">
          ✅ Premium hotel & transport
        </div>

      </div>
    </div>

    {/* RIGHT BOOKING CARD */}
    <div>

      <div className="
        sticky
        top-24
        bg-gradient-to-b
        from-cyan-500
        to-blue-600
        text-white
        rounded-3xl
        p-6
        shadow-2xl
      ">

        <p className="uppercase tracking-widest text-sm text-white/80">
          Starting From
        </p>

        <h2 className="text-5xl font-black mt-2">
          ${price}
        </h2>

        <p className="text-white/80 mt-1">
          Per Person
        </p>

        <div className="mt-6 space-y-4">

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md">
            <p className="text-sm text-white/70">
              Departure Date
            </p>

            <h3 className="font-bold text-lg">
              {departureDate}
            </h3>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md">
            <p className="text-sm text-white/70">
              Duration
            </p>

            <h3 className="font-bold text-lg">
              {duration} Days Tour
            </h3>
          </div>

        </div>

        {/* Button */}
        <button
          className="
            mt-8
            w-full
            bg-white
            text-cyan-600
            py-4
            rounded-2xl
            font-bold
            text-lg
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
            flex
            items-center
            justify-center
            gap-2
          "
        >
          Book Now
          <FiArrowUpRight />
        </button>

        <p className="text-center text-sm text-white/70 mt-5">
          Secure booking & instant confirmation
        </p>

      </div>

    </div>

  </div>
</div>




    </div>
  );
};

export default DestinationDetailsPage;