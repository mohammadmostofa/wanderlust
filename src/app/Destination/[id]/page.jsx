import EditModalPage from '@/components/Edit_Modal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

const DestinationDetailsPage = async ({params}) => {
  const {id} = await params; //এই id দিয়ে database এ query করে matching data আনবো
// তারপর সেই data দিয়ে details page render করবো

const res = await fetch(`http://localhost:5000/destination/${id}`)
const destination = await res.json();

  const { destinationName , country, category, price, duration, departureDate,imageUrl, description} = destination;


  return (
             
       <div className='pt-5'>   

        <div className='flex justify-end items-center space-x-4 py-3'>
           <EditModalPage destination={destination} ></EditModalPage>
           <Button variant='danger' className='flex justify-center items-center'><BiTrash/> Delete</Button>
        </div>

    <div className="w-full rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">

  {/* ================= HERO IMAGE ================= */}
  <div className="relative overflow-hidden">
    <Image
      src={imageUrl}
      width={1400}
      height={900}
      alt={destinationName}
      className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

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

  {/* ================= BOTTOM SECTION ================= */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">

    {/* ================= LEFT SIDE ================= */}
    <div className="lg:col-span-2 space-y-8">

      {/* Price + Duration + Departure */}
      <div className="flex flex-wrap gap-4">

        <div className="bg-gray-50 px-5 py-4 rounded-2xl border">
          <p className="text-sm text-gray-500">Category</p>
          <h2 className="text-2xl font-bold text-cyan-600">
            {category}
          </h2>
        </div>
        <div className="bg-gray-50 px-5 py-4 rounded-2xl border">
          <p className="text-sm text-gray-500">Tour Price</p>
          <h2 className="text-2xl font-bold text-cyan-600">
            ${price}
          </h2>
        </div>

        <div className="bg-gray-50 px-5 py-4 rounded-2xl border">
          <p className="text-sm text-gray-500">Duration</p>
          <h2 className="text-2xl font-bold text-gray-800">
            {duration} Days
          </h2>
        </div>

        <div className="bg-gray-50 px-5 py-4 rounded-2xl border">
          <p className="text-sm text-gray-500">Departure</p>
          <h2 className="text-lg font-bold text-gray-800">
            {departureDate}
          </h2>
        </div>

      </div>

      {/* Title + Rating */}
      <div className="space-y-3">

        <h1 className="text-3xl font-bold text-gray-800">
          {destinationName}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div>⭐⭐⭐⭐☆ <span className="text-gray-500">(4.5)</span></div>
          <div className="flex items-center gap-2">
            📅 <span>Available from {departureDate}</span>
          </div>
        </div>

      </div>

      {/* Description */}
      <div className="bg-white border rounded-3xl p-6 space-y-3">

        <h2 className="text-xl font-bold text-gray-800">
          Tour Overview
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        <div className="flex items-center gap-2 bg-gray-50 border rounded-xl p-3">
          <span className="text-green-500">✔</span>
          <p className="text-sm text-gray-700">Free cancellation up to 7 days</p>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 border rounded-xl p-3">
          <span className="text-green-500">✔</span>
          <p className="text-sm text-gray-700">Travel insurance included</p>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 border rounded-xl p-3">
          <span className="text-green-500">✔</span>
          <p className="text-sm text-gray-700">24/7 customer support</p>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 border rounded-xl p-3">
          <span className="text-green-500">✔</span>
          <p className="text-sm text-gray-700">Instant booking confirmation</p>
        </div>

      </div>

    </div>

    {/* ================= RIGHT SIDE ================= */}
    <div>

      <div className="sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-md p-6 space-y-6">

        {/* Title */}
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            Booking Info
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            {destinationName}
          </h2>
        </div>

        {/* Price */}
        <div className="bg-gray-50 border rounded-2xl p-5">
          <p className="text-sm text-gray-500">Price</p>
          <h2 className="text-4xl font-bold text-cyan-600">
            ${price}
          </h2>
          <p className="text-sm text-gray-500">Per Person</p>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-3">

          <div className="bg-gray-50 border rounded-xl p-3">
            <p className="text-xs text-gray-500">Duration</p>
            <h3 className="font-semibold text-gray-800">
              {duration} Days
            </h3>
          </div>

          <div className="bg-gray-50 border rounded-xl p-3">
            <p className="text-xs text-gray-500">Departure</p>
            <h3 className="font-semibold text-gray-800">
              {departureDate}
            </h3>
          </div>

        </div>

        {/* Button */}
        <button className="w-full bg-cyan-600 text-white py-3 rounded-2xl font-semibold hover:bg-cyan-700 transition-all">
          Book Now
        </button>

        {/* Highlights */}
        <div className="space-y-2 pt-2 border-t">

          <p className="text-sm font-semibold text-gray-700">
            Included:
          </p>

          <div className="space-y-2 text-sm text-gray-600">
            <p>✔ Free cancellation up to 7 days</p>
            <p>✔ Travel insurance included</p>
            <p>✔ 24/7 customer support</p>
            <p>✔ Instant booking confirmation</p>
          </div>

        </div>

      </div>

    </div>

  </div>
    </div>
      
      </div>

  );
};

export default DestinationDetailsPage;