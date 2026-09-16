import React, { useState } from 'react';
import { 
  CheckSquare, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle,
  ArrowLeft,
  Flame,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { ACTION_PRIORITY_DATA } from '../data/mockData';
import { ScreenRoute, ActionItem } from '../types';
import { ApprovalModal } from '../components/ApprovalModal';

interface RecommendedActionsScreenProps {
  onNavigate: (route: ScreenRoute) => void;
  selectedDiscount: number;
}

export const RecommendedActionsScreen: React.FC<RecommendedActionsScreenProps> = ({ 
  onNavigate,
  selectedDiscount = 10,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<ActionItem>(ACTION_PRIORITY_DATA[0]);

  const handleApproveClick = (action: ActionItem) => {
    setSelectedAction(action);
    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    onNavigate('campaign-results');
  };

  return (
    <div className="space-y-6">
      {/* Header & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('simulator')}
              className="text-slate-400 hover:text-slate-700 p-1 -ml-1 rounded-lg transition"
              title="Back to What-If Simulator"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Smart Action Prioritizer
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#002970] border border-blue-200">
              <CheckSquare className="w-3 h-3 mr-1 text-[#00BAF2]" />
              AI Decision Matrix
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            "Tell the merchant what to do first."
          </p>
        </div>

        <div className="text-xs text-slate-500 self-start sm:self-auto">
          Framework: <strong>Weighted Expected Value (Impact × Confidence / Effort)</strong>
        </div>
      </div>

      {/* Short Explanation Banner */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#002970] flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 text-[#00BAF2]" />
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          "The AI ranks business actions based on expected revenue impact, urgency, effort, confidence, and risk."
        </p>
      </div>

      {/* Highlighted AI Recommendation Card */}
      <div 
        id="highlighted-ai-recommendation-card"
        className="rounded-2xl border-2 border-[#002970] bg-gradient-to-r from-blue-50/90 via-white to-blue-50/50 p-5 sm:p-6 shadow-sm relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-[#002970] text-white">
                <Sparkles className="w-3 h-3 mr-1 text-[#00BAF2]" />
                Recommended Next Action
              </span>
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                Priority: HIGH
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              "Launch the targeted retention offer first."
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
              "It addresses the detected revenue leakage and offers the highest expected impact with low implementation effort."
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="flex items-center">
                <strong className="text-emerald-700 font-mono text-sm mr-1">₹18,000</strong> Expected Revenue
              </span>
              <span className="text-slate-300">•</span>
              <span>Audience: <strong>420 Inactive Regulars</strong></span>
              <span className="text-slate-300">•</span>
              <span>Offer Rate: <strong>{selectedDiscount}% Discount</strong></span>
              <span className="text-slate-300">•</span>
              <span>Window: <strong>7 Days</strong></span>
            </div>
          </div>

          <div className="shrink-0 flex items-center">
            <button
              id="btn-approve-and-track-campaign"
              onClick={() => handleApproveClick(ACTION_PRIORITY_DATA[0])}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#002970] hover:bg-[#001d52] active:bg-[#00143a] text-white text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg transition flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Approve and Track Campaign</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* AI-Ranked Action Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              AI-Ranked Action Table
            </h3>
            <p className="text-xs text-slate-500">
              Dynamic multi-factor prioritization generated for Aarav Café
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600 self-start sm:self-auto">
            3 Actions Evaluated
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="py-3.5 px-4 sm:px-6">Priority</th>
                <th className="py-3.5 px-4">Action</th>
                <th className="py-3.5 px-4">Expected Impact</th>
                <th className="py-3.5 px-4 hidden md:table-cell">Effort</th>
                <th className="py-3.5 px-4 hidden md:table-cell">Confidence</th>
                <th className="py-3.5 px-4 hidden lg:table-cell">Risk</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {/* Row 1: HIGH */}
              <tr className="bg-rose-50/30 hover:bg-rose-50/50 transition">
                <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold bg-rose-100 text-rose-800 border border-rose-200 shadow-2xs">
                    HIGH
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="font-bold text-slate-900">
                    Launch targeted retention offer
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Recover 420 inactive regulars via Paytm consumer push
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="font-mono font-bold text-emerald-700 text-sm sm:text-base">
                    ₹18,000
                  </span>
                  <span className="text-[10px] text-slate-400 block">estimated</span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Low Effort
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                  <span className="font-semibold text-slate-700">High (94%)</span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden lg:table-cell">
                  <span className="text-amber-700 font-medium">Medium</span>
                </td>
                <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                  <button
                    id="btn-table-approve-row-1"
                    onClick={() => handleApproveClick(ACTION_PRIORITY_DATA[0])}
                    className="px-3.5 py-1.5 rounded-lg bg-[#002970] hover:bg-[#001d52] text-white text-xs font-bold transition shadow-xs"
                  >
                    Approve & Launch
                  </button>
                </td>
              </tr>

              {/* Row 2: MEDIUM */}
              <tr className="hover:bg-slate-50 transition">
                <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                    MEDIUM
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="font-semibold text-slate-900">
                    Evening combo promotion
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Pair hot coffees with snacks (5 PM – 8 PM)
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="font-mono font-bold text-slate-800 text-sm sm:text-base">
                    ₹10,000
                  </span>
                  <span className="text-[10px] text-slate-400 block">estimated</span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                    Medium Effort
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                  <span className="font-semibold text-slate-600">Medium (76%)</span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden lg:table-cell">
                  <span className="text-emerald-700 font-medium">Low</span>
                </td>
                <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                  <button
                    onClick={() => handleApproveClick(ACTION_PRIORITY_DATA[1])}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                  >
                    Schedule Later
                  </button>
                </td>
              </tr>

              {/* Row 3: LOW */}
              <tr className="hover:bg-slate-50 transition">
                <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-slate-600 border border-slate-200">
                    LOW
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="font-semibold text-slate-700">
                    Promote slow-moving products
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Clear artisanal herbal tea inventory with 15% discount
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className="font-mono font-bold text-slate-700 text-sm sm:text-base">
                    ₹4,000
                  </span>
                  <span className="text-[10px] text-slate-400 block">estimated</span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                    High Effort
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                  <span className="font-semibold text-slate-600">Medium (68%)</span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap hidden lg:table-cell">
                  <span className="text-emerald-700 font-medium">Low</span>
                </td>
                <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                  <button
                    onClick={() => handleApproveClick(ACTION_PRIORITY_DATA[2])}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                  >
                    Hold
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Approval Modal */}
      <ApprovalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleModalConfirm}
        actionTitle={selectedAction.action}
        expectedRevenue={selectedAction.expectedImpact}
        discount={selectedDiscount}
      />
    </div>
  );
};
