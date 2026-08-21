# Plan - Homepage Hero Slider Rebuild

The homepage hero slider will be completely rebuilt from scratch to match a premium SaaS + AI technology aesthetic. The focus will be on a balanced 2-column layout, professional typography, and high-quality UI/dashboard visuals.

## Proposed Changes

### 1. `src/components/home/hero/HeroSlider.tsx`
- **Rebuild from scratch**: Remove all existing slider logic and UI.
- **Implement 2-Column Layout**:
    - **Left Side**: Category badge, H1/H2 headline (max 2-3 lines), description, and primary/secondary CTA buttons.
    - **Right Side**: Premium AI/CRM dashboard visuals with floating UI cards and subtle technology elements.
- **Visuals for 5 Slides**:
    1. **AI Chatbots**: Interface showing assistant conversation and analytics (Blue/Purple/Cyan).
    2. **AI Automation**: Workflow diagram showing lead capture to CRM (Blue/Violet/Purple/Cyan).
    3. **Real Estate CRM**: Dashboard with property cards, leads, and sales pipeline (Blue/Teal/Violet).
    4. **WhatsApp + Meta API**: Conversation flow and lead capture (Green/Cyan/Purple).
    5. **All-in-One CRM**: Overview of leads, pipeline, and revenue (Blue/Purple/Cyan).
- **Functionality**:
    - 5-second autoplay, smooth transitions.
    - Previous/Next arrows and pagination dots.
    - Keyboard, touch, and swipe support.
    - Pause on hover/interaction.
- **Responsiveness**:
    - Desktop: 560–650px height, 2-column layout.
    - Tablet: 520–600px height, balanced 2-column.
    - Mobile: Stacked layout with visual below CTA, auto height.

### 2. `src/pages/Contact.tsx`
- Update the `commandPlaceholder` variable to the new verbatim instruction provided by the user.

### 3. SEO & Performance
- Ensure only Slide 1 uses an `<h1>` tag; subsequent slides will use `<h2>`.
- Implement lazy loading for non-active slide visuals.
- Maintain existing navbar, announcement bar, and footer integrity.

## Technical Details

- **Technology**: React, Framer Motion (for smooth transitions and floating UI effects), Tailwind CSS.
- **Styling**: Use the existing "Navy Trust" palette (Navy #0f1b3d, Accent #3b6fa0).
- **Accessibility**: ARIA labels for controls, keyboard navigation, and reduced-motion support.
- **Cleanup**: Remove any legacy hero-specific CSS that might conflict.
