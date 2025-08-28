'use client'
import { useState, useEffect } from 'react';

interface EventData {
  id: number;
  day: string;
  month: string;
  location: string;
  city: string;
  linkbuy?: string;
}

const API_BASE_URL = 'http://localhost:3000/api';

export const Datebox = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/data`);
        if (!response.ok) {
          throw new Error('Falha ao carregar eventos');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        console.error('Erro ao buscar eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-white text-lg">Carregando eventos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500 text-lg">Erro: {error}</div>
      </div>
    );
  }

  return (
    <>
      {/* MOBILE */}
      <div className="block sm:hidden ">
        <div className="flex flex-col items-center gap-10 mt-10">
          {events.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 w-[20rem] p-4 border border-gray-300 rounded-lg"
            >
              <span className="text-2xl font-bold">
                {item.day} {item.month}
              </span>
              <span className="text-sm font-bold">{item.location}</span>
              <span className="text-base font-normal">{item.city}</span>
              {item.linkbuy ? (
                <a href={item.linkbuy} target="_blank" rel="noopener noreferrer">
                  <button
                    className="mt-2 bg-transparent border border-white rounded-lg font-bold px-4 py-2 whitespace-nowrap 
                             transition-all duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 
                             via-cyan-300 to-orange-300 hover:border-transparent w-full"
                  >
                    COMPRAR INGRESSO
                  </button>
                </a>
              ) : (
                <button
                  className="mt-2 bg-gray-500 border border-gray-500 rounded-lg font-bold px-4 py-2 whitespace-nowrap 
                           cursor-not-allowed w-full"
                  disabled
                >
                  EM BREVE
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:block  ">
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
