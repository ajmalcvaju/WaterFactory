import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '918714156151';
  const message = 'Hello Water Factory, I am interested in your products/services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageCircle size={32} />
      </motion.div>
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10" />
    </motion.a>
  );
};

export default WhatsAppButton;
