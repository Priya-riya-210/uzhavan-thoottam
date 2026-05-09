import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShoppingBag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-14 bg-[#F7F2EA] ">
      {/* Header */}
      <section className="py-20 bg-brand-dark text-brand-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #C8A96B 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-brand-saffron via-brand-gold to-brand-maroon" />
        <div className="container-custom relative z-10 px-6 text-center">
          <AnimatedSection>
            <span className="text-brand-saffron font-bold tracking-[0.28em] uppercase text-xs mb-4 block">Our Collection</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-brand-cream italic mb-5">All Products</h1>
            <p className="text-brand-cream/50 max-w-xl mx-auto text-base md:text-lg">
              Traditionally processed, 100% organic products sourced directly from nature's lap.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[60px] z-30 bg-[#F7F2EA] border-b border-brand-dark/8 py-4">
        <div className="container-custom px-6 flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-250 border ${activeCategory === category
                  ? 'bg-brand-dark text-brand-gold border-brand-dark'
                  : 'bg-white text-brand-dark/55 border-brand-dark/8 hover:border-brand-gold/50 hover:text-brand-dark'
                  }`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-dark/10 px-5 py-2.5 pl-11 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark/35" size={16} />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-[#F7F2EA]">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product, idx) => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                  <ProductCard product={product} index={idx} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-dark/40 text-xl font-playfair italic">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-cream w-full max-w-5xl rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 text-brand-dark/40 hover:text-brand-dark transition-colors"
                type="button"
              >
                <X size={32} />
              </button>

              <div className="md:w-1/2 bg-white">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover aspect-square md:aspect-auto" />
              </div>

              <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{selectedProduct.category}</span>
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-6">{selectedProduct.name}</h2>
                <p className="text-3xl text-brand-brown font-bold mb-8">{selectedProduct.price}</p>
                <div className="h-px w-full bg-brand-dark/10 mb-8" />
                <p className="text-brand-dark/70 text-lg leading-relaxed mb-10">
                  {selectedProduct.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="btn-primary flex items-center justify-center flex-grow py-5 group" type="button">
                    <ShoppingBag className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                    Add to Cart
                  </button>
                </div>

                <div className="mt-12 space-y-4">
                  <p className="text-xs text-brand-dark/40 uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" /> In Stock & Ready to Ship
                  </p>
                  <p className="text-xs text-brand-dark/40 uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-brand-gold rounded-full mr-3" /> Free Delivery on orders above ₹999
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
