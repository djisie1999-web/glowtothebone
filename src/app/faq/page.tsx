'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterSignup from '@/components/NewsletterSignup';

const faqs = [
  {
    question: 'What is tallow?',
    answer: 'Tallow is rendered fat from grass-fed cattle. It has been used for centuries as a natural skincare ingredient because its fatty acid profile is biologically similar to human skin. This means it absorbs deeply and effectively, providing nourishment at a cellular level rather than just sitting on the surface. Our tallow is sourced from 100% grass-fed British cattle and rendered using our proprietary patent-pending process.',
  },
  {
    question: 'Is tallow safe for sensitive skin?',
    answer: 'Absolutely. Tallow is one of the most gentle, compatible substances you can put on your skin. Because its composition closely matches our skin\'s natural oils, it\'s extremely well-tolerated — even by the most sensitive skin types. Many of our customers with eczema, psoriasis, rosacea, and other sensitive skin conditions have found significant relief with our products. Our Pure Whipped Tallow, with just one ingredient, is particularly popular for ultra-sensitive skin and is even safe for babies.',
  },
  {
    question: 'What\'s in the Signature Blend?',
    answer: 'Our Signature Blend contains grass-fed beef tallow (rendered using our patent-pending process), jojoba oil, rosehip seed oil, vitamin E (tocopherol), lavender essential oil, frankincense essential oil, and tea tree essential oil. That\'s it — just seven ingredients, all natural, all with a purpose. No parabens, no sulphates, no synthetic fragrances, no artificial colours, no mineral oil, no silicones.',
  },
  {
    question: 'How do I use tallow balm?',
    answer: 'Apply a small amount to clean skin and massage gently in upward motions. A little goes a long way — start with a pea-sized amount for your face, or a larger dollop for body application. For best results, apply to slightly damp skin (such as after cleansing or bathing) to help lock in moisture. Use morning and evening for optimal results. Allow a few minutes for full absorption before applying makeup or other products.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we primarily ship within the United Kingdom. We offer free delivery on all UK orders over £50. We are actively working on expanding our shipping options to serve customers internationally. Please contact us at hello@glowtothebone.com for international shipping enquiries and we\'ll do our best to accommodate your order.',
    id: 'shipping',
  },
  {
    question: 'What\'s your returns policy?',
    answer: 'We want you to love your purchase. If for any reason you\'re not completely satisfied, you can return unopened products within 30 days of delivery for a full refund. For opened products, please contact us at hello@glowtothebone.com and we\'ll work with you to find a solution. We stand behind the quality of our products and your satisfaction is our priority.',
  },
  {
    question: 'Is your tallow grass-fed?',
    answer: 'Yes, 100%. We exclusively source our tallow from grass-fed British cattle. Grass-fed tallow is nutritionally superior to grain-fed alternatives, containing higher levels of omega-3 fatty acids, conjugated linoleic acid (CLA), and fat-soluble vitamins A, D, E, and K. The quality of the source material directly impacts the quality of the final product, which is why we never compromise on this.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'We are committed to ethical practices. Our products are never tested on animals. Our tallow is a by-product of the existing food supply chain — we believe in using the whole animal rather than letting any part go to waste. This approach is both ethical and sustainable. All our other ingredients are also cruelty-free and ethically sourced.',
  },
];

function FaqItem({ question, answer, id }: { question: string; answer: string; id?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={id} className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left hover:text-green transition-colors group"
      >
        <span className="font-serif text-lg md:text-xl font-medium pr-4 group-hover:text-green">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-green' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[600px] pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-text-muted leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green py-20 md:py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-3">Help Centre</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Everything you need to know about tallow skincare and our products.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="border-t border-border">
              {faqs.map(faq => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} id={faq.id} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-16 text-center bg-cream-dark rounded-3xl p-10">
              <h3 className="font-serif text-2xl font-semibold text-text mb-3">Still have questions?</h3>
              <p className="text-text-muted mb-6">
                We&apos;d love to hear from you. Get in touch and we&apos;ll get back to you as soon as possible.
              </p>
              <a href="/contact" className="btn-pill btn-primary">
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
