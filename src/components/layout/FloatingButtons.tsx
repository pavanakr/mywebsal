import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const phoneNumber = '+917396080902';
  const whatsappNumber = '917396080902';
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your services.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-accent-foreground" />
      </motion.a>
    </div>
  );
}
