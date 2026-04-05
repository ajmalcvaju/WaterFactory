import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Search, Filter, MessageCircle, Info, Star, ShieldCheck, Zap, Droplet } from 'lucide-react';

const Products = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'RO + UV', 'Under-the-counter', 'Mineral Boost', 'Industrial'];

  const products = [
    { 
      id: 1,
      name: "Aqua Pure X1", 
      category: "RO + UV",
      price: "₹15,999", 
      image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=600",
      features: ["7-stage purification", "RO+UV+UF", "Smart Alerts"],
      rating: 4.8
    },
    { 
      id: 2,
      name: "Crystal Flow", 
      category: "Mineral Boost",
      price: "₹18,499", 
      image: "https://images.unsplash.com/photo-1621510456681-23a23d92f5b7?auto=format&fit=crop&q=80&w=600",
      features: ["Active Copper Tech", "pH Balanced", "8L Tank"],
      rating: 4.9
    },
    { 
      id: 3,
      name: "Zenith Pro", 
      category: "RO + UV",
      price: "₹21,999", 
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600",
      features: ["Alkaline Boost", "Zero Water Waste", "Stainless Steel Tank"],
      rating: 5.0
    },
    { 
      id: 4,
      name: "Eco Hydrate", 
      category: "RO + UV",
      price: "₹12,999", 
      image: "https://images.unsplash.com/photo-1581091870622-023024108849?auto=format&fit=crop&q=80&w=600",
      features: ["Compact Design", "Wall Mounted", "UV Shield"],
      rating: 4.7
    },
    { 
      id: 5,
      name: "UnderSink S2", 
      category: "Under-the-counter",
      price: "₹24,999", 
      image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=600",
      features: ["Concealed Design", "High Flow Rate", "Faucet Included"],
      rating: 4.9
    },
    { 
      id: 6,
      name: "IndusFlow 500", 
      category: "Industrial",
      price: "₹85,000", 
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600",
      features: ["500 LPH Capacity", "Pre-filtration", "High Durability"],
      rating: 4.6
    }
  ];

  const filteredProducts = products.filter(p => 
    (filter === 'All' || p.category === filter) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getWhatsappUrl = (product) => {
    const msg = `Hello Water Factory, I am interested in ${product.name} (Price: ${product.price}). Please provide more details.`;
    return `https://wa.me/918714156151?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="gradient-text">Premium</span> Purifiers</h1>
              <p className="text-slate-500 max-w-xl">
                Choose from our wide range of smart water purifiers tailored 
                to meet your specific health needs and home aesthetics.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-start transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-12 pr-6 py-4 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary-start/20 outline-none w-full md:w-64 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="py-8 bg-white border-y border-slate-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-water-gradient text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Star className="text-yellow-400 fill-yellow-400" size={24} /> Recommended for You
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {products.slice(0, 3).map((product, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[400px] rounded-[40px] overflow-hidden group shadow-xl">
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold w-fit mb-4 border border-white/30">
                    {product.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                  <p className="text-white/70 mb-6">{product.features[0]}</p>
                  <a href={getWhatsappUrl(product)} className="btn-primary text-center">Enquire Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold">Showing {filteredProducts.length} Products</h2>
          <div className="flex items-center gap-2 text-slate-500">
            <Filter size={20} /> <span>Sort By: Relevance</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-lg flex flex-col h-full"
              >
                <div className="h-72 overflow-hidden relative group">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-md text-primary-start">
                    <Star size={20} fill="currentColor" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-primary-start uppercase tracking-widest mb-1 block">{product.category}</span>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                    <span className="text-2xl font-bold text-slate-800">{product.price}</span>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                        <ShieldCheck size={16} className="text-green-500" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={getWhatsappUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary py-4 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} /> Enquire
                    </a>
                    <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-primary-start/10 hover:text-primary-start transition-all">
                      <Info size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Droplet size={64} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-bold text-slate-400">No products found matching your criteria.</h3>
          </div>
        )}
      </section>

      {/* Features Comparison CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-[50px] bg-slate-900 p-12 text-white relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-start/10 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Compare Our Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-primary-start">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-bold">RO Technology</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Removes dissolved solids, heavy metals, and chemicals effectively.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-primary-start">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-bold">UV Purification</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Instant inactivation of bacteria and viruses without chemicals.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-primary-start">
                <Droplet size={32} />
              </div>
              <h4 className="text-xl font-bold">Alkaline Boost</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Maintains perfect pH balance and adds essential minerals.</p>
            </div>
          </div>
          <button className="btn-primary px-12 py-4 text-lg">Download Brochure</button>
        </div>
      </section>
    </div>
  );
};

export default Products;
