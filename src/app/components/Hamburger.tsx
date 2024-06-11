"use client";

import React, { useState } from "react";
import { GiHamburgerMenu, GiMicrophone } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { MdEvent, MdOutlinePhotoLibrary } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const Hamburger = () => {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen text-[50px] fixed">
      <GiHamburgerMenu onClick={() => setModal(true)} />
      {modal ? (
        <div className="fixed rounded-lg z-10 top-[20%] left-[20%] w-[60%] bg-[#507a31] h-[600px]">
          <IoClose onClick={() => setModal(false)} />
          <div className="flex gap-10 flex-col min-h-screen items-center py-8 text-[70px]">
            <GoHome onClick={() => router.push("/")} />
            <GiMicrophone onClick={() => router.push("/rapers")} />
            <MdOutlinePhotoLibrary onClick={() => router.push("/photos")} />
            <MdEvent onClick={() => router.push("/events")} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
