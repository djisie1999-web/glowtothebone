import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wider mb-4">
              GLOW TO THE BONE
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Clean &amp; natural skincare, handmade in the UK. Nurture your skin with
              pure, grass-fed tallow formulas designed to hydrate, restore, and radiate
              confidence from within.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide mb-4">Shop</h4>
            <ul className="space-y-3">
              {[
                { href: '/products', label: 'All Products' },
                { href: '/products?category=skincare', label: 'Skincare' },
                { href: '/products?category=candles', label: 'Candles' },
                { href: '/products', label: 'Gift Sets' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide mb-4">Customer Care</h4>
            <ul className="space-y-3">
              {[
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/faq#shipping', label: 'Shipping & Returns' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms & Conditions' },
              ].map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide mb-4">Connect</h4>
            <ul className="space-y-3">
              {[
                { href: 'https://instagram.com/glowtothebone', label: 'Instagram' },
                { href: 'https://tiktok.com/@glowtothebone', label: 'TikTok' },
                { href: 'https://facebook.com/glowtothebone', label: 'Facebook' },
                { href: 'mailto:hello@glowtothebone.com', label: 'hello@glowtothebone.com' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment methods & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs">
              We accept Visa, Mastercard, PayPal, Apple Pay, Google Pay, Klarna
            </p>
            <p className="text-white/50 text-xs">
              &copy; {new Date().getFullYear()} Glow to the Bone Skincare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
