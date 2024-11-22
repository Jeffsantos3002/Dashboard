import { useState, useEffect } from "react";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import data from "../../data";  // Certifique-se de que o caminho está correto

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Vendas() {
  const [vendedor, setVendedor] = useState([]);  // Inicialize com um array vazio, não com null

  // Função para mapear os dados de vendas e armazenar no estado
  const vender = () => {
    const vendasData = data.salesData;

    // Criando um novo array para evitar a mutação do objeto
    const vendedoresFiltrados = vendasData.map((item) => ({
      vendedor: item.vendedor,
      equipamentosVendidos: item.equipamentosVendidos
    }));

    // Atualizando o estado com os dados filtrados
    setVendedor(vendedoresFiltrados);
  };


  // Garantir que o estado 'vendedor' tenha dados antes de mapear
  if (vendedor.length === 0) return <p>Carregando...</p>;

  // Processando os dados para o gráfico
  const labels = vendedor.map((vendedor) => vendedor.vendedor);
  const data2 = vendedor.map((vendedor) => vendedor.equipamentosVendidos);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Total de Vendas',
        data: data2,
        backgroundColor: '#a026d2',
        borderColor: '#a026d2',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {

      legend: {
        display: false, // Desabilita a legenda
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Desabilita as linhas de grade no eixo X
        },
      },
      y: {
        grid: {
          display: false, // Desabilita as linhas de grade no eixo Y
        },

      },
    },
  };

  return (
    <div className="bg-white shadow rounded-xl w-full h-full p-5">
      <p className="text-xl  font-semibold">Vendas Realizadas</p>
      <div className="w-full h-full">
        <Bar data={chartData} options={options} />

      </div>
    </div>
  );
}
