import { MerchantProfile, RevenueDataPoint, RetentionDataPoint, OpportunityItem, ActionItem } from '../types';

export const MERCHANT_PROFILE: MerchantProfile = {
  name: 'Aarav Café',
  businessType: 'Small Café & Quick Bites',
  location: 'Sector 62, Noida, India',
  city: 'Noida',
  posTerminalId: 'PTM-NOI-88421',
  activeSince: 'March 2023',
  qrId: 'paytmqr281005@paytm',
};

// 6-week revenue trend showing steady baseline then a recent dip
export const REVENUE_TREND_DATA: RevenueDataPoint[] = [
  { period: 'Week 1', revenue: 34200, previousRevenue: 32000, transactions: 245 },
  { period: 'Week 2', revenue: 35800, previousRevenue: 33100, transactions: 260 },
  { period: 'Week 3', revenue: 33400, previousRevenue: 34500, transactions: 238 },
  { period: 'Week 4', revenue: 29800, previousRevenue: 35200, transactions: 210 },
  { period: 'Week 5', revenue: 27100, previousRevenue: 36000, transactions: 195 },
  { period: 'Week 6 (Current)', revenue: 24200, previousRevenue: 35800, transactions: 172 },
];

// Comparison of Repeat Customer Rate: Last Month vs This Month
export const RETENTION_COMPARISON_DATA: RetentionDataPoint[] = [
  { week: 'Week 1', lastMonthRate: 85, thisMonthRate: 84, repeatCustomerCount: 380 },
  { week: 'Week 2', lastMonthRate: 87, thisMonthRate: 79, repeatCustomerCount: 340 },
  { week: 'Week 3', lastMonthRate: 86, thisMonthRate: 72, repeatCustomerCount: 295 },
  { week: 'Week 4', lastMonthRate: 86, thisMonthRate: 68, repeatCustomerCount: 265 },
];

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'opp-1',
    title: 'Recover Inactive Customers',
    reason: '420 regular customers have not returned in the last 3 weeks.',
    targetCustomers: 420,
    potentialRevenue: 18000,
    confidence: 'High',
    effort: 'Low',
    isPrimary: true,
    tag: 'Retention Risk',
  },
  {
    id: 'opp-2',
    title: 'Evening Coffee + Snack Combo',
    reason: 'Coffee sales are high, but snack purchases are low during evening hours (5 PM - 8 PM).',
    potentialRevenue: 10000,
    confidence: 'Medium',
    effort: 'Medium',
    isPrimary: false,
    tag: 'Basket Size Growth',
  },
  {
    id: 'opp-3',
    title: 'Improve Slow Business Hours',
    reason: 'Sales between 4 PM and 6 PM are below average compared to weekday peak hours.',
    potentialRevenue: 6500,
    confidence: 'Medium',
    effort: 'High',
    isPrimary: false,
    tag: 'Capacity Utilization',
  },
];

export const ACTION_PRIORITY_DATA: ActionItem[] = [
  {
    id: 'act-1',
    priority: 'HIGH',
    action: 'Launch targeted retention offer',
    expectedImpact: 18000,
    urgency: 'High',
    effort: 'Low',
    confidence: 'High',
    risk: 'Medium',
    status: 'Ready for Approval',
  },
  {
    id: 'act-2',
    priority: 'MEDIUM',
    action: 'Evening combo promotion',
    expectedImpact: 10000,
    urgency: 'Medium',
    effort: 'Medium',
    confidence: 'Medium',
    risk: 'Low',
    status: 'Ready for Approval',
  },
  {
    id: 'act-3',
    priority: 'LOW',
    action: 'Promote slow-moving products',
    expectedImpact: 4000,
    urgency: 'Low',
    effort: 'High',
    confidence: 'Medium',
    risk: 'Low',
    status: 'Ready for Approval',
  },
];

// Helper to calculate simulation outputs dynamically based on discount %
export function calculateSimulation(discountPercent: number) {
  // If 0% discount
  if (discountPercent === 0) {
    return {
      recoveredMin: 10,
      recoveredMax: 25,
      additionalRevenue: 2800,
      campaignCost: 0,
      profitImpact: 'Neutral',
      risk: 'Low' as const,
      explanation: 'Without any incentive or reminder, organic return of 420 inactive customers remains critically low (<6%).',
    };
  }

  // Linear / non-linear curve matching the prompt defaults (10% gives 120-150 recovered, ₹18,000 rev, ₹4,500 cost)
  const factor = discountPercent / 10;
  const recoveredMin = Math.round(120 * (0.4 + 0.6 * factor));
  const recoveredMax = Math.round(150 * (0.4 + 0.6 * factor));
  const avgRecovered = (recoveredMin + recoveredMax) / 2;
  
  // Average ticket size ~ ₹130, each returning visits ~1.05 times over 7 days
  const additionalRevenue = Math.round(18000 * Math.pow(factor, 0.75));
  // Cost = discount * ticket * orders + SMS push notification charge (~₹300)
  const campaignCost = Math.round(avgRecovered * 135 * (discountPercent / 100) + 300);
  
  let profitImpact = 'Positive';
  let risk: 'Low' | 'Medium' | 'High' = 'Medium';
  let explanation = `A ${discountPercent}% targeted retention offer is expected to recover inactive customers while maintaining a positive revenue impact.`;

  if (discountPercent < 5) {
    risk = 'Low';
    profitImpact = 'Modest Positive';
    explanation = `A ${discountPercent}% discount is low-risk, but may not trigger strong customer urgency for 420 inactive regulars.`;
  } else if (discountPercent <= 12) {
    risk = 'Medium';
    profitImpact = 'Strong Positive';
    explanation = `A ${discountPercent}% targeted retention offer is the sweet spot: expected to recover 120–150 inactive customers with healthy gross margins.`;
  } else {
    risk = 'High';
    profitImpact = 'Marginal / High Cost';
    explanation = `At ${discountPercent}%, margin erosion begins to offset customer volume gains. High risk of subsidizing frequent spenders.`;
  }

  return {
    recoveredMin,
    recoveredMax,
    additionalRevenue,
    campaignCost,
    profitImpact,
    risk,
    explanation,
  };
}
