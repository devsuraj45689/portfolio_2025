'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CardImage({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-48 group">      
    {images.map((img, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 
                     ${idx === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}
