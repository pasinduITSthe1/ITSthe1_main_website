// Chatbot Configuration
// This file contains all customizable settings for the ITSthe1 chatbot

window.ChatbotConfig = {
  // Appearance Settings
  appearance: {
    primaryColor: "#FF6B35",
    secondaryColor: "#2C3E50",
    accentColor: "#F39C12",
    borderRadius: "16px",
    fontSize: "14px",
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  // Behavior Settings
  behavior: {
    showNotificationDelay: 3000, // milliseconds
    hideNotificationDelay: 8000,
    typingDelay: { min: 1000, max: 2000 },
    autoGreeting: true,
    saveConversation: false,
    maxMessageLength: 500,
  },

  // Text Content
  content: {
    companyName: "ITSthe1 Solutions",
    botName: "ITSthe1 Home",
    welcomeMessage:
      "Hi! I'm your ONE virtual assistant. I can help you learn about our services, products, and solutions. How can I assist you today?",
    notificationText: "How can I help you today?",
    placeholderText: "Type your message...",
    typingText: "ONE Assistant is typing...",
    onlineStatus: "Online",

    // Quick Actions
    quickActions: [
      { text: "Our Services", action: "services" },
      { text: "Products", action: "products" },
      { text: "Contact Us", action: "contact" },
    ],

    // Default Suggestions
    defaultSuggestions: [
      "Our Services",
      "Products",
      "Contact Information",
      "About ONE",
    ],
  },

  // Contact Information
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@itsthe1.com",
    website: "https://itsthe1.com",
    address: "Your Business Address",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  },

  // Services Configuration
  services: [
    {
      id: "it-support",
      name: "IT Support & Outsourcing",
      description:
        "24/7 comprehensive IT support with proactive monitoring and helpdesk services",
      keywords: [
        "support",
        "help",
        "it support",
        "technical support",
        "outsourcing",
        "24/7",
        "monitoring",
      ],
      link: "/services/it-support-outsourcing/",
      icon: "",
    },
    {
      id: "cloud-services",
      name: "Cloud & Hybrid Solutions",
      description:
        "Secure cloud migration services and hybrid infrastructure solutions",
      keywords: [
        "cloud",
        "azure",
        "hybrid",
        "migration",
        "infrastructure",
        "multi-cloud",
      ],
      link: "/services/cloud-hybrid/",
      icon: "",
    },
    {
      id: "cybersecurity",
      name: "IT Security & Compliance",
      description:
        "Advanced cybersecurity protection and compliance management",
      keywords: [
        "security",
        "cybersecurity",
        "protection",
        "compliance",
        "threats",
        "data protection",
      ],
      link: "/services/it-security-compliance/",
      icon: "",
    },
    {
      id: "microsoft-365",
      name: "Microsoft 365 & Azure",
      description:
        "Complete Microsoft solutions including 365 and Azure cloud services",
      keywords: [
        "microsoft",
        "office",
        "365",
        "m365",
        "azure",
        "teams",
        "cloud productivity",
      ],
      link: "/services/microsoft-365/",
      icon: "",
    },
    {
      id: "consulting",
      name: "IT Consultancy",
      description:
        "Strategic technology consulting and digital transformation planning",
      keywords: [
        "consulting",
        "strategy",
        "planning",
        "transformation",
        "advisory",
        "technology assessment",
      ],
      link: "/services/it-consultancy/",
      icon: "",
    },
    {
      id: "co-managed",
      name: "Co-managed IT Services",
      description:
        "Flexible IT management partnership combining your team with our expertise",
      keywords: [
        "co-managed",
        "partnership",
        "collaboration",
        "hybrid support",
        "it management",
      ],
      link: "/services/co-managed-it-services/",
      icon: "",
    },
  ],

  // Products Configuration
  products: [
    {
      id: "iptv",
      name: "IPTV Solutions",
      description:
        "Advanced streaming platform for hospitality and enterprise environments",
      keywords: [
        "iptv",
        "streaming",
        "tv",
        "media",
        "hospitality",
        "enterprise",
      ],
      link: "/products/iptv/",
      icon: "",
    },
    {
      id: "digital-signage",
      name: "Digital Signage",
      description:
        "Interactive digital display solutions for modern business communication",
      keywords: [
        "signage",
        "digital display",
        "interactive",
        "communication",
        "business",
      ],
      link: "/products/digital-signage/",
      icon: "",
    },
    {
      id: "ai-helper",
      name: "AI Helper Assistant",
      description:
        "AI-powered business automation for enhanced operational efficiency",
      keywords: [
        "ai",
        "artificial intelligence",
        "assistant",
        "automation",
        "business",
      ],
      link: "/products/ai-helper/",
      icon: "",
    },
    {
      id: "crm-sme",
      name: "CRM for SME",
      description:
        "Customer relationship management solutions for small and medium enterprises",
      keywords: [
        "crm",
        "customer",
        "relationship",
        "management",
        "sme",
        "small business",
      ],
      link: "/products/crm-sme/",
      icon: "",
    },
    {
      id: "erp-garment",
      name: "ERP for Garment Industry",
      description:
        "Specialized manufacturing ERP system for garment and textile businesses",
      keywords: [
        "erp",
        "garment",
        "manufacturing",
        "textile",
        "industry",
        "production",
      ],
      link: "/products/erp-garment/",
      icon: "",
    },
    {
      id: "hospitality-app",
      name: "Hospitality Mobile App",
      description:
        "Industry-specific mobile applications for enhanced guest experiences",
      keywords: [
        "hospitality",
        "mobile app",
        "guest services",
        "hotel",
        "tourism",
      ],
      link: "/products/hospitality-app/",
      icon: "",
    },
  ],

  // Solutions Configuration
  solutions: [
    {
      id: "digital-transformation",
      name: "Digital Transformation",
      description:
        "Comprehensive digital transformation services to modernize your business.",
      keywords: [
        "digital transformation",
        "modernization",
        "digitization",
        "innovation",
      ],
      link: "/solutions/digital-transformation/",
      icon: "🚀",
    },
    {
      id: "web-mobile",
      name: "Web & Mobile Solutions",
      description: "Custom web and mobile application development services.",
      keywords: ["web development", "mobile app", "website", "application"],
      link: "/solutions/web-mobile/",
      icon: "💻",
    },
    {
      id: "hospitality-solutions",
      name: "Hospitality Solutions",
      description: "Specialized IT solutions for the hospitality industry.",
      keywords: ["hospitality", "hotel", "restaurant", "tourism", "booking"],
      link: "/solutions/hospitality/",
      icon: "🏨",
    },
    {
      id: "network-solutions",
      name: "Network Solutions",
      description: "Enterprise network design, implementation, and management.",
      keywords: ["network", "networking", "infrastructure", "connectivity"],
      link: "/solutions/network-solutions/",
      icon: "🌐",
    },
  ],

  // FAQ Configuration
  faqs: [
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including hospitality, healthcare, manufacturing, retail, and general enterprise sectors. Our solutions are tailored to meet specific industry requirements.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, we offer 24/7 IT support services for our managed service clients. We also provide business hours support for other service packages.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "You can request a quote by contacting us through our contact page, calling us directly, or continuing this conversation to discuss your specific needs.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Absolutely! We work with businesses of all sizes, from small startups to large enterprises. We have specialized solutions for SMEs including our CRM and various cloud services.",
    },
    {
      question: "What is your response time for support requests?",
      answer:
        "Our response times vary by service level: Priority 1 (Critical) - 1 hour, Priority 2 (High) - 4 hours, Priority 3 (Medium) - 8 hours, Priority 4 (Low) - 24 hours.",
    },
  ],

  // Integration Settings
  integrations: {
    googleAnalytics: {
      enabled: false,
      trackingId: "GA_TRACKING_ID",
    },
    liveChatFallback: {
      enabled: false,
      redirectUrl: "/contact/",
    },
    emailIntegration: {
      enabled: false,
      endpoint: "/api/chatbot-inquiry",
    },
  },
};

// Make config globally available
if (typeof module !== "undefined" && module.exports) {
  module.exports = window.ChatbotConfig;
}
