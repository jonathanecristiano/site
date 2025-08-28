'use client'
import { useState, useEffect } from "react";

export const SimpleTest = () => {
  const [status, setStatus] = useState('Iniciando...');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('SimpleTest montado');
    setStatus('Fazendo requisição...');
    
    fetch('http://localhost:3000/api/data')
      .then(response => {
        console.log('SimpleTest - Status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('SimpleTest - Dados:', data);
        setCount(data.length);
        setStatus(`Sucesso! ${data.length} eventos`);
      })
      .catch(error => {
        console.error('SimpleTest - Erro:', error);
        setStatus(`Erro: ${error.message}`);
      });
  }, []);

  return (
    <div className="bg-blue-600 p-4 rounded text-white">
      <h3>🔧 Teste Simples</h3>
      <p>Status: {status}</p>
      <p>Eventos encontrados: {count}</p>
    </div>
  );
};