import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'iOS App Development', href: '/services/ios-development' },
  { name: 'Android App Development', href: '/services/android-development' },
  { name: 'Hybrid App Development', href: '/services/mobile-apps' },
  { name: 'Software Consulting Services', href: '/services/custom-software' },
  { name: 'Web Development Services', href: '/services/web-development' },
  { name: 'UI/UX Development', href: '/services/web-development' },
  { name: 'Data Analytics Services', href: '/services/big-data-analytics' },
  { name: 'Ecommerce App Development', href: '/industries/ecommerce' },
];

const solutions = [
  { name: 'Ewallet App Development', href: '/solutions/ewallet' },
  { name: 'eLearning App Development', href: '/solutions/elearning' },
  { name: 'Real Estate App Development', href: '/solutions/real-estate' },
  { name: 'Healthcare App Development', href: '/solutions/healthcare' },
  { name: 'Food Delivery App Development', href: '/solutions/food-delivery' },
  { name: 'Dating App Development', href: '/solutions/dating' },
  { name: 'Grocery Delivery App Development', href: '/solutions/grocery' },
  { name: 'Fantasy Sports App Development', href: '/solutions/fantasy-sports' },
  { name: 'AI Chatbot Development', href: '/services/ai-chatbot' },
];

const technologies = [
  { name: 'Blockchain App Development', href: '/technologies/blockchain' },
  { name: 'Artificial Intelligence Solutions', href: '/services/ai-development' },
  { name: 'Fintech App Development', href: '/industries/fintech' },
  { name: 'Cryptocurrency Wallet', href: '/technologies/blockchain' },
  { name: 'IoT App Development', href: '/technologies/iot' },
  { name: 'Salesforce Solutions', href: '/technologies/salesforce' },
  { name: 'Cloud Computing', href: '/services/cloud-devops' },
  { name: 'Machine Learning Solutions', href: '/services/machine-learning' },
  { name: 'Big Data Solutions', href: '/services/big-data-analytics' },
];

const hireDevelopers = [
  { name: 'Hire Dedicated Developers', href: '/hire/dedicated-developers' },
  { name: 'Hire Mobile App Developers', href: '/hire/mobile-developers' },
  { name: 'Hire Android App Developers', href: '/hire/android-developers' },
  { name: 'Hire iOS App Developers', href: '/hire/ios-developers' },
  { name: 'Hire Laravel Developers', href: '/hire/laravel-developers' },
  { name: 'Hire Flutter Developers', href: '/hire/flutter-developers' },
  { name: 'Hire Nodejs Developers', href: '/hire/nodejs-developers' },
  { name: 'Hire Java Developers', href: '/hire/java-developers' },
  { name: 'Hire Game Developers', href: '/hire/game-developers' },
];

const footerColumns = [
  { title: 'Services', items: services },
  { title: 'Solutions', items: solutions },
  { title: 'Trending Technologies', items: technologies },
  { title: 'Hire Developers', items: hireDevelopers },
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

  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-cyan-50 to-violet-100" />
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          {/* Desktop Layout - 4 Columns */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-xl font-bold text-blue-600 mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.href} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <Link
                        to={item.href}
                        className="text-gray-700 hover:text-blue-600 transition-colors text-sm leading-relaxed"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout - Accordion */}
          <div className="lg:hidden">
            {footerColumns.map((column) => (
              <MobileAccordion key={column.title} title={column.title} items={column.items} />
            ))}
          </div>
        </div>

        {/* Global Coverage Section */}
        <div className="border-t border-gray-200/50">
          <div className="container-custom py-8 text-center">
            <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-wide mb-3">
              Serving in 70+ Countries for Web, Software and Mobile App Development
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              United States (USA), United Kingdom (UK), Singapore, Kenya, South Africa, Germany, Canada, Australia, Netherlands, Norway, United Arab Emirates (UAE), Finland, Sweden, Switzerland, India, Japan, South Korea, Brazil, Mexico, France, Italy, Spain, and many more.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-600 text-sm text-center md:text-left">
                © {new Date().getFullYear()} <span className="font-medium text-gray-800">SOFTURECS AI LABS PRIVATE LIMITED</span>. All rights reserved.
              </p>

              {/* Policy Links */}
              <div className="flex items-center gap-2 text-sm">
                <Link to="/refund-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Refund Policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
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
