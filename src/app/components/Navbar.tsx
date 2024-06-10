"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { GoHome } from "react-icons/go";
import { GiMicrophone } from "react-icons/gi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col fixed  w-[80px] rounded-br-[10%] rounded-tr-[10%] p-4  h-[100vh] align-middle bg-[#507a31] justify-center">
      <ul className="flex flex-col gap-[40px] font-bold text-center text-[40px]">
        <li
          onClick={() => router.push("/")}
          className="cursor-pointer flex justify-center"
        >
          <IconContext.Provider
            value={{ color: "black", className: "contactIcon" }}
          >
            <GoHome />
          </IconContext.Provider>
        </li>
        <li
          onClick={() => router.push("/rapers")}
          className="cursor-pointer flex justify-center"
        >
          <IconContext.Provider
            value={{ color: "black", className: "contactIcon" }}
          >
            <GiMicrophone />
          </IconContext.Provider>
        </li>
        <li
          onClick={() => router.push("/photos")}
          className="cursor-pointer flex justify-center"
        >
          <IconContext.Provider
            value={{ color: "black", className: "contactIcon" }}
          >
            <MdOutlinePhotoLibrary />
          </IconContext.Provider>
        </li>
      </ul>
    </div>
  );
};
