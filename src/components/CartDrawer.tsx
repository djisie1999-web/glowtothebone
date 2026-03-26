'use client';

import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl font-semibold tracking-wide">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-text-muted hover:text-text transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-text-muted">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-lg font-serif">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="btn-pill btn-primary mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-border">
                  {/* Product image placeholder */}
                  <div className={`w-20 h-20 rounded-lg flex-shrink-0 ${item.image}`} />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm leading-tight mb-1 truncate">{item.name}</h3>
                    {item.subscription && (
                      <p className="text-xs text-green mb-1">
                        Auto Replenish — {item.subscription.interval}
                      </p>
                    )}
                    <p className="text-sm font-semibold text-green">
                      {formatPrice(item.subscription?.price || item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:text-green transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:text-green transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-text-muted hover:text-red-500 underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Subtotal</span>
              <span className="font-serif text-xl font-semibold">{formatPrice(totalPrice())}</span>
            </div>
            <p className="text-xs text-text-muted">Shipping calculated at checkout</p>
            <Link
              href="#"
              className="btn-pill btn-primary w-full text-center block"
              onClick={closeCart}
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-text-muted hover:text-text underline transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
