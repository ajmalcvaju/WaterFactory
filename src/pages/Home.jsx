import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ShieldCheck, Zap, Droplet, Smartphone, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroSlides = [
    {
      title: "Pure Water, Pure Life",
      subtitle: "Advanced RO + UV + Mineral Boost Technology",
      image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=1600",
      cta: "Get Quote",
      path: "/contact"
    },
    {
      title: "Next-Gen Purification",
      subtitle: "Smart Sensors for 24/7 Monitoring",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=1600",
      cta: "Explore Products",
      path: "/products"
    },
    {
      title: "Healthy Hydration",
      subtitle: "Retains Essential Minerals Automatically",
      image: "https://images.unsplash.com/photo-1621510456681-23a23d92f5b7?auto=format&fit=crop&q=80&w=1600",
      cta: "Book Service",
      path: "/services"
    }
  ];

  const features = [
    { icon: <ShieldCheck size={32} />, title: "RO + UV + UF", desc: "Multi-stage purification for 100% safety" },
    { icon: <Zap size={32} />, title: "Mineral Boost", desc: "Adds essential minerals like Calcium & Magnesium" },
    { icon: <Droplet size={32} />, title: "Smart Save", desc: "Reduces water wastage by up to 60%" },
    { icon: <Smartphone size={32} />, title: "App Control", desc: "Monitor water quality from your phone" },
  ];

  const products = [
    { name: "Aqua Pure X1", price: "₹15,999", image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=600" },
    { name: "Crystal Flow", price: "₹18,499", image: "https://images.unsplash.com/photo-1621510456681-23a23d92f5b7?auto=format&fit=crop&q=80&w=600" },
    { name: "Zenith Pro", price: "₹21,999", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600" },
    { name: "Eco Hydrate", price: "₹12,999", image: "https://images.unsplash.com/photo-1581091870622-023024108849?auto=format&fit=crop&q=80&w=600" },
  ];

  const testimonials = [
    { name: "Rahul Sharma", text: "The best water purifier I've ever used. The taste is amazing!", role: "IT Professional" },
    { name: "Priya Patel", text: "Excellent service and maintenance. Highly recommended for families.", role: "Homemaker" },
    { name: "Ankit Gupta", text: "The app control feature is a game changer. Very easy to use.", role: "Engineer" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="h-[90vh] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full w-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i} className="relative">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 font-light"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Link to={slide.path} className="btn-primary flex items-center gap-2">
                    {slide.cta} <ArrowRight size={20} />
                  </Link>
                  <a href="https://wa.me/918714156151" target="_blank" rel="noopener noreferrer" className="btn-secondary bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary-start flex items-center gap-2">
                    WhatsApp Now <MessageCircle size={20} />
                  </a>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-start/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Smart Purification for Your Home</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our advanced technology ensures that every drop of water is pure, 
              safe, and enriched with essential minerals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-water-gradient text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Best Sellers</h2>
              <p className="text-slate-500">Discover the most popular purifiers trusted by thousands.</p>
            </div>
            <Link to="/products" className="text-primary-start font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {products.map((product, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg"
                >
                  <div className="h-64 overflow-hidden relative group">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-primary-start">
                      Best Seller
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-bold text-slate-800">{product.price}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                    </div>
                    <Link to="/contact" className="btn-primary w-full block text-center py-3">
                      Enquire Now
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-start/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-end/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Why Water Factory is the <span className="gradient-text">Right Choice</span> for Your Family</h2>
              <div className="space-y-6">
                {[
                  { title: "10+ Years of Excellence", desc: "Proven track record in water purification technology." },
                  { title: "24/7 Customer Support", desc: "Our technicians are always ready to help you." },
                  { title: "Eco-Friendly Design", desc: "Minimum water wastage and low power consumption." },
                  { title: "Premium Quality Build", desc: "Using only the highest grade materials for durability." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-primary-start" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800" alt="Purification" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl text-slate-800 hidden md:block">
                <div className="text-4xl font-bold text-primary-start mb-1">99.9%</div>
                <div className="font-semibold">Purity Guaranteed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title mb-16">What Our Customers Say</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left h-full flex flex-col">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-lg text-slate-600 mb-8 flex-grow italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-water-gradient flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-slate-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-water-gradient p-12 text-white relative overflow-hidden shadow-2xl text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Expert Advice?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Get a free water test and consultation for your home today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary-start px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                Contact Us
              </Link>
              <a href="https://wa.me/918714156151" className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black/30 transition-all flex items-center gap-3">
                <MessageCircle size={24} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
