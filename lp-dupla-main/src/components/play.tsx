import Image from "next/image";
import appleMusic from "../../public/play1.png";
import deezerMusic from "../../public/play2.png";
import youMusic from "../../public/play3.png";
import spotyMusic from "../../public/play4.png";

export const DePlay = () => {
  return (
    <>
      <div
        className=" w-[100%] h-[1080px]  "
        style={{
          backgroundImage: 'url("/banner04.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-14">
          <div>
            <h1 className="text-[4rem] font-albert mt-[10rem] font-medium">
              Dê o
            </h1>
            <h1 className="text-[8rem] italic font-albert mt-[-5.3rem] ml-[2.3rem] font-extrabold">
              play
            </h1>
          </div>
          {/* Mobile */}
          <div className="block sm:hidden ">
            <div>
              <iframe
                src="https://open.spotify.com/embed/track/02QfhXVtcKdvm5aY0lygIM?utm_source=generator"
                width="350"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <h2 className="text-sm md:text-base tracking-widest uppercase font-medium">
                Ouça na sua plataforma preferida
              </h2>

              <div className="grid grid-cols-2 gap-10 mt-10 ">
                <a
                  href="https://music.apple.com/br/artist/jonatha-e-cristiano/1513255712 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={appleMusic}
                    alt="Apple Music"
                    className="h-8 md:h-10 hover:opacity-80 transition"
                    width={120}
                    height={80}
                  />
                </a>
                <a
                  href="https://www.deezer.com/br/artist/94765012?host=6441068301&utm_campaign=clipboard-generic&utm_source=user_sharing&utm_content=artist-94765012&deferredFl=1
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={deezerMusic}
                    alt="Deezer"
                    className="h-8 md:h-10 hover:opacity-80 transition"
                    width={120}
                    height={50}
                  />
                </a>
                <a
                  href="https://music.youtube.com/channel/UC19SG-Lazq5XXXZd-bozGBA?si=Li6v-OopTru1t9A6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={youMusic}
                    alt="YouTube Music"
                    className="h-8 md:h-10 hover:opacity-80 transition"
                    width={120}
                    height={50}
                  />
                </a>
                <a
                  href="https://open.spotify.com/intl-pt/artist/4ZIYJpELcoJlJcro8xZF20?si=vPNamsHASFK8v642rumOjA&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F4ZIYJpELcoJlJcro8xZF20%3Fsi%3DvPNamsHASFK8v642rumOjA&feature=organic&_branch_match_id=1457099183272951017&_branch_referrer=H4sIAAAAAAAAA72NywrCMBREvyZdtpqWIkKRohatooIr3UgaUxub5oabxMfGb7cK%2FoIwi2EOh2mcM3YcRdaAk%2FUzZMaESuo2mhiEs%2BcuAyN0QGhSe6VOHlXWfBQS54QWfT44%2FNkcun5i6KR1fUmOy0Np5msOpSo5wuhxLOiAxIWVJJ7ddhvW2UW%2BL1ajW5pQ9N32mn%2BvmFIV4%2B0f7ghN9bmnw6AWzHkUGeCFacmDF4paIEp9OVUIdyswmzYInXgDu9G5cDMBAAA%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={spotyMusic}
                    alt="Spotify"
                    className="h-8 md:h-10 hover:opacity-80 transition"
                    width={120}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden sm:block  ">
            <div>
              <iframe
                src="https://open.spotify.com/embed/track/02QfhXVtcKdvm5aY0lygIM?utm_source=generator"
                width="650"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
              <h2 className="text-sm md:text-base tracking-widest uppercase font-medium">
                Ouça na sua plataforma preferida
              </h2>

              <Image
                src="/new/musicas.png"
                alt="Músicas"
                width={700}
                height={175}
                className="my-8 hover:opacity-80 transition-opacity duration-300 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
