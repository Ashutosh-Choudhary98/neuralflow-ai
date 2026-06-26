'use client';

import { useRef, useCallback } from 'react';
import {
  computePrice,
  PRICING_MATRIX,
  type Tier,
  type Currency,
} from '@/lib/pricing-matrix';
import Icon from './Icon';

function getPlanFeatures(tier: string): string[] {
  const features: Record<string, string[]> = {
    Starter: [
      '5,000 API calls/mo',
      '3 data pipelines',
      'Email support',
      'Basic analytics',
    ],
    Pro: [
      '50,000 API calls/mo',
      'Unlimited pipelines',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
    ],
    Enterprise: [
      'Unlimited API calls',
      'Custom pipelines',
      'Dedicated support',
      'Custom analytics',
      'SSO + RBAC',
      'SLA guarantee',
    ],
  };
  return features[tier] ?? [];
}

export default function Pricing() {
  const priceRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const billingRef = useRef<'monthly' | 'annual'>('monthly');
  const currencyRef = useRef<Currency>('USD');

  const updatePrices = useCallback(() => {
    PRICING_MATRIX.tiers.forEach((tier) => {
      const el = priceRefs.current[tier];
      if (el) {
        el.textContent = computePrice(
          tier as Tier,
          billingRef.current,
          currencyRef.current
        );
      }
    });
  }, []);

  const handleBillingToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      billingRef.current = e.target.checked ? 'annual' : 'monthly';
      updatePrices();
      const badge = document.getElementById('annual-badge');
      if (badge) badge.style.opacity = e.target.checked ? '1' : '0';
    },
    [updatePrices]
  );

  const handleCurrencyChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      currencyRef.current = e.target.value as Currency;
      updatePrices();
    },
    [updatePrices]
  );

  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <div className="section-container">
        <h2 id="pricing-heading" className="section-heading">
          Simple, Transparent Pricing
        </h2>

        <div className="pricing-controls">
          <label htmlFor="billing-toggle" className="toggle-label">
            <span>Monthly</span>
            <input
              id="billing-toggle"
              type="checkbox"
              onChange={handleBillingToggle}
              className="sr-only"
            />
            <span className="toggle-track" aria-hidden="true" />
            <span>Annual</span>
          </label>
          <span
            id="annual-badge"
            className="discount-badge"
            style={{ opacity: 0 }}
          >
            Save 20%
          </span>
          <select
            id="currency-select"
            onChange={handleCurrencyChange}
            aria-label="Select currency"
            defaultValue="USD"
          >
            <option value="USD">$ USD</option>
            <option value="INR">₹ INR</option>
            <option value="EUR">€ EUR</option>
          </select>
        </div>

        <div className="pricing-grid" role="list">
          {PRICING_MATRIX.tiers.map((tier, i) => (
            <article
              key={tier}
              className={`pricing-card ${i === 1 ? 'pricing-card--featured' : ''}`}
              role="listitem"
            >
              <h3 className="tier-name">{tier}</h3>
              <div
                className="price-display"
                aria-live="polite"
                aria-atomic="true"
              >
                <span
                  className="price-amount"
                  ref={(el) => {
                    priceRefs.current[tier] = el;
                  }}
                >
                  {computePrice(tier, 'monthly', 'USD')}
                </span>
                <span className="price-period">/mo</span>
              </div>
              <ul className="feature-list">
                {getPlanFeatures(tier).map((f) => (
                  <li key={f}>
                    <Icon
                      name="chevron-up-solid"
                      size={14}
                      className="feature-check-icon"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`cta-btn ${i === 1 ? 'cta-btn--primary' : 'cta-btn--secondary'}`}
              >
                {i === 2 ? 'Contact Sales' : 'Get Started'}
                <Icon name="chevron-right" size={16} className="btn-icon" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
