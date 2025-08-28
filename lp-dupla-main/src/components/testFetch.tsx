'use client'
import { useState, useEffect } from "react";

const API_BASE_URL = 'http://localhost:3000/api';

export const TestFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('🧪 TestFetch - Iniciando teste...');
    
    const testFetch = async () => {
      try {
        console.log('🧪 Fazendo fetch para:', `${API_BASE_URL}/data`);
        const response = await fetch(`${API_BASE_URL}/data`);
        console.log('🧪 Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('🧪 Dados recebidos:', result);
        setData(result);
      } catch (err) {
        console.error('🧪 Erro:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    testFetch();
  }, []);

  if (loading) return <div className="text-white">🧪 Testando conexão...</div>;
  if (error) return <div className="text-red-500">🧪 Erro: {error}</div>;
  
  return (
    <div className="text-white">
      <h3>🧪 Teste de Fetch</h3>
      <p>Dados recebidos: {data.length} eventos</p>
      <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};