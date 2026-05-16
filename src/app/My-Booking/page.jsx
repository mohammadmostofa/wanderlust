// server site ye get session neoyar process 
import BookingCancel from "@/components/BookingCancel";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxEyeOpen } from "react-icons/rx";

const MyBookingPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const Booking = await res.json();

  return (
    <div className="px-4 md:px-10 lg:px-20">

      <h2 className="text-2xl md:text-3xl font-bold py-8 md:py-10 text-center">
        My Bookings
      </h2>

      <div className="space-y-4 md:space-y-5">

        {Booking?.map((booking) => (
          <div
            key={booking._id}
            className="border rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between gap-4"
          >

            {/* LEFT SIDE */}
            <div className=" grid grid-cols-1 md:flex justify-start space-x-4 items-center gap-3 md:gap-4">

              {/* Image */}
              <div className="w-full sm:w-[140px] md:w-[160px] h-[180px] sm:h-[120px] md:h-[140px] overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src={booking?.imageUrl}
                  width={300}
                  height={300}
                  alt={booking?.username || "booking"}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2">

                {/* Status + Title */}
                <div className="flex flex-col gap-2">

                  <button className="w-fit bg-green-100 text-green-700 text-xs px-3 py-1 font-semibold flex items-center gap-1 rounded-full">
                    <FaRegCircleCheck />
                    Confirmed
                  </button>

                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                    {booking?.destinationName}
                  </h2>

                </div>

                {/* Date */}
                <p className="text-gray-600 text-sm md:text-base">
                  {new Date(booking?.departureDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>

                {/* Price */}
                <p className="text-base md:text-lg font-bold text-sky-500">
                  ${booking?.price}
                </p>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-row md:flex-col lg:flex-row gap-2 md:items-end md:justify-end w-full md:w-auto">

              <BookingCancel bookingId={booking._id} />

              <Button
                variant="primary"
                className="rounded-md w-full md:w-auto flex items-center justify-center gap-1"
              >
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