import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ScenarioComparisonChartProps {
  currentDiscount: number;
  currentRevenueImpact: number;
  currentCost: number;
}

export const ScenarioComparisonChart: React.FC<ScenarioComparisonChartProps> = ({
  currentDiscount,
  currentRevenueImpact,
  currentCost,
}) => {
  const data = [
    {
      scenario: 'No Offer',
      revenueImpact: 2800,
      campaignCost: 0,
      netGain: 2800,
      isCurrent: currentDiscount === 0,
    },
    {
      scenario: '5% Offer',
      revenueImpact: 10700,
      campaignCost: 2200,
      netGain: 8500,
      isCurrent: currentDiscount === 5,
    },
    {
      scenario: '10% Offer (AI Best)',
      revenueImpact: 18000,
      campaignCost: 4500,
      netGain: 13500,
      isCurrent: currentDiscount === 10,
    },
  ];

  // If user selected a custom discount other than 0, 5, 10, show it dynamically
  if (currentDiscount !== 0 && currentDiscount !== 5 && currentDiscount !== 10) {
    data.push({
      scenario: `${currentDiscount}% Custom`,
      revenueImpact: currentRevenueImpact,
      campaignCost: currentCost,
      netGain: Math.max(0, currentRevenueImpact - currentCost),
      isCurrent: true,
    });
  }

  const formatCurrency = (val: number) => `₹${(val / 1000).toFixed(0)}k`;

  return (
    <div className="w-full h-64 min-h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 15, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="scenario" 
            tickLine={false} 
            axisLine={{ stroke: '#e2e8f0' }}
            tick={{ fontSize: 11, fill: '#475569', fontWeight: 500 }}
          />
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={formatCurrency}
            tick={{ fontSize: 11, fill: '#64748b' }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const item = payload[0]?.payload;
                return (
                  <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-200 text-xs">
                    <p className="font-bold text-slate-900 mb-1">{label}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between space-x-3 text-emerald-700">
                        <span>Expected Revenue:</span>
                        <span className="font-mono font-bold">₹{item.revenueImpact?.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between space-x-3 text-rose-600">
                        <span>Campaign Cost:</span>
                        <span className="font-mono font-medium">₹{item.campaignCost?.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="pt-1 mt-1 border-t border-slate-100 flex justify-between space-x-3 font-semibold text-[#002970]">
                        <span>Net Estimated Gain:</span>
                        <span className="font-mono">₹{(item.revenueImpact - item.campaignCost)?.toLocaleString('en-IN')}</span>
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
            wrapperStyle={{ fontSize: '11px', paddingBottom: '8px' }}
          />
          <Bar 
            dataKey="revenueImpact" 
            name="Revenue Impact (₹)" 
            fill="#002970" 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-rev-${index}`} 
                fill={entry.isCurrent ? '#00BAF2' : '#002970'} 
              />
            ))}
          </Bar>
          <Bar 
            dataKey="campaignCost" 
            name="Campaign Cost (₹)" 
            fill="#cbd5e1" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
