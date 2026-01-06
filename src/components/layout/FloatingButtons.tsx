import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingButtons() {
  const whatsappNumber = '917396080902';
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      initial={{ opacity: 0, y: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 100,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Talk to Us Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your services.`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        aria-label="Talk to us"
      >
        <MessageCircle className="w-5 h-5 text-blue-600" />
        <span className="text-sm font-medium">Talk to us</span>
      </motion.a>
    </motion.div>
  );
}
