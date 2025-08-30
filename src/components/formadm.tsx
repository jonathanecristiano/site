"use client";
import { useState } from "react";
import { useDataContext } from "@/contexts/dataContext";

const API_BASE_URL = 'http://localhost:3000/api';

export const FormDataAPI = () => {
  const { triggerRefresh } = useDataContext();
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    location: "",
    city: "",
    onlineTicket: false,
    buyLink: "",
  });

  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
 };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    try {
      const dataToSend = {
        day: formData.day,
        month: formData.month,
        location: formData.location,
        city: formData.city,
        linkbuy: formData.onlineTicket ? formData.buyLink : null,
      };
      
      const response = await fetch(`${API_BASE_URL}/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao adicionar evento');
      }
      
      setMessage({ type: 'success', text: 'Evento adicionado com sucesso!' });
      setFormData({
        day: "",
        month: "",
        location: "",
        city: "",
        onlineTicket: false,
        buyLink: "",
      });
      // Notifica outros componentes para atualizar os dados
      triggerRefresh();
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Erro desconhecido' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/link`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: videoLink }),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao atualizar link do vídeo');
      }
      
      setMessage({ type: 'success', text: 'Link do vídeo atualizado com sucesso!' });
      setVideoLink("");
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Erro desconhecido' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Adicionar Dados</h2>
      
      {message && (
        <div className={`mb-4 p-3 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-600 text-white' 
            : 'bg-red-600 text-white'
        }`}>
          {message.text}
        </div>
      )}
      
      <div className="flex gap-10">
        <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Cadastro datas</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium">Dia:</label>
                <label className="block text-sm font-medium">Exemplos: (05 , 09, 10, 22, 30 )</label>
                <input 
                  type="text" 
                  name="day"
                  value={formData.day}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-black mt-1" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Mês:</label>
                <label className="block text-sm font-medium">Exemplos: (JAN, FEV, ABRIL, DEZ )</label>
                <input 
                  type="text" 
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-black mt-1" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Local:</label>
                <label className="block text-sm font-medium">Exemplos: (Vila Mix, Deu Liga, EXPOCRATO)</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-black mt-1" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Cidade:</label>
                <label className="block text-sm font-medium">Exemplos: (São Paulo, Fortaleza, Crato)</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-black mt-1" 
                />
              </div>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  name="onlineTicket"
                  checked={formData.onlineTicket}
                  onChange={handleInputChange}
                />
                <span>Ingresso Online</span>
              </label>
            </div>
            {formData.onlineTicket && (
              <div>
                <label className="block text-sm font-medium">Link da Compra:</label>
                <input 
                  type="text" 
                  name="buyLink"
                  value={formData.buyLink}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded text-black mt-1" 
                />
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              {loading ? 'Adicionando...' : 'Adicionar Evento'}
            </button>
          </form>
    </div>

        <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Vídeo Destaque</h2>
          <form onSubmit={handleVideoSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Link vídeo destaque:</label>
              <input 
                type="text" 
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full border p-2 rounded text-black" 
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              {loading ? 'Atualizando...' : 'Atualizar Vídeo'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default FormDataAPI;
