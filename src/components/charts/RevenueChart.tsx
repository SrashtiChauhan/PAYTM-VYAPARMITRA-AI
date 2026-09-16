import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { REVENUE_TREND_DATA } from '../../data/mockData';

interface RevenueChartProps {
  height?: number;
  showComparison?: boolean;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ 
  height = 280,
  showComparison = true
}) => {
  const formatCurrency = (value: number) => `₹${(value / 1000).toFixed(0)}k`;

  return (
    <div className="w-full h-full min-h-[250px]">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={REVENUE_TREND_DATA}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#002970" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#002970" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="previousGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="period" 
            tickLine={false} 
            axisLine={{ stroke: '#e2e8f0' }}
            tick={{ fontSize: 11, fill: '#64748b' }}
          />
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={formatCurrency}
            tick={{ fontSize: 11, fill: '#64748b' }}
            domain={[20000, 40000]}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-200 text-xs">
                    <p className="font-bold text-slate-800 mb-1">{label}</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between space-x-3">
                        <span className="text-slate-500 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-[#002970] mr-1.5"></span>
                          Current Revenue:
                        </span>
                        <span className="font-bold text-[#002970] font-mono">
                          ₹{Number(payload[0]?.value).toLocaleString('en-IN')}
                        </span>
                      </div>
                      {showComparison && payload[1] && (
                        <div className="flex items-center justify-between space-x-3">
                          <span className="text-slate-500 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-slate-400 mr-1.5"></span>
                            Target Baseline:
                          </span>
                          <span className="font-medium text-slate-600 font-mono">
                            ₹{Number(payload[1]?.value).toLocaleString('en-IN')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          {showComparison && (
            <Area
              type="monotone"
              dataKey="previousRevenue"
              stroke="#94a3b8"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              fillOpacity={1}
              fill="url(#previousGradient)"
              name="Previous Expected"
            />
          )}
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#002970"
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#revenueGradient)"
            name="Actual Revenue"
          />
          <ReferenceLine
            x="Week 4"
            stroke="#e11d48"
            strokeDasharray="3 3"
            label={{
              value: 'Leakage Onset',
              fill: '#e11d48',
              fontSize: 10,
              position: 'top',
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
