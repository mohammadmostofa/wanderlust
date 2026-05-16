"use client";
import { useState } from "react";
import { Button, Card, Input } from "@heroui/react";
import { Form, TextField, Label, FieldError, Separator } from "react-aria-components";
import {  FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  
  // onsubmit function
   const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries())

    // connect with authclient (mongodb connector)
const { data, error } = await authClient.signIn.email({
            email:user.email,
            password:user.password,
});    

    console.log(data,error,"data and error")

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
          <h2 className="text-3xl font-bold">Login Your Account</h2>
          <p className="text-gray-500 mt-1">
            Start your adventure with Wanderlust
          </p>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

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
          <Button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Login →
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