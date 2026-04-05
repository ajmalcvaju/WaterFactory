import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Wrench, Settings, ShieldCheck, Zap, Droplet, Clock, UserCheck, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: <Wrench size={32} />,
      title: "Installation",
      desc: "Professional installation by certified technicians to ensure optimal performance and longevity.",
      points: ["Leak-proof Setup", "Proper Pressure Calibration", "Free Demo Included"]
    },
    {
      icon: <Settings size={32} />,
      title: "Annual Maintenance",
      desc: "Regular checkups and filter replacements to keep your water pure and healthy all year round.",
      points: ["Pre-emptive Checks", "Genuine Spares", "Deep Tank Cleaning"]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Repair & Support",
      desc: "Fast and reliable repair services for all major brands and models with guaranteed satisfaction.",
      points: ["Same-day Service", "Expert Troubleshooting", "Warranty Support"]
    }
  ];

  const highlights = [
    {
      title: "24/7 Support",
      desc: "Our customer care team is always available to help you with your queries.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Original Spares",
      desc: "We only use genuine and high-quality spare parts for all our services.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Certified Experts",
      desc: "All our technicians are trained and certified to handle complex purifiers.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const bookingSteps = [
    { icon: <Calendar size={24} />, title: "Book Online", desc: "Select your service and preferred time slot." },
    { icon: <Phone size={24} />, title: "Confirmation", desc: "Get a call back from our service coordinator." },
    { icon: <UserCheck size={24} />, title: "Expert Visit", desc: "Our technician arrives at your doorstep." },
    { icon: <Droplet size={24} />, title: "Pure Water", desc: "Enjoy 100% pure water without any hassle." }
  ];

  const getWhatsappUrl = (service) => {
    const msg = `Hello Water Factory, I want to book a ${service} service. Please contact me.`;
    return `https://wa.me/918714156151?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Expert <span className="gradient-text">Care</span> for Your Purifier</h1>
              <p className="text-lg text-slate-500 mb-10 max-w-xl">
                We provide professional installation, regular maintenance, and 
                reliable repair services to ensure your family always gets the 
                purest water possible.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={getWhatsappUrl("General Service")} className="btn-primary flex items-center gap-2">
                  <MessageCircle size={20} /> Book Service Now
                </a>
                <a href="tel:8714156151" className="btn-secondary flex items-center gap-2">
                  <Phone size={20} /> Call Expert
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Service" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl text-slate-800 hidden md:block border border-slate-100">
                <div className="text-3xl font-bold text-primary-start mb-1">50,000+</div>
                <div className="font-semibold text-slate-500">Service Calls Done</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Service Solutions</h2>
          <p className="text-slate-500">Comprehensive care for all types of water purification systems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-xl group hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-water-gradient text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">{service.desc}</p>
              <ul className="space-y-4 mb-10">
                {service.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-600 font-medium">
                    <ShieldCheck className="text-primary-start" size={18} /> {p}
                  </li>
                ))}
              </ul>
              <a href={getWhatsappUrl(service.title)} className="btn-primary text-center">Enquire Now</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-start/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Service?</h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {highlights.map((h, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-[40px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md group">
                  <div className="h-64 overflow-hidden">
                    <img src={h.image} alt={h.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-4">{h.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="text-slate-500">Booking a service is as easy as drinking pure water.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-20 right-20 h-1 bg-slate-200 -z-10" />
          
          {bookingSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-8 border-4 border-slate-100 group hover:border-primary-start transition-colors">
                <div className="text-primary-start group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Service Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-[50px] bg-white border border-slate-100 shadow-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-start/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-end/10 rounded-full -ml-16 -mb-16" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800">Facing Issues with Your Purifier?</h2>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              Don't compromise on your health. Get it fixed by our experts today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={getWhatsappUrl("Emergency")} className="btn-primary px-12 py-4 text-lg">Book Now</a>
              <div className="flex items-center gap-4 text-slate-600 font-bold">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary-start">
                  <Clock size={24} />
                </div>
                <span>Avg. Response Time: 30 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
