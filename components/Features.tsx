'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from './Icon';

const FEATURES = [
  {
    id: 0,
    title: 'Neural Pipeline Engine',
    description:
      'Process millions of data points with our distributed AI engine. Auto-scales with your workload.',
    iconName: 'arrow-path' as const,
    size: 'large',
    stat: '10M+',
    statLabel: 'Records/sec',
  },
  {
    id: 1,
    title: 'Intelligent Routing',
    description:
      'ML-powered data routing that learns your patterns and optimizes flow automatically.',
    iconName: 'arrow-trending-up' as const,
    size: 'small',
    stat: '99.9%',
    statLabel: 'Uptime SLA',
  },
  {
    id: 2,
    title: 'Real-time Monitoring',
    description:
      'Live dashboards with sub-second latency. Catch anomalies before they become incidents.',
    iconName: 'chart-pie' as const,
    size: 'small',
    stat: '<50ms',
    statLabel: 'Latency',
  },
  {
    id: 3,
    title: 'Zero-Config Integrations',
    description:
      '200+ connectors. Connect any data source in under 2 minutes with our visual builder.',
    iconName: 'link-solid' as const,
    size: 'medium',
    stat: '200+',
    statLabel: 'Integrations',
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description:
      'SOC2 Type II certified. End-to-end encryption, RBAC, audit logs, and SSO out of the box.',
    iconName: 'cog-8-tooth' as const,
    size: 'medium',
    stat: 'SOC2',
    statLabel: 'Certified',
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const hoverIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const nowMobile = e.matches;
      setIsMobile(nowMobile);

      if (hoverIndexRef.current !== null) {
        setActiveIndex(hoverIndexRef.current);
      }
    };

    setIsMobile(mq.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const handleBentoHover = useCallback((index: number | null) => {
    hoverIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const handleAccordionToggle = useCallback((index: number) => {
    setActiveIndex((prev) => {
      const next = prev === index ? null : index;
      hoverIndexRef.current = next;
      return next;
    });
  }, []);

  return (
    <section id="features" aria-labelledby="features-heading">
      <div className="section-container">
        <h2 id="features-heading" className="section-heading">
          Built for Scale. Designed for Speed.
        </h2>

        <div className="bento-grid" aria-hidden={isMobile} role="list">
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              className={`bento-card bento-card--${feature.size} ${activeIndex === feature.id ? 'bento-card--active' : ''}`}
              role="listitem"
              onMouseEnter={() => handleBentoHover(feature.id)}
              onMouseLeave={() => handleBentoHover(null)}
              tabIndex={0}
              onFocus={() => handleBentoHover(feature.id)}
              onBlur={() => handleBentoHover(null)}
              aria-label={feature.title}
            >
              <Icon
                name={feature.iconName}
                size={32}
                className="bento-icon"
              />
              <h3 className="bento-title">{feature.title}</h3>
              <p className="bento-description">{feature.description}</p>
              <div className="bento-stat">
                <span className="stat-number">{feature.stat}</span>
                <span className="stat-label">{feature.statLabel}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="accordion" aria-hidden={!isMobile} role="list">
          {FEATURES.map((feature) => {
            const isOpen = activeIndex === feature.id;
            return (
              <article key={feature.id} className="accordion-item" role="listitem">
                <button
                  type="button"
                  className={`accordion-trigger ${isOpen ? 'accordion-trigger--open' : ''}`}
                  onClick={() => handleAccordionToggle(feature.id)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${feature.id}`}
                  id={`accordion-btn-${feature.id}`}
                >
                  <Icon
                    name={feature.iconName}
                    size={20}
                    className="accordion-icon"
                  />
                  <span className="accordion-title">{feature.title}</span>
                  <Icon
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    className="accordion-chevron"
                  />
                </button>
                <div
                  id={`accordion-panel-${feature.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${feature.id}`}
                  className={`accordion-panel ${isOpen ? 'accordion-panel--open' : ''}`}
                >
                  <div className="accordion-content">
                    <p>{feature.description}</p>
                    <div className="accordion-stat">
                      <strong>{feature.stat}</strong> {feature.statLabel}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
