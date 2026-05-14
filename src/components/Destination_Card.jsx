import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";

const Destination_Card = ({destination}) => {
  const { _id, destinationName , country, category, price, duration, departureDate,imageUrl, description} = destination;
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">

  {/* Image */}
  <div className="relative">
    <Image
      src={imageUrl}
      width={400}
      height={400}
      alt={destinationName}
      className="w-full h-50 object-cover"
    />
  </div>

  {/* Content */}
  <div className="p-4 space-y-3">

    {/* Location */}
    <p className="flex items-center gap-2 text-sm text-gray-500">
      <CiLocationOn className="text-red-500 text-lg" />
      <span>{country}</span>
    </p>

    {/* Title + Price */}
    <div className="flex justify-between items-start">
      <h2 className="text-lg font-bold text-gray-800 leading-tight">
        {destinationName}
      </h2>
      <h2 className="text-cyan-600 font-bold">
        ${price}
      </h2>
    </div>

    {/* Details */}
    <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
      <div>
        <p className="font-semibold  ">{departureDate}</p>
      </div>

      <div>
        <p className="font-semibold">Duration: {duration} days</p>
      </div>
    </div>

    {/* Button */}

     <Link href={`/Destination/${_id}`}>
             <button className="flex items-center gap-1 text-cyan-600 font-semibold tracking-wide
               uppercase border-b-2 border-cyan-600 hover:gap-2 hover:text-cyan-700 hover:border-cyan-700
                transition-all duration-300 mt-2">
                Book Now
              <FiArrowUpRight />
            </button>
      </Link>

  </div>
</div>
  );
};

export default Destination_Card;