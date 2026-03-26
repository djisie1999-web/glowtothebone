import { getProductBySlug } from '@/lib/products';
import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pure Whipped Tallow',
  description: 'Single-ingredient natural moisturiser. Pure grass-fed tallow, nothing else. Perfect for sensitive skin and those who want simplicity.',
};

export default function PureWhippedTallowPage() {
  const product = getProductBySlug('pure-whipped-tallow');
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
