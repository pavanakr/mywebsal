import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  icon?: LucideIcon;
  iconColor?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  stats?: { value: string; label: string }[];
  variant?: 'default' | 'centered' | 'split';
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  icon: Icon,
  iconColor = 'from-indigo-500 to-cyan-500',
  badge,
  image,
  imageAlt,
  stats,
  variant = 'split',
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl" />
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-16 w-20 h-20 border border-indigo-400/20 rounded-2xl rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-16 w-14 h-14 border border-cyan-400/20 rounded-full hidden lg:block"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className={`grid gap-8 lg:gap-12 items-center ${variant === 'split' && image ? 'lg:grid-cols-2' : ''}`}>
          {/* Left Content */}
          <div className={variant === 'centered' ? 'text-center max-w-4xl mx-auto' : ''}>
            {/* Breadcrumbs - SEO Schema Friendly */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              aria-label="Breadcrumb"
              className="mb-6"
            >
              <ol 
                className={`flex flex-wrap items-center gap-2 text-sm ${variant === 'centered' ? 'justify-center' : ''}`}
                itemScope 
                itemType="https://schema.org/BreadcrumbList"
              >
                {breadcrumbs.map((crumb, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2"
                    itemProp="itemListElement" 
                    itemScope 
                    itemType="https://schema.org/ListItem"
                  >
                    {index > 0 && (
                      <ChevronRight className="w-4 h-4 text-white/30" />
                    )}
                    {crumb.href ? (
                      <Link
                        to={crumb.href}
                        className="text-white/60 hover:text-cyan-400 transition-colors"
                        itemProp="item"
                      >
                        <span itemProp="name">{crumb.label}</span>
                      </Link>
                    ) : (
                      <span className="text-white/90 font-medium" itemProp="name">
                        {crumb.label}
                      </span>
                    )}
                    <meta itemProp="position" content={String(index + 1)} />
                  </li>
                ))}
              </ol>
            </motion.nav>

            {/* Icon Badge */}
            {Icon && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${iconColor} flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/25 ${variant === 'centered' ? 'mx-auto' : ''}`}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
            )}

            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4 ${variant === 'centered' ? '' : ''}`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-white/90">{badge}</span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* Stats - Inline */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`flex flex-wrap gap-6 md:gap-10 mt-8 ${variant === 'centered' ? 'justify-center' : ''}`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Image */}
          {variant === 'split' && image && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Floating effect container */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
                  <img
                    src={image}
                    alt={imageAlt || title}
                    className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-indigo-500/20 border border-white/10"
                    loading="eager"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-400/30 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-indigo-400/30 rounded-full" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
