'use client';

import { useEffect, useRef } from 'react';
import Icon from './Icon';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const elements = heroRef.current.querySelectorAll('[data-animate]');
    elements.forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 400,
          delay: i * 80,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          fill: 'forwards',
        }
      );
    });
  }, []);

  return (
    <section id="hero" ref={heroRef} aria-labelledby="hero-heading">
      <div className="section-container">
        <div className="hero-badge" data-animate>
          <Icon name="cog-8-tooth" size={18} className="hero-badge-icon" />
          AI-Powered Automation
        </div>
        <h1 id="hero-heading" className="hero-title" data-animate>
          Your Data Pipeline,
          <br />
          <span className="hero-accent">Supercharged by AI</span>
        </h1>
        <p className="hero-description" data-animate>
          NeuralFlow AI automates complex data workflows with intelligent
          processing. Ship faster, scale infinitely, and eliminate manual data
          work forever.
        </p>
        <div className="hero-cta" data-animate>
          <a href="#pricing" className="btn-primary">
            Start Free Trial
            <Icon name="chevron-right" size={16} className="btn-icon btn-icon--dark" />
          </a>
          <a href="#features" className="btn-secondary">
            <Icon name="chevron-left" size={16} className="btn-icon btn-icon--light" />
            See How It Works
          </a>
        </div>
        <div className="hero-stats" data-animate>
          <div className="stat-item">
            <Icon name="arrow-trending-up" size={20} className="stat-icon" />
            <span className="stat-num">10M+</span>
            <span className="stat-text">Records Processed Daily</span>
          </div>
          <div className="stat-item">
            <Icon name="chart-pie" size={20} className="stat-icon" />
            <span className="stat-num">99.9%</span>
            <span className="stat-text">Uptime Guaranteed</span>
          </div>
          <div className="stat-item">
            <Icon name="link" size={20} className="stat-icon" />
            <span className="stat-num">200+</span>
            <span className="stat-text">Integrations Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
