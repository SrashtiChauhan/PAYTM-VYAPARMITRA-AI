import React from 'react';
import { 
  LayoutDashboard, 
  TrendingDown, 
  Sparkles, 
  SlidersHorizontal, 
  CheckSquare, 
  Activity, 
  ChevronRight,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { ScreenRoute } from '../types';

interface SidebarProps {
  currentRoute: ScreenRoute;
  onNavigate: (route: ScreenRoute) => void;
  leakageAlertCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onNavigate,
  leakageAlertCount = 1,
}) => {
  const navItems: {
    id: ScreenRoute;
    label: string;
    stage: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
    alert?: boolean;
  }[] = [
    {
      id: 'overview',
      label: 'Overview',
      stage: '1. MONITOR',
      icon: LayoutDashboard,
    },
    {
      id: 'revenue-insights',
      label: 'Revenue Insights',
      stage: '2. DETECT',
      icon: TrendingDown,
      badge: leakageAlertCount > 0 ? 'Leakage Alert' : undefined,
      alert: true,
    },
    {
      id: 'opportunities',
      label: 'Opportunities',
      stage: '3. DISCOVER',
      icon: Sparkles,
      badge: '3 Found',
    },
    {
      id: 'simulator',
      label: 'What-If Simulator',
      stage: '4. SIMULATE',
      icon: SlidersHorizontal,
    },
    {
      id: 'recommended-actions',
      label: 'Recommended Actions',
      stage: '5. PRIORITIZE',
      icon: CheckSquare,
      badge: 'Top Pick',
    },
    {
      id: 'campaign-results',
      label: 'Campaign Results',
      stage: '6. TRACK & LEARN',
      icon: Activity,
      badge: '92% Acc',
    },
  ];

  return (
    <aside className="w-full md:w-64 lg:w-72 bg-white border-r border-slate-200 flex flex-col shrink-0">
      {/* Agent Workflow Badge */}
      <div className="p-4 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/40">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#002970] text-white flex items-center justify-center shadow-xs">
            <Bot className="w-4 h-4 text-[#00BAF2]" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 tracking-tight block">
              Merchant Growth Agent
            </span>
            <span className="text-[11px] text-slate-500 font-medium flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
              Closed-Loop Reasoning
            </span>
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
        <div className="px-3 pt-2 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Agent Navigation
        </div>

        {navItems.map((item) => {
          const isActive = currentRoute === item.id;
          const IconComponent = item.icon;

          return (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-[#002970] text-white shadow-sm shadow-blue-900/10'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-white/15 text-[#00BAF2]'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-xs font-semibold leading-snug truncate">
                    {item.label}
                  </span>
                  <span
                    className={`block text-[10px] font-medium tracking-tight ${
                      isActive ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    {item.stage}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-1 shrink-0 ml-2">
                {item.badge && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-white/20 text-white border-white/20'
                        : item.alert
                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                        : 'bg-blue-50 text-[#002970] border-blue-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isActive ? 'text-white translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </nav>

      {/* Safety & Merchant Consent Guarantee Box */}
      <div className="p-3.5 m-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
        <div className="flex items-start space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#002970] mt-0.5 shrink-0" />
          <div className="text-[11px] leading-relaxed">
            <span className="font-semibold text-slate-800 block mb-0.5">
              Merchant Guardrail
            </span>
            AI proposes recommendations. Campaigns run <span className="font-semibold text-[#002970]">only after your explicit approval</span>.
          </div>
        </div>
      </div>
    </aside>
  );
};
