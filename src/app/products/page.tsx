'use client';

import { useState } from 'react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';

type Category = 'all' | 'skincare' | 'candles';

export default function ProductsPage() {
  const [filter, setFilter] = useState<Category>('all');

  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Products' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'candles', label: 'Candles' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green py-20 md:py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-3">Shop</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">Our Products</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Pure, natural skincare handmade in the UK with grass-fed tallow.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`btn-pill text-xs px-6 py-2.5 transition-all ${
                    filter === cat.value
                      ? 'bg-green text-white'
                      : 'bg-white text-text border border-border hover:border-green'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-text-muted">Coming soon</p>
                <p className="text-text-muted mt-2">We are working on new products in this category.</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
