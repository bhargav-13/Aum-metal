import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  pageType?: 'website' | 'article' | 'product';
  noIndex?: boolean;
}

const BASE_URL = 'https://aummetalalloys.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
  pageType = 'website',
  noIndex = false,
}: SEOProps) => {
  useEffect(() => {
    // Update document title - Include brand name for SEO
    const fullTitle = title.includes('Aum Metal') ? title : `${title} | Aum Metal Alloys`;
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);

    if (keywords) {
      // Enhanced keywords - always include brand variations
      const enhancedKeywords = keywords.includes('Aum Metal')
        ? keywords
        : `Aum Metal, Aum Metal Alloys, ${keywords}`;
      updateMetaTag('keywords', enhancedKeywords);
    }

    // Robots directive
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Canonical URL
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl.startsWith('http') ? canonicalUrl : `${BASE_URL}${canonicalUrl}`);
    }

    // Open Graph meta tags
    updateMetaTag('og:title', ogTitle || fullTitle, 'property');
    updateMetaTag('og:description', ogDescription || description, 'property');
    updateMetaTag('og:type', pageType, 'property');
    updateMetaTag('og:url', canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${BASE_URL}${canonicalUrl}`) : BASE_URL, 'property');
    updateMetaTag('og:site_name', 'Aum Metal Alloys', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // OG Image tags
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:image:secure_url', ogImage, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', ogTitle || fullTitle, 'property');

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@aummetalalloys');
    updateMetaTag('twitter:creator', '@aummetalalloys');
    updateMetaTag('twitter:title', ogTitle || fullTitle);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', ogTitle || fullTitle);

    // Additional SEO meta tags
    updateMetaTag('author', 'Aum Metal Alloys');
    updateMetaTag('publisher', 'Aum Metal Alloys');

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, pageType, noIndex]);

  return null;
};
