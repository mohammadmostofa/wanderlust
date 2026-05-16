// server site ata

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingPage = async () => {
// get session 
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

const user = session?.user ;
//catch 
 const res = await fetch(`http://localhost:5000/booking/${user?.id}`)  
 const data = await res.json()
 console.log(data,"data")
    
  return (
    <div>
            <h2 className='text-3xl font-bold py-10  text-center '>My Bookings</h2> 

    </div>
  );
};

export default MyBookingPage;