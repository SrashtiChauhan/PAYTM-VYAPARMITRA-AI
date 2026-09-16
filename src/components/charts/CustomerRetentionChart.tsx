import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { RETENTION_COMPARISON_DATA } from '../../data/mockData';

interface CustomerRetentionChartProps {
  height?: number;
}

export const CustomerRetentionChart: React.FC<CustomerRetentionChartProps> = ({
  height = 280,
}) => {
  return (
    <div className="w-full h-full min-h-[250px]">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={RETENTION_COMPARISON_DATA}
          margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="week" 
            tickLine={false} 
            axisLine={{ stroke: '#e2e8f0' }}
            tick={{ fontSize: 11, fill: '#64748b' }}
          />
          <YAxis 
            domain={[50, 100]} 
            tickFormatter={(val) => `${val}%`}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: '#64748b' }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-200 text-xs">
                    <p className="font-bold text-slate-800 mb-1.5">{label} Retention</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between space-x-3">
                        <span className="text-slate-500 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-slate-400 mr-1.5"></span>
                          Last Month:
                        </span>
                        <span className="font-semibold text-slate-700">
                          {payload[0]?.value}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between space-x-3">
                        <span className="text-slate-500 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-rose-500 mr-1.5"></span>
                          This Month:
                        </span>
                        <span className="font-bold text-rose-600">
                          {payload[1]?.value}%
                        </span>
                      </div>
                      <div className="pt-1 mt-1 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Active Regulars:</span>
                        <span className="font-medium text-slate-700">
                          {payload[0]?.payload?.repeatCustomerCount} customers
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            verticalAlign="top" 
            align="right"
            wrapperStyle={{ paddingBottom: '10px', fontSize: '11px' }}
          />
          <Line
            type="monotone"
            dataKey="lastMonthRate"
            name="Last Month (86% Avg)"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={{ r: 3, fill: '#94a3b8' }}
          />
          <Line
            type="monotone"
            dataKey="thisMonthRate"
            name="This Month (68% Now)"
            stroke="#e11d48"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#e11d48' }}
            activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
