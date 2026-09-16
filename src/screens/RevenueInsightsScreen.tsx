import React from 'react';
import { 
  ShieldAlert, 
  ArrowRight, 
  TrendingDown, 
  UserX, 
  AlertTriangle, 
  Sparkles, 
  HelpCircle,
  Clock,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { CustomerRetentionChart } from '../components/charts/CustomerRetentionChart';
import { ScreenRoute } from '../types';

interface RevenueInsightsScreenProps {
  onNavigate: (route: ScreenRoute) => void;
}

export const RevenueInsightsScreen: React.FC<RevenueInsightsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Back button & Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('overview')}
              className="text-slate-400 hover:text-slate-700 p-1 -ml-1 rounded-lg transition"
              title="Back to Overview"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Revenue Leakage Detector
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              <ShieldAlert className="w-3 h-3 mr-1" />
              AI Detected
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            "Identify hidden revenue loss before it becomes a bigger problem."
          </p>
        </div>

        <div className="self-start sm:self-auto">
          <button
            id="btn-find-growth-opportunities-top"
            onClick={() => onNavigate('opportunities')}
            className="px-4 py-2 bg-[#002970] hover:bg-[#001d52] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center space-x-1.5"
          >
            <span>Find Growth Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Warning Status Banner */}
      <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wide bg-rose-600 text-white">
                Revenue Leakage Detected
              </span>
              <span className="text-xs font-semibold text-rose-800">
                Segment: Inactive Regulars (Aarav Café)
              </span>
            </div>
            <p className="text-xs text-rose-700 mt-0.5">
              Anomaly flag raised: 420 previously loyal customers have dropped to zero transactions over the past 21 days.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Repeat Customer Decline */}
        <div 
          id="insight-card-1"
          className="rounded-2xl border border-rose-200 bg-white p-5 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Repeat Customer Decline
              </span>
              <span className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                <TrendingDown className="w-4 h-4" />
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold text-slate-900 font-mono">
                  68%
                </span>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  -18% Change
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Current month rate vs historical benchmark
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Previous Month</span>
                <span className="font-bold text-slate-700 font-mono">86%</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Current Month</span>
                <span className="font-bold text-rose-600 font-mono">68%</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-500 flex items-center">
            <Sparkles className="w-3 h-3 text-[#00BAF2] mr-1 shrink-0" />
            <span>AI Insight: Abnormal decline for weekend mornings</span>
          </div>
        </div>

        {/* Card 2: Inactive Regular Customers */}
        <div 
          id="insight-card-2"
          className="rounded-2xl border border-amber-200 bg-white p-5 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Inactive Regular Customers
              </span>
              <span className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
                <UserX className="w-4 h-4" />
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold text-slate-900 font-mono">
                  420
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Customers
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                No purchase in the last 3 weeks
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-500">
              <div className="flex justify-between">
                <span>Avg. Past Visit Frequency:</span>
                <span className="font-semibold text-slate-700">2.4x / week</span>
              </div>
              <div className="flex justify-between">
                <span>Avg. Ticket Size:</span>
                <span className="font-semibold text-slate-700 font-mono">₹130</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-500 flex items-center">
            <Clock className="w-3 h-3 text-amber-500 mr-1 shrink-0" />
            <span>Window: 21 consecutive days of dormancy</span>
          </div>
        </div>

        {/* Card 3: Estimated Revenue at Risk */}
        <div 
          id="insight-card-3"
          className="rounded-2xl border border-rose-300 bg-gradient-to-br from-white to-rose-50/40 p-5 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                Estimated Revenue at Risk
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                Confidence: High
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold text-rose-600 font-mono">
                  ₹18,000
                </span>
                <span className="text-xs font-medium text-slate-500">
                  /month
                </span>
              </div>
              <p className="text-xs text-rose-700 mt-1">
                Direct gross margin loss if regulars permanently churn
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-rose-100 space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Loss Rate:</span>
                <span className="font-semibold text-rose-600 font-mono">~₹600 / day</span>
              </div>
              <div className="flex justify-between">
                <span>Recovery Window:</span>
                <span className="font-semibold text-slate-700">Next 7–10 days</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-rose-700 font-medium flex items-center">
            <ShieldAlert className="w-3 h-3 text-rose-600 mr-1 shrink-0" />
            <span>Highest impact opportunity for Aarav Café</span>
          </div>
        </div>
      </div>

      {/* Main Analysis Grid: Line Chart & AI Analysis Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Retention Line Chart (7 cols) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Repeat Customer Rate Comparison
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tracking weekly repeat rate for Aarav Café: Last Month (gray) vs This Month (red)
                </p>
              </div>
            </div>
            <div className="mt-4">
              <CustomerRetentionChart height={260} />
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Baseline established across 90 days of Paytm QR records</span>
            <span className="text-rose-600 font-semibold">Downturn accelerates in Week 3 & 4</span>
          </div>
        </div>

        {/* AI Analysis Panel (5 cols) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-[#002970] text-[#00BAF2] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">AI Deep Analysis</h3>
                <p className="text-[11px] text-slate-500">Merchant Growth Copilot Diagnostics</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {/* Heading 1: What is happening? */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center text-[#002970]">
                  What is happening?
                </h4>
                <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">
                  "Regular customers are visiting less frequently, causing a decline in repeat purchases."
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Transaction telemetry indicates average inter-visit days lengthened from 3.2 days to 16.8 days among the top 20% spending regulars.
                </p>
              </div>

              {/* Heading 2: Why does it matter? */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80">
                <h4 className="text-xs font-bold text-[#002970] uppercase tracking-wider flex items-center">
                  Why does it matter?
                </h4>
                <p className="text-sm text-slate-800 font-medium mt-1.5 leading-relaxed">
                  "Recovering existing customers may require less effort than acquiring new customers."
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  At Aarav Café, existing customers spend 35% more per order than walk-in first timers, providing predictable daily cash flow.
                </p>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              id="btn-find-growth-opportunities"
              onClick={() => onNavigate('opportunities')}
              className="w-full px-5 py-3 rounded-xl bg-[#002970] hover:bg-[#001d52] active:bg-[#00143a] text-white text-sm font-bold shadow-md shadow-blue-900/15 hover:shadow-lg transition-all flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Find Growth Opportunities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
