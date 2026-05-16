"use client";
import { useState } from "react";
import { Button, Card, Input, Separator, } from "@heroui/react";
import { Form, TextField, Label, FieldError } from "react-aria-components";
import { FaRegUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {
  const [showPass, setShowPass] = useState(false);
  
  // onsubmit function
   const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries())

    // connect with authclient (mongodb connector)
const { data, error } = await authClient.signUp.email({
            name:user.name,
            image:user.image,
            email:user.email,
            password:user.password,
});

   if(error){
      toast.error(error.message || "Try Again");
   } else{
     toast.success("SignUp Successfully");

    redirect("/");
   }

  
};
   
  //  google sign in 
   const handleGoogleSignIn = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
  });

  if (error) {
    toast.error(error.message || "Try Again");
    return;
  }

  toast.success("Sign in Successfully");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-gray-500 mt-1">
            Start your adventure with Wanderlust
          </p>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

          {/* NAME */}
          <TextField name="name" isRequired>
            <Label className="text-sm font-medium mb-1 block">
              Full Name
            </Label>

            <div className="relative">
              <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

              <Input
                placeholder="Enter your name"
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* IMAGE URL */}
          <TextField name="image" isRequired>
            <Label className="text-sm font-medium mb-1 block">
              Profile Image URL
            </Label>

            <div className="relative">
              <AiOutlinePicture className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

              <Input
                placeholder="https://example.com/image.jpg"
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          

          {/* EMAIL */}
          <TextField
            name="email"
            type="email"
            isRequired
            validate={(value) => {
              if (!value) return "Email is required";
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return "Invalid email format";
              }
            }}
          >
            <Label className="text-sm font-medium mb-1 block">
              Email Address
            </Label>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

              <Input
                placeholder="john@example.com"
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* PASSWORD */}
          <TextField name="password" isRequired>
            <Label className="text-sm font-medium mb-1 block">
              Password
            </Label>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

              <Input
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPass ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* BUTTON */}
          <Button variant="primary"
            type="submit"
            className="w-full   py-3 rounded-lg font-medium  "
          >
            Submit →
          </Button>

        </Form>
            
         <div className="flex items-center gap-2">
         <Separator className="flex-1" />
         <span className="text-sm text-gray-500 whitespace-nowrap">
           or sign in with
         </span>
         <Separator className="flex-1" />
        </div>
             
             <Button onClick={handleGoogleSignIn} variant="outline" className= 'w-full rounded-lg '> <GrGoogle/> Sign In With Google</Button>

      </Card>
    </div>
  );
}