"use client";

import {
  Button,
  Card,
  Input,
} from "@heroui/react";

import {
  Form,
  TextField,
  Label,
  FieldError,
} from "react-aria-components";

import { FaRegUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border">

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-gray-500 mt-1">
            Start your adventure with Wanderlust
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5">

          {/* Name */}
          <TextField name="name" isRequired className="w-full">
            <Label className="text-sm font-medium mb-1 block">
              Full Name
            </Label>

            <div className="relative w-full">
              <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <Input
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Email */}
          <TextField name="email" type="email" isRequired className="w-full">
            <Label className="text-sm font-medium mb-1 block">
              Email Address
            </Label>

            <div className="relative w-full">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <Input
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="john@example.com"
              />
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Password */}
          <TextField name="password" type="password" isRequired className="w-full">
            <Label className="text-sm font-medium mb-1 block">
              Password
            </Label>

            <div className="relative w-full">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <Input
                className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
              />
            </div>

            <FieldError className="text-red-500 text-xs mt-1" />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg mt-2 font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            Submit →
          </Button>

        </Form>
      </Card>
    </div>
  );
}