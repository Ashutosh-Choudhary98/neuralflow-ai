import Icon from './Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="NeuralFlow AI home">
              <Icon name="cube-16-solid" size={28} className="nav-logo-icon nav-logo-icon--footer" />
              <span className="logo-text">NeuralFlow AI</span>
            </a>
            <p>
              Intelligent data automation for modern teams. Process, route, and
              scale your pipelines with AI-powered precision.
            </p>
          </div>
          <nav aria-label="Product links">
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#testimonials">Customers</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Company links">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Legal links">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} NeuralFlow AI. All rights reserved.</p>
          <a href="#hero" className="footer-back-top">
            Back to top
            <Icon name="chevron-up-solid" size={16} className="footer-back-top-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
