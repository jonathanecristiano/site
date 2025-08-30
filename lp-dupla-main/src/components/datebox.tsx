'use client'
import { useData } from '../contexts/dataContext';

export const Datebox = () => {
  const { events } = useData();

  return (
    <>
      {/* MOBILE & TABLET */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center gap-6 md:gap-8 mt-10 px-4">
          {events.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 w-full max-w-[20rem] md:max-w-[24rem] p-4 md:p-6 border border-gray-300 rounded-lg bg-black/20 backdrop-blur-sm"
            >
              <span className="text-xl md:text-2xl font-bold text-white">
                {item.day} {item.month}
              </span>
              <span className="text-sm md:text-base font-bold text-white">{item.location}</span>
              <span className="text-sm md:text-base font-normal text-gray-200">{item.city}</span>
              {item.linkbuy ? (
                <a href={item.linkbuy} target="_blank" rel="noopener noreferrer">
                  <button
                    className="mt-2 bg-transparent border border-white rounded-lg font-bold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base
                             transition-all duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 
                             via-cyan-300 to-orange-300 hover:border-transparent w-full text-white"
                  >
                    COMPRAR INGRESSO
                  </button>
                </a>
              ) : (
                <button
                  className="mt-2 bg-gray-500 border border-gray-500 rounded-lg font-bold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base
                           cursor-not-allowed w-full text-white"
                  disabled
                >
                  EM BREVE
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        {events.map((item, index) => (
          <div key={index} className="flex flex-col w-[80rem]">
            <div className="flex flex-col items-center w-full gap-1">
              <div className="font-albert flex items-center justify-between w-full gap-4 px-4 py-2">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-2xl font-bold">{item.day}</span>
                  <span className="text-xl">{item.month}</span>
                </div>

                <span className="font-extrabold text-xl italic whitespace-nowrap">
                  {item.location}
                </span>

                <span className="text-center flex-1 min-w-[100px] line-clamp-1">
                  {item.city}
                </span>

                {item.linkbuy ? (
                  <a href={item.linkbuy} target="_blank" rel="noopener noreferrer">
                    <button
                      className="bg-transparent border rounded-lg border-white font-bold px-4 py-2 whitespace-nowrap 
                              transition-all duration-100 ease-in-out hover:bg-gradient-to-r from-blue-500 
                              via-cyan-300 to-orange-300 hover:border "
                    >
                      COMPRAR INGRESSO
                    </button>
                  </a>
                ) : (
                  <button
                    className="bg-gray-500 border rounded-lg border-gray-500 font-bold px-4 py-2 whitespace-nowrap 
                             cursor-not-allowed"
                    disabled
                  >
                    EM BREVE
                  </button>
                )}
              </div>

              <div className="bg-[#989898] w-full h-[0.1px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
