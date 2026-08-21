# Plan: Product-First Hero Slider Enhancement

Enhance the home page hero slider with realistic SaaS product visuals, trust elements, and refined styling while maintaining the existing structure and responsiveness.

## User Review Required

> [!IMPORTANT]
> The "Trust Bar" and "Technology Badges" will be integrated within the `HeroSlider` component to ensure they are visible as part of the primary hero experience.

## Proposed Changes

### 1. Hero Slider Component (`src/components/home/hero/HeroSlider.tsx`)

#### Visual Enhancement
- **Background Update**: Soften the dark navy background (reduce darkness by 30%) and add layered glass panels and soft lighting.
- **Visual Composition overhaul**:
    - Replace generic icons with high-fidelity "SaaS Dashboard" mockups using Tailwind and Lucide.
    - Create slide-specific layouts:
        - **Real Estate CRM**: Property cards, lead pipelines, and agent stats.
        - **WhatsApp CRM**: Chat interface with automation triggers.
        - **AI Chatbot**: Conversational UI with assistant avatars.
        - **AI Automation**: Node-based workflow diagram.
        - **All-in-One CRM**: Revenue charts and task lists.
    - Add realistic floating mini-cards: "+27 Leads Today", "AI Active", "Revenue Growth +12%".

#### New Sections (within Hero)
- **Social Proof Bar**: A horizontal bar below the CTA buttons displaying:
    - `500+ Clients | 50+ Industries | 70+ Countries | 24/7 Support`
- **Trust Elements**: A small row of technology badges below the content:
    - `Trusted by Businesses Worldwide: CRM | AI | Automation | WhatsApp | Meta API | Software Development`

### 2. Contact Page (`src/pages/Contact.tsx`)
- Update the `commandPlaceholder` with the new verbatim instruction string provided by the user.

## Technical Details

- **Animation**: Use Framer Motion for subtle floating effects on the new dashboard components and mini-cards.
- **Glassmorphism**: Apply `backdrop-blur-md` and `bg-white/5` with subtle borders for the product mockups.
- **Responsiveness**: Ensure the new trust bar and badges stack neatly or scroll horizontally on mobile.
- **No Structural Changes**: The existing 2-column grid and slide transition logic will be preserved.

## Verification Plan

- **Manual Preview**: Verify that the new dashboard visuals look "professional and realistic" compared to the previous abstract icons.
- **Mobile Audit**: Check the hero slider on mobile view to ensure the trust bar doesn't cause overflow.
- **Performance**: Monitor frame rates during slide transitions to ensure the richer visuals don't lag.
