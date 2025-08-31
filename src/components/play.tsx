import { getAssetPath } from "@/utils/assets";

export const DePlay = () => {
  return (
    <>
      <div
        className=" w-[100%] h-[1080px]  "
        style={{
          backgroundImage: `url("${getAssetPath('/banner04.png')}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-14">
          <div>
            <h1 className="text-[4rem] font-albert mt-[10rem] font-medium text-white">
              Dê o
            </h1>
            <h1 className="text-[8rem] italic font-albert mt-[-5.3rem] ml-[2.3rem] font-extrabold text-white">
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
              <h2 className="text-sm md:text-base tracking-widest uppercase font-medium text-white">
                Ouça na sua plataforma preferida
              </h2>

              <img
                src={getAssetPath("/new/musicas.png?v=1")}
                alt="Músicas"
                width={700}
                height={175}
                className="my-8 hover:opacity-80 transition-opacity duration-300 rounded-lg shadow-md w-[280px] h-auto"
              />
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
              <h2 className="text-sm md:text-base tracking-widest uppercase font-medium text-white">
                Ouça na sua plataforma preferida
              </h2>

              <img
                src={getAssetPath("/new/musicas.png?v=1")}
                alt="Músicas"
                width={700}
                height={175}
                className="my-8 hover:opacity-80 transition-opacity duration-300 rounded-lg shadow-md w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
