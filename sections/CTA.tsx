import React from 'react';
import {Mail} from 'lucide-react';
import Link from 'next/link';

const CTA: React.FC = () => {
    return (
         <section
  className="py-20 px-6"
  style={{ backgroundColor: "#EDEDED" }}
>
  <div className="max-w-4xl mx-auto text-center">
    <h2
      className="text-5xl font-bold mb-6"
      style={{
        color: "#1B1B1C",
        fontFamily: "Inter, sans-serif",
      }}
    >
      Let’s Build Something{" "}
      <span style={{ color: "#C6A667" }}>Impactful</span>
    </h2>

    <p
      className="text-xl mb-6"
      style={{
        color: "#666666",
        fontFamily: "Inter, sans-serif",
      }}
    >
      I’m a <strong>Frontend Engineer (SDE-II)</strong> focused on building{" "}
      <strong>scalable, performance-driven web applications</strong> using React
      and modern frontend architectures.
    </p>

    <p
      className="text-lg mb-10"
      style={{
        color: "#666666",
        fontFamily: "Inter, sans-serif",
      }}
    >
      If you’re hiring for a <strong>remote or hybrid frontend role</strong>, or
      looking for a <strong>contract engineer</strong> who can own frontend
      features end-to-end, I’d love to connect.
    </p>

    <div className="flex gap-4 justify-center">
      <Link href="/contact-us">
        <button
          className="px-10 py-4 rounded-lg font-medium text-lg transition-all hover:shadow-lg flex items-center gap-2"
          style={{
            backgroundColor: "#C6A667",
            color: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </button>
      </Link>
    </div>
  </div>
</section>

    );
};

export default CTA;