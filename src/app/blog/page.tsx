'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/products';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green py-20 md:py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-medium mb-3">Our Blog</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4">The Glow Journal</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Skincare education, ingredient science, and tips for your healthiest skin.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-all">
                    <div className="grid md:grid-cols-3">
                      {/* Image placeholder */}
                      <div className={`aspect-[4/3] md:aspect-auto product-gradient-${(index % 5) + 1}`} />

                      {/* Content */}
                      <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="flex items-center gap-1.5 text-xs text-text-muted">
                            <Tag size={12} />
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-text-muted">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                          <span className="text-xs text-text-light">
                            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>

                        <h2 className="font-serif text-xl md:text-2xl font-semibold text-text group-hover:text-green transition-colors mb-3 leading-tight">
                          {post.title}
                        </h2>

                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>

                        <span className="inline-flex items-center text-green font-medium text-sm group-hover:gap-2 transition-all">
                          Read More <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
