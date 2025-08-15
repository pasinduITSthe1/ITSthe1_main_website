// SEO Enhancement Script for ITSthe1 Website
// This script adds dynamic meta tags, structured data, and performance optimizations

(function() {
  'use strict';

  // Add structured data for the organization
  function addOrganizationStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ITSthe1 Solutions LLC",
      "alternateName": ["ITSthe1", "ITS the1", "ITSthe1 Solutions"],
      "url": "https://itsthe1.com",
      "logo": "https://itsthe1.com/images/logo.svg",
      "description": "Leading provider of IT and Telecom solutions specializing in Digital Transformation, Cyber Security, Cloud Services, Web & Mobile applications, and Hospitality Solutions.",
      "foundingDate": "2020",
      "industry": "Information Technology",
      "areaServed": "Worldwide",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-55-220-2171",
        "contactType": "sales",
        "email": "sales@itsthe1.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Arabic"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      },
      "sameAs": [
        "https://linkedin.com/company/itsthe1",
        "https://twitter.com/itsthe1",
        "https://facebook.com/itsthe1"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Solutions and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Support & Outsourcing",
              "description": "24/7 comprehensive IT support services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Solutions",
              "description": "Secure cloud migration and hybrid infrastructure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Advanced cybersecurity protection and compliance"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  // Add page-specific structured data based on current page
  function addPageSpecificStructuredData() {
    const path = window.location.pathname;
    
    if (path.includes('/products/')) {
      addProductStructuredData();
    } else if (path.includes('/services/')) {
      addServiceStructuredData();
    } else if (path.includes('/contact/')) {
      addContactPageStructuredData();
    } else if (path === '/') {
      addHomepageStructuredData();
    }
  }

  function addProductStructuredData() {
    const pageTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
    
    const productData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": pageTitle.replace(' - ITSthe1 Solutions', ''),
      "description": metaDescription,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "provider": {
        "@type": "Organization",
        "name": "ITSthe1 Solutions LLC"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "0",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Contact for pricing"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(productData);
    document.head.appendChild(script);
  }

  function addServiceStructuredData() {
    const pageTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
    
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": pageTitle.replace(' - ITSthe1 Solutions', ''),
      "description": metaDescription,
      "provider": {
        "@type": "Organization",
        "name": "ITSthe1 Solutions LLC"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": pageTitle.replace(' - ITSthe1 Solutions', '')
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(serviceData);
    document.head.appendChild(script);
  }

  function addContactPageStructuredData() {
    const contactData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact ITSthe1 Solutions",
      "description": "Get in touch with ITSthe1 Solutions for your IT and technology needs",
      "mainEntity": {
        "@type": "Organization",
        "name": "ITSthe1 Solutions LLC"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(contactData);
    document.head.appendChild(script);
  }

  function addHomepageStructuredData() {
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ITSthe1 Solutions",
      "url": "https://itsthe1.com",
      "description": "Leading provider of IT and Telecom solutions specializing in Digital Transformation, Cyber Security, Cloud Services, and Hospitality Solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "ITSthe1 Solutions LLC"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://itsthe1.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(websiteData);
    document.head.appendChild(script);
  }

  // Enhance meta tags dynamically
  function enhanceMetaTags() {
    // Add Open Graph meta tags if missing
    if (!document.querySelector('meta[property="og:title"]')) {
      const ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', document.title);
      document.head.appendChild(ogTitle);
    }

    if (!document.querySelector('meta[property="og:description"]')) {
      const description = document.querySelector('meta[name="description"]')?.content;
      if (description) {
        const ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.setAttribute('content', description);
        document.head.appendChild(ogDescription);
      }
    }

    if (!document.querySelector('meta[property="og:url"]')) {
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', window.location.href);
      document.head.appendChild(ogUrl);
    }

    if (!document.querySelector('meta[property="og:type"]')) {
      const ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.setAttribute('content', 'website');
      document.head.appendChild(ogType);
    }

    // Add Twitter Card meta tags if missing
    if (!document.querySelector('meta[name="twitter:card"]')) {
      const twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      twitterCard.setAttribute('content', 'summary_large_image');
      document.head.appendChild(twitterCard);
    }

    // Add canonical URL if missing
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.href.split('?')[0].split('#')[0]);
      document.head.appendChild(canonical);
    }

    // Add viewport meta tag if missing (for mobile optimization)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Add robots meta tag for better crawling
    if (!document.querySelector('meta[name="robots"]')) {
      const robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      document.head.appendChild(robots);
    }
  }

  // Add breadcrumb structured data
  function addBreadcrumbStructuredData() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(part => part);
    
    if (pathParts.length > 0) {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        }
      ];

      let currentPath = '';
      pathParts.forEach((part, index) => {
        currentPath += '/' + part;
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
          "item": window.location.origin + currentPath
        });
      });

      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    }
  }

  // Add FAQ structured data for relevant pages
  function addFAQStructuredData() {
    const faqSections = document.querySelectorAll('.faq-item, .accordion-item');
    
    if (faqSections.length > 0) {
      const faqItems = Array.from(faqSections).map(section => {
        const question = section.querySelector('h3, h4, .question, .accordion-header')?.textContent?.trim();
        const answer = section.querySelector('p, .answer, .accordion-content')?.textContent?.trim();
        
        if (question && answer) {
          return {
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": answer
            }
          };
        }
      }).filter(Boolean);

      if (faqItems.length > 0) {
        const faqData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(faqData);
        document.head.appendChild(script);
      }
    }
  }

  // Performance optimization: Preload critical resources
  function preloadCriticalResources() {
    // Preload key fonts
    const fonts = [
      '/fonts/inter-v12-latin-regular.woff2',
      '/fonts/inter-v12-latin-600.woff2',
      '/fonts/inter-v12-latin-700.woff2'
    ];

    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = font;
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/images/logo.svg',
      '/images/hero-bg.webp'
    ];

    criticalImages.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
    });
  }

  // Initialize all SEO enhancements
  function initSEOEnhancements() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        runEnhancements();
      });
    } else {
      runEnhancements();
    }
  }

  function runEnhancements() {
    enhanceMetaTags();
    addOrganizationStructuredData();
    addPageSpecificStructuredData();
    addBreadcrumbStructuredData();
    addFAQStructuredData();
    
    // Performance enhancements
    if (window.requestIdleCallback) {
      requestIdleCallback(preloadCriticalResources);
    } else {
      setTimeout(preloadCriticalResources, 1000);
    }
  }

  // Start the enhancement process
  initSEOEnhancements();

})();
