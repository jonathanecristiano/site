import { getAssetPath } from "@/utils/assets";

export const Footer = () => {
  return (
    <>
      <div className="block sm:hidden ">
        <div
          className="w-full h-[800px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/footerMobile.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="contato"
        >
          <div className="flex flex-col w-full max-w-[1200px] m-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center mt-[10rem] sm:mt-[8rem] text-center sm:text-left">
              <div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-albert mt-[-2rem] sm:mt-[-3.5rem] text-white font-extrabold text-[4rem] sm:text-[6.8rem] italic">
                    Fale
                  </span>
                  <span className="font-albert mt-[-2rem] sm:mt-[-3.5rem] text-white font-extrabold text-[4rem] sm:text-[6.8rem] italic">
                    com a
                  </span>
                  <span className="font-albert mt-[-2rem] sm:mt-[-3.5rem] text-white font-extrabold text-[4rem] sm:text-[6.8rem] italic">
                    gente
                  </span>
                </div>
                <div className="text-white flex flex-col sm:flex-row gap-10 mt-[2rem] font-albert items-center sm:items-start">
                  <div className="flex flex-col gap-4 text-center sm:text-left">
                    <h3 className="text-[1.5rem] sm:text-[2rem]">Shows:</h3>
                    <div className="flex flex-col text-base sm:text-lg">
                      <span>jonathaecristiano@shows.com.br</span>
                      <span>(11) 98439-0552</span>
                      <span>(11) 3872-7688</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-center sm:text-left">
                    <h3 className="text-[1.5rem] sm:text-[2rem]">
                      Marketing/Assessoria
                    </h3>
                    <div className="flex flex-col text-base sm:text-lg">
                      <span>(11) 98439-0552</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block  ">
        <div
          className="w-full h-[900px]  flex items-center justify-center"
          style={{
            backgroundImage: `url("${getAssetPath('/new/fale-com-a-gente.png')}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="contato"
        >
          <div className="flex flex-col w-full max-w-[1200px] m-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center mt-[10rem] sm:mt-[8rem] text-center sm:text-left">
              <div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-albert mt-[-2rem] sm:mt-[-3.5rem] text-white font-extrabold text-[4rem] sm:text-[6.8rem] italic">
                    Fale
                  </span>
                  <span className="font-albert mt-[-2rem] sm:mt-[-3.5rem] text-white font-extrabold text-[4rem] sm:text-[6.8rem] italic">
                    com a
                  </span>
                  <span className="font-albert mt-[-2rem] sm:mt-[-3.5rem] text-white font-extrabold text-[4rem] sm:text-[6.8rem] italic">
                    gente
                  </span>
                </div>
                <div className="text-white flex flex-col sm:flex-row gap-16 mt-10 font-albert items-center sm:items-start">
                  {/* Shows Section */}
                  <div className="flex flex-col gap-6 text-center sm:text-left bg-white/10 rounded-lg p-6 shadow-lg min-w-[260px]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#9FA6BB] mb-2 tracking-wide">
                      Shows
                    </h3>
                    <div className="flex flex-col text-base sm:text-lg gap-1">
                      <span className="font-semibold">(11) 3872-7688</span>
                      <span className="font-semibold">(11) 91927-1212</span>
                      <span className="hover:underline cursor-pointer transition-colors duration-200">
                        shows@jonathaecristiano.com.br
                      </span>
                    </div>
                  </div>
                  {/* Marketing/Assessoria Section */}
                  <div className="flex flex-col gap-6 text-center sm:text-left bg-white/10 rounded-lg p-6 shadow-lg min-w-[260px]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#9FA6BB] mb-2 tracking-wide">
                      Marketing/Assessoria
                    </h3>
                    <div className="flex flex-col text-base sm:text-lg gap-1">
                      <span className="hover:underline cursor-pointer transition-colors duration-200">
                        comercial@jonathaecristiano.com.br
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
