import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  ArrowRight, 
  Sparkles, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft,
  Users,
  Coins,
  TrendingUp,
  Percent
} from 'lucide-react';
import { ScenarioComparisonChart } from '../components/charts/ScenarioComparisonChart';
import { calculateSimulation } from '../data/mockData';
import { ScreenRoute } from '../types';

interface SimulatorScreenProps {
  onNavigate: (route: ScreenRoute) => void;
  selectedDiscount: number;
  setSelectedDiscount: (val: number) => void;
}

export const SimulatorScreen: React.FC<SimulatorScreenProps> = ({ 
  onNavigate,
  selectedDiscount,
  setSelectedDiscount,
}) => {
  const [sliderVal, setSliderVal] = useState(selectedDiscount || 10);
  const [customerSegment, setCustomerSegment] = useState('Inactive Regular Customers');
  const [actionType, setActionType] = useState('Retention Discount');
  const [duration, setDuration] = useState('7 Days');
  const [isSimulating, setIsSimulating] = useState(false);
  const [lastRunAt, setLastRunAt] = useState<string>('Just now');

  // Dynamic simulation calculations
  const sim = calculateSimulation(sliderVal);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSelectedDiscount(sliderVal);
      setIsSimulating(false);
      setLastRunAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 350);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setSliderVal(val);
    setSelectedDiscount(val);
  };

  const handleResetToOptimal = () => {
    setSliderVal(10);
    setSelectedDiscount(10);
  };

  return (
    <div className="space-y-6">
      {/* Page Title & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('opportunities')}
              className="text-slate-400 hover:text-slate-700 p-1 -ml-1 rounded-lg transition"
              title="Back to Opportunities"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              What-If Business Simulator
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#002970] border border-blue-200">
              <SlidersHorizontal className="w-3 h-3 mr-1 text-[#00BAF2]" />
              AI Predictive Engine
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            "Test a business decision before spending money."
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <span>Target Merchant: <strong className="text-slate-800">Aarav Café</strong></span>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT SIDE — INPUT PANEL (5 cols) */}
        <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <span>Simulation Parameters</span>
            </h2>
            <button
              type="button"
              onClick={handleResetToOptimal}
              className="text-xs font-semibold text-[#002970] hover:underline flex items-center space-x-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset to 10% (AI Pick)</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Customer Segment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Customer Segment
              </label>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-[#002970]" />
                  <span>{customerSegment}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-normal">
                  420 Merchants
                </span>
              </div>
            </div>

            {/* Action Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Action Type
              </label>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Percent className="w-4 h-4 text-[#00BAF2]" />
                  <span>{actionType}</span>
                </div>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  Retention Focus
                </span>
              </div>
            </div>

            {/* Discount Percentage Slider */}
            <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="discount-slider"
                  className="text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Discount Percentage
                </label>
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-extrabold text-[#002970] font-mono">
                    {sliderVal}%
                  </span>
                  <span className="text-xs font-semibold text-slate-500">OFF</span>
                </div>
              </div>

              {/* Slider 0% to 20% */}
              <div className="space-y-1">
                <input
                  id="discount-slider"
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={sliderVal}
                  onChange={handleSliderChange}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#002970]"
                />
                <div className="flex justify-between text-[11px] font-medium text-slate-400 px-0.5">
                  <span>0% (No Offer)</span>
                  <span className="font-bold text-[#002970]">10% (Sweet Spot)</span>
                  <span>20% (Max Margin Risk)</span>
                </div>
              </div>
            </div>

            {/* Campaign Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Campaign Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['3 Days', '7 Days', '14 Days'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition ${
                      duration === d
                        ? 'bg-[#002970] text-white border-[#002970]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {d}
                    {d === '7 Days' && (
                      <span className="block text-[9px] font-normal opacity-80">
                        (Optimal)
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Primary button: Run Simulation */}
          <div className="pt-2">
            <button
              id="btn-run-simulation"
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="w-full px-5 py-3 rounded-xl bg-[#002970] hover:bg-[#001d52] active:bg-[#00143a] text-white text-sm font-bold shadow-md shadow-blue-900/15 hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
            >
              {isSimulating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Computing Stochastic Projection...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-[#00BAF2]" />
                  <span>Run Simulation ({sliderVal}% Discount)</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Updates in real-time as you drag the slider. Last computed: {lastRunAt}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — SIMULATION RESULTS (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Simulation Results
                </h2>
                <p className="text-xs text-slate-500">
                  Expected commercial outcome for {sliderVal}% discount over {duration}
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#002970] border border-blue-200">
                AI Prediction
              </span>
            </div>

            {/* Results KPI Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Customers Recovered */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Customers Recovered
                </span>
                <span className="text-xl font-extrabold text-slate-900 font-mono mt-1 block">
                  {sliderVal === 10 ? '120–150' : `${sim.recoveredMin}–${sim.recoveredMax}`}
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center mt-0.5">
                  <Users className="w-3 h-3 mr-1" />
                  {Math.round(((sim.recoveredMin + sim.recoveredMax) / 2 / 420) * 100)}% recovery
                </span>
              </div>

              {/* Additional Revenue */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[10px] uppercase font-bold text-emerald-700 block tracking-wider">
                  Additional Revenue
                </span>
                <span className="text-xl font-extrabold text-emerald-700 font-mono mt-1 block">
                  ₹{sim.additionalRevenue.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-emerald-600 font-medium mt-0.5 block">
                  Gross inflow
                </span>
              </div>

              {/* Estimated Campaign Cost */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Campaign Cost
                </span>
                <span className="text-xl font-extrabold text-slate-900 font-mono mt-1 block">
                  ₹{sim.campaignCost.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">
                  Discount absorbed
                </span>
              </div>

              {/* Expected Profit Impact */}
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-wider">
                  Profit Impact
                </span>
                <span className="text-base font-bold text-[#002970] mt-1 block">
                  {sliderVal === 10 ? 'Positive' : sim.profitImpact}
                </span>
                <span className="text-[11px] text-emerald-700 font-mono font-medium">
                  +₹{Math.max(0, sim.additionalRevenue - sim.campaignCost).toLocaleString('en-IN')} net
                </span>
              </div>

              {/* Risk Level */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Risk Level
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      sim.risk === 'Low'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : sim.risk === 'Medium'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {sim.risk}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full ${
                      sim.risk === 'Low'
                        ? 'bg-emerald-500 w-1/3'
                        : sim.risk === 'Medium'
                        ? 'bg-amber-500 w-2/3'
                        : 'bg-rose-500 w-full'
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Comparison Chart: Scenario: No Offer vs 5% Offer vs 10% Offer */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Scenario Revenue Comparison
                </span>
                <span className="text-[11px] text-slate-500">
                  Blue: Revenue Impact | Gray: Cost
                </span>
              </div>
              <ScenarioComparisonChart
                currentDiscount={sliderVal}
                currentRevenueImpact={sim.additionalRevenue}
                currentCost={sim.campaignCost}
              />
            </div>

            {/* AI Explanation Card */}
            <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-4">
              <div className="flex items-start space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#00BAF2] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-[#002970] uppercase tracking-wider block">
                    AI Explanation
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium mt-1 leading-relaxed">
                    {sliderVal === 10
                      ? '"A 10% targeted retention offer is expected to recover inactive customers while maintaining a positive revenue impact."'
                      : `"${sim.explanation}"`}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary button: Prioritize This Action */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Satisfied with the projection? Proceed to priority ranking.
              </span>
              <button
                id="btn-prioritize-this-action"
                onClick={() => onNavigate('recommended-actions')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#002970] hover:bg-[#001d52] active:bg-[#00143a] text-white text-sm font-bold shadow-md shadow-blue-900/15 hover:shadow-lg transition flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Prioritize This Action</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
