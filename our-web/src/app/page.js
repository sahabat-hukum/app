"use client";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import Modal from "@/components/modal";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <About />
      <Modal />
    </div>
  );
};
export default page;
