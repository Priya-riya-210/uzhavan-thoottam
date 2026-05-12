import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';

// Category accent colors
const catColors = {
  Oils: { dot: '#D4891A', label: 'bg-amber-50  text-amber-700  border-amber-200' },
  Sweeteners: { dot: '#5C1A1A', label: 'bg-red-50    text-red-800    border-red-200' },
  Beverages: { dot: '#1A4A2E', label: 'bg-green-50  text-green-800  border-green-200' },
  Spices: { dot: '#B45309', label: 'bg-orange-50 text-orange-700 border-orange-200' },
  'Dry Fruits': { dot: '#78350F', label: 'bg-yellow-50 text-yellow-800 border-yellow-200' },
  Dairy: { dot: '#4B5563', label: 'bg-gray-50   text-gray-700   border-gray-200' },
  Pickles: { dot: '#991B1B', label: 'bg-rose-50   text-rose-800   border-rose-200' },
  Fresh: { dot: '#15803D', label: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
};

const ProductCard = ({ product, index = 0 }) => {
  const [showPreview, setShowPreview] = useState(false);
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
      className="group relative bg-white border border-gray-100 hover:border-brand-saffron/25 overflow-hidden transition-colors duration-300 cursor-pointer"
    >
      {/* Category color strip */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ backgroundColor: cat.dot }} />

      {/* ── Image ── */}
      <div className="relative overflow-hidden">
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
            onClick={(e) => { e.stopPropagation(); setShowPreview(true); }}
            className="w-10 h-10 bg-brand-saffron text-brand-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            title="View images"
          >
            <Eye size={18} />
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

        {/* Action icons */}
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={(e) => { e.stopPropagation(); setShowPreview(true); }}
            className="text-brand-saffron hover:text-brand-maroon transition-colors flex items-center gap-2 group/btn"
          >
            <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">View Image</span>
          </button>
        </div>

        {/* Sweep underline — desktop only */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 hidden sm:block"
          style={{ backgroundColor: cat.dot }}
        />
      </div>
      {/* Lightbox Preview - rendered via Portal to escape 3D transforms */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showPreview && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowPreview(false)}
                className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
              />

              {/* Close button - Top Right */}
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-6 right-6 z-[1010] text-brand-cream/60 hover:text-brand-saffron transition-colors p-2 bg-white/5 rounded-full"
                title="Close"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative z-[1000] max-w-5xl w-full flex flex-col items-center"
              >
                <div className="relative group/modal overflow-hidden rounded-sm shadow-2xl border border-brand-cream/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 opacity-50" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-brand-cream font-playfair font-bold text-3xl md:text-4xl mb-3">{product.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-brand-saffron/40" />
                    <p className="text-brand-saffron text-xs font-bold uppercase tracking-[0.3em]">{product.category}</p>
                    <span className="h-px w-8 bg-brand-saffron/40" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};

export default ProductCard;
