import React from 'react';

const BookingCardPage = ({destination}) => { 

     const { destinationName , country, category, price, duration, departureDate,imageUrl, description} = destination;


  return (
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
  );
};

export default BookingCardPage;