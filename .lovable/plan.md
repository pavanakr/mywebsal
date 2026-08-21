# Technical SEO Implementation Plan - Phase 6

This phase focuses on technical SEO, structured data (JSON-LD), performance optimization, and mobile-first auditing to ensure Softurecs AI Labs is search-ready and high-performing.

## Task 1: Structured Data (JSON-LD)
Implement/enhance semantic markup across the site:
- **Organization & LocalBusiness**: Unified in `src/components/SchemaMarkup.tsx` for core business identity.
- **WebSite & WebPage**: Standardize across all routes.
- **BreadcrumbList**: Integrate into `PageHero` to ensure every page has valid navigational hierarchy schema.
- **Service & Product**: Map existing service data to `Service` schema.
- **Article**: Implement for Blog/Insight detail pages.
- **Validation**: Ensure zero "fake" data (reviews, ratings) is introduced.

## Task 2: Technical SEO Audit & Fixes
- **Canonical URLs**: Standardize in `src/components/SEO.tsx` to handle trailing slashes and non-www consistency.
- **Sitemap & Robots**: Update `public/sitemap.xml` and `public/robots.txt` to include all new routes (CRM, Local SEO).
- **404 Page**: Verify `src/pages/NotFound.tsx` provides useful navigation links.
- **HTTPS & Redirects**: Ensure site-wide consistency.

## Task 3: Image SEO
- **Alt Text**: Audit `ServiceDetailPage` and `IndustryDetailPage` for descriptive, keyword-appropriate alt tags.
- **Responsive Images**: Ensure images use appropriate widths/heights to prevent layout shifts (CLS).
- **Lazy Loading**: Verify `loading="lazy"` is used for below-the-fold assets, and `eager` for LCP images.

## Task 4: Performance Optimization
- **LCP/CLS/INP**: Use `content-visibility: auto` (already in `index.css`) and `will-change` on complex animations.
- **Font Loading**: Ensure Sora and Manrope are loaded efficiently.
- **JS/CSS**: Check for unnecessary renders in `Header` and `Footer`.

## Task 5: Mobile SEO & Usability
- **Mobile Navigation**: Test the mobile footer accordion and header mega-menu on small viewports.
- **Tap Targets**: Ensure buttons and links are appropriately sized for touch.

## Technical Details
- **Schema Component**: Update `src/components/SchemaMarkup.tsx` with enhanced types.
- **SEO Component**: Refine `src/components/SEO.tsx` for cleaner canonicalization.
- **Global Config**: Keep `src/config/seo.ts` as the single source of truth for metadata.
