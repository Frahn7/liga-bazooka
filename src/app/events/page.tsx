import React from "react";
import { Navbar } from "../components/Navbar";

export default function Events() {
  return (
    <div className="min-h-screen flex-row flex">
      <Navbar />
      <div className="flex font-bold justify-center items-center align-middle text-[35px] w-full">
        Aun no anunciaron nuevas fechas!
      </div>
    </div>
  );
}
