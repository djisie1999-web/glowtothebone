import { blogPosts } from '@/lib/products';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // For static generation, we need to handle this synchronously-ish
  // Next.js 15 makes params a Promise
  return params.then(({ slug }) => {
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };
    return {
      title: post.title,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return notFound();

  return <BlogPostClient post={post} />;
}
