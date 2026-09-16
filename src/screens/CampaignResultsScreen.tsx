import React from 'react';
import { 
  Activity, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles, 
  Users, 
  Coins, 
  Target, 
  BrainCircuit, 
  ArrowRight,
  RotateCcw,
  Check,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { PredictedVsActualChart } from '../components/charts/PredictedVsActualChart';
import { ScreenRoute } from '../types';

interface CampaignResultsScreenProps {
  onNavigate: (route: ScreenRoute) => void;
  selectedDiscount: number;
}

export const CampaignResultsScreen: React.FC<CampaignResultsScreenProps> = ({ 
  onNavigate,
  selectedDiscount = 10,
}) => {
  const steps = [
    { label: 'AI Prediction', desc: '120–150 regulars at 10%', status: 'completed' },
    { label: 'Merchant Approval', desc: 'Authorized by Aarav Café', status: 'completed' },
    { label: 'Action Executed', desc: '7-Day Paytm push live', status: 'completed' },
    { label: 'Actual Results Measured', desc: '138 recovered • ₹16,500', status: 'completed' },
    { label: 'AI Recommendations Improved', desc: 'Weighting matrix recalibrated', status: 'active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('recommended-actions')}
              className="text-slate-400 hover:text-slate-700 p-1 -ml-1 rounded-lg transition"
              title="Back to Recommended Actions"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Closed-Loop Growth Tracking
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
              Outcome Measured
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            "Measure actual results and improve future recommendations."
          </p>
        </div>

        <div className="self-start sm:self-auto">
          <button
            id="btn-back-to-dashboard-top"
            onClick={() => onNavigate('overview')}
            className="px-4 py-2 bg-[#002970] hover:bg-[#001d52] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>

      {/* Closed-Loop Progress Flow */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="w-4 h-4 text-[#002970]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Agentic Closed-Loop Lifecycle
            </span>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Cycle Complete • Learning Updated
          </span>
        </div>

        {/* Progress Flow Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`p-3 rounded-xl border relative ${
                step.status === 'active'
                  ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-400/20'
                  : 'bg-slate-50/90 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-slate-400 font-mono">
                  STAGE 0{idx + 1}
                </span>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  step.status === 'active'
                    ? 'bg-[#002970] text-white animate-pulse'
                    : 'bg-emerald-500 text-white'
                }`}>
                  <Check className="w-3 h-3" />
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">
                {step.label}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Summary Banner */}
      <div 
        id="campaign-summary-card"
        className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50/80 via-white to-emerald-50/40 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-start space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                Active Campaign Summary
              </span>
              <span className="text-xs font-mono text-slate-500">
                CMP-RET-7D-NOI
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-1">
              Campaign: {selectedDiscount}% Retention Offer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Targeted 420 inactive regulars at Aarav Café over a 7-day runtime.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold shadow-xs flex items-center space-x-1.5">
            <Check className="w-3.5 h-3.5" />
            <span>Status: Successful</span>
          </span>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Customers Recovered */}
        <MetricCard
          id="kpi-customers-recovered"
          title="Customers Recovered"
          value="138"
          subtext="Target window was 120–150"
          trend={{ value: "+138 regulars", isPositive: true }}
          variant="positive"
          badge="In Range"
          aiAnnotation="98% match with AI midpoint projection"
        />

        {/* 2. Additional Revenue */}
        <MetricCard
          id="kpi-additional-revenue"
          title="Additional Revenue"
          value="₹16,500"
          subtext="Net gross incremental sales"
          trend={{ value: "₹16,500", isPositive: true }}
          variant="positive"
          badge="High ROI"
          aiAnnotation="Net profit margin ~₹12,000 after discount"
        />

        {/* 3. Prediction Accuracy */}
        <MetricCard
          id="kpi-prediction-accuracy"
          title="Prediction Accuracy"
          value="92%"
          subtext="Predicted vs actual transaction match"
          trend={{ value: "92% Accuracy", isPositive: true }}
          variant="positive"
          badge="Model Calibrated"
          aiAnnotation="High predictive precision for café vertical"
        />

        {/* 4. Campaign Status */}
        <MetricCard
          id="kpi-campaign-status"
          title="Campaign Status"
          value="Successful"
          subtext="All 420 targets reached with 32.8% return rate"
          trend={{ value: "Completed", isPositive: true }}
          variant="positive"
          badge="Goal Met"
          aiAnnotation="Leakage stopped; repeat rate restored to 82%"
        />
      </div>

      {/* Predicted vs Actual Comparison Chart */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Predicted vs Actual Performance
            </h3>
            <p className="text-xs text-slate-500">
              Validating the What-If simulation accuracy against actual POS settle records
            </p>
          </div>
          <div className="flex items-center space-x-3 text-xs text-slate-600">
            <span className="flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#002970] mr-1.5"></span>
              Predicted
            </span>
            <span className="flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00BAF2] mr-1.5"></span>
              Actual
            </span>
          </div>
        </div>

        <PredictedVsActualChart />
      </div>

      {/* AI Learning Message Card */}
      <div 
        id="ai-learning-card"
        className="rounded-2xl border border-[#002970] bg-gradient-to-r from-slate-900 via-[#002970] to-blue-950 p-5 sm:p-6 text-white shadow-md"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#00BAF2]/20 border border-[#00BAF2]/40 text-[#00BAF2] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00BAF2] bg-white/10 px-2 py-0.5 rounded">
                  AI Learning & Auto-Tuning
                </span>
                <span className="text-xs text-blue-200 font-medium">
                  Model Weight Updated
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-white mt-1.5 leading-relaxed">
                "The campaign performed close to expectations. Future retention recommendations will use this result to improve prediction accuracy."
              </p>
              <p className="text-xs text-blue-200/80 mt-1">
                Learned parameter: Aarav Café regulars show a 0.32 price elasticity for 10% discounts on weekend mornings. Future simulations will weight breakfast beverages higher.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <button
              id="btn-back-to-dashboard"
              onClick={() => onNavigate('overview')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00BAF2] hover:bg-[#38cbf9] active:bg-[#00a8dc] text-[#002970] text-sm font-extrabold shadow-md shadow-cyan-500/20 transition flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 transition-transform group-hover:-rotate-45" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
