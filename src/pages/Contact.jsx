import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React from 'react';

// Social icons (not available in installed lucide-react version)
const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <div className="pt-14 bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-dark text-brand-cream overflow-hidden relative">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-brand-saffron via-brand-saffron to-brand-maroon" />
        <div className="container-custom relative z-10 px-6 text-center">
          <AnimatedSection>
            <span className="text-brand-saffron font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Connect With Us</span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-cream mb-6">Get In Touch</h1>
            <p className="text-brand-cream/60 max-w-2xl mx-auto text-lg italic">
              Have questions about our products or farming practices? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <AnimatedSection>
                <h2 className="text-3xl font-playfair font-bold text-brand-dark mb-10">Contact Details</h2>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-brand-saffron/10 flex items-center justify-center text-brand-saffron rounded-full group-hover:bg-brand-saffron group-hover:text-brand-dark transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1 tracking-wider uppercase text-sm">Location</h3>
                      <p className="text-brand-dark/60 leading-relaxed">4/47 Kangayampalayam, Kuppam (po), <br />Karur (dt), Pin code : 639111</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-brand-saffron/10 flex items-center justify-center text-brand-saffron rounded-full group-hover:bg-brand-saffron group-hover:text-brand-dark transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1 tracking-wider uppercase text-sm">Call Us</h3>
                      <p className="text-brand-dark/60 leading-relaxed">+91 63851 72761</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-brand-saffron/10 flex items-center justify-center text-brand-saffron rounded-full group-hover:bg-brand-saffron group-hover:text-brand-dark transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1 tracking-wider uppercase text-sm">Email Us</h3>
                      <p className="text-brand-dark/60 leading-relaxed">hello@uzhavanthottam.com</p>
                      <p className="text-brand-dark/60 leading-relaxed">support@uzhavanthottam.com</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="text-3xl font-playfair font-bold text-brand-dark mb-8">Follow Us</h2>
                <div className="flex gap-6">
                  {[
                    { Icon: FacebookIcon, href: 'https://www.facebook.com/Uzhavanthottam' },
                    { Icon: InstagramIcon, href: 'https://www.instagram.com/Uzhavan_2026' },
                    { Icon: TwitterIcon, href: '#' }
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-brand-saffron/30 flex items-center justify-center text-brand-saffron rounded-full hover:bg-brand-saffron hover:text-brand-dark transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection className="bg-white p-10 md:p-16 shadow-2xl rounded-sm border-t-8 border-brand-saffron">
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-10 italic">Send a Message</h2>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-brand-cream/30 border-b-2 border-brand-dark/10 px-4 py-4 focus:outline-none focus:border-brand-saffron transition-colors text-brand-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full bg-brand-cream/30 border-b-2 border-brand-dark/10 px-4 py-4 focus:outline-none focus:border-brand-saffron transition-colors text-brand-dark"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full bg-brand-cream/30 border-b-2 border-brand-dark/10 px-4 py-4 focus:outline-none focus:border-brand-saffron transition-colors text-brand-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Subject</label>
                      <select className="w-full bg-brand-cream/30 border-b-2 border-brand-dark/10 px-4 py-4 focus:outline-none focus:border-brand-saffron transition-colors text-brand-dark">
                        <option>Product Inquiry</option>
                        <option>Order Status</option>
                        <option>Farming Collaboration</option>
                        <option>Bulk Orders</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Your Message</label>
                    <textarea
                      rows="6"
                      placeholder="Tell us how we can help you..."
                      className="w-full bg-brand-cream/30 border-b-2 border-brand-dark/10 px-4 py-4 focus:outline-none focus:border-brand-saffron transition-colors text-brand-dark resize-none"
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full sm:w-auto px-12 py-5 flex items-center justify-center group" type="button">
                    Send Message <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-brand-olive overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-brand-saffron">
            <MapPin size={48} className="mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-playfair italic">Visit Our Farm</h3>
            <p className="text-brand-cream/60">Google Maps Integration Placeholder</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-20"
          alt="Map context"
        />
      </section>
    </div>
  );
};

export default Contact;
