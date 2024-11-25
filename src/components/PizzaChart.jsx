import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

// Registrar os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default function PizzaChart() {
  const [chartData, setChartData] = useState(null); // Estado para armazenar os dados do gráfico
  const fetchData = async () => {
    try {
      const response = await axios.get('http://191.193.196.163:8888/teste/json.jsp');
     
  
      const totais = {};

      response.data.salesData.forEach((vendedor) => {
        Object.keys(vendedor.fasesVenda).forEach((chave) => {
          // Se a chave ainda não estiver no objeto `totais`, inicializa com 0
          if (!totais[chave]) {
            totais[chave] = 0;
          }
          // Adiciona o valor correspondente à chave
          totais[chave] += vendedor.fasesVenda[chave];
        });
      });
  
      // Atualiza o estado com os dados formatados para o gráfico
      setChartData({
        labels: Object.keys(totais),
        datasets: [
          {
            label: "Total",
            data: Object.values(totais),
            backgroundColor: [
              "#1B59F8",
              "#36A2EB",
              "#FF947A",
              "#4BC0C0",
              "#FA5C7E",
              "#a026d2",
            ],
            hoverOffset: 4,
          },
        ],
      });
  
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
    scales: {
      x: {
        display: false, // Desabilita o eixo X
        grid: {
          display: false, // Remove as linhas de grade no eixo X
        },
      },
      y: {
        display: false, // Desabilita o eixo Y
        grid: {
          display: false, // Remove as linhas de grade no eixo Y
        },
      },
    },
  };

  // Renderizar um fallback enquanto o gráfico está sendo carregado
  if (!chartData) return <p>Carregando...</p>;

  return (
    <div className="bg-white shadow rounded-xl w-full h-full p-5 space-y-5">
      <p className="text-xl font-semibold">Fases da Venda</p>
      <div className="w-full h-full">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
