"use client";

import { Hamburger } from "../components/Hamburger";
import { Navbar } from "../components/Navbar";
import { useGetScreenProperties } from "../hooks/useGetScreenProperties";

export default function Photos() {
  const { screen } = useGetScreenProperties();

  return (
    <div>
      {screen.width <= 768 ? <Hamburger /> : <Navbar render="photos" />}
      <div className="flex justify-center font-bold align-middle min-h-screen items-center text-[35px] text-center">
        AUN NO HAY FOTOS ESTOY TERMINANDO DETALLES
      </div>
    </div>
  );
}
