import Image from "next/image";
import ImgCamisa from "../../public/camisa.png";
import Link from "next/link";
import { getAssetPath } from "@/utils/assets";

export const LojaVirtual = () => {
  return (
    <>
      <div
        className="w-full  h-[700px] lg:h-[1080px] xl:h-[1080px] 2xl:h-[1080px]  flex items-center justify-center"
        style={{
          backgroundImage: `url("${getAssetPath('/new/loja-oficial.png')}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        id="loja"
      >
        <div className="flex flex-col w-full max-w-[1200px] m-auto px-4 sm:px-6 ">
          <div className="flex flex-col sm:flex-row items-center  mt-[2rem] lg:mt-[6rem] xl:mt-[3rem] 2xl:mt-[3rem] justify-between">
            <div className="text-center sm:text-left">
              <div className="text-[4rem] sm:text-[5.8rem] flex flex-col">
                <span className="font-albert text-white font-extrabold">
                  Loja
                </span>
                <span className="font-albert mt-[-1.5rem] sm:mt-[-2.5rem] text-white font-extrabold">
                  Oficial
                </span>
              </div>
              <div className="text-white flex flex-col font-albert text-[1rem] text-center sm:text-left">
                <span>PRODUTOS OFICIAIS</span>
                <span>E LICENCIADOS</span>
                <Link
                  href={"https://www.instagram.com/jonathaecristiano/"}
                  target="_blank"
                >
                  <button className="mt-[1rem] text-white border rounded-lg border-white flex items-center justify-center h-[3rem] p-[22px] w-[270px] mx-auto sm:mx-0">
                    COMPRE AGORA
                  </button>
                </Link>
              </div>
            </div>
            <Image
              alt="Camisa"
              src={ImgCamisa}
              width={300}
              height={0}
              quality={100}
              priority
              placeholder="blur"
              className="mt-6 sm:mt-0 w-[250px] sm:w-[400px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
