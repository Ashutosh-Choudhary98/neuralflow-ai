export const PRICING_MATRIX = {
  tiers: ['Starter', 'Pro', 'Enterprise'] as const,
  baseRates: {
    Starter: 29,
    Pro: 79,
    Enterprise: 199,
  },
  annualMultiplier: 0.8,
  currencyConfig: {
    USD: { symbol: '$', tariff: 1.0, locale: 'en-US' },
    INR: { symbol: '₹', tariff: 83.5, locale: 'en-IN' },
    EUR: { symbol: '€', tariff: 0.92, locale: 'de-DE' },
  },
} as const;

export type Tier = keyof typeof PRICING_MATRIX.baseRates;
export type Billing = 'monthly' | 'annual';
export type Currency = keyof typeof PRICING_MATRIX.currencyConfig;

export function computePrice(
  tier: Tier,
  billing: Billing,
  currency: Currency
): string {
  const base = PRICING_MATRIX.baseRates[tier];
  const multiplier =
    billing === 'annual' ? PRICING_MATRIX.annualMultiplier : 1;
  const { tariff, symbol, locale } = PRICING_MATRIX.currencyConfig[currency];
  const final = Math.round(base * multiplier * tariff);
  return `${symbol}${final.toLocaleString(locale)}`;
}
