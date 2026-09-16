import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Sparkles, HelpCircle } from 'lucide-react';

interface MetricCardProps {
  id: string;
  title: string;
  value: string;
  subtext?: string;
  trend?: {
    value: string;
    isPositive?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
  };
  icon?: React.ReactNode;
  badge?: string;
  variant?: 'default' | 'danger' | 'warning' | 'positive';
  aiAnnotation?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  id,
  title,
  value,
  subtext,
  trend,
  icon,
  badge,
  variant = 'default',
  aiAnnotation,
}) => {
  // Border and accent styling based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'danger':
        return {
          cardBg: 'bg-white border-rose-200 hover:border-rose-300',
          badgeStyle: 'bg-rose-50 text-rose-700 border-rose-200',
          valueColor: 'text-rose-600',
          pillBg: 'bg-rose-50 text-rose-700',
        };
      case 'warning':
        return {
          cardBg: 'bg-white border-amber-200 hover:border-amber-300',
          badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
          valueColor: 'text-amber-700',
          pillBg: 'bg-amber-50 text-amber-700',
        };
      case 'positive':
        return {
          cardBg: 'bg-white border-emerald-200 hover:border-emerald-300',
          badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          valueColor: 'text-emerald-700',
          pillBg: 'bg-emerald-50 text-emerald-700',
        };
      default:
        return {
          cardBg: 'bg-white border-slate-200/80 hover:border-slate-300',
          badgeStyle: 'bg-blue-50 text-[#002970] border-blue-200',
          valueColor: 'text-slate-900',
          pillBg: 'bg-slate-100 text-slate-700',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      id={id}
      className={`rounded-2xl border p-5 shadow-xs transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${styles.cardBg}`}
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {title}
          </span>
          {badge ? (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${styles.badgeStyle}`}
            >
              {badge}
            </span>
          ) : icon ? (
            <div className="p-1.5 rounded-lg bg-slate-50 text-slate-600">
              {icon}
            </div>
          ) : null}
        </div>

        <div className="mt-3 flex items-baseline space-x-2">
          <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono ${styles.valueColor}`}>
            {value}
          </div>
          {trend && (
            <div
              className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold ${
                trend.isDanger
                  ? 'bg-rose-50 text-rose-700'
                  : trend.isWarning
                  ? 'bg-amber-50 text-amber-700'
                  : trend.isPositive
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {trend.isPositive ? (
                <TrendingUp className="w-3.5 h-3.5 mr-1" />
              ) : trend.isDanger || trend.isWarning ? (
                <TrendingDown className="w-3.5 h-3.5 mr-1" />
              ) : null}
              {trend.value}
            </div>
          )}
        </div>

        {subtext && (
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
            {subtext}
          </p>
        )}
      </div>

      {aiAnnotation && (
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center text-[11px] text-slate-500">
          <Sparkles className="w-3 h-3 text-[#00BAF2] mr-1 shrink-0" />
          <span className="truncate">{aiAnnotation}</span>
        </div>
      )}
    </div>
  );
};
