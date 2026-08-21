
export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
}

export const seoConfig: Record<string, PageSEOConfig> = {
  '/': {
    title: 'AI-Driven Software Development Company | Softurecs AI Labs',
    description: 'SOFTURECS AI LABS PRIVATE LIMITED - Top AI-driven software solutions company in Hyderabad. Specialized in CRM software, AI chatbots, SaaS, web & mobile app development.',
    keywords: 'AI software company, software development India, custom software development, digital transformation, mobile app development, CRM software, AI automation',
  },
  '/about': {
    title: 'About Softurecs AI Labs | Leading AI Innovation',
    description: 'Learn about Softurecs AI Labs, a premier AI-driven software company in Hyderabad. Delivering innovative digital solutions for enterprises and startups worldwide.',
    keywords: 'about softurecs, AI software company, Hyderabad IT company, software development company India, tech leadership',
  },
  '/services': {
    title: 'Software Development & AI Services | Softurecs AI Labs',
    description: 'Explore our end-to-end AI-powered software development services. Custom apps, cloud solutions & digital transformation for global businesses.',
    keywords: 'software development services, AI solutions, mobile app development, cloud services, custom software development, digital transformation',
  },
  '/industries': {
    title: 'Industry-Specific Software Solutions | Softurecs AI Labs',
    description: 'Custom software for healthcare, fintech, retail & logistics. Tailored digital transformation solutions with deep domain expertise from Softurecs AI Labs.',
    keywords: 'industry software solutions, healthcare technology, fintech solutions, retail ecommerce, logistics software, real estate software',
  },
  '/portfolio': {
    title: 'Portfolio & Success Stories | Softurecs AI Labs',
    description: 'Explore our portfolio of innovative digital solutions. 1500+ successful projects across healthcare, fintech, e-commerce, and logistics.',
    keywords: 'case studies, portfolio, software projects, digital transformation, success stories, client projects',
  },
  '/contact': {
    title: 'Contact Softurecs AI Labs | Free Project Consultation',
    description: 'Get in touch for AI solutions & custom software development. Free consultation and 24-hour response time for your digital transformation needs.',
    keywords: 'contact Softurecs, software development inquiry, AI solutions contact, IT consulting Hyderabad',
  },
};
