'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideshowProps = {
  images: string[];
  interval?: number;
  aspectClass?: string;
};

export default function Slideshow({
  images,
  interval = 3500,
  aspectClass = 'h-48',
}: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className={`relative w-full ${aspectClass} flex items-center justify-center bg-slate-900/90 rounded-xl overflow-hidden border border-white/10 group/slider shadow-inner`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={`Screenshot preview ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-contain p-2 transition-all duration-700 ${
            i === current
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        />
      ))}

      {/* Interactive Controls when hovering */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-4 h-1.5 bg-cyan-400'
                    : 'w-1.5 h-1.5 bg-slate-500 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
