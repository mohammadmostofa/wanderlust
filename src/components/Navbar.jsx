"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  //Get Session to access nevbar
    const { data:session } = authClient.useSession();
    // seesion er bitor amra user er information pabo
    // console.log(session, "session")

    // ekon ami user ke condition ye rakbo || logout or login btn show
    const user = session?.user ;
    console.log(user , "user") 

    // signOut function 
    const handleSignOut =async() =>{
        await authClient.signOut()
    }


  return (
    <nav className="bg-white items-center shadow-md w-full">

      {/* DESKTOP NAVBAR */}
      <div className="max-w-full mx-auto px-4 py-4">

        <div className="grid grid-cols-2 md:grid-cols-3 items-center">

          {/* LEFT MENU */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Destination">Destination</Link>
            </li>

            <li>
              <Link href="/My-Booking">My Booking</Link>
            </li>

            <li>
              <Link href="/Add-Destination">Add Destination</Link>
            </li>
          </ul>

          {/* LOGO */}
          <div className="flex md:justify-center">
            <Image
              src={"/assets/Wanderlast.png"}
              width={140}
              height={140}
              alt="logo"
            />
          </div>

          {/* RIGHT MENU */}
          <ul className="hidden md:flex justify-end items-center gap-6 font-medium">
            <li>
              <Link href="/Profile">Profile</Link>
            </li>
              {/* condition setup */}

              {
                   user ? <>
                             <li>
                                  
                                  <Avatar>
                                  <Avatar.Image alt="John Doe" src={user?.image} width={100} height={100} />
                                  <Avatar.Fallback> {user?.name.charAt(0)} </Avatar.Fallback>
                                </Avatar>

                             </li>   
                                

                                <li>
                                    <Button onClick={handleSignOut} variant="danger">Login Out</Button>
                                </li>
                              





            
                         </> :  
                       
                       <>
                             <li><Link href="/Login">Login</Link></li> 

                              <li><Link href="/SignUp">Sign Up</Link></li>
                       </>

                     

              }
            
          </ul>

          {/* MOBILE BUTTON */}
          <div className="flex justify-end md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-5">
          <ul className="flex flex-col gap-4 font-medium">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/Destination">Destination</Link>
            </li>

            <li>
              <Link href="/My-Booking">My Booking</Link>
            </li>

            <li>
              <Link href="/Admin">Admin</Link>
            </li>

            <li>
              <Link href="/Profile">Profile</Link>
            </li>

            <li>
              <Link href="/Login">Login</Link>
            </li>

            <li>
              <Link href="/SignUp">Sign Up</Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;