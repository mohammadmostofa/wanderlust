import Destination_Card from "@/components/Destination_Card";
const DestinationPage =async () => {
  const res = await fetch('http://localhost:5000/destination')
  const destination = await res.json()
  
  console.log(destination)
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-cyan-700 tracking-wide py-10">
         All Destinations
       </h2>

             <div className="grid grid-cols-1  md:grid-cols-4 justify-between items-center gap-5">
                  {
                    destination?.map(destination => 
                    <Destination_Card key={destination._id} destination={destination} ></Destination_Card> )
                  }
             </div>
    </div>
  );
};

export default DestinationPage;