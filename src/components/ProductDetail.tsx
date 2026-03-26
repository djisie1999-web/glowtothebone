'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Minus, Plus, ChevronDown, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/products';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';
import AnimatedSection from './AnimatedSection';
import NewsletterSignup from './NewsletterSignup';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-green transition-colors"
      >
        <span className="font-medium text-sm uppercase tracking-wider">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-text-muted text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [subscriptionMode, setSubscriptionMode] = useState(false);
  const [subscriptionInterval, setSubscriptionInterval] = useState('Monthly');
  const addItem = useCartStore(s => s.addItem);

  const otherProducts = products.filter(p => p.id !== product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: subscriptionMode ? `${product.id}-sub-${subscriptionInterval}` : product.id,
        name: product.name,
        price: subscriptionMode ? (product.subscriptionPrice || product.price) : product.price,
        image: product.images[0],
        ...(subscriptionMode && product.subscriptionPrice ? {
          subscription: {
            interval: subscriptionInterval,
            price: product.subscriptionPrice,
          },
        } : {}),
      });
    }
  };

  const displayPrice = subscriptionMode && product.subscriptionPrice
    ? product.subscriptionPrice
    : product.price;

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-text-muted">
            <Link href="/" className="hover:text-green transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-green transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{product.shortName}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Image Gallery */}
            <AnimatedSection>
              <div>
                <div className={`aspect-square rounded-2xl ${product.images[currentImage]} mb-4 shadow-lg`} />
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-16 h-16 rounded-lg ${img} transition-all ${
                        i === currentImage ? 'ring-2 ring-green ring-offset-2' : 'opacity-60 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Product Info */}
            <AnimatedSection delay={0.2}>
              <div>
                {product.onSale && (
                  <span className="sale-badge inline-block bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Sale
                  </span>
                )}

                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-text mb-3 leading-tight">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'} />
                    ))}
                  </div>
                  <span className="text-sm text-text-muted">
                    {product.rating}/5 ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-semibold text-green">{formatPrice(displayPrice)}</span>
                  {product.onSale && !subscriptionMode && (
                    <span className="text-lg text-text-light line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                  {subscriptionMode && product.subscriptionPrice && (
                    <span className="text-lg text-text-light line-through">{formatPrice(product.price)}</span>
                  )}
                </div>

                <p className="text-text-muted leading-relaxed mb-6">{product.description}</p>

                {/* Subscription */}
                {product.subscriptionPrice && (
                  <div className="bg-cream-dark rounded-xl p-5 mb-6 border border-border">
                    <label className="flex items-center gap-3 cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        checked={subscriptionMode}
                        onChange={() => setSubscriptionMode(!subscriptionMode)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        subscriptionMode ? 'bg-green border-green' : 'border-border'
                      }`}>
                        {subscriptionMode && <Check size={14} className="text-white" />}
                      </div>
                      <div>
                        <span className="font-medium text-sm">Auto Replenish &mdash; Save 20%</span>
                        <span className="text-green font-semibold ml-2 text-sm">{formatPrice(product.subscriptionPrice)}</span>
                      </div>
                    </label>
                    {subscriptionMode && (
                      <div className="flex gap-2 ml-8">
                        {['Monthly', 'Every 3 Months', 'Every 6 Months'].map(interval => (
                          <button
                            key={interval}
                            onClick={() => setSubscriptionInterval(interval)}
                            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                              subscriptionInterval === interval
                                ? 'bg-green text-white'
                                : 'bg-white text-text border border-border'
                            }`}
                          >
                            {interval}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Stock */}
                {product.inStock && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green" />
                    <span className="text-sm text-green font-medium">In stock</span>
                  </div>
                )}

                {/* Quantity + Add to cart */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center border border-border rounded-full bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:text-green transition-colors"
                      aria-label="Decrease"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:text-green transition-colors"
                      aria-label="Increase"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="btn-pill btn-primary flex-1 py-4"
                  >
                    <ShoppingBag className="mr-2" size={18} />
                    Add to Cart
                  </button>
                </div>

                {/* Accordion sections */}
                <div className="border-t border-border">
                  <AccordionItem title="Key Benefits" defaultOpen>
                    <ul className="space-y-2">
                      {product.keyBenefits.map(b => (
                        <li key={b} className="flex items-start gap-2">
                          <Check className="text-green flex-shrink-0 mt-0.5" size={14} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Ingredients">
                    <ul className="space-y-1">
                      {product.ingredients.map(i => (
                        <li key={i}>&bull; {i}</li>
                      ))}
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Free From">
                    <div className="flex flex-wrap gap-2">
                      {product.freeFrom.map(f => (
                        <span key={f} className="bg-cream px-3 py-1 rounded-full text-xs border border-border">
                          {f}
                        </span>
                      ))}
                    </div>
                  </AccordionItem>
                  <AccordionItem title="Tallow Like No Other">
                    <p>{product.tallowInfo}</p>
                  </AccordionItem>
                  <AccordionItem title="How to Use">
                    <p>{product.howToUse}</p>
                  </AccordionItem>
                  <AccordionItem title="Scent Profile">
                    <p>{product.scentProfile}</p>
                  </AccordionItem>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* You might also like */}
      {otherProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text">
                  You Might Also Like
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {otherProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <NewsletterSignup />
    </>
  );
}
