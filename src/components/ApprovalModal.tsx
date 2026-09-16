import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Check, AlertCircle, X } from 'lucide-react';

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  actionTitle?: string;
  expectedRevenue?: number;
  discount?: number;
}

export const ApprovalModal: React.FC<ApprovalModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  actionTitle = 'Launch targeted retention offer',
  expectedRevenue = 18000,
  discount = 10,
}) => {
  const [agreed, setAgreed] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleLaunch = () => {
    if (!agreed) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onConfirm();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#002970] p-5 text-white flex items-start justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <ShieldCheck className="w-5 h-5 text-[#00BAF2]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Merchant Action Approval</h3>
              <p className="text-xs text-blue-200">
                Human-in-the-Loop Safeguard • Aarav Café
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80">
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#002970] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#00BAF2]" />
              <span>AI Proposal Summary</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{actionTitle}</p>
            <p className="text-xs text-slate-600 mt-0.5">
              Targets 420 inactive regulars who haven't visited Aarav Café in 3 weeks.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Offer Rate
              </span>
              <span className="text-lg font-bold text-slate-900 font-mono">
                {discount}% OFF
              </span>
              <span className="text-[10px] text-slate-500">For 7 Days</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Target Audience
              </span>
              <span className="text-lg font-bold text-slate-900 font-mono">
                420
              </span>
              <span className="text-[10px] text-slate-500">Regulars</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] uppercase font-bold text-emerald-700 block">
                Exp. Impact
              </span>
              <span className="text-lg font-bold text-emerald-700 font-mono">
                ₹{expectedRevenue.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-emerald-600">Revenue</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex justify-between">
              <span>Channel:</span>
              <span className="font-semibold text-slate-800">Paytm Consumer App Notification / SMS</span>
            </div>
            <div className="flex justify-between">
              <span>Merchant Cost Cap:</span>
              <span className="font-semibold text-slate-800 font-mono">₹4,500 maximum discount</span>
            </div>
            <div className="flex justify-between">
              <span>Auto-Stop Trigger:</span>
              <span className="font-semibold text-slate-800">Stops automatically when cap is reached</span>
            </div>
          </div>

          {/* Consent Checkbox */}
          <label className="flex items-start space-x-2.5 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#002970] focus:ring-[#002970]"
            />
            <span className="text-xs text-slate-700 leading-snug">
              I authorize Paytm VyaparMitra to launch this campaign on behalf of <strong>Aarav Café</strong>. No automated execution will occur without my consent.
            </span>
          </label>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition"
          >
            Modify Parameters
          </button>
          <button
            type="button"
            id="modal-confirm-approval-btn"
            disabled={!agreed || isProcessing}
            onClick={handleLaunch}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#002970] hover:bg-[#001d52] active:bg-[#00143a] rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center space-x-1.5"
          >
            {isProcessing ? (
              <span>Deploying Campaign...</span>
            ) : (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Authorize & Track Campaign</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
