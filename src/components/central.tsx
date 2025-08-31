import Link from "next/link";
import { getAssetPath } from "@/utils/assets";

export const CentralFans = () => {
  return (
    <>
      <div className="block sm:hidden ">
        <div
          className="w-full  h-[760px] lg:h-[1020px] xl:h-[1020px] 2xl:h-[1020px] flex items-center justify-center"
          style={{
            backgroundImage: `url("${getAssetPath('/fanMobile.png')}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="fans"
        >
          <div className="flex flex-col w-full max-w-[1200px] m-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center mt-[-8rem]">
              <div className="text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-albert text-white text-[1.8rem] sm:text-[2rem] mb-[2rem]">
                    Central de
                  </span>
                  <span className="font-albert mt-[-2.5rem] sm:mt-[-3.5rem] ml-[-0.2rem] text-black font-extrabold text-[6rem] sm:text-[9.8rem] uppercase italic">
                    Fãs
                  </span>
                </div>
                <Link
                  href={"   https://forms.gle/gewWZLP5uwfTzEfe9"}
                  target="_blank"
                >
                  <div className="text-black flex flex-col font-albert text-[1rem] text-center sm:text-left">
                    <span>Acesse e tenha</span>
                    <span>conteúdos exclusivos</span>
                    <button className="mt-[1rem] uppercase text-white border rounded-lg border-white flex items-center justify-center h-[3rem] p-[22px] w-[270px] mx-auto sm:mx-0">
                      Cadastre-se
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block  ">
        <div
          className="w-full  h-[700px] lg:h-[1020px] xl:h-[1020px] 2xl:h-[1020px] flex items-center justify-center"
          style={{
            backgroundImage: `url("${getAssetPath('/fans2.0.png')}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="fans"
        >
          <div className="flex flex-col w-full max-w-[1200px] m-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center mt-[-20rem]">
              <div className="text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-albert text-white text-[1.8rem] sm:text-[2rem] mb-[3rem]">
                    Central de
                  </span>
                  <span className="font-albert mt-[-1.5rem] sm:mt-[-3.5rem] ml-[-0.2rem] text-black font-extrabold text-[6rem] sm:text-[9.8rem] uppercase italic">
                    Fãs
                  </span>
                </div>
                <Link
                  href={"   https://forms.gle/gewWZLP5uwfTzEfe9"}
                  target="_blank"
                >
                  <div className="text-black flex flex-col font-albert text-[1rem] text-center sm:text-left">
                    <span>Acesse e tenha</span>
                    <span>conteúdos exclusivos</span>
                    <button className="mt-[1rem] uppercase text-white border rounded-lg border-white flex items-center justify-center h-[3rem] p-[22px] w-[270px] mx-auto sm:mx-0">
                      Cadastre-se
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
