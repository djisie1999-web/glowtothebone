'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green py-20 md:py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question, feedback, or just want to say hello.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="text-green" size={20} />
                    <h3 className="font-serif text-lg font-semibold">Email</h3>
                  </div>
                  <a href="mailto:hello@glowtothebone.com" className="text-text-muted hover:text-green transition-colors">
                    hello@glowtothebone.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-green" size={20} />
                    <h3 className="font-serif text-lg font-semibold">Location</h3>
                  </div>
                  <p className="text-text-muted">Handmade in the United Kingdom</p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    {['Instagram', 'TikTok', 'Facebook'].map(platform => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm text-text-muted hover:text-green transition-colors underline"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-cream-dark rounded-2xl p-6 border border-border">
                  <h3 className="font-serif text-lg font-semibold mb-2">Response Times</h3>
                  <p className="text-text-muted text-sm">
                    We typically respond within 24 hours during business days. For urgent queries,
                    please email us directly.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2} className="md:col-span-2">
              {submitted ? (
                <div className="bg-cream-dark rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-white" size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Message Sent!</h3>
                  <p className="text-text-muted">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/30 transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/30 transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/30 transition-all text-sm"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-green focus:outline-none focus:ring-1 focus:ring-green/30 transition-all text-sm resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button type="submit" className="btn-pill btn-primary px-10 py-4">
                    Send Message <Send className="ml-2 inline" size={16} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
