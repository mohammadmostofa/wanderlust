"use client"
import { authClient } from "@/lib/auth-client";
import {DateField, } from "@heroui/react";
import React, { useState } from 'react';
import toast from "react-hot-toast";

const BookingCardPage = ({destination}) => { 
  // destination information
  const {destinationName , _id, country,price, duration,imageUrl,} = destination;

// user information
     const { data:session } = authClient.useSession();
      const user = session?.user ;
      // console.log(user , "user")
  
  // DepartureDate
  const [departureDate,setDepartureDate] = useState(null);
  // console.log(new Date(departureDate))

  // make a function to supply in mongodb

  const handleBookingDate = async () =>{
        const userData = {
             userId : user?.id ,
             userImage: user?.image,
             username:user?.name,
             destinationId :_id, 
             destinationName,
             imageUrl,
             country,
             price,
             departureDate: new Date(departureDate),

        }  
        
       const res = await fetch('http://localhost:5000/booking', {
  
         method: 'POST',
       
         headers:{
           'content-type': 'application/json',
         },
       
         body: JSON.stringify(userData)

}

)

// check

const data = await res.json();

// condtion

  if (data.insertedId) {
              toast.success("Your booked Successfully");
           } else {
              toast.error("Try Again !");
           }

  }


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

          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
  
  {/* Label */}
  <p className="text-xs font-medium text-gray-500 mb-2">
    Departure Date
  </p>

  {/* Date Field Wrapper */}
  <DateField onChange={setDepartureDate} name="date" className="w-full">
    
    <DateField.Group className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition">
      
      <DateField.Input className="flex-1 flex items-center gap-1">
        {(segment) => (
          <DateField.Segment
            segment={segment}
            className="text-sm text-gray-700 outline-none"
          />
        )}
      </DateField.Input>

    </DateField.Group>

  </DateField>

         </div>

        </div>

        {/* Button */}
        <button onClick={handleBookingDate} className="w-full bg-cyan-600 text-white py-3 rounded-2xl font-semibold hover:bg-cyan-700 transition-all">
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

export default BookingCardPage ;