import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Droplets } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-water-gradient opacity-50" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-start/10 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-end/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-water-gradient rounded-xl text-white shadow-md">
                <Droplets size={24} />
              </div>
              <span className="text-2xl font-bold">Water Factory</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in advanced water purification technology. 
              Providing pure, safe, and healthy drinking water for families 
              across the nation since 2010.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-start transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b-2 border-primary-start w-fit pb-1">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-primary-start transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-start transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary-start transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-primary-start transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-start transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b-2 border-primary-start w-fit pb-1">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>RO Installation</li>
              <li>Annual Maintenance</li>
              <li>Water Quality Testing</li>
              <li>Industrial Filtration</li>
              <li>Smart Purifier Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b-2 border-primary-start w-fit pb-1">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="text-primary-start shrink-0" size={20} />
                <span>123 Water Street, Pure City, PC 56789</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary-start shrink-0" size={20} />
                <span>+91 8714156151</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary-start shrink-0" size={20} />
                <span>info@waterfactory.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {currentYear} Water Factory. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
