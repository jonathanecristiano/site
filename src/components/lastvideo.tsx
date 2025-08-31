'use client'
import { useState, useEffect } from 'react';
import { getAssetPath } from '@/utils/assets';

interface VideoData {
  id: number;
  link: string;
}

// Dados mockados com o vídeo fornecido
const MOCK_VIDEO_DATA: VideoData = {
  id: 1,
  link: 'https://www.youtube.com/watch?v=yN_6bgszTjo'
};

export const LastVideo = () => {
  const [videoLink, setVideoLink] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para converter link do YouTube para formato embed
  const getEmbedUrl = (url: string): string => {
    if (!url) return '';
    
    // Extrair o ID do vídeo do YouTube
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    
    return url; // Retorna o URL original se não conseguir extrair o ID
  };

  useEffect(() => {
    // Simula carregamento dos dados mockados
    const loadMockData = () => {
      try {
        setVideoLink(MOCK_VIDEO_DATA.link);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        console.error('Erro ao carregar vídeo:', err);
      } finally {
        setLoading(false);
      }
    };

    // Simula um pequeno delay para mostrar o loading
    setTimeout(loadMockData, 500);
  }, []);

  if (loading) {
    return (
      <>
        {/* Mobile */}
        <div className="block sm:hidden ">
          <div
            className="w-full h-[680px]"
            style={{
              backgroundImage: `url("${getAssetPath('/banner03.png')}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-14">
              <h1 className=" text-[2.3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] font-albert mt-[10rem] font-extrabold">
                Último lançamento
              </h1>
              <div className="w-[360px] h-[215px] flex items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-white text-lg">Carregando vídeo...</div>
              </div>
            </div>
          </div>
        </div>
        {/* DeskTop */}
        <div className="hidden sm:block  ">
          <div
            className="w-full h-[1080px]"
            style={{
              backgroundImage: `url("${getAssetPath('/banner03.png')}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-14">
              <h1 className=" text-[2.3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] font-albert mt-[10rem] font-extrabold">
                Último lançamento
              </h1>
              <div className="w-[860px] h-[515px] flex items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-white text-lg">Carregando vídeo...</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || !videoLink) {
    return (
      <>
        {/* Mobile */}
        <div className="block sm:hidden ">
          <div
            className="w-full h-[680px]"
            style={{
              backgroundImage: `url("${getAssetPath('/banner03.png')}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-14">
              <h1 className=" text-[2.3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] font-albert mt-[10rem] font-extrabold">
                Último lançamento
              </h1>
              <div className="w-[360px] h-[215px] flex items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-red-500 text-lg">
                  {error || 'Nenhum vídeo disponível'}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DeskTop */}
        <div className="hidden sm:block  ">
          <div
            className="w-full h-[1080px]"
            style={{
              backgroundImage: `url("${getAssetPath('/banner03.png')}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-14">
              <h1 className=" text-[2.3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] font-albert mt-[10rem] font-extrabold">
                Último lançamento
              </h1>
              <div className="w-[860px] h-[515px] flex items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-red-500 text-lg">
                  {error || 'Nenhum vídeo disponível'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Mobile */}
      <div className="block sm:hidden ">
        <div
          className="w-full h-[680px]"
          style={{
            backgroundImage: `url("${getAssetPath('/banner03.png')}")`,
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
                src={getEmbedUrl(videoLink)}
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
            backgroundImage: `url("${getAssetPath('/banner03.png')}")`,
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
                  src={getEmbedUrl(videoLink)}
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
