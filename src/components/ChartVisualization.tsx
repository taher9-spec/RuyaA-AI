import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ChartVisualizationProps {
  title?: string;
  data?: Array<{ time: string; price: number; volume?: number }>;
  type?: "gold" | "forex";
  className?: string;
}

const ChartVisualization = ({
  title = "Gold Price Movement",
  data = [
    { time: "09:00", price: 1980 },
    { time: "10:00", price: 1985 },
    { time: "11:00", price: 1978 },
    { time: "12:00", price: 1995 },
    { time: "13:00", price: 2003 },
    { time: "14:00", price: 2010 },
  ],
  type = "gold",
  className = "",
}: ChartVisualizationProps) => {
  const maxPrice = Math.max(...data.map((d) => d.price));
  const minPrice = Math.min(...data.map((d) => d.price));
  const priceRange = maxPrice - minPrice;

  const currentPrice = data[data.length - 1]?.price || 0;
  const previousPrice = data[data.length - 2]?.price || 0;
  const priceChange = currentPrice - previousPrice;
  const isPositive = priceChange >= 0;

  return (
    <div
      className={`bg-slate-900 rounded-xl p-6 border border-slate-700 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="h-5 w-5 text-emerald-500" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-500" />
          )}
          <span
            className={`font-bold ${isPositive ? "text-emerald-500" : "text-red-500"}`}
          >
            {isPositive ? "+" : ""}
            {priceChange.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="relative h-48 mb-4">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 50}
              x2="400"
              y2={i * 50}
              stroke="#334155"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}

          {/* Price line */}
          <motion.path
            d={`M ${data
              .map((point, index) => {
                const x = (index / (data.length - 1)) * 380 + 10;
                const y = 180 - ((point.price - minPrice) / priceRange) * 160;
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}`}
            fill="none"
            stroke={type === "gold" ? "#f59e0b" : "#3b82f6"}
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 380 + 10;
            const y = 180 - ((point.price - minPrice) / priceRange) * 160;
            return (
              <motion.circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill={type === "gold" ? "#f59e0b" : "#3b82f6"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              />
            );
          })}
        </svg>

        {/* Price labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400">
          <span>${maxPrice.toFixed(0)}</span>
          <span>${((maxPrice + minPrice) / 2).toFixed(0)}</span>
          <span>${minPrice.toFixed(0)}</span>
        </div>
      </div>

      {/* Time labels */}
      <div className="flex justify-between text-xs text-slate-400 px-2">
        {data.map((point, index) => (
          <span key={index}>{point.time}</span>
        ))}
      </div>

      {/* Current price display */}
      <div className="mt-4 p-3 bg-slate-800 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Current Price:</span>
          <span className="text-2xl font-bold text-white">
            ${currentPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartVisualization;
