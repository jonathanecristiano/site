import { Datebox } from "./datebox";
import Image from "next/image";
import ohana from "../../public/ohana.png";
import { getAssetPath } from "@/utils/assets";

export const Calendar = () => {
  return (
    <>
      {/* Mobile & Tablet */}
      <div className="block lg:hidden">
        <div
          className="w-full min-h-[930px] md:min-h-[1080px]"
          style={{
            backgroundImage: 'url("/agendaMobile.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="agenda"
        >
          <div className="flex flex-col items-center justify-center pt-20 md:pt-32">
            <h1 className="text-[3rem] md:text-[5rem] font-albert font-extrabold text-white mb-8">
              AGENDA
            </h1>

            <Datebox />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div
          className="w-full h-[1080px] mt-[-11rem]"
          style={{
            backgroundImage: `url("${getAssetPath('/banner02.png')}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="agenda"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-[4rem] lg:text-[8rem] xl:text-[8rem] 2xl:text-[8rem] font-albert mt-[10rem] font-extrabold mb-0 lg:mb-[6rem] xl:mb-[6rem] 2xl:mb-[6rem]">
              AGENDA
            </h1>

            <Datebox />
            <a
              href="https://ohana-music.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center mt-8"
            >
              <div className="p-2 rounded-xl shadow-lg animate-bounce"
              style={{ animationDuration: "5s" }}>
              <Image
              src={ohana}
              alt="Ohana Music"
              className="h-12 md:h-16 hover:scale-105 transition-all duration-200 rounded-xl"
              width={160}
              height={70}
              />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
