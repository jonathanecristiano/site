const mockyData = [
  {
    id: 1,
    title: "xxxxxxxxxxxxxxxx",
    description: "xxxxxxxxxxxxxxxx",
    local: "xxxxxx",
    day: "xx",
    moth: "xxx",
  },
  {
    id: 2,
    title: "xxxxxxxxxxxxxxxx",
    description: "xxxxxxxxxxxxxxxx",
    local: "xxxxxx",
    day: "xx",
    moth: "xxx",
  },
  {
    id: 3,
    title: "xxxxxxxxxxxxxxxx",
    description: "xxxxxxxxxxxxxxxx",
    local: "xxxxxx",
    day: "xx",
    moth: "xxx",
  },
];

export const Datebox = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="block sm:hidden ">
        <div className="flex flex-col items-center gap-10 mt-10">
          {mockyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 w-[20rem] p-4 border border-gray-300 rounded-lg"
            >
              <span className="text-2xl font-bold">
                {item.day} {item.moth}
              </span>
              <span className="text-sm font-bold">{item.local}</span>
              <span className="text-base font-normal">{item.title}</span>
              <button
                className="mt-2 bg-transparent border border-white rounded-lg font-bold px-4 py-2 whitespace-nowrap 
                         transition-all duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 
                         via-cyan-300 to-orange-300 hover:border-transparent"
              >
                COMPRAR INGRESSO
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:block  ">
        {mockyData.map((item, index) => (
          <div key={index} className="flex flex-col w-[80rem]">
            <div className="flex flex-col items-center w-full gap-1">
              <div className="font-albert flex items-center justify-between w-full gap-4 px-4 py-2">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-2xl font-bold">{item.day}</span>
                  <span className="text-xl">{item.moth}</span>
                </div>

                <span className="font-extrabold text-xl italic whitespace-nowrap">
                  {item.local}
                </span>

                <span className="text-center flex-1 min-w-[100px] line-clamp-1">
                  {item.title}
                </span>

                <button
                  className="bg-transparent border rounded-lg border-white font-bold px-4 py-2 whitespace-nowrap 
                        transition-all duration-100 ease-in-out hover:bg-gradient-to-r from-blue-500 
                        via-cyan-300 to-orange-300 hover:border "
                >
                  COMPRAR INGRESSO
                </button>
              </div>

              <div className="bg-[#989898] w-full h-[0.1px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
