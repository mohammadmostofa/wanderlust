// server site ata

import BookingCancel from "@/components/BookingCancel";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxEyeOpen } from "react-icons/rx";

const MyBookingPage = async () => {
// get session 
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

const user = session?.user ;
//catch 
 const res = await fetch(`http://localhost:5000/booking/${user?.id}`)  
 const Booking = await res.json()
//  console.log(Booking,"Booking")
    
  return (
    <div>
  <h2 className="text-3xl font-bold py-10 text-center">
    My Bookings
  </h2>

  <div className="space-y-5">
    {Booking.map((booking) => (
      <div
        key={booking._id}
        className="border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col md:flex-row justify-between gap-4"
      >
        {/* LEFT SIDE (Image + Info) */}
        <div className="flex gap-4">
          {/* Image */}
          <div className="w-[120px] md:w-[160px] h-[120px] md:h-[140px] overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src={booking?.imageUrl}
              width={300}
              height={300}
              alt={booking.username}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <button className=" w-fit bg-green-100 text-green-700 text-xs px-1 font-semibold flex items-center justify-center gap-1 px-3 py-1 rounded-full">
               <FaRegCircleCheck />
               Confirmed
             </button>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {booking?.destinationName}
            </h2>
            </div>

            <p className="text-gray-600 text-md">
              {new Date(booking?.departureDate).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
  
              <p className="text-lg font-bold text-sky-400">
                ${booking?.price}
              </p>

          </div>
        </div>

        {/* RIGHT SIDE (Buttons bottom aligned) */}
        <div className="flex justify-end md:justify-end gap-2 md:items-end mt-2 md:mt-0">
         <BookingCancel bookingId= {booking._id} ></BookingCancel>

          <Button variant="primary" className="rounded-none w-full flex justify-center items-center md:w-auto">
            <RxEyeOpen />
            View
          </Button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default MyBookingPage;