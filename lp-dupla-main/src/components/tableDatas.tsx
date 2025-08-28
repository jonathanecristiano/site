'use client'
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

interface Data {
  id: number;
  day: string;
  month: string;
  location: string;
  city: string;
  linkbuy?: string;
}

const API_BASE_URL = 'http://localhost:3000/api';

export const TableDatas = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Data>>({});
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Debug: Estado atual
  console.log('TableDatas - Loading:', loading, 'Error:', error, 'Data length:', data.length);

  const fetchData = async () => {
    console.log('TableDatas fetchData iniciado');
    
    try {
      const response = await fetch(`${API_BASE_URL}/data`);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error('Falha ao carregar dados');
      }
      
      const result = await response.json();
      console.log('Dados recebidos:', result.length, 'eventos');
      
      setData(result);
    } catch (err) {
      console.error('Erro fetchData:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('🚀 TableDatas montado - executando fetchData');
    fetchData();
  }, []);

  const handleEdit = (item: Data) => {
    setEditingId(item.id);
    setEditForm(item);
  };

  const handleSave = async () => {
    if (!editingId || !editForm) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/data/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao atualizar dados');
      }
      
      setMessage({ type: 'success', text: 'Dados atualizados com sucesso!' });
      await fetchData(); // Recarrega os dados
      setEditingId(null);
      setEditForm({});
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: err instanceof Error ? err.message : 'Erro desconhecido' 
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este item?')) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/data/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Falha ao excluir dados');
      }
      
      setMessage({ type: 'success', text: 'Dados excluídos com sucesso!' });
      await fetchData(); // Recarrega os dados
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: err instanceof Error ? err.message : 'Erro desconhecido' 
      });
    }
  };

  const handleInputChange = (field: keyof Data, value: string | boolean) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center text-white text-lg">Carregando dados...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center text-red-500 text-lg">Erro: {error}</div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Gerenciar Dados</h2>
      
      {message && (
        <div className={`mb-4 p-3 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-600 text-white' 
            : 'bg-red-600 text-white'
        }`}>
          {message.text}
          <button 
            onClick={() => setMessage(null)}
            className="ml-2 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}
      
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Dia
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Mês
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Local
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Cidade
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Link Compra
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  Nenhum evento encontrado
                </td>
              </tr>
            ) : (
              data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editForm.day || ''}
                      onChange={(e) => handleInputChange('day', e.target.value)}
                      className="bg-gray-700 text-white px-2 py-1 rounded w-16"
                    />
                  ) : (
                    item.day
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editForm.month || ''}
                      onChange={(e) => handleInputChange('month', e.target.value)}
                      className="bg-gray-700 text-white px-2 py-1 rounded w-20"
                    />
                  ) : (
                    item.month
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editForm.location || ''}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="bg-gray-700 text-white px-2 py-1 rounded w-32"
                    />
                  ) : (
                    item.location
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editForm.city || ''}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="bg-gray-700 text-white px-2 py-1 rounded w-32"
                    />
                  ) : (
                    item.city
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editForm.linkbuy || ''}
                      onChange={(e) => handleInputChange('linkbuy', e.target.value)}
                      className="bg-gray-700 text-white px-2 py-1 rounded w-48"
                    />
                  ) : (
                    item.linkbuy ? (
                      <a 
                        href={item.linkbuy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        Ver Link
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {editingId === item.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="text-green-400 hover:text-green-300"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        <MdOutlineEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}