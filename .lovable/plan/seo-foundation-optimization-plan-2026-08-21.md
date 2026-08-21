# SEO Foundation Optimization Plan

Phase 1 focus: Audit and implement a centralized, route-specific SEO foundation for SOFTURECS AI LABS PRIVATE LIMITED without changing UI or existing functionality.

## Technical Details

### 1. Audit Summary
- **Routes:** 128+ routes identified (Services, Industries, Hire, International, Blog, Legal).
- **Current SEO State:**
    - `src/components/SEO.tsx` provides a solid foundation (title de-duplication, canonicals, OG/Twitter tags).
    - Page-specific titles and descriptions exist but are inconsistent or too generic.
    - H1s are present but sometimes lack target keywords (e.g., "Architecting the Intelligence of Tomorrow" vs "AI Software Development Company").
    - Schema markup is centralized in `src/components/SchemaMarkup.tsx` but needs wider application.
    - `robots.txt` and `sitemap.xml` exist but require updates for new routes and digital product focus.
    - Form placeholders in `src/pages/Contact.tsx` were incorrectly set to command text and need restoration.

### 2. Implementation Steps

#### A. Centralized SEO Restoration & Enhancement
- **Restore Form Placeholders:** Revert `src/pages/Contact.tsx` placeholders to professional defaults.
- **Unified SEO Config:** Create `src/config/seo.ts` to map specific metadata (title, description, keywords) to every route for consistency.

#### B. Dynamic Page Optimization
- **Service/Industry Templates:** Update `ServiceDetailPage`, `IndustryDetailPage`, and `SubIndustryDetailPage` to pull from the new centralized config or use highly optimized dynamic patterns.
- **Programmatic Pages:** Ensure `CityLandingPage`, `ServiceIndustryPage`, and `HireDeveloperPage` generate unique, keyword-rich metadata based on params.

#### C. Content & Hierarchy Fixes
- **H1 Optimization:** Refine H1 tags across main pages (Home, About, Services, Industries) to include primary business keywords.
- **Alt Text Audit:** Batch update missing image alt text in layout components (Footer, Hero) and detail pages.

#### D. Schema & Crawlability
- **Extended Schema:** Apply `WebPageSchema` and `BreadcrumbSchema` to all routes.
- **Sitemap Update:** Regenerate `public/sitemap.xml` to include all current routes and set appropriate priorities.
- **Robots.txt:** Ensure `robots.txt` correctly guides crawlers away from non-public assets while allowing full indexing of landing pages.

### 3. Verification
- **Metadata Check:** Verify unique titles and descriptions for a sample of 20+ routes using Playwright.
- **Sitemap/Robots Validation:** Confirm URL consistency between sitemap and canonical tags.
- **No-Regress Test:** Ensure form functionality and UI layout remain unchanged.

## SEO Phase 2 Roadmap (Future)
- **Phase 2:** Advanced content optimization, internal link building strategies, and detailed structured data for all blog posts.
