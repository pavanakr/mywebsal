import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface OrganizationSchemaProps {
  type?: 'Organization' | 'LocalBusiness';
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: BreadcrumbItem[];
}

// Organization Schema - Use on Home page
export const OrganizationSchema = ({ type = 'Organization' }: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "SOFTURECS AI LABS PRIVATE LIMITED",
    "alternateName": "Softurecs AI Labs",
    "url": "https://softurecs.com",
    "logo": "https://softurecs.com/logo.png",
    "description": "AI-driven software solutions company specializing in digital transformation, custom software development, and enterprise AI applications.",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "Pavan Kumar Naramala",
      "jobTitle": "Founder & CEO"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5th Floor, Trinity Corporate Building",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7396080902",
        "contactType": "sales",
        "email": "info@softurecs.com",
        "areaServed": ["IN", "US", "GB", "AE", "EU"],
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/softurecs",
      "https://twitter.com/softurecs",
      "https://www.facebook.com/softurecs"
    ],
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Mobile App Development",
      "Cloud Computing",
      "Digital Transformation",
      "Web Development"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema - Use on all pages
export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// WebPage Schema - Use on all pages
export const WebPageSchema = ({ title, description, url, breadcrumbs }: WebPageSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Softurecs AI Labs",
      "url": "https://softurecs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SOFTURECS AI LABS PRIVATE LIMITED"
    }
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Service Schema - Use on service pages
export const ServiceSchema = ({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "SOFTURECS AI LABS PRIVATE LIMITED",
      "url": "https://softurecs.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema - Use on FAQ page
export const FAQSchema = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Article Schema - Use on blog posts
export const ArticleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": author || "Softurecs AI Labs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SOFTURECS AI LABS PRIVATE LIMITED",
      "logo": {
        "@type": "ImageObject",
        "url": "https://softurecs.com/logo.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
