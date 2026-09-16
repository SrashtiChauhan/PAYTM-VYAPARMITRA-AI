export type ScreenRoute =
  | 'overview'
  | 'revenue-insights'
  | 'opportunities'
  | 'simulator'
  | 'recommended-actions'
  | 'campaign-results';

export interface MerchantProfile {
  name: string;
  businessType: string;
  location: string;
  city: string;
  posTerminalId: string;
  activeSince: string;
  qrId: string;
}

export interface RevenueDataPoint {
  period: string;
  revenue: number;
  previousRevenue: number;
  transactions: number;
}

export interface RetentionDataPoint {
  week: string;
  lastMonthRate: number;
  thisMonthRate: number;
  repeatCustomerCount: number;
}

export interface OpportunityItem {
  id: string;
  title: string;
  reason: string;
  targetCustomers?: number;
  potentialRevenue: number;
  confidence: 'High' | 'Medium' | 'Low';
  effort: 'Low' | 'Medium' | 'High';
  isPrimary?: boolean;
  tag: string;
}

export interface ActionItem {
  id: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  action: string;
  expectedImpact: number;
  urgency: 'High' | 'Medium' | 'Low';
  effort: 'Low' | 'Medium' | 'High';
  confidence: 'High' | 'Medium' | 'Low';
  risk: 'Low' | 'Medium' | 'High';
  status: 'Ready for Approval' | 'Approved' | 'In Progress' | 'Completed';
}

export interface SimulationScenario {
  name: string;
  discount: number;
  recoveredMin: number;
  recoveredMax: number;
  revenueImpact: number;
  cost: number;
  profitImpact: string;
  risk: 'Low' | 'Medium' | 'High';
  description: string;
}
