import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-img.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const navLinks = [
    { name: 'Home',     path: '/'         },
    { name: 'About',    path: '/about'    },
    { name: 'Products', path: '/products' },
    { name: 'Gallery',  path: '/gallery'  },
    { name: 'Contact',  path: '/contact'  },
  ];

  const handleNav = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(path), 60);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-brand-dark py-3 border-b border-brand-gold/10'
          : 'bg-brand-dark py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">

        {/* Logo */}
        <button onClick={() => handleNav('/')} className="flex items-center gap-3 focus:outline-none">
          <img src={logo} alt="Logo" className="w-9 h-9 rounded-full border border-brand-gold/60 object-cover" />
          <span className="font-playfair font-bold tracking-tight text-lg leading-none">
            <span className="text-brand-gold">UZHAVAN</span>
            <span className="text-brand-cream italic ml-1">THOTTAM</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.name}
                onClick={() => handleNav(link.path)}
                className={`relative text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-300 focus:outline-none pb-1 ${
                  isActive ? 'text-brand-gold' : 'text-brand-cream/65 hover:text-brand-gold'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 w-full h-px bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
          <button
            onClick={() => handleNav('/contact')}
            className="ml-2 px-5 py-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-gold p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-72 bg-brand-dark z-[60] md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-brand-gold/10">
                <span className="font-playfair text-brand-gold font-bold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-cream/60 hover:text-brand-gold">
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-8 py-8 gap-2 flex-grow">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => handleNav(link.path)}
                      className={`text-left py-4 border-b border-brand-cream/5 font-playfair text-xl tracking-wide transition-colors ${
                        isActive ? 'text-brand-gold' : 'text-brand-cream/70 hover:text-brand-gold'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>

              <div className="px-8 py-8 border-t border-brand-gold/10">
                <button
                  onClick={() => handleNav('/contact')}
                  className="w-full py-3 bg-brand-gold text-brand-dark font-bold text-xs tracking-widest uppercase"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
