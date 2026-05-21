import AnimatedSection from '../components/AnimatedSection';
import { Leaf, Award, Sprout } from 'lucide-react';
import farmingMethods from '../assets/Types_and_Methods_of_Organic_Farming.webp';
import nutsImg from '../assets/about/nuts-image.webp';
import coffeeBeansImg from '../assets/about/Coffee-beans.webp';
import img1 from '../assets/about/img-1.webp';
import sugarCaneImg from '../assets/product-images/sugar-cane-img.webp';
import img3 from '../assets/about/img-3.webp';

const About = () => {
  return (
    <div className="pt-14 bg-brand-cream">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Farm background"
          />
        </div>
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-brand-saffron via-brand-saffron to-brand-maroon" />
        <div className="container-custom relative z-10 px-6 text-center">
          <AnimatedSection>
            <span className="text-brand-saffron font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-cream mb-6">Our Story</h1>
            <div className="h-1 w-24 bg-brand-saffron mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <AnimatedSection>
              <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-8 leading-tight italic">Rooted in Tradition, Grown with Love.</h2>
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-6">
                Uzhavan Thottam was founded with a single mission: to bring back the authentic, nutrient-rich foods that our grandparents once enjoyed. In a world of processed and chemically enhanced food, we stand for purity.
              </p>
              <p className="text-brand-dark/70 text-lg leading-relaxed">
                Our journey began in the lush fields of Tamil Nadu, where we partnered with local farmers who still practice traditional organic farming. Today, we are proud to be a bridge between these guardians of nature and your kitchen.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-video lg:aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={nutsImg}
                  alt="Traditional Farming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-saffron p-8 shadow-xl hidden md:block">
                <p className="text-brand-dark font-playfair font-bold text-2xl italic">"Pure from the Soil"</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <AnimatedSection className="order-2 lg:order-1 relative">
              <div className="aspect-video lg:aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={coffeeBeansImg}
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-8 leading-tight italic">Our Philosophy</h2>
              <div className="space-y-8">
                {[
                  { title: "Organic Farming", desc: "We believe in the power of nature. No synthetic fertilizers or pesticides are ever used on our partner farms.", icon: Sprout },
                  { title: "Traditional Methods", desc: "Our oils are wood-pressed (Marachekku) and our spices are sun-dried to preserve their natural essence.", icon: Award },
                  { title: "Sustainable Living", desc: "We are committed to eco-friendly packaging and supporting sustainable farming practices.", icon: Leaf }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-saffron/10 flex items-center justify-center text-brand-saffron rounded-full">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                      <p className="text-brand-dark/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Organic Farming Methods Section */}
          {/* <AnimatedSection direction="up" className="mb-20">
            <div className="rounded-sm overflow-hidden shadow-2xl border border-brand-dark/5 bg-white p-2">
              <img
                src={farmingMethods}
                alt="Types and Methods of Organic Farming"
                className="w-full h-auto object-contain"
              />
            </div>
          </AnimatedSection> */}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-brand-dark text-brand-cream overflow-hidden relative">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-brand-saffron via-brand-saffron to-brand-maroon" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection className="bg-brand-olive/30 p-12 border border-brand-saffron/20">
              <h3 className="text-3xl font-playfair font-bold text-brand-saffron mb-6 italic underline decoration-brand-saffron/30 underline-offset-8">Our Vision</h3>
              <p className="text-xl leading-relaxed text-brand-cream/80">
                To become the global standard for authentic organic food, where every household has access to the pure essence of nature, fostering a healthier and more sustainable world.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="bg-brand-olive/30 p-12 border border-brand-saffron/20">
              <h3 className="text-3xl font-playfair font-bold text-brand-saffron mb-6 italic underline decoration-brand-saffron/30 underline-offset-8">Our Mission</h3>
              <p className="text-xl leading-relaxed text-brand-cream/80">
                To empower local farmers, preserve traditional agricultural wisdom, and provide our customers with chemical-free, nutrient-rich products that nourish the body and soul.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <AnimatedSection>
              <span className="text-brand-saffron font-bold tracking-widest uppercase text-xs mb-4 block">Our Partners</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-dark italic">Empowering Local Farmers</h2>
              <p className="mt-6 text-brand-dark/60 max-w-2xl mx-auto text-lg">
                We work directly with over 50+ traditional farming families, ensuring they get fair prices while you get the best products.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {[
              img1, sugarCaneImg, img3
            ].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="overflow-hidden group">
                <img src={img} alt="Farmer" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </AnimatedSection>
            ))}
          </div>

          {/* Organic Farming Methods Section - Before Footer */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="rounded-sm overflow-hidden shadow-2xl border border-brand-dark/5 bg-white p-2">
              <img
                src={farmingMethods}
                alt="Organic Farming Methods"
                className="w-full h-auto object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
