'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import NewsletterSignup from '@/components/NewsletterSignup';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green py-20 md:py-28 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Tag size={12} />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-text-muted text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/blog" className="inline-flex items-center gap-2 text-green hover:text-green-dark transition-colors font-medium">
                <ArrowLeft size={16} /> More Articles
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
