"use client";
// import { Header } from "@/components/header";
import ImgInital from "../../public/new/home.png";
import ImgInitalMobile from "../../public/Group5.png";
import LinhaImg from "../../public/linha.png";
import LogoImg from "../../public/logo.png";
import Image from "next/image";
import { Calendar } from "@/components/calendar";
import { LastVideo } from "@/components/lastvideo";
import { DePlay } from "@/components/play";
import { LojaVirtual } from "@/components/loja";
import { CentralFans } from "@/components/central";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { Header } from "@/components/header";

export default function Home() {
  useEffect(() => {
    const checkMobile = () => {};

    // Verifica apenas no cliente
    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  return (
    <div>
      <div>
        <div className="block sm:hidden relative">
          <Header />

          <Image
            alt="Fundo Mobile"
            src={ImgInitalMobile}
            width={400}
            height={780}
            quality={100}
            priority
            placeholder="blur"
            className="w-[760px] h-full object-cover"
          />
          
          {/* Logo sobreposta - Mobile */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <Image
              alt="Logo"
              src={LogoImg}
              width={450}
              height={450}
              quality={100}
              className="drop-shadow-lg -mb-8"
            />
          </div>
        </div>
        <div className="hidden sm:block relative">
          <Header />

          <Image
            alt="Fundo Desktop"
            src={ImgInital}
            width={1620}
            height={980}
            quality={100}
            priority
            placeholder="blur"
            className="w-full h-full object-cover"
          />
          
          {/* Logo sobreposta */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <Image
              alt="Logo"
              src={LogoImg}
              width={500}
              height={500}
              quality={100}
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* {isMobile ? (
          <Image
            alt=""
            src={ImgInitalMobile}
            width={400}
            height={780}
            quality={100}
            priority
            placeholder="blur"
            className="w-full  object-cover relative"
          />
        ) : (
          <Image
            alt=""
            src={ImgInital}
            width={1920}
            height={980}
            quality={100}
            priority
            placeholder="blur"
            className="w-full  object-cover relative"
          />
        )} */}

        <Calendar />

        <Image
          alt=""
          src={LinhaImg}
          width={1920}
          height={0}
          quality={100}
          priority
          placeholder="blur"
          className="w-full  object-cover absolute mt-[-5.4rem] hidden lg:block xl:block 2xl:block"
        />

        <LastVideo />

        <Image
          alt=""
          src={LinhaImg}
          width={1920}
          height={0}
          quality={100}
          priority
          placeholder="blur"
          className="w-full  object-cover absolute mt-[-5.4rem] hidden lg:block xl:block 2xl:block"
        />

        <DePlay />

        <Image
          alt=""
          src={LinhaImg}
          width={1920}
          height={0}
          quality={100}
          priority
          placeholder="blur"
          className=" w-full  object-cover absolute mt-[-5.4rem] hidden lg:block xl:block 2xl:block"
        />

        <LojaVirtual />

        <Image
          alt=""
          src={LinhaImg}
          width={1920}
          height={0}
          quality={100}
          priority
          placeholder="blur"
          className="w-full  object-cover absolute mt-[-5.4rem] hidden lg:block xl:block 2xl:block"
        />

        <CentralFans />

        <Footer />
      </div>
    </div>
  );
}
