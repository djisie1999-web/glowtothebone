'use client';

import { useState, useRef, useCallback } from 'react';
import AnimatedSection from './AnimatedSection';

interface SliderProps {
  title: string;
  beforeLabel: string;
  afterLabel: string;
}

function ComparisonSlider({ title, beforeLabel, afterLabel }: SliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="text-center">
      <h3 className="font-serif text-2xl font-semibold text-text mb-4">{title}</h3>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lg"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After (full) */}
        <div className="absolute inset-0 after-gradient flex items-center justify-center">
          <span className="text-white/80 font-serif text-xl tracking-wider">{afterLabel}</span>
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 before-gradient flex items-center justify-center overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <span className="text-white/80 font-serif text-xl tracking-wider">{beforeLabel}</span>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-green/40 rounded-full" />
              <div className="w-0.5 h-4 bg-green/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">Real Results</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text mb-4">
              Visible Transformation
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              See the difference our tallow-based skincare has made for customers
              dealing with common skin conditions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <ComparisonSlider
              title="Psoriasis Relief"
              beforeLabel="Before"
              afterLabel="After"
            />
            <ComparisonSlider
              title="Eczema Relief"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-text-muted text-sm mt-8 italic">
            Individual results may vary. These images represent typical outcomes reported by our customers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
