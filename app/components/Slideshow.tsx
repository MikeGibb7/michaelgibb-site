'use client';
import { useState, useEffect } from 'react';

type SlideshowProps = {
  images: string[];
  interval?: number; // ms between slides
};

export default function Slideshow({ images, interval = 3000 }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`absolute max-h-full max-w-full object-contain transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* little dots at bottom */}
      <div className="absolute bottom-2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === current ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
