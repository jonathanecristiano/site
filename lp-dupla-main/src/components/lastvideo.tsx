export const LastVideo = () => {
  return (
    <>
      {/* Mobile */}
      <div className="block sm:hidden ">
        <div
          className="w-full h-[680px]"
          style={{
            backgroundImage: 'url("/banner03.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-14">
            <h1 className=" text-[2.3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] font-albert mt-[10rem] font-extrabold">
              Último lançamento
            </h1>
            <div>
              <iframe
                width="360"
                height="215"
                src="https://www.youtube.com/embed/4u2bmQ0tlzI?si=aFGLUbyVZo7i_Y07"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* DeskTop */}
      <div className="hidden sm:block  ">
        <div
          className="w-full h-[1080px]"
          style={{
            backgroundImage: 'url("/banner03.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-14">
            <h1 className=" text-[2.3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] font-albert mt-[10rem] font-extrabold">
              Último lançamento
            </h1>
            <div>
              <div>
                <iframe
                  width="860"
                  height="515"
                  src="https://www.youtube.com/embed/4u2bmQ0tlzI?si=aFGLUbyVZo7i_Y07"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
