import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

// Category accent colors
const catColors = {
  Oils:         { dot: '#D4891A', label: 'bg-amber-50  text-amber-700  border-amber-200'  },
  Sweeteners:   { dot: '#5C1A1A', label: 'bg-red-50    text-red-800    border-red-200'    },
  Beverages:    { dot: '#1A4A2E', label: 'bg-green-50  text-green-800  border-green-200'  },
  Spices:       { dot: '#B45309', label: 'bg-orange-50 text-orange-700 border-orange-200' },
  'Dry Fruits': { dot: '#78350F', label: 'bg-yellow-50 text-yellow-800 border-yellow-200' },
};

const ProductCard = ({ product, index = 0 }) => {
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 220, damping: 22 };
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), spring);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), spring);

  const onMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const cat = catColors[product.category] || catColors.Oils;
  const slideX = index % 2 === 0 ? 36 : -36;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: slideX, y: 14 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.52, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      /* 3D tilt only on desktop (mouse device) */
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative bg-white border border-gray-100 hover:border-brand-gold/25 overflow-hidden transition-colors duration-300 cursor-pointer"
    >
      {/* Category color strip */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ backgroundColor: cat.dot }} />

      {/* ── Image ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/*
          Desktop: overlay appears on hover
          Mobile:  overlay is hidden (no hover on touch) — we show action strip below instead
        */}
        <div className="absolute inset-0 bg-brand-dark/55 flex items-center justify-center gap-3
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        hidden sm:flex">
          <button
            className="w-10 h-10 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            title="Add to cart"
          >
            <ShoppingCart size={15} />
          </button>
          <button
            className="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            title="View details"
          >
            <Eye size={15} />
          </button>
        </div>

        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-2 left-2">
            <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 border ${cat.label}`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="p-3 md:p-4 relative">
        {/* Category label */}
        <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: cat.dot }}>
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-playfair font-bold text-brand-dark text-sm leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price + action */}
        <div className="flex items-center justify-between">
          <span className="font-playfair font-bold text-brand-saffron text-sm md:text-base">
            {product.price}
          </span>
          {/* Mobile: visible action buttons row (since no hover on touch) */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              className="w-7 h-7 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center"
              title="Add to cart"
            >
              <ShoppingCart size={12} />
            </button>
            <button
              className="w-7 h-7 border border-brand-dark/15 text-brand-dark rounded-full flex items-center justify-center"
              title="View"
            >
              <Eye size={12} />
            </button>
          </div>

          {/* Desktop: text link */}
          <span className="hidden sm:block text-[9px] font-bold uppercase tracking-wider text-brand-dark/25 group-hover:text-brand-maroon transition-colors duration-300">
            View →
          </span>
        </div>

        {/* Sweep underline — desktop only */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 hidden sm:block"
          style={{ backgroundColor: cat.dot }}
        />
      </div>
    </motion.div>
  );
};

export default ProductCard;
