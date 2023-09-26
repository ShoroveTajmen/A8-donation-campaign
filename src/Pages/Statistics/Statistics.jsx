/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";

const Statistics = () => {
  const [donateCard, setDonateCard] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const cardItem = JSON.parse(localStorage.getItem("card"));
    if (cardItem) {
      setDonateCard(cardItem);
    }
  }, []);

  const myDonation = ((donateCard.length / data.length) * 100).toFixed(1);
  const totalDonation = (100 - myDonation).toFixed(1);

  const pieData = [
    { name: "My Donation", value: parseFloat(myDonation) },
    { name: "Total Donation", value: parseFloat(totalDonation) },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    // eslint-disable-next-line no-unused-vars
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="mt-4 md:mt-10">
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={200}
            fill="#00C49F"
            dataKey="value" 
            label={renderCustomizedLabel}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center gap-2 mb-5 md:mb-0">
        <h1>Your Donation</h1>
        <hr className="bg-[#00C49F] w-[50px] md:w-[100px] h-[12px] mr-[50px] " />
        <h1>Total Donation</h1>
        <hr className="bg-[#FF444A] w-[50px] md:w-[100px] h-[12px]" />
      </div>
    </div>
  );
};

export default Statistics;
