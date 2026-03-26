'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-border p-6 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-text-muted flex-1">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={accept}
            className="btn-pill btn-primary text-xs px-6 py-2"
          >
            Accept
          </button>
          <button
            onClick={accept}
            className="text-xs text-text-muted hover:text-text underline"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
