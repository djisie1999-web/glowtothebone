'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '@/lib/products';
import AnimatedSection from './AnimatedSection';

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent(i => (i - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const review = reviews[current];

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text">
              What Our Customers Say
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 text-center min-h-[280px] flex flex-col items-center justify-center">
              <Quote className="text-gold/30 mb-6" size={48} />

              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < review.rating ? 'fill-gold text-gold' : 'text-border'} />
                ))}
              </div>

              <blockquote className="font-serif text-xl md:text-2xl text-text leading-relaxed mb-6 max-w-2xl italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div>
                <p className="font-semibold text-text">{review.name}</p>
                <p className="text-sm text-text-muted mt-1">
                  {review.verified && (
                    <span className="text-green">Verified Buyer</span>
                  )}
                  {' — '}{review.product}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-green hover:text-white hover:border-green transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'bg-green w-6' : 'bg-border hover:bg-gold'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-green hover:text-white hover:border-green transition-all"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
