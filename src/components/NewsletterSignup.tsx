'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-green text-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">
          Get 10% Off Your First Order
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Join our community and be the first to hear about new products, skincare tips,
          and exclusive offers.
        </p>

        {submitted ? (
          <div className="bg-white/10 rounded-2xl p-8">
            <p className="text-xl font-serif">Thank you for subscribing!</p>
            <p className="text-white/70 mt-2">Check your email for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-gold-light focus:bg-white/15 transition-all text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-pill btn-gold whitespace-nowrap disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
