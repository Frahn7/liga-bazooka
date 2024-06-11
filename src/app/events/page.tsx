"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { useGetScreenProperties } from "../hooks/useGetScreenProperties";
import { Hamburger } from "../components/Hamburger";

export default function Events() {
  const { screen } = useGetScreenProperties();
  return (
    <div className="min-h-screen flex-row flex">
      {screen.width <= 768 ? <Hamburger /> : <Navbar render="events" />}
      <div className="flex font-bold justify-center items-center align-middle text-[35px] w-full text-center">
        Aun no anunciaron nuevas fechas!
      </div>
    </div>
  );
}
