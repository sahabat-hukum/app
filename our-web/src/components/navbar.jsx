"use client";
import { logoutAction } from "@/actions/logout";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";

const Navbar = () => {  
  const isLogIn = Cookies.get("Authorization")
  return (
    <>
      <div className="h-24 w-full shadow-md flex z-20  justify-between pt-6 px-10 bg-white fixed -translate-y-20">
        <Link href="/">
          <div className="flex">
            <div>
              <img className="w-14 -mt-3" src="../../sahabat.png" alt="" />
            </div>
            <div className="pt-6 mr-3">
              <img className="w-52 -mt-3" src="../../sahabat1.png" alt="" />
            </div>
          </div>
        </Link>
        <div className="flex gap-6 mt-3 font-bold">
          <Link href="/diskusi">
            {" "}
            <div className="hover:text-blue-950">Diskusi</div>
          </Link>
          <Link href="/advokat">
            {" "}
            <div className="hover:text-blue-950">Advokat</div>
          </Link>
          <div className="hover:text-blue-950">Profile</div>
        </div>
        {!isLogIn ? (
        <Link href="/login">
          {" "}
          <div className=" mt-3 font-bold hover:text-blue-950">Login</div>
        </Link> 
        ) : (<div className="mt-3 font-bold  hover:text-blue-950"><button onClick={() => {logoutAction()}} className="bg-blue-950 px-2 py-1 rounded-sm text-white">
        {" "}
        Logout
      </button></div>)}
      </div>
    </>
  );
};

export default Navbar;
