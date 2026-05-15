"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

export function DeleteDestination({destination}) {
  const {_id, destinationName } = destination;
  const handleDelete = async()=>{

      const res = await  fetch(`http://localhost:5000/destination/${_id}`,{

                    method:'DELETE',
                  })
                    
                  const data = await res.json()
      
                 if (!data.success) {
                   toast.error("Try Again !");
                   
                  } else {
                   toast.success("Successfully Delete !");
                 }
              
               redirect('/Destination')
  }

  return (
    <AlertDialog>
   <Button variant='secondary' className='flex justify-center items-center'><BiTrash/> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong> {destinationName} </strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}