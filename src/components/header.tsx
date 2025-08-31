"use client";
import { useState } from "react";
import Image from "next/image";
import IconYoutube from "../../public/youIcon.png";
import IconFacebook from "../../public/faceIcon.png";
import IconInsta from "../../public/instaIcon.png";
import IconTikTok from "../../public/tik-tok.png";
import Logo from "../../public/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { getAssetPath } from "@/utils/assets";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 md:p-6 w-full bg-black text-white relative">
      {/* Ícone do Menu (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white z-50"
      >
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Logo Centralizada Mobile (Sempre visível) */}
      {/* <div
        className={`md:hidden flex-1 mr-[-30px] flex justify-center transition-opacity ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image alt="Logo" src={Logo} width={180} height={50} />
      </div> */}

      <div className="md:hidden flex items-center gap-2">
        <Link
          href={"https://www.tiktok.com/@jonatha_jec?_t=ZM-8vcPveQWxap&_r=1"}
          target="_blank"
        >
          <Image alt="YouTube" src={IconTikTok} width={13} height={13} />
        </Link>
        <Link
          href={
            "https://www.facebook.com/jonathaecristianooficial?mibextid=wwXIfr"
          }
          target="_blank"
        >
          <Image alt="Facebook" src={IconFacebook} width={18} height={18} />
        </Link>
        <Link
          href={"https://www.instagram.com/jonathaecristiano/"}
          target="_blank"
        >
          <Image alt="Twitter" src={IconInsta} width={18} height={18} />
        </Link>
        <Link
          href={"https://www.youtube.com/@jonathaecristiano"}
          target="_blank"
        >
          <Image alt="YouTube" src={IconYoutube} width={18} height={18} />
        </Link>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-6 md:hidden z-40">
          <Link href={getAssetPath("/MÍDIAKIT2025.pdf")} target="_blank">
            <span className="text-white uppercase font-semibold text-xl hover:text-gray-400 cursor-pointer">
              MIDIA KIT
            </span>
          </Link>
          <Link href={"#agenda"}>
            <span className="text-white uppercase font-semibold text-xl hover:text-gray-400 cursor-pointer">
              AGENDA
            </span>
          </Link>
          <Link href={"#loja"}>
            <span className="text-white uppercase font-semibold text-xl hover:text-gray-400 cursor-pointer">
              LOJA
            </span>
          </Link>
          <Link href={"#fans"}>
            <span className="text-white uppercase font-semibold text-xl hover:text-gray-400 cursor-pointer">
              CENTRAL DE FÃS
            </span>
          </Link>
          <Link href={"#contato"}>
            <span className="text-white uppercase font-semibold text-xl hover:text-gray-400 cursor-pointer">
              CONTATO
            </span>
          </Link>
        </nav>
      )}

      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {/* Logo Centralizada (Sempre visível) */}
        <div
          className={`flex-1 flex justify-center transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image alt="Logo" src={Logo} width={220} height={50} />
        </div>

        <Link href={getAssetPath("/MÍDIAKIT2025.pdf")} target="_blank">
          <span className="text-gray-400 uppercase font-semibold hover:text-white cursor-pointer">
            MIDIA KIT
          </span>
        </Link>
        <Link href={"#agenda"}>
          <span className="text-gray-400 uppercase font-semibold hover:text-white cursor-pointer">
            AGENDA
          </span>
        </Link>
        <Link href={"#loja"}>
          <span className="text-gray-400 uppercase font-semibold hover:text-white cursor-pointer">
            LOJA
          </span>
        </Link>
        <Link href={"#fans"}>
          <span className="text-gray-400 uppercase font-semibold hover:text-white cursor-pointer">
            CENTRAL DE FÃS
          </span>
        </Link>
        <Link href={"#contato"}>
          <span className="text-gray-400 uppercase font-semibold hover:text-white cursor-pointer">
            CONTATO
          </span>
        </Link>
      </nav>

      {/* Redes Sociais */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href={"https://www.tiktok.com/@jonatha_jec?_t=ZM-8vcPveQWxap&_r=1"}
          target="_blank"
        >
          <Image
            alt="Facebook"
            src={IconTikTok}
            width={18}
            height={18}
            className="mt-[3px]"
          />
        </Link>

        <Link
          href={
            "https://www.facebook.com/jonathaecristianooficial?mibextid=wwXIfr"
          }
          target="_blank"
        >
          <Image alt="Facebook" src={IconFacebook} width={26} height={26} />
        </Link>
        <Link
          href={"https://www.instagram.com/jonathaecristiano/"}
          target="_blank"
        >
          <Image alt="Twitter" src={IconInsta} width={26} height={26} />
        </Link>
        <Link
          href={"https://www.youtube.com/@jonathaecristiano"}
          target="_blank"
        >
          <Image alt="YouTube" src={IconYoutube} width={26} height={26} />
        </Link>
      </div>
    </header>
  );
};
