"use client"
import { FieldError, Input, Label, TextField,Select, ListBox, Button, TextArea } from '@heroui/react';
import React from 'react';


const AddDestinationPage = () => {
        const onSubmit = async (e) => {
            e.preventDefault();
          
            const formData = new FormData(e.currentTarget);
            const destination = Object.fromEntries(formData.entries());
          
            console.log(destination);
            
            // call destination api by its route and configer which mathod you created
          const res = await  fetch('http://localhost:5000/destination',{
              method:'POST',
              headers:{
                'content-type': 'application/json',
              },
              // “ send the data to the in server .”
              body:JSON.stringify(destination) ,

            })
              
            const data = await res.json()

            console.log(data,"data")


        };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-6">

  {/* MAIN CARD */}
  <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

    {/* HEADER */}
    <div className="bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900 text-center p-8">
      <h1 className="text-3xl font-bold text-white tracking-wide">
        Add Destination
      </h1>
      <p className="text-white/70 text-sm mt-2">
        Fill in the details to create a new travel destination
      </p>
    </div>

    {/* FORM WRAPPER */}
    <div className="p-10">
      <form onSubmit={onSubmit} className="space-y-10">

        {/* TOP CARD SECTION */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
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
            <TextField name="country" isRequired>
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
              <Select name="category" isRequired className="w-full">
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
            <TextField name="price" type="number" isRequired>
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
            <TextField name="duration" isRequired>
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
          <TextField name="departureDate" type="date" isRequired>
            <Label className="text-sm font-semibold text-gray-700">
              Departure Date
            </Label>
            <Input
              type="date"
              className="rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
            />
          </TextField>

          {/* Image URL */}
          <TextField name="imageUrl" isRequired>
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
          <TextField name="description" isRequired>
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
    </div>

  </div>
</div>
  );
};

export default AddDestinationPage;