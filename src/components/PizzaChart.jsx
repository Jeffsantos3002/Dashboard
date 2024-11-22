import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import data from "../../data"; // Certifique-se de que o caminho está correto

// Registrar os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default function PizzaChart() {
  const [chartData, setChartData] = useState(null); // Estado para armazenar os dados do gráfico

  // Função para calcular os totais e preparar os dados do gráfico
  const atualizarGrafico = () => {
    const totais = {
      "Propostas Enviadas": 0,
      "Propostas Visualizadas": 0,
      "Conversões para SDR": 0,
      "Conversões para SIM": 0,
      "Conversões para Propostas": 0,
      "Conversões para Venda": 0,
    };

    data.salesData.forEach((vendedor) => {
      totais["Propostas Enviadas"] += vendedor.fasesVenda.propostasEnviadas;
      totais["Propostas Visualizadas"] += vendedor.fasesVenda.propostasVisualizadas;
      totais["Conversões para SDR"] += vendedor.fasesVenda.conversoesParaSDR;
      totais["Conversões para SIM"] += vendedor.fasesVenda.conversoesParaSIM;
      totais["Conversões para Propostas"] += vendedor.fasesVenda.conversoesParaPropostas;
      totais["Conversões para Venda"] += vendedor.fasesVenda.conversoesParaVenda;
    });

    // Atualizar o estado com os dados formatados para o gráfico
    setChartData({
      labels: Object.keys(totais),
      datasets: [
        {
          label: "Fases da Venda",
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
  };

  // Atualizar os dados do gráfico sempre que os dados de `data` mudarem
  useEffect(() => {
    atualizarGrafico();
  }, [data.salesData]);

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
