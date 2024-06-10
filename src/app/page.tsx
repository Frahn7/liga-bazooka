import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="bgmicrofono min-h-screen flex flex-row">
      <div className="w-[10%]">
        <Navbar />
      </div>
      <div className="w-[100%]">
        <div className="flex items-center flex-col">
          <Image src="/logo-bazooka.png" alt="." width={150} height={150} />
          <h2 className="mt-10 text-[25px] font-bold">Historia</h2>
          <div className="gap-3 rounded-xl flex flex-col items-center">
            <p className="text-[20px] w-[500px] font-semibold px-16 text-center py-3">
              Desde el año 2014 hasta el año 2015 se realizo en Argentina la
              liga de batallas escritas Bazooka, organizada y promovida por el
              bi campeon argentino y campeon mundial DTOKE
            </p>
            <p className="text-[20px] font-semibold w-[500px]  text-center">
              Este evento volvio a resurgir en el año 2022 en su jornada 1,
              teniendo como invitados a Chilli Parker, Markitos, Brillante,
              Nacho, Larrix, Wolf, Kusa y Barba Roja
            </p>
            <p className="text-[20px] font-semibold w-[500px] text-center">
              Por suerte la liga sigue en constante crecimiento hasta
              actualmente su ultima jornada 8 que tuvo de invitados a Sony,
              Zaina, HDR, Coqeein, Klan, Alkoy, Febo, Gustavo y su primer
              presentacion de un 2v2 entre SOUL-DIVINE VS CILL-GIRO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
