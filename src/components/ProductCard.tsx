'use client';

import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(s => s.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <div className={`absolute inset-0 ${product.images[0]} transition-transform duration-700 group-hover:scale-110`} />

          {product.onSale && (
            <span className="sale-badge absolute top-4 left-4 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Sale
            </span>
          )}

          {/* Quick add */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-green hover:bg-green hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            aria-label="Quick add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}
              />
            ))}
            <span className="text-xs text-text-muted ml-1">({product.reviewCount})</span>
          </div>

          <h3 className="font-serif text-lg font-semibold text-text group-hover:text-green transition-colors leading-tight mb-2">
            {product.name}
          </h3>

          <p className="text-sm text-text-muted mb-3 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-green text-lg">{formatPrice(product.price)}</span>
            {product.onSale && (
              <span className="text-text-light line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
