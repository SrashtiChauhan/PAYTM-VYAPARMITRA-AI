import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Coins, 
  Clock, 
  Coffee, 
  TrendingUp, 
  CheckCircle2, 
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Flame
} from 'lucide-react';
import { ScreenRoute } from '../types';

interface OpportunitiesScreenProps {
  onNavigate: (route: ScreenRoute) => void;
}

export const OpportunitiesScreen: React.FC<OpportunitiesScreenProps> = ({ onNavigate }) => {
  const [expandedOpp2, setExpandedOpp2] = useState(false);
  const [expandedOpp3, setExpandedOpp3] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('revenue-insights')}
              className="text-slate-400 hover:text-slate-700 p-1 -ml-1 rounded-lg transition"
              title="Back to Revenue Insights"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              AI Opportunity Center
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#002970] border border-blue-200">
              <Sparkles className="w-3 h-3 mr-1 text-[#00BAF2]" />
              Opportunity Mining Engine
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            "Discover practical growth opportunities from transaction patterns."
          </p>
        </div>

        {/* Opportunity count summary */}
        <div className="flex items-center space-x-2 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
          <span>Total Addressable Growth: <strong className="text-emerald-600 font-mono">₹34,500/mo</strong></span>
        </div>
      </div>

      {/* OPPORTUNITY 1 — PRIMARY (Visually Prominent) */}
      <div 
        id="opportunity-card-primary"
        className="rounded-2xl border-2 border-[#00BAF2] bg-gradient-to-br from-white via-blue-50/30 to-blue-100/30 p-6 shadow-md relative overflow-hidden ring-4 ring-blue-500/5"
      >
        {/* Accent Banner / Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-blue-100">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-[#002970] text-white shadow-xs">
              <Sparkles className="w-3 h-3 mr-1 text-[#00BAF2]" />
              AI Recommended
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
              <Flame className="w-3 h-3 mr-1 text-rose-500" />
              Primary Action
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Rank #1 by Expected ROI
            </span>
          </div>

          <span className="text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-lg border border-slate-200 shadow-2xs font-mono">
            Opportunity ID: OPP-REC-01
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main info (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002970]">
                Opportunity 1
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                Recover Inactive Customers
              </h2>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-blue-200/80 shadow-2xs">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                Detected because:
              </span>
              <p className="text-sm font-medium text-slate-800 italic">
                "420 regular customers have not returned in the last 3 weeks."
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              These customers previously accounted for 32% of weekly beverage orders at Aarav Café. Sending a targeted Paytm retention discount nudges them back before their routine changes permanently.
            </p>
          </div>

          {/* Metrics & Action Button (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Target Customers
                </span>
                <span className="text-xl font-extrabold text-slate-900 font-mono">
                  420
                </span>
                <span className="text-[10px] text-slate-500">Regulars</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                  Potential Revenue
                </span>
                <span className="text-xl font-extrabold text-emerald-700 font-mono">
                  ₹18,000
                </span>
                <span className="text-[10px] text-emerald-600">Per Month</span>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Confidence
                </span>
                <span className="text-sm font-bold text-[#002970] mt-1 block">
                  High (94%)
                </span>
                <span className="text-[10px] text-slate-400">Transaction fit</span>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Effort Level
                </span>
                <span className="text-sm font-bold text-emerald-600 mt-1 block">
                  Low
                </span>
                <span className="text-[10px] text-slate-400">1-click discount</span>
              </div>
            </div>

            <button
              id="btn-simulate-opportunity-primary"
              onClick={() => onNavigate('simulator')}
              className="w-full px-5 py-3 rounded-xl bg-[#002970] hover:bg-[#001d52] active:bg-[#00143a] text-white text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg transition flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#00BAF2]" />
              <span>Simulate This Opportunity</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Opportunities: 2 & 3 in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* OPPORTUNITY 2 */}
        <div 
          id="opportunity-card-2"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between transition hover:border-slate-300"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Opportunity 2
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Evening Coffee + Snack Combo
                  </h3>
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                Basket Expansion
              </span>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">
                Detected because:
              </span>
              <p className="text-slate-800 italic">
                "Coffee sales are high, but snack purchases are low during evening hours."
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">
                  Potential Revenue
                </span>
                <span className="text-lg font-bold text-emerald-700 font-mono">
                  ₹10,000
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">
                  Confidence
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">
                  Medium
                </span>
              </div>
            </div>

            {expandedOpp2 && (
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2 animate-in fade-in">
                <p>
                  <strong>Insight Details:</strong> Between 5 PM and 8 PM, 78% of orders are single-item coffee cups without bakery/cookie attachments. Pairing a ₹40 cookie for ₹20 with cold brews increases average ticket from ₹110 to ₹165.
                </p>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>Effort: Medium (menu bundling)</span>
                  <span>Timeline: Ready for next cycle</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setExpandedOpp2(!expandedOpp2)}
              className="text-xs font-semibold text-[#002970] hover:underline flex items-center space-x-1"
            >
              <span>{expandedOpp2 ? 'Hide Details' : 'View Details'}</span>
              {expandedOpp2 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[11px] text-slate-400 font-medium">Secondary Priority</span>
          </div>
        </div>

        {/* OPPORTUNITY 3 */}
        <div 
          id="opportunity-card-3"
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between transition hover:border-slate-300"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#002970] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Opportunity 3
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Improve Slow Business Hours
                  </h3>
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                Capacity
              </span>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1">
                Detected because:
              </span>
              <p className="text-slate-800 italic">
                "Sales between 4 PM and 6 PM are below average."
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">
                  Potential Revenue
                </span>
                <span className="text-lg font-bold text-emerald-700 font-mono">
                  ₹6,500
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase block">
                  Confidence
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">
                  Medium
                </span>
              </div>
            </div>

            {expandedOpp3 && (
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2 animate-in fade-in">
                <p>
                  <strong>Insight Details:</strong> Seating utilization drops to 22% between 4 PM and 6 PM on weekdays. An "Afternoon Work Happy Hour" offering 15% off for coworking customers could capture Noida tech park freelancers.
                </p>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>Effort: High (marketing signage + staff shift)</span>
                  <span>Timeline: Multi-week trial</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setExpandedOpp3(!expandedOpp3)}
              className="text-xs font-semibold text-[#002970] hover:underline flex items-center space-x-1"
            >
              <span>{expandedOpp3 ? 'Hide Details' : 'View Details'}</span>
              {expandedOpp3 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[11px] text-slate-400 font-medium">Tertiary Priority</span>
          </div>
        </div>
      </div>
    </div>
  );
};
