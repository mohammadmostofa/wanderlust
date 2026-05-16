"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white shadow-md w-full relative">

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT MENU (desktop) */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Destination">Destination</Link></li>
            <li><Link href="/My-Booking">My Booking</Link></li>
            <li><Link href="/Add-Destination">Add Destination</Link></li>
          </ul>

          {/* LOGO */}
          <div className="flex justify-center">
            <Image
              src={"/assets/Wanderlast.png"}
              width={140}
              height={140}
              alt="logo"
            />
          </div>

          {/* RIGHT MENU (desktop) */}
          <div className="hidden md:flex items-center gap-6 font-medium">

            <Link href="/Profile">Profile</Link>

            {user ? (
              <div className="flex items-center gap-3">

                {/* Avatar FIX */}
                <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-sm font-semibold">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  ) : (
                    user?.name?.charAt(0)
                  )}
                </div>

                <Button
                  onClick={handleSignOut}
                  color="danger"
                  size="sm"
                >
                  Logout
                </Button>

              </div>
            ) : (
              <div className="flex gap-4">
                <Link href="/Login">Login</Link>
                <Link href="/SignUp">Sign Up</Link>
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-5 border-t">

          <ul className="flex flex-col gap-4 font-medium pt-4">

            <li onClick={closeMenu}><Link href="/">Home</Link></li>
            <li onClick={closeMenu}><Link href="/Destination">Destination</Link></li>
            <li onClick={closeMenu}><Link href="/My-Booking">My Booking</Link></li>
            <li onClick={closeMenu}><Link href="/Add-Destination">Add Destination</Link></li>
            <li onClick={closeMenu}><Link href="/Profile">Profile</Link></li>

            {user ? (
              <>
                <li className="text-sm text-gray-600">
                  {user.name}
                </li>

                <li>
                  <Button
                    onClick={handleSignOut}
                    color="danger"
                    size="sm"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li onClick={closeMenu}><Link href="/Login">Login</Link></li>
                <li onClick={closeMenu}><Link href="/SignUp">Sign Up</Link></li>
              </>
            )}

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;