import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Users, Award, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Happy Clients", value: "10K+", icon: <Users size={24} /> },
    { label: "Expert Engineers", value: "50+", icon: <Shield size={24} /> },
    { label: "Years Experience", value: "10+", icon: <Award size={24} /> },
    { label: "Cities Served", value: "20+", icon: <Rocket size={24} /> },
  ];

  const timeline = [
    { year: "2010", title: "Inception", desc: "Started with a vision to provide pure water to every household." },
    { year: "2014", title: "Innovation", desc: "Launched our first RO + UV smart purifier with sensor technology." },
    { year: "2018", title: "Expansion", desc: "Expanded our services to 15 major cities across the country." },
    { year: "2022", title: "Eco-Leader", desc: "Introduced zero-wastage technology in all our premium models." },
    { year: "2024", title: "Future Ready", desc: "Pioneering AI-driven maintenance and water quality monitoring." },
  ];

  const team = [
    { name: "John Doe", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=1" },
    { name: "Sarah Smith", role: "Chief Engineer", image: "https://i.pravatar.cc/300?img=5" },
    { name: "Mike Johnson", role: "Service Head", image: "https://i.pravatar.cc/300?img=8" },
    { name: "Emma Wilson", role: "Product Designer", image: "https://i.pravatar.cc/300?img=9" },
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="gradient-text">Water Factory</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            Pioneering the future of water purification with cutting-edge 
            technology and a commitment to health.
          </motion.p>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,211.55,108.31,263.09,94.1,283,70.19,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 shadow-xl group hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-water-gradient text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                To provide every household with access to pure, safe, and healthy drinking 
                water using sustainable and innovative technology. We strive to improve 
                lives through superior purification and exceptional customer service.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 shadow-xl group hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-water-gradient text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                To be the global leader in water purification technology, setting new 
                benchmarks for purity, eco-friendliness, and smart living. We envision 
                a future where water-borne diseases are a thing of the past.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-water-gradient text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/30">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section (Timeline) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-20">Our Journey</h2>
          <div className="relative border-l-4 border-slate-100 ml-6 md:ml-0 md:flex md:border-l-0 md:border-t-4 md:pt-12 gap-8 justify-between">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 md:pl-0 md:flex-1 mb-16 md:mb-0"
              >
                {/* Circle marker */}
                <div className="absolute left-[-14px] top-0 md:top-[-54px] md:left-0 w-6 h-6 rounded-full bg-white border-4 border-primary-start z-10" />
                <div className="text-primary-start font-bold text-2xl mb-4">{item.year}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Meet Our Experts</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A dedicated team of professionals working around the clock 
              to ensure your water is always pure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[40px] shadow-lg text-center group"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-slate-100 group-hover:border-primary-start transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-slate-400 font-medium mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary-start hover:text-white transition-colors cursor-pointer">
                    <Rocket size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary-start hover:text-white transition-colors cursor-pointer">
                    <Rocket size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
