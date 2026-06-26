'use client';

import { useState } from 'react';
import Icon from './Icon';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="section-container site-header__inner">
        <a href="#" className="logo" aria-label="NeuralFlow AI home">
          <Icon name="cube-16-solid" size={28} className="nav-logo-icon" />
          <span className="logo-text">NeuralFlow AI</span>
        </a>
        <nav
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
        <div className="site-header__actions">
          <button type="button" aria-label="Search" className="nav-search-btn">
            <Icon name="search" size={20} />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="nav-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <Icon name="x-mark" size={24} className="nav-close-btn" />
            ) : (
              <Icon name="chevron-down" size={24} className="nav-menu-icon" />
            )}
          </button>
          <a href="#pricing" className="btn-primary nav-cta">
            Get Started
            <Icon name="chevron-right" size={16} className="btn-icon btn-icon--light" />
          </a>
        </div>
      </div>
    </header>
  );
}
