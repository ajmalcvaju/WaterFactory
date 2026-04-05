import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, ShieldCheck, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const whatsappUrl = `https://wa.me/918714156151?text=Hello%20Water%20Factory,%20I%20am%20${encodeURIComponent(name)}%20Phone:%20${encodeURIComponent(phone)}%20Message:%20${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    { icon: <Phone size={24} />, title: "Call Us", content: "+91 8714156151", desc: "Mon-Sat, 9am - 8pm" },
    { icon: <Mail size={24} />, title: "Email Us", content: "info@waterfactory.com", desc: "24/7 Support Available" },
    { icon: <MapPin size={24} />, title: "Visit Us", content: "123 Water Street, Pure City", desc: "Find us on Google Maps" },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-start/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-end/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Have questions about our products or services? Our team is here to 
            help you choose the best purification system for your needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details & Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl group hover:shadow-2xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-water-gradient text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{info.title}</h4>
                  <p className="text-slate-800 font-bold mb-1">{info.content}</p>
                  <p className="text-slate-400 text-sm">{info.desc}</p>
                </div>
              ))}
              
              <div className="p-8 rounded-[40px] bg-water-gradient text-white shadow-xl group hover:shadow-2xl transition-all flex flex-col justify-center text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="font-semibold uppercase tracking-widest text-sm">Emergency Support</div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="h-80 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059607336!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1712215101000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-slate-800 font-bold flex items-center gap-2 shadow-lg">
                <MapPin size={18} className="text-primary-start" /> Our Head Office
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl border border-slate-100"
          >
            <h2 className="text-3xl font-bold mb-8">Send Us a <span className="gradient-text">Message</span></h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-slate-500 font-semibold ml-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-none focus:ring-2 focus:ring-primary-start/20 outline-none transition-all"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-500 font-semibold ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+91 8714156151"
                  required
                  className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-none focus:ring-2 focus:ring-primary-start/20 outline-none transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-500 font-semibold ml-2">Message</label>
                <textarea 
                  name="message"
                  placeholder="How can we help you?"
                  rows="4"
                  required
                  className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-none focus:ring-2 focus:ring-primary-start/20 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary py-5 text-lg font-bold flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} /> Submit to WhatsApp
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-start">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Response Time</h5>
                  <p className="text-xs text-slate-400">Within 30 Mins</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-start">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Privacy Guaranteed</h5>
                  <p className="text-xs text-slate-400">Your data is safe</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Large WhatsApp CTA */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-start/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-end/10 rounded-full blur-[100px]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20 text-[#25D366]">
              <MessageCircle size={48} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Instant Support on <span className="text-[#25D366]">WhatsApp</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Don't wait! Chat with our water experts instantly on WhatsApp for 
              quotes, bookings, or consultations.
            </p>
            <a 
              href="https://wa.me/918714156151"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#25D366] text-white rounded-full font-bold text-2xl hover:bg-[#128C7E] transition-all hover:scale-105 shadow-2xl"
            >
              Start Chat Now <Send size={28} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
