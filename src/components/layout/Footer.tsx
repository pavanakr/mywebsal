import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Big Data Solutions', href: '/services/big-data' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'SaaS Development', href: '/services/saas' },
  { name: 'Custom Software Development', href: '/services/custom-software' },
  { name: 'AI Development', href: '/services/ai-development' },
  { name: 'AI Chatbot Development', href: '/services/ai-chatbot' },
  { name: 'API Development', href: '/services/api-development' },
];

const crmSolutions = [
  { name: 'Real Estate CRM', href: '/real-estate-crm' },
  { name: 'Multi CRM', href: '/multi-crm' },
  { name: 'All-in-One CRM', href: '/all-in-one-crm' },
  { name: 'Meta API CRM', href: '/meta-api-crm' },
  { name: 'WhatsApp CRM', href: '/whatsapp-crm' },
];

const aiSolutions = [
  { name: 'AI Chatbot Development', href: '/services/ai-chatbot' },
  { name: 'AI Automation', href: '/services/ai-automation' },
  { name: 'Conversational AI', href: '/services/conversational-ai' },
];

const locations = [
  { name: 'Software Development Company in India', href: '/software-development-company-india' },
  { name: 'Software Development Company in Hyderabad', href: '/software-development-company-hyderabad' },
  { name: 'Software Development Company in KPHB', href: '/software-development-company-kphb' },
  { name: 'Software Development Company in Kukatpally', href: '/software-development-company-kukatpally' },
];

const company = [
  { name: 'About', href: '/about' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'Resources', href: '/insights/resources' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Shipping Policy', href: '/shipping-policy' },
];

const footerColumns = [
  { title: 'SERVICES', items: services },
  { title: 'CRM SOLUTIONS', items: crmSolutions },
  { title: 'AI SOLUTIONS', items: aiSolutions },
  { title: 'LOCATIONS', items: locations },
  { title: 'COMPANY', items: company },
  { title: 'LEGAL', items: legal },
];

// Mobile Accordion Component
function MobileAccordion({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-blue-600">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="pb-4 space-y-3">
              {items.map((item) => (
                <li key={item.href} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-cyan-50 to-violet-100" />
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          {/* Desktop Layout - 4 Columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="hidden lg:grid lg:grid-cols-6 gap-8"
          >
            {footerColumns.map((column, columnIndex) => (
              <motion.div key={column.title} variants={itemVariants}>
                <motion.h4 
                  className="text-xl font-bold text-blue-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                >
                  {column.title}
                </motion.h4>
                <motion.ul 
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: columnIndex * 0.1 + 0.2,
                      },
                    },
                  }}
                >
                  {column.items.map((item) => (
                    <motion.li 
                      key={item.href} 
                      className="flex items-start gap-2"
                      variants={linkVariants}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <Link
                        to={item.href}
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm leading-relaxed hover:translate-x-1 inline-block transition-transform duration-200"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile/Tablet Layout - Accordion */}
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6 }}
          >
            {footerColumns.map((column) => (
              <MobileAccordion key={column.title} title={column.title} items={column.items} />
            ))}
          </motion.div>
        </div>

        {/* Global Coverage Section */}
        <motion.div 
          className="border-t border-gray-200/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="container-custom py-8 text-center">
            <motion.h3 
              className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-wide mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5 }}
            >
              Serving in 70+ Countries for Web, Software and Mobile App Development
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              United States (USA), United Kingdom (UK), Singapore, Kenya, South Africa, Germany, Canada, Australia, Netherlands, Norway, United Arab Emirates (UAE), Finland, Sweden, Switzerland, India, Japan, South Korea, Brazil, Mexico, France, Italy, Spain, and many more.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-200/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              {/* Copyright */}
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5 }}
              >
                © {new Date().getFullYear()} <span className="font-medium text-gray-800">SOFTURECS AI LABS PRIVATE LIMITED</span>. All rights reserved.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Scroll to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        {/* Talk to Us */}
        <motion.a
          href="https://wa.me/917396080902"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          <MessageCircle className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium">Talk to us</span>
        </motion.a>
      </div>
    </footer>
  );
}
