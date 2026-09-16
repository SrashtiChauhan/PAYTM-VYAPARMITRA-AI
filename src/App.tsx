import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardScreen } from './screens/DashboardScreen';
import { RevenueInsightsScreen } from './screens/RevenueInsightsScreen';
import { OpportunitiesScreen } from './screens/OpportunitiesScreen';
import { SimulatorScreen } from './screens/SimulatorScreen';
import { RecommendedActionsScreen } from './screens/RecommendedActionsScreen';
import { CampaignResultsScreen } from './screens/CampaignResultsScreen';
import { ScreenRoute } from './types';
import { 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  Bot, 
  Layers,
  ArrowRight,
  TrendingUp,
  Store
} from 'lucide-react';

export default function App() {
  // Parse initial route from path or hash
  const getInitialRoute = (): ScreenRoute => {
    const path = window.location.pathname.replace(/^\//, '');
    if (path === 'revenue-insights') return 'revenue-insights';
    if (path === 'opportunities') return 'opportunities';
    if (path === 'simulator') return 'simulator';
    if (path === 'recommended-actions') return 'recommended-actions';
    if (path === 'campaign-results') return 'campaign-results';

    const hash = window.location.hash.replace(/^#\/?/, '');
    if (hash === 'revenue-insights') return 'revenue-insights';
    if (hash === 'opportunities') return 'opportunities';
    if (hash === 'simulator') return 'simulator';
    if (hash === 'recommended-actions') return 'recommended-actions';
    if (hash === 'campaign-results') return 'campaign-results';

    return 'overview';
  };

  const [currentRoute, setCurrentRoute] = useState<ScreenRoute>(getInitialRoute);
  const [selectedDiscount, setSelectedDiscount] = useState<number>(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Sync route with browser history
  const handleNavigate = (route: ScreenRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const path = route === 'overview' ? '/' : `/${route}`;
    if (window.location.pathname !== path) {
      try {
        window.history.pushState({ route }, '', path);
      } catch {
        window.location.hash = route;
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Main Navigation Header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Sub-header / Agent Journey Quick Step Bar */}
      <div className="bg-white border-b border-slate-200/90 py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <span className="font-bold text-[#002970] uppercase tracking-wider flex items-center">
              <Bot className="w-3.5 h-3.5 mr-1 text-[#00BAF2]" />
              Agentic Flow:
            </span>
            <div className="flex items-center space-x-1.5 font-medium">
              <button 
                onClick={() => handleNavigate('overview')}
                className={`px-2 py-0.5 rounded transition ${currentRoute === 'overview' ? 'bg-[#002970] text-white font-bold' : 'hover:text-slate-800'}`}
              >
                1. Monitor
              </button>
              <span className="text-slate-300">→</span>
              <button 
                onClick={() => handleNavigate('revenue-insights')}
                className={`px-2 py-0.5 rounded transition ${currentRoute === 'revenue-insights' ? 'bg-rose-600 text-white font-bold' : 'hover:text-slate-800'}`}
              >
                2. Detect Leakage
              </button>
              <span className="text-slate-300">→</span>
              <button 
                onClick={() => handleNavigate('opportunities')}
                className={`px-2 py-0.5 rounded transition ${currentRoute === 'opportunities' ? 'bg-[#002970] text-white font-bold' : 'hover:text-slate-800'}`}
              >
                3. Discover Opps
              </button>
              <span className="text-slate-300">→</span>
              <button 
                onClick={() => handleNavigate('simulator')}
                className={`px-2 py-0.5 rounded transition ${currentRoute === 'simulator' ? 'bg-[#002970] text-white font-bold' : 'hover:text-slate-800'}`}
              >
                4. Simulate What-If
              </button>
              <span className="text-slate-300">→</span>
              <button 
                onClick={() => handleNavigate('recommended-actions')}
                className={`px-2 py-0.5 rounded transition ${currentRoute === 'recommended-actions' ? 'bg-[#002970] text-white font-bold' : 'hover:text-slate-800'}`}
              >
                5. Prioritize & Approve
              </button>
              <span className="text-slate-300">→</span>
              <button 
                onClick={() => handleNavigate('campaign-results')}
                className={`px-2 py-0.5 rounded transition ${currentRoute === 'campaign-results' ? 'bg-emerald-600 text-white font-bold' : 'hover:text-slate-800'}`}
              >
                6. Track & Learn
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-slate-500 font-mono text-[11px]">
            <span>Persona: <strong>Aarav Café (Noida)</strong></span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-sans font-semibold">Guardrail: Consent Required</span>
          </div>
        </div>
      </div>

      {/* Mobile Top Toggle */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center space-x-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span>Navigation Menu</span>
        </button>
        <span className="text-xs font-semibold text-[#002970]">
          {currentRoute.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      {/* Main App Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex">
          <Sidebar currentRoute={currentRoute} onNavigate={handleNavigate} />
        </div>

        {/* Mobile Slide-over Sidebar Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex">
            <div 
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative z-50 w-72 bg-white h-full shadow-2xl flex flex-col">
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">VyaparMitra AI</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <Sidebar currentRoute={currentRoute} onNavigate={handleNavigate} />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {currentRoute === 'overview' && (
            <DashboardScreen onNavigate={handleNavigate} />
          )}
          {currentRoute === 'revenue-insights' && (
            <RevenueInsightsScreen onNavigate={handleNavigate} />
          )}
          {currentRoute === 'opportunities' && (
            <OpportunitiesScreen onNavigate={handleNavigate} />
          )}
          {currentRoute === 'simulator' && (
            <SimulatorScreen 
              onNavigate={handleNavigate}
              selectedDiscount={selectedDiscount}
              setSelectedDiscount={setSelectedDiscount}
            />
          )}
          {currentRoute === 'recommended-actions' && (
            <RecommendedActionsScreen 
              onNavigate={handleNavigate}
              selectedDiscount={selectedDiscount}
            />
          )}
          {currentRoute === 'campaign-results' && (
            <CampaignResultsScreen 
              onNavigate={handleNavigate}
              selectedDiscount={selectedDiscount}
            />
          )}
        </main>
      </div>

      {/* Footer / Hackathon Metadata & Transparency */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[#002970]">Paytm VyaparMitra AI</span>
            <span>—</span>
            <span>"Your AI Business Partner for Smarter Merchant Growth"</span>
          </div>
          <div className="flex items-center space-x-3 text-[11px] text-slate-400">
            <span>Paytm Build for India AI Hackathon • Merchant Growth AI Track</span>
            <span>•</span>
            <span>Synthetic merchant data (Aarav Café)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
