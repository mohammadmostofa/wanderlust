"use client";
import {Button, FieldError, Input, Label, ListBox, Modal, Surface, TextField,Select,TextArea} from "@heroui/react";
import { BiEdit, BiEnvelope } from "react-icons/bi";
import toast from "react-hot-toast";

const  EditModalPage = ({destination}) => {
  const { _id, destinationName , country, category, price, duration, departureDate,imageUrl, description} = destination;

  const onSubmit = async (e) => {
              e.preventDefault();
            
              const formData = new FormData(e.currentTarget);
              const destination = Object.fromEntries(formData.entries());
              
              // _id aita backend teke asche  remembered 
            const res = await  fetch(`http://localhost:5000/destination/${_id}`,{
                method:'PATCH',
                headers:{
                  'content-type': 'application/json',
                },
                // “ send the data to the in server .”
                body:JSON.stringify(destination) ,
  
              })
                
              const data = await res.json()
  
               if (!res.ok) {
                 toast.error("Try Again !");
                 return;
               }
             
               toast.success("Destination Edited Successfully");

             };
                         
               

  return (
    <Modal>
      <Button variant="secondary"> <BiEdit/> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEnvelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Destination</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                
                <form onSubmit={onSubmit}  className="space-y-10  ">
                
                        {/* TOP CARD SECTION */}
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                            {/* Destination Name */}
                            <div className="md:col-span-2">
                              <TextField
                              defaultValue={destinationName}
                               name="destinationName" isRequired>
                                <Label className="text-sm font-semibold text-gray-700">
                                  Destination Name
                                </Label>
                                <Input
                                  placeholder="Bali Paradise"
                                  className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                                />
                                <FieldError />
                              </TextField>
                            </div>
                
                            {/* Country */}
                            <TextField 
                            defaultValue={country}
                            name="country" isRequired>
                              <Label className="text-sm font-semibold text-gray-700">
                                Country
                              </Label>
                              <Input
                                placeholder="Indonesia"
                                className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                              />
                            </TextField>
                
                            {/* Category */}
                            <div>
                              <Select
                               defaultValue={category}
                               name="category" isRequired className="w-full">
                                <Label className="text-sm font-semibold text-gray-700">
                                  Category
                                </Label>
                
                                <Select.Trigger className="rounded-xl border border-gray-300 px-3 py-2 bg-white focus:ring-2 focus:ring-cyan-200 transition">
                                  <Select.Value placeholder="Select category" />
                                  <Select.Indicator />
                                </Select.Trigger>
                
                                <Select.Popover>
                                  <ListBox>
                                    {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map(
                                      (item) => (
                                        <ListBox.Item key={item} id={item} textValue={item}>
                                          {item}
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                      )
                                    )}
                                  </ListBox>
                                </Select.Popover>
                              </Select>
                            </div>
                
                            {/* Price */}
                            <TextField 
                            defaultValue={price}
                            name="price" type="number" isRequired>
                              <Label className="text-sm font-semibold text-gray-700">
                                Price (USD)
                              </Label>
                              <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                              />
                            </TextField>
                
                            {/* Duration */}
                            <TextField 
                            defaultValue={duration}
                            name="duration" isRequired>
                              <Label className="text-sm font-semibold text-gray-700">
                                Duration
                              </Label>
                              <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                              />
                            </TextField>
                
                          </div>
                        </div>
                
                        {/* SECOND CARD */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition space-y-6">
                
                          {/* Departure Date */}
                          <TextField 
                          defaultValue={departureDate}
                          name="departureDate" type="date" isRequired>
                            <Label className="text-sm font-semibold text-gray-700">
                              Departure Date
                            </Label>
                            <Input
                              type="date"
                              className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                            />
                          </TextField>
                
                          {/* Image URL */}
                          <TextField 
                           defaultValue={imageUrl}
                          name="imageUrl" isRequired>
                            <Label className="text-sm font-semibold text-gray-700">
                              Image URL
                            </Label>
                            <Input
                              type="url"
                              placeholder="https://example.com/bali-paradise.jpg"
                              className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
                            />
                          </TextField>
                
                          {/* Description */}
                          <TextField 
                           defaultValue={description}
                          name="description" isRequired>
                            <Label className="text-sm font-semibold text-gray-700">
                              Description
                            </Label>
                            <TextArea
                              placeholder="Describe the travel experience..."
                              className="rounded-2xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 min-h-[140px] transition"
                            />
                          </TextField>
                
                        </div>
                
                        {/* BUTTON CARD */}
                        <Button
                          type="submit"
                               className="w-full py-3 rounded-xl bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition">
                               Add Destination
                        </Button>
                
                      </form>

              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default EditModalPage;