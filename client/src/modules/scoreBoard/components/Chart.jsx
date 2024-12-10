import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Card } from 'flowbite-react';

const Chart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
      },
    },
    xaxis: {
      categories: ['2023', '2024', '2025', '2026'],
    },
    yaxis: {
      title: {
        text: 'GPA',
      },
    },
  };

  const series = [
    {
      name: 'GPA Score',
      data: [3.8, 4.0, 3.9, 4.0],
    },
  ];

  return (
    <Card className="mt-6">
      <div className="chart-header flex justify-between text-[#252643] font-semibold text-[30px]">
        <div>Chart</div>
      </div>
      <ApexCharts options={options} series={series} type="bar" height={350} />
    </Card>
  );
};

export default Chart;