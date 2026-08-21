import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://softurecs.com';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
}

export const SEO = ({
  title,
  description,
  keywords,
  image = `${SITE_URL}/og-image.png`,
  url,
  type = 'website',
  article,
}: SEOProps) => {
  const siteName = 'SOFTURECS AI LABS PRIVATE LIMITED';
  const { pathname } = useLocation();
  const cleanTitle = title
    .replace(/\s*[|\-–]\s*SOFTURECS AI LABS PRIVATE LIMITED\s*$/i, '')
    .trim();
  const fullTitle = /softurecs/i.test(cleanTitle)
    ? cleanTitle
    : `${cleanTitle} | ${siteName}`;
  const canonical = url ?? `${SITE_URL}${pathname === '/' ? '' : pathname.replace(/\/$/, '')}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};
