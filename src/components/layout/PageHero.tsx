import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbSchema } from '@/components/SchemaMarkup';
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
  iconColor = 'from-accent to-cyan-light',
  badge,
  image,
  imageAlt,
  stats,
  variant = 'split',
}: PageHeroProps) {
  const { pathname } = useLocation();
  const siteUrl = 'https://softurecs.com';
  
  const schemaItems = breadcrumbs.map((crumb, idx) => ({
    name: crumb.label,
    url: crumb.href ? `${siteUrl}${crumb.href}` : `${siteUrl}${pathname}`
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-gradient-to-br from-primary via-navy to-navy-light overflow-hidden">
      {/* Architectural background: subtle grid + soft glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-bl from-accent/30 via-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-gradient-to-tr from-cyan-light/20 via-accent/10 to-transparent rounded-full blur-3xl" />
        {/* Precision grid */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary-foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-foreground)/0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        {/* Accent hairline */}
        <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        {/* Floating architectural marks */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-16 w-20 h-20 border border-accent/25 rounded-2xl rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-16 w-14 h-14 border border-cyan-light/25 rounded-full hidden lg:block"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className={`grid gap-8 lg:gap-14 items-center ${variant === 'split' && image ? 'lg:grid-cols-2' : ''}`}>
          <div className={variant === 'centered' ? 'text-center max-w-4xl mx-auto' : ''}>
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
                    {index > 0 && <ChevronRight className="w-4 h-4 text-primary-foreground/30" />}
                    {crumb.href ? (
                      <Link
                        to={crumb.href}
                        className="text-primary-foreground/60 hover:text-accent transition-colors"
                        itemProp="item"
                      >
                        <span itemProp="name">{crumb.label}</span>
                      </Link>
                    ) : (
                      <span className="text-primary-foreground/90 font-medium" itemProp="name">
                        {crumb.label}
                      </span>
                    )}
                    <meta itemProp="position" content={String(index + 1)} />
                  </li>
                ))}
              </ol>
            </motion.nav>

            {Icon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${iconColor} flex items-center justify-center mb-6 shadow-glow ${variant === 'centered' ? 'mx-auto' : ''}`}
              >
                <div className="absolute inset-0 rounded-2xl border border-primary-foreground/20" />
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground relative" />
              </motion.div>
            )}

            {badge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs md:text-sm font-medium tracking-wide uppercase text-primary-foreground/80">{badge}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] font-semibold text-primary-foreground mb-5 leading-[1.05] tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-primary-foreground/10 ${variant === 'centered' ? 'justify-center' : ''}`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className={variant === 'centered' ? 'text-center' : ''}>
                    <div className="font-display text-2xl md:text-3xl font-semibold text-accent">{stat.value}</div>
                    <div className="text-xs md:text-sm text-primary-foreground/60 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {variant === 'split' && image && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/25 to-cyan-light/25 rounded-3xl blur-2xl" />
                  <img
                    src={image}
                    alt={imageAlt || title}
                    className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-primary/40 border border-primary-foreground/10"
                    loading="eager"
                  />
                </motion.div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/40 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-cyan-light/40 rounded-full" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
    </>
  );
}
