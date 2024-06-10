import React from "react";
import Image from "next/image";

interface CardsRapersProps {
  name: string;
  image?: string;
  country: string;
}

export const CardRapers = ({ name, image, country }: CardsRapersProps) => {
  return (
    <div>
      <div className="w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600 ">
        <div className="flex justify-center mt-3">
          <Image
            width={200}
            height={0}
            className="rounded-t-lg h-[250px] object-cover"
            src={image ? image : "/rapers/default.png"}
            alt="/"
          />
        </div>
        <div className="p-5 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name.toUpperCase()}
          </h5>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
};
