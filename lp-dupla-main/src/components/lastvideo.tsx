'use client'
import { useState, useEffect } from 'react';

interface VideoData {
  id: number;
  link: string;
}

const API_BASE_URL = 'http://localhost:3000/api';

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
    const fetchVideoLink = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/link`);
        if (!response.ok) {
          throw new Error('Falha ao carregar vídeo');
        }
        const data: VideoData = await response.json();
        if (data && data.link) {
          setVideoLink(data.link);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        console.error('Erro ao buscar vídeo:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoLink();
  }, []);

  if (loading) {
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
              backgroundImage: 'url("/banner03.png")',
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
              backgroundImage: 'url("/banner03.png")',
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
              backgroundImage: 'url("/banner03.png")',
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
