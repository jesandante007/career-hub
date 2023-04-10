import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Statistics = () => {
  const data = [
    {
      id: "A1",
      name: "new year new me",
      marks: 60,
    },
    {
      id: "A2",
      name: "g3 architects",
      marks: 60,
    },
    {
      id: "A3",
      name: "legal solutions",
      marks: 60,
    },
    {
      id: "A4",
      name: "javascript problem solving",
      marks: 60,
    },
    {
      id: "A5",
      name: "geometry genius",
      marks: 60,
    },
    {
      id: "A6",
      name: "ai universe hub",
      marks: 60,
    },
    {
      id: "A7",
      name: "quiz hero",
      marks: 60,
    },
    {
      id: "A8",
      name: "knowledge cafe",
      marks: 60,
    },
  ];

  return (
    <div className="flex justify-center items-center h-[500px]">
      <AreaChart data={data} width={700} height={450}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='id' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type='monotone' dataKey="marks" fill="#8b5cf6" stroke="#5b21b6" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
