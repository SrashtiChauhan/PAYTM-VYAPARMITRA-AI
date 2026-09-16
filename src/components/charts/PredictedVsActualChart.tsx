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
} from 'recharts';

export const PredictedVsActualChart: React.FC = () => {
  const data = [
    {
      metric: 'Customers Recovered',
      predicted: 135, // midpoint of 120-150
      predictedRange: '120–150',
      actual: 138,
      unit: 'customers',
      accuracy: '98%',
    },
    {
      metric: 'Revenue Recovered (₹)',
      predicted: 18000,
      predictedRange: '₹18,000',
      actual: 16500,
      unit: '₹',
      accuracy: '91.7%',
    },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Customers Recovered Comparison */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Customers Recovered
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Within 120–150 Range
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Predicted Range (120–150):</span>
                <span className="font-semibold text-slate-700 font-mono">135 avg</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-blue-300 h-3 rounded-full" 
                  style={{ width: '85%' }}
                  title="Target window 120-150"
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-700 mb-1 font-semibold">
                <span className="text-[#002970] flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
                  Actual Result:
                </span>
                <span className="font-bold text-emerald-600 font-mono text-sm">
                  138 Customers
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-emerald-500 h-3 rounded-full" 
                  style={{ width: '87%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 flex justify-between">
            <span>Accuracy: <strong className="text-emerald-700">98%</strong></span>
            <span>Variance: +3 from midpoint</span>
          </div>
        </div>

        {/* Revenue Impact Comparison */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Additional Revenue
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#002970] border border-blue-200">
              91.7% of AI Target
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>AI Predicted Target:</span>
                <span className="font-semibold text-slate-700 font-mono">₹18,000</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-[#002970] h-3 rounded-full" 
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-700 mb-1 font-semibold">
                <span className="text-[#002970] flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#00BAF2] mr-1.5"></span>
                  Actual Revenue Achieved:
                </span>
                <span className="font-bold text-[#002970] font-mono text-sm">
                  ₹16,500
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-[#00BAF2] h-3 rounded-full" 
                  style={{ width: '91.7%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 flex justify-between">
            <span>Accuracy: <strong className="text-slate-800">92% Overall</strong></span>
            <span>Net Profit After Discount: ₹12,000+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
