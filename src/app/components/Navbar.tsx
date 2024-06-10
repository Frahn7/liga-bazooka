"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { GoHome } from "react-icons/go";
import { GiMicrophone } from "react-icons/gi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";
import { MdEvent } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col fixed  w-[80px] rounded-br-[10%] rounded-tr-[10%] p-4 justify-between  min-h-screen align-middle bg-[#507a31] ">
      <ul></ul>
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
        <li
          onClick={() => router.push("/events")}
          className="cursor-pointer flex justify-center"
        >
          <IconContext.Provider
            value={{ color: "black", className: "contactIcon" }}
          >
            <MdEvent />
          </IconContext.Provider>
        </li>
      </ul>
      <ul className="flex flex-row justify-center gap-3 text-white text-[25px]">
        <li className="cursor-pointer hover:text-black">
          <a
            target="_blank"
            href="https://x.com/ligabazooka?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="cursor-pointer hover:text-black">
          <a target="_blank" href="https://www.youtube.com/@DtokeFree/videos">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};
