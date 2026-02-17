import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#00FF88', '#4F9CF9', '#A855F7', '#FFB800', '#FF4444', '#FF69B4'];

const IncomeChart = ({ data }) => {
  const chartData = data.map(source => {
    const amount = source.currency === 'HKD' ? source.amount / 7.8 : source.amount;
    return {
      name: source.name,
      value: amount,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(entry) => `${entry.name}: $${entry.value.toFixed(0)}`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1F1F1F', 
            border: '1px solid #2A2A2A',
            borderRadius: '8px',
          }}
          formatter={(value) => `$${value.toFixed(2)}`}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default IncomeChart;
