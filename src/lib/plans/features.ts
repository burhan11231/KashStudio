import { Plan } from '@/types/platform';

export const PLAN_LIMITS: Record<Plan, { pages: number; customDomain: boolean; brandingRemoval: boolean }> = {
  free: { pages: 1, customDomain: false, brandingRemoval: false },
  starter: { pages: 10, customDomain: false, brandingRemoval: true },
  business: { pages: Number.MAX_SAFE_INTEGER, customDomain: true, brandingRemoval: true },
};

export const PLAN_PRICING = {
  free: '₹0',
  starter: '₹499 / month',
  business: '₹2,499 / month',
};
