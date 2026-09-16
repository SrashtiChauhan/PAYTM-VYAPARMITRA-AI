import React from 'react';
import { 
  TrendingDown, 
  AlertOctagon, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Store, 
  Users, 
  Coins, 
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { RevenueChart } from '../components/charts/RevenueChart';
import { CustomerRetentionChart } from '../components/charts/CustomerRetentionChart';
import { ScreenRoute } from '../types';

interface DashboardScreenProps {
  onNavigate: (route: ScreenRoute) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Top Header & Context */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Merchant Growth Dashboard
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              ● Live POS Sync
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Real-time analytics and autonomous growth intelligence for <span className="font-semibold text-slate-700">Aarav Café</span> (Noida).
          </p>
        </div>

        {/* Action quick jump / Date tag */}
        <div className="flex items-center space-x-2 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Last 30 Days: <strong>Aug 17 – Sep 15</strong></span>
        </div>
      </div>

      {/* Prominent AI Alert Card: Revenue Leakage Detected */}
      <div 
        id="dashboard-revenue-leakage-alert"
        className="rounded-2xl border-2 border-rose-300 bg-gradient-to-r from-rose-50/90 via-white to-rose-50/50 p-5 sm:p-6 shadow-sm relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-600/20">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md">
                  AI Alert • Critical
                </span>
                <span className="text-xs font-semibold text-rose-800">
                  Revenue Leakage Detected
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                "Your repeat customer rate has dropped by 18% this month."
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                420 regular customers have not returned in the last 3 weeks.
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs">
                <span className="text-slate-600 font-medium">
                  Estimated revenue at risk:
                </span>
                <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white font-bold font-mono text-sm shadow-xs">
                  ₹18,000/month
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-rose-700 font-medium">
                  Confidence: High (94%)
                </span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center self-start md:self-center">
            <button
              id="btn-view-revenue-insight"
              onClick={() => onNavigate('revenue-insights')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-md shadow-rose-600/20 hover:shadow-lg transition-all flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>View Revenue Insight</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Total Revenue */}
        <MetricCard
          id="kpi-total-revenue"
          title="Total Revenue"
          value="₹1,24,500"
          subtext="Monthly gross billing across POS & QR"
          trend={{ value: "+2.1% vs avg", isPositive: true }}
          variant="default"
          aiAnnotation="Aggregated from 1,280 transactions"
        />

        {/* 2. Revenue Growth */}
        <MetricCard
          id="kpi-revenue-growth"
          title="Revenue Growth"
          value="-8.4%"
          subtext="Drop in current cycle velocity"
          trend={{ value: "-8.4%", isDanger: true }}
          variant="danger"
          badge="Declining"
          aiAnnotation="Sharp fall concentrated in repeat orders"
        />

        {/* 3. Repeat Customers */}
        <MetricCard
          id="kpi-repeat-customers"
          title="Repeat Customers"
          value="68%"
          subtext="Historical baseline was 86%"
          trend={{ value: "-18% drop", isWarning: true }}
          variant="warning"
          badge="High Churn"
          aiAnnotation="420 regulars missing last 21 days"
        />

        {/* 4. Revenue at Risk */}
        <MetricCard
          id="kpi-revenue-at-risk"
          title="Revenue at Risk"
          value="₹18,000"
          subtext="Projected monthly loss if unaddressed"
          trend={{ value: "Urgent", isDanger: true }}
          variant="danger"
          badge="Action Required"
          aiAnnotation="Addressable via retention intervention"
        />
      </div>

      {/* Top AI Recommendation Small Card */}
      <div 
        id="dashboard-top-ai-recommendation"
        className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-[#002970] text-[#00BAF2] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002970]">
                Top AI Recommendation
              </span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-blue-100 text-blue-800 font-semibold">
                Rank #1
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              "Launch a targeted retention offer to recover inactive regular customers."
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 self-end sm:self-center">
          <button
            onClick={() => onNavigate('simulator')}
            className="px-3.5 py-1.5 text-xs font-bold text-[#002970] hover:text-white bg-white hover:bg-[#002970] border border-[#002970]/30 rounded-lg transition shadow-xs flex items-center space-x-1"
          >
            <span>Simulate Offer</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onNavigate('recommended-actions')}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#002970] hover:bg-[#001d52] rounded-lg transition shadow-xs flex items-center space-x-1"
          >
            <span>Review Actions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Data Visualizations Grid: Revenue Trend & Customer Retention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Revenue Trajectory (Last 6 Weeks)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Weekly gross revenue with leakage divergence starting Week 4
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-2 py-1 rounded bg-slate-100 text-slate-700">
              ₹24.2k Current
            </span>
          </div>

          <div className="mt-4">
            <RevenueChart height={240} />
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Dashed line: Expected baseline trajectory</span>
            <span className="text-rose-600 font-semibold">-32% vs Week 2 peak</span>
          </div>
        </div>

        {/* Customer Retention Chart */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Customer Retention Trend (Monthly Comparison)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Repeat customer visitation rates: Last Month vs Current Month
              </p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
              -18% Decline
            </span>
          </div>

          <div className="mt-4">
            <CustomerRetentionChart height={240} />
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Critical threshold: &lt;75% triggers auto-alert</span>
            <span className="text-slate-700 font-medium">Aarav Café: Currently at 68%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
