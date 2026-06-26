const TESTIMONIALS = [
  {
    quote:
      'NeuralFlow cut our data processing time by 80%. What used to take hours now runs in minutes.',
    author: 'Sarah Chen',
    role: 'CTO, DataScale Inc.',
    avatar: 'SC',
  },
  {
    quote:
      'The zero-config integrations are magic. We connected 12 data sources in a single afternoon.',
    author: 'Rahul Mehta',
    role: 'Head of Engineering, FinTrack',
    avatar: 'RM',
  },
  {
    quote:
      'Enterprise-grade security with startup-level simplicity. Finally a platform that has both.',
    author: 'Emma Wilson',
    role: 'VP Data, GlobalOps Ltd.',
    avatar: 'EW',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <h2 id="testimonials-heading" className="section-heading">
          Trusted by Data Teams Worldwide
        </h2>
        <ul className="testimonials-grid" role="list">
          {TESTIMONIALS.map((t) => (
            <li key={t.author} className="testimonial-card" role="listitem">
              <blockquote>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <div className="avatar" aria-hidden="true">
                    {t.avatar}
                  </div>
                  <cite>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
