'use client';

import Link from 'next/link';
import { ArrowRight, Truck, HandHeart, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';
import ReviewCarousel from '@/components/ReviewCarousel';
import BeforeAfter from '@/components/BeforeAfter';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/lifestyle/hero.png"
          alt="Glow to the Bone natural skincare"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-dark/80 via-green-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium animate-fade-in-up">
            Clean &amp; Natural Skincare
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Find Your
            <br />
            <span className="text-gold-light italic">Glow</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Nurture your skin with clean, science-backed formulas designed to hydrate,
            restore, and radiate confidence from within.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/products" className="btn-pill btn-gold text-base px-8 py-4">
              Shop Now <ArrowRight className="ml-2 inline" size={18} />
            </Link>
            <Link href="/#skin-quiz" className="btn-pill border-2 border-white/40 text-white hover:bg-white/10 text-base px-8 py-4">
              Try Our Skin Quiz
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Truck, text: 'Free UK Delivery over \u00a350' },
              { icon: HandHeart, text: 'Handmade in the UK' },
              { icon: Leaf, text: '100% Natural' },
              { icon: ShieldCheck, text: 'No Toxins' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3 text-center">
                <Icon className="text-green flex-shrink-0" size={22} />
                <span className="text-sm font-medium text-text tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">Our Products</p>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text">
                Bestselling Skincare
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/products" className="btn-pill btn-secondary">
                View All Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Signature Blend Feature */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
                <img src="/images/lifestyle/signature-blend-lifestyle.jpg" alt="Signature Blend Whipped Tallow" className="w-full h-auto object-contain" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">Meet Our</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6 leading-tight">
                  Signature Blend
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Made with care and unconditionally loved by our customers, this signature
                  bestseller exceeds all expectations. Specially formulated to provide deep
                  hydration and nourishment for all skin types, especially sensitive and
                  damaged skin.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Deep hydration & repair', 'Anti-aging properties', 'Soothes eczema & psoriasis', 'Patent-pending formula'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-text">
                      <Sparkles className="text-gold flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/products/signature-blend" className="btn-pill btn-primary">
                  Discover More <ArrowRight className="ml-2 inline" size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <BeforeAfter />

      {/* Tallow Like No Other */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">Our Process</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text mb-8">
              Tallow Like No Other
            </h2>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Uniquely rendered to be ultra-pure and as scent free as possible. Our patent
              pending methodology ensures you receive only the very best. Never bleached or
              chemically deodorised.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'Ultra-Pure', desc: 'Our proprietary rendering process removes all impurities while preserving essential nutrients.' },
                { title: 'Scent-Free', desc: 'Naturally deodorised without chemicals \u2014 just pure, clean tallow as nature intended.' },
                { title: 'Patent-Pending', desc: 'Our unique methodology is unlike anything else on the market. The result? Unmatched quality.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl font-semibold text-text mb-3">{title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Tallow? */}
      <section className="py-20 md:py-28 bg-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-gold-light uppercase tracking-[0.2em] text-sm font-medium mb-3">The Science</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-8">
              Why Tallow?
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Tallow is the only substance biologically matched to our skin&apos;s natural
              oils. Rich in vitamins A, D, E, &amp; K, it hydrates on a cellular level &mdash; not
              just surface deep.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {[
                { vitamin: 'A', benefit: 'Cell renewal & repair' },
                { vitamin: 'D', benefit: 'Immune support' },
                { vitamin: 'E', benefit: 'Antioxidant protection' },
                { vitamin: 'K', benefit: 'Skin elasticity' },
              ].map(({ vitamin, benefit }) => (
                <div key={vitamin} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="font-serif text-4xl font-bold text-gold-light mb-2">
                    {vitamin}
                  </div>
                  <p className="text-white/70 text-sm">Vitamin {vitamin}</p>
                  <p className="text-white text-sm font-medium mt-2">{benefit}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ancient Wisdom */}
      <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,134,11,0.06),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-6">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-text italic leading-tight">
              Ancient Wisdom,
              <br />
              Reimagined
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-8" />
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews */}
      <ReviewCarousel />

      {/* Ready to Glow CTA */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text mb-6">
              Ready to Glow?
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              Join thousands of customers who have transformed their skin with our
              clean, natural tallow skincare. Your skin deserves better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="btn-pill btn-primary text-base px-8 py-4">
                Shop Now <ArrowRight className="ml-2 inline" size={18} />
              </Link>
              <Link href="/our-story" className="btn-pill btn-secondary text-base px-8 py-4">
                Our Story
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
