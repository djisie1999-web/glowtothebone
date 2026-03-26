import { getProductBySlug } from '@/lib/products';
import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signature Blend Infused Whipped Tallow',
  description: 'Our bestselling multi-purpose whipped tallow balm. Specially formulated for deep hydration and nourishment for all skin types. Now on sale.',
};

export default function SignatureBlendPage() {
  const product = getProductBySlug('signature-blend');
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
