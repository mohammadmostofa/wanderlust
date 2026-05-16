"use client";
import {AlertDialog, Button} from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";
import toast from "react-hot-toast";

const BookingCancel = ({bookingId}) => {
  // console.log(bookingId, 'blli')

  const handleCancelBooking = async () =>{
    // delete api call with dianamic 
    // aikane ekta bisoi holo
    // props id + api id same hote hobe kenona  delete er ketra
    //fronted id + backed id name same !!!!  remember to cancel of delete 
      const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
        method:'DELETE',
        headers:{
             
          'content-type':'application/json'  

        }
      }) 

      const data = await res.json()
      // console.log(data,'ddddddd')

         if (!data.success) {
                   toast.error("Try Again !");
                   
                  } else {
                   toast.success("Successfully Cancel !");
                   window.location.reload() ;
                   
                 }
              
  }  
  return (
    <div>  
    
            <AlertDialog>
                <Button variant="outline" className="rounded-none w-full flex justify-center items-center md:w-auto">
            <TrashBin/>
            Cancel
          </Button>      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

    </div>
  );
};

export default BookingCancel;