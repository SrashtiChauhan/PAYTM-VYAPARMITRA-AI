import React, { useState } from 'react';
import { 
  Store, 
  Bell, 
  User, 
  Sparkles, 
  CheckCircle2, 
  ShieldAlert, 
  ChevronDown,
  Info
} from 'lucide-react';
import { MERCHANT_PROFILE } from '../data/mockData';
import { ScreenRoute } from '../types';

interface HeaderProps {
  currentRoute: ScreenRoute;
  onNavigate: (route: ScreenRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-[#002970] text-white border-b border-[#003b95] sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg bg-[#00BAF2] flex items-center justify-center font-black text-[#002970] shadow-sm tracking-tight text-lg">
                P
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg tracking-tight text-white">
                    Paytm VyaparMitra <span className="text-[#00BAF2] font-extrabold">AI</span>
                  </span>
                  <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-200 border border-white/15">
                    <Sparkles className="w-3 h-3 mr-1 text-[#00BAF2]" />
                    Merchant Growth Copilot
                  </span>
                </div>
                <p className="hidden lg:block text-xs text-slate-300 font-normal">
                  "Your AI Business Partner for Smarter Merchant Growth"
                </p>
              </div>
            </div>
          </div>

          {/* Center / Prototype context banner */}
          <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/40 border border-slate-700/50 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Paytm Build for India AI Hackathon</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Synthetic Data Simulation</span>
          </div>

          {/* Right Controls: Merchant Profile & Notifications */}
          <div className="flex items-center space-x-3">
            {/* Merchant Identity Card */}
            <div className="flex items-center space-x-3 bg-white/10 hover:bg-white/15 transition-colors px-3 py-1.5 rounded-lg border border-white/10">
              <div className="w-7 h-7 rounded-md bg-[#00BAF2]/20 border border-[#00BAF2]/40 flex items-center justify-center text-[#00BAF2]">
                <Store className="w-4 h-4" />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-semibold text-white leading-tight flex items-center space-x-1">
                  <span>{MERCHANT_PROFILE.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[11px] text-slate-300">
                  {MERCHANT_PROFILE.city} • {MERCHANT_PROFILE.businessType}
                </div>
              </div>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                id="header-notification-btn"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00BAF2]"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#002970]"></span>
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 text-slate-800 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#002970]" />
                      <h3 className="text-sm font-semibold text-slate-900">AI Agent Alerts</h3>
                    </div>
                    <span className="text-xs bg-rose-50 text-rose-700 font-medium px-2 py-0.5 rounded-full border border-rose-200">
                      1 Critical Leakage
                    </span>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div 
                      onClick={() => {
                        setShowNotifications(false);
                        onNavigate('revenue-insights');
                      }}
                      className="p-3 bg-rose-50/70 hover:bg-rose-50 rounded-lg border border-rose-200 cursor-pointer transition"
                    >
                      <div className="flex items-start space-x-2.5">
                        <ShieldAlert className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-rose-900">
                            Revenue Leakage Detected
                          </p>
                          <p className="text-xs text-rose-700 mt-0.5 leading-relaxed">
                            Repeat customer rate down 18%. 420 regulars at risk (~₹18,000/mo).
                          </p>
                          <span className="inline-block mt-1.5 text-[11px] font-semibold text-[#002970] hover:underline">
                            Inspect Leakage →
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-xs text-slate-600">
                          Paytm Soundbox & POS Terminal Active (Sync 2m ago)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                id="header-profile-btn"
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center space-x-1 p-1 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 text-[#002970] font-bold text-xs flex items-center justify-center border border-white/30">
                  <User className="w-4 h-4" />
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 text-slate-800 p-3 z-50">
                  <div className="pb-2 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-900">{MERCHANT_PROFILE.name}</p>
                    <p className="text-[11px] text-slate-500">{MERCHANT_PROFILE.location}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">Terminal: {MERCHANT_PROFILE.posTerminalId}</p>
                  </div>
                  <div className="py-2 text-xs text-slate-600 space-y-1.5">
                    <div className="flex justify-between items-center py-1">
                      <span>UPI QR ID</span>
                      <span className="font-mono text-[11px] text-slate-500">{MERCHANT_PROFILE.qrId}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span>AI Model</span>
                      <span className="text-emerald-600 font-semibold text-[11px]">VyaparMitra-v2</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center text-[11px] text-slate-500">
                    <Info className="w-3 h-3 mr-1 text-slate-400" />
                    <span>Hackathon Sandbox Mode</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
