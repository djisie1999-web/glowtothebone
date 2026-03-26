'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-green-dark to-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,134,11,0.1),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            A Journey Rooted in
            <br />
            <span className="italic text-gold-light">Healing &amp; Care</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            For anyone who&apos;s ever felt failed by skincare.
          </p>
        </div>
      </section>

      {/* Story content */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Glow to the Bone wasn&apos;t born in a boardroom or a beauty lab. It was born in a kitchen,
                out of desperation, love, and a refusal to give up.
              </p>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                It started with a sister. For years, she suffered with severe eczema &mdash; the kind that
                kept her up at night, that made her self-conscious, that no doctor or dermatologist
                could seem to fix. She tried everything. Prescription creams, over-the-counter remedies,
                natural alternatives, expensive serums. Nothing worked. Most made it worse.
              </p>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Frustrated but determined, our founder began researching. She discovered tallow &mdash; an
                ancient skincare ingredient used for centuries across cultures worldwide. The science was
                compelling: tallow is the only substance biologically matched to our skin&apos;s natural oils.
                It made perfect sense. Why had modern skincare abandoned it?
              </p>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                What followed was months of experimentation. Batch after batch, formula after formula.
                Over <strong>65 iterations</strong> to get it right. The rendering process alone went through
                dozens of refinements &mdash; how to make the tallow pure enough, how to remove any scent
                naturally without chemicals, how to create a texture that felt luxurious rather than heavy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <blockquote className="my-12 border-l-4 border-gold pl-8 py-4">
              <p className="font-serif text-2xl md:text-3xl text-text italic leading-relaxed">
                &ldquo;Glow to the Bone was born to offer what she found: skincare that heals,
                not harms.&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                When the formula finally worked &mdash; when her sister&apos;s skin began to heal, when the
                redness faded, when she could finally sleep through the night &mdash; we knew we had
                something special. Not just another skincare product, but something that could genuinely
                change lives.
              </p>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Our patent-pending rendering process is the result of that obsessive dedication to quality.
                We never bleach our tallow. We never use chemical deodorisers. We never take shortcuts.
                Every jar is handmade in the UK with the same care and attention as that very first batch.
              </p>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Today, Glow to the Bone serves thousands of customers across the UK and beyond. People
                who, like our founder&apos;s sister, had given up on finding skincare that actually worked.
                People who wanted to move away from toxic ingredients and harsh chemicals. People who
                believe your skin deserves better.
              </p>

              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Every product we make is a promise: that clean, natural skincare can be effective, luxurious,
                and transformative. That you don&apos;t have to choose between what&apos;s good for your skin and
                what actually works.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-cream-dark rounded-3xl p-10 md:p-14 text-center mt-12">
              <p className="font-serif text-xl md:text-2xl text-text mb-2 font-semibold">
                Handmade in the UK
              </p>
              <p className="text-text-muted mb-1">Non-toxic, all natural skincare.</p>
              <p className="text-text-muted">No compromises. No shortcuts. No toxins.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text mb-6">
              Find Your Glow Today
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              Experience the difference that clean, natural skincare can make. Your skin will thank you.
            </p>
            <Link href="/products" className="btn-pill btn-primary text-base px-8 py-4">
              Shop Now <ArrowRight className="ml-2 inline" size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
