'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCartStore();
  const count = totalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const navLinks = [
    { href: '/products', label: 'Skincare' },
    { href: '/products?category=candles', label: 'Candles' },
    { href: '/#skin-quiz', label: 'Skin Quiz' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-green text-white text-center py-2 text-xs tracking-widest font-sans uppercase">
        Free UK delivery on orders over &pound;50
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-text hover:text-green transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Nav links (desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 3).map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-text hover:text-green transition-colors uppercase font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Glow to the Bone Skincare"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Right side nav + icons */}
            <div className="flex items-center gap-4 md:gap-8">
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.slice(3).map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide text-text hover:text-green transition-colors uppercase font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <button className="hidden md:block text-text hover:text-green transition-colors" aria-label="Search">
                  <Search size={20} />
                </button>
                <button className="hidden md:block text-text hover:text-green transition-colors" aria-label="Account">
                  <User size={20} />
                </button>
                <button
                  className="relative text-text hover:text-green transition-colors"
                  onClick={openCart}
                  aria-label="Cart"
                >
                  <ShoppingBag size={20} />
                  {count > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                      {count}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream md:hidden" style={{ top: '88px' }}>
          <nav className="flex flex-col p-8 gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-serif tracking-wide text-text hover:text-green transition-colors uppercase"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog"
              className="text-lg font-serif tracking-wide text-text hover:text-green transition-colors uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-lg font-serif tracking-wide text-text hover:text-green transition-colors uppercase"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
