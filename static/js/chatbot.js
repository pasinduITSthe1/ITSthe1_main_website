// AI Chatbot for ITSthe1 Website
class ITSthe1Chatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.isTyping = false;
    this.conversationId = this.generateId();

    // Initialize knowledge base
    this.knowledgeBase = {
      services: {
        "it support": {
          title: "IT Support & Outsourcing",
          description:
            "Comprehensive 24/7 IT support services to keep your business running smoothly.",
          summary: "<strong>24/7 IT Support & Outsourcing</strong>\n\n<strong>What We Offer:</strong>\n• Remote monitoring and management\n• Help desk support (phone, email, chat)\n• Server and network maintenance\n• Software updates and patch management\n• Backup and disaster recovery\n• Hardware procurement and setup\n\n<strong>Benefits:</strong>\n• Reduce IT costs by up to 40%\n• 24/7 monitoring and support\n• Proactive issue prevention\n• Access to expert technicians\n• Predictable monthly costs\n\n<strong>Perfect For:</strong> Small to medium businesses wanting reliable IT without full-time staff costs.",
          link: "/services/it-support-outsourcing/",
        },
        "cloud services": {
          title: "Cloud & Hybrid Solutions",
          description:
            "Secure cloud migration and hybrid infrastructure solutions.",
          summary: "<strong>Cloud & Hybrid Solutions</strong>\n\n<strong>Services Include:</strong>\n• Cloud migration planning and execution\n• Hybrid infrastructure design\n• Multi-cloud management\n• Data backup and disaster recovery\n• Cloud security implementation\n• Cost optimization strategies\n\n<strong>Key Benefits:</strong>\n• Scalability on demand\n• Enhanced security and compliance\n• Reduced infrastructure costs\n• Improved business continuity\n• Remote work enablement\n\n<strong>Ideal For:</strong> Businesses looking to modernize infrastructure and improve operational efficiency.",
          link: "/services/cloud-hybrid/",
        },
        cybersecurity: {
          title: "IT Security & Compliance",
          description:
            "Advanced cybersecurity solutions to protect your business.",
          summary: "<strong>IT Security & Compliance</strong>\n\n<strong>Security Services:</strong>\n• Vulnerability assessments and penetration testing\n• Firewall and intrusion detection systems\n• Email security and anti-phishing\n• Employee security training\n• Compliance management (GDPR, HIPAA, etc.)\n• Incident response planning\n\n<strong>Protection Against:</strong>\n• Ransomware and malware\n• Data breaches\n• Phishing attacks\n• Insider threats\n• Regulatory non-compliance\n\n<strong>Result:</strong> 99.9% threat detection rate with comprehensive protection for your digital assets.",
          link: "/services/it-security-compliance/",
        },
        "microsoft 365": {
          title: "Microsoft 365 Solutions",
          description:
            "Complete Microsoft 365 implementation and management services.",
          summary: " <strong>Microsoft 365 Solutions</strong>\n\n<strong>Implementation Services:</strong>\n Microsoft 365 migration and setup\n SharePoint and Teams configuration\n Exchange Online management\n OneDrive for Business deployment\n Power Platform integration\n User training and adoption\n\n<strong>Key Features:</strong>\n Cloud-based productivity suite\n Advanced collaboration tools\n Enterprise-grade security\n Automatic updates and maintenance\n Mobile device management\n\n<strong>Perfect For:</strong> Organizations wanting to enhance productivity and collaboration with Microsoft's ecosystem.",
          link: "/services/microsoft-365/",
        },
        azure: {
          title: "Microsoft Azure Services",
          description: "Expert Azure cloud services and migration solutions.",
          summary: " <strong>Microsoft Azure Services</strong>\n\n<strong>Azure Solutions:</strong>\n Azure cloud migration\n Virtual machine deployment\n Azure Active Directory setup\n Database migration to Azure SQL\n Azure networking and security\n DevOps and automation\n\n<strong>Advantages:</strong>\n Global availability and reliability\n Pay-as-you-use pricing model\n Integration with Microsoft ecosystem\n Advanced AI and analytics capabilities\n Robust disaster recovery options\n\n<strong>Best For:</strong> Enterprises seeking scalable, secure cloud infrastructure with Microsoft integration.",
          link: "/services/microsoft-azure/",
        },
        consulting: {
          title: "IT Consultancy Services",
          description:
            "Strategic IT consulting to optimize your business operations.",
          summary: " <strong>IT Consultancy Services</strong>\n\n<strong>Consulting Areas:</strong>\n Digital transformation strategy\n IT infrastructure assessment\n Technology roadmap development\n Process optimization\n Vendor selection and management\n Project management and implementation\n\n<strong>Our Approach:</strong>\n Comprehensive business analysis\n Custom solution design\n Implementation planning\n Change management support\n Ongoing optimization\n\n<strong>Outcome:</strong> Strategic IT alignment that drives business growth and operational efficiency.",
          link: "/services/it-consultancy/",
        },
      },
      products: {
        iptv: {
          title: "IPTV Solutions",
          description:
            "Advanced IPTV and streaming solutions for hospitality and enterprise.",
          summary: " <strong>IPTV Solutions - Complete Entertainment Platform</strong>\n\n<strong>Hospitality IPTV:</strong>\n 500+ HD channels with international content\n Video-on-demand library (movies, shows, documentaries)\n Interactive guest services (room service, concierge, billing)\n Welcome messages and hotel information channels\n Multi-language interface (20+ languages)\n Chromecast integration for personal devices\n Pay-per-view revenue generation\n\n<strong>Enterprise IPTV:</strong>\n Corporate communications and training channels\n Live event streaming and conferences\n Digital signage integration\n Department-specific content delivery\n Emergency broadcast capabilities\n Analytics and viewing reports\n\n<strong>Revenue Features:</strong>\n Premium content packages\n Pay-per-view movies and events\n Advertisement insertion capabilities\n Detailed billing and reporting\n\n<strong>Management Platform:</strong>\n Cloud-based content management system\n Real-time monitoring and analytics\n Remote configuration and updates\n Multi-property management\n 24/7 technical support\n\n<strong>Perfect For:</strong> Hotels, hospitals, corporate offices, senior living facilities, and educational institutions seeking professional entertainment solutions.",
          link: "/products/iptv/",
        },
        "digital signage": {
          title: "Digital Signage",
          description:
            "Interactive digital signage solutions for modern businesses.",
          summary: " <strong>Digital Signage - Smart Display Solutions</strong>\n\n<strong>Interactive Features:</strong>\n Multi-touch displays (up to 10 simultaneous touches)\n Gesture recognition and motion sensors\n QR code integration for mobile connectivity\n Voice activation capabilities\n Facial recognition for personalized content\n NFC and Bluetooth connectivity\n\n<strong>Content Management:</strong>\n Drag-and-drop content builder\n Real-time content scheduling\n Weather and news feed integration\n Social media live feeds\n Emergency alert system\n Multi-zone layout management\n Template library (100+ designs)\n\n<strong>Analytics & Intelligence:</strong>\n Viewer engagement analytics\n Demographic analysis (age, gender)\n Dwell time measurement\n Content performance metrics\n Heat mapping for screen interaction\n ROI measurement tools\n\n<strong>Applications:</strong>\n <strong>Retail:</strong> Product promotions, queue management, virtual shopping assistants\n <strong>Corporate:</strong> Company announcements, meeting room displays, visitor information\n <strong>Healthcare:</strong> Wayfinding, patient information, health education\n <strong>Education:</strong> Campus maps, event announcements, digital bulletin boards\n <strong>Hospitality:</strong> Menu boards, event schedules, local attractions\n <strong>Transportation:</strong> Flight/train schedules, advertising, wayfinding\n\n<strong>Technical Specs:</strong>\n 4K Ultra HD resolution support\n Portrait and landscape orientations\n Outdoor weatherproof options available\n Remote monitoring and management\n Cloud and on-premise deployment options",
          link: "/products/digital-signage/",
        },
        "ai helper": {
          title: "AI Helper Assistant",
          description: "AI-powered virtual assistant for business automation.",
          summary: " <strong>AI Helper Assistant - Intelligent Business Automation</strong>\n\n<strong>AI Capabilities:</strong>\n Advanced Natural Language Processing (NLP)\n Machine Learning and predictive analytics\n Sentiment analysis and emotion detection\n Multi-language support (50+ languages)\n Voice recognition and speech synthesis\n Image and document analysis\n Workflow automation and orchestration\n\n<strong>Business Applications:</strong>\n <strong>Customer Support:</strong> 24/7 automated helpdesk, ticket routing, FAQ handling\n <strong>Sales Assistant:</strong> Lead qualification, appointment scheduling, product recommendations\n <strong>HR Automation:</strong> Employee onboarding, policy queries, leave management\n <strong>Finance:</strong> Invoice processing, expense management, financial reporting\n <strong>Marketing:</strong> Campaign management, customer segmentation, content generation\n <strong>Operations:</strong> Inventory management, supply chain optimization, quality control\n\n<strong>Industry Solutions:</strong>\n <strong>Healthcare:</strong> Patient scheduling, medical record management, symptom analysis\n <strong>Legal:</strong> Document review, case research, compliance monitoring\n <strong>Real Estate:</strong> Property matching, client qualification, market analysis\n <strong>Education:</strong> Student support, grading assistance, curriculum planning\n <strong>Retail:</strong> Inventory optimization, customer service, personalized shopping\n\n<strong>Performance Metrics:</strong>\n 95% accuracy in query understanding\n 80% reduction in response time\n 60% decrease in operational costs\n 24/7 availability with 99.9% uptime\n Handles 10,000+ concurrent conversations\n\n<strong>Integration Options:</strong>\n CRM systems (Salesforce, HubSpot, Dynamics)\n Communication platforms (Slack, Teams, WhatsApp)\n E-commerce platforms (Shopify, WooCommerce)\n ERP systems and databases\n Custom API development available",
          link: "/products/ai-helper/",
        },
        crm: {
          title: "CRM for SME",
          description:
            "Customer relationship management solutions for small and medium enterprises.",
          summary: " <strong>CRM for SME - Complete Customer Management Platform</strong>\n\n<strong>Contact & Lead Management:</strong>\n Unlimited contacts with detailed profiles\n Lead scoring and qualification\n Contact segmentation and tagging\n Duplicate detection and merging\n Import/export from Excel, CSV, other CRMs\n Social media profile integration\n Contact timeline and interaction history\n\n<strong>Sales Pipeline:</strong>\n Visual sales pipeline with drag-and-drop\n Customizable sales stages and probability\n Deal tracking and forecasting\n Quote and proposal generation\n Product catalog and pricing management\n Commission and territory management\n Win/loss analysis and reporting\n\n<strong>Marketing Automation:</strong>\n Email campaign builder with templates\n Automated drip campaigns\n Lead nurturing workflows\n Landing page creation\n Social media scheduling\n Marketing ROI tracking\n A/B testing capabilities\n\n<strong>Communication Hub:</strong>\n Built-in phone and video calling\n Email integration (Gmail, Outlook)\n SMS messaging campaigns\n Live chat widget for website\n WhatsApp Business integration\n Call recording and transcription\n Communication history tracking\n\n<strong>Analytics & Reporting:</strong>\n Sales performance dashboards\n Custom report builder\n Revenue forecasting\n Activity tracking and productivity metrics\n Customer lifetime value analysis\n Team performance comparisons\n Real-time notifications and alerts\n\n<strong>Mobile & Integration:</strong>\n Native mobile apps (iOS/Android)\n Offline access capabilities\n Integration with QuickBooks, Xero\n Zapier connectivity (2000+ apps)\n Custom API for third-party integrations\n Single sign-on (SSO) support\n\n<strong>SME-Friendly Features:</strong>\n Affordable monthly pricing (starting $15/user)\n No setup fees or long-term contracts\n Free data migration assistance\n 24/7 customer support\n Comprehensive training resources\n Scalable from 1-500 users",
          link: "/products/crm-sme/",
        },
        erp: {
          title: "ERP for Garment Industry",
          description:
            "Specialized ERP solutions for garment manufacturing businesses.",
          summary: " <strong>ERP for Garment Industry - Complete Manufacturing Solution</strong>\n\n<strong>Design & Development:</strong>\n CAD integration for pattern design\n Tech pack management and specifications\n Color and fabric library management\n Size grading and marker making\n Sample tracking and approval workflows\n Cost estimation and pricing calculators\n Seasonal collection planning\n\n<strong>Supply Chain Management:</strong>\n Fabric and trim inventory management\n Vendor and supplier relationship management\n Purchase order automation\n Quality control and inspection workflows\n Fabric utilization optimization\n Multi-warehouse management\n Barcode and RFID tracking\n\n<strong>Production Planning:</strong>\n Production scheduling and capacity planning\n Cut plan optimization\n Line balancing and efficiency tracking\n Work order management\n Real-time production monitoring\n Machine maintenance scheduling\n Labor productivity analysis\n\n<strong>Quality Management:</strong>\n AQL (Acceptable Quality Level) standards\n Defect tracking and analysis\n Inspection checklists and protocols\n Supplier quality scorecards\n Corrective action management\n Quality reports and certifications\n Compliance tracking (WRAP, BSCI, etc.)\n\n<strong>Order Management:</strong>\n Customer order processing\n Sales contract management\n Delivery scheduling\n Shipment tracking\n Customer portal for order status\n Multi-currency and multi-language support\n Export documentation automation\n\n<strong>Financial Management:</strong>\n Garment costing (material, labor, overhead)\n Profitability analysis by style/customer\n Budget planning and variance analysis\n Accounts payable/receivable\n Payroll integration\n Multi-company and multi-location support\n Financial reporting and dashboards\n\n<strong>Industry-Specific Features:</strong>\n Fashion trend analysis\n Seasonal demand forecasting\n Compliance with international standards\n Sustainable manufacturing tracking\n Carbon footprint calculation\n Social compliance monitoring\n Ethical sourcing verification\n\n<strong>Technical Capabilities:</strong>\n Cloud-based or on-premise deployment\n Mobile apps for production floor\n Integration with existing systems\n Customizable workflows and reports\n Multi-tenant architecture\n 99.9% uptime guarantee",
          link: "/products/erp-garment/",
        },
        "hospitality app": {
          title: "Hospitality Mobile App",
          description:
            "Mobile applications designed specifically for the hospitality industry.",
          summary: " <strong>Hospitality Mobile App - Complete Guest Experience Platform</strong>\n\n<strong>Guest Services:</strong>\n <strong>Digital Check-in/Out:</strong> Skip the front desk, get room keys on phone\n <strong>Room Controls:</strong> Adjust temperature, lighting, curtains, TV from app\n <strong>Concierge Services:</strong> 24/7 chat support, recommendations, bookings\n <strong>Room Service:</strong> Full menu ordering with real-time tracking\n <strong>Housekeeping:</strong> Request cleaning, extra amenities, maintenance\n <strong>Wake-up Calls:</strong> Digital alarm system with custom messages\n <strong>Express Checkout:</strong> Review and pay bills instantly\n\n<strong>Dining & Entertainment:</strong>\n <strong>Restaurant Reservations:</strong> Book tables at hotel restaurants\n <strong>Menu Integration:</strong> Browse menus, dietary information, pricing\n <strong>Bar Services:</strong> Order drinks to pool, room, or lobby\n <strong>Event Booking:</strong> Reserve conference rooms, spa treatments\n <strong>Local Recommendations:</strong> AI-powered suggestions based on preferences\n <strong>Activity Booking:</strong> Tours, transportation, entertainment\n\n<strong>Communication Hub:</strong>\n <strong>Multi-language Support:</strong> 25+ languages with real-time translation\n <strong>Push Notifications:</strong> Personalized offers, reminders, updates\n <strong>Chat Support:</strong> Instant messaging with hotel staff\n <strong>Video Calling:</strong> Face-to-face support when needed\n <strong>Feedback System:</strong> Real-time reviews and suggestion box\n <strong>Emergency Services:</strong> One-touch access to security/medical help\n\n<strong>Payment & Loyalty:</strong>\n <strong>Mobile Payments:</strong> Secure payment processing with multiple options\n <strong>Digital Wallet:</strong> Store payment methods and loyalty cards\n <strong>Loyalty Program:</strong> Points earning, tier status, exclusive offers\n <strong>Expense Tracking:</strong> Business travel expense management\n <strong>Group Billing:</strong> Split bills among multiple guests\n <strong>Currency Conversion:</strong> Real-time exchange rates\n\n<strong>Personalization Engine:</strong>\n <strong>Guest Preferences:</strong> Remember room preferences, dietary requirements\n <strong>Behavioral Analytics:</strong> Learn from guest patterns and preferences\n <strong>Recommendation Engine:</strong> Suggest services based on stay history\n <strong>Custom Offers:</strong> Targeted promotions and upselling opportunities\n <strong>Birthday/Anniversary:</strong> Special recognition and offers\n <strong>VIP Services:</strong> Enhanced features for premium guests\n\n<strong>Hotel Management Dashboard:</strong>\n <strong>Guest Analytics:</strong> Detailed insights into guest behavior\n <strong>Revenue Optimization:</strong> Track upselling and cross-selling success\n <strong>Operational Efficiency:</strong> Monitor service request response times\n <strong>Feedback Management:</strong> Real-time guest satisfaction monitoring\n <strong>Staff Coordination:</strong> Streamlined communication between departments\n <strong>Inventory Management:</strong> Track amenity usage and demand\n\n<strong>Technical Features:</strong>\n <strong>Offline Functionality:</strong> Core features work without internet\n <strong>Beacon Integration:</strong> Location-based services and notifications\n <strong>IoT Integration:</strong> Connect with smart room devices\n <strong>PMS Integration:</strong> Seamless connection with property management systems\n <strong>White-label Solution:</strong> Fully customizable with hotel branding\n <strong>Multi-property Support:</strong> Manage multiple hotels from one platform\n\n<strong>Proven Results:</strong>\n 95% guest satisfaction improvement\n 40% increase in ancillary revenue\n 30% reduction in front desk calls\n 25% improvement in operational efficiency\n 90% guest adoption rate within 24 hours",
          link: "/products/hospitality-app/",
        },
        "digital menu": {
          title: "Digital Menu Solutions",
          description: "Interactive digital menu systems for restaurants and hospitality.",
          summary: " <strong>Digital Menu Solutions - Smart Restaurant Technology</strong>\n\n<strong>QR Code Menus:</strong>\n Contactless menu access via smartphone\n Instant updates without reprinting\n Multi-language support\n High-resolution food photography\n Nutritional information and allergen alerts\n Customer reviews and ratings integration\n\n<strong>Interactive Kiosk Ordering:</strong>\n Self-service ordering stations\n Customization options for each item\n Upselling suggestions and combos\n Payment processing integration\n Order tracking and pickup notifications\n Accessibility features for all users\n\n<strong>Revenue Enhancement:</strong>\n Dynamic pricing based on demand\n Promotional campaigns and discounts\n Loyalty program integration\n Analytics on popular items\n Average order value increase of 20%\n\n<strong>Management Features:</strong>\n Real-time menu updates\n Inventory integration\n Multi-location management\n Staff training modules\n Customer feedback collection",
          link: "/products/digital-menu/",
        },
        "helpdesk": {
          title: "IT Helpdesk Solutions",
          description: "Comprehensive IT support and ticketing system for businesses.",
          summary: " <strong>IT Helpdesk Solutions - Complete Support Platform</strong>\n\n<strong>Multi-Channel Support:</strong>\n Email, phone, chat, and web portal\n Self-service knowledge base\n Mobile app for technicians\n Social media integration\n Video remote assistance\n SMS notifications and updates\n\n<strong>Ticket Management:</strong>\n Automated ticket routing\n Priority and severity levels\n SLA tracking and escalation\n Asset and configuration management\n Change management workflows\n Problem and incident correlation\n\n<strong>Analytics & Reporting:</strong>\n Performance dashboards\n First call resolution rates\n Customer satisfaction surveys\n Technician productivity metrics\n Trend analysis and forecasting\n Custom reporting tools\n\n<strong>Automation Features:</strong>\n AI-powered ticket categorization\n Automated responses for common issues\n Workflow automation\n Integration with monitoring tools\n Predictive maintenance alerts\n\n<strong>Result:</strong> 50% reduction in resolution time and 95% customer satisfaction rating.",
          link: "/products/helpdesk/",
        },
        "id scanning": {
          title: "ID Scanning Solutions",
          description: "Advanced ID verification and scanning technology for secure access control.",
          summary: " <strong>ID Scanning Solutions - Secure Identity Verification</strong>\n\n<strong>Advanced Scanning Technology:</strong>\n Multi-format ID support (passport, driver's license, national ID)\n Barcode and magnetic stripe reading\n RFID and NFC capability\n Biometric verification (fingerprint, facial recognition)\n Document authenticity verification\n Real-time fraud detection\n\n<strong>Applications:</strong>\n <strong>Hotels:</strong> Guest check-in and registration\n <strong>Retail:</strong> Age verification and customer onboarding\n <strong>Healthcare:</strong> Patient identification and insurance verification\n <strong>Finance:</strong> KYC compliance and account opening\n <strong>Events:</strong> Ticket validation and access control\n <strong>Government:</strong> Citizen services and document processing\n\n<strong>Security Features:</strong>\n End-to-end encryption\n Secure data storage and transmission\n Compliance with data protection regulations\n Audit trails and logging\n Multi-factor authentication\n Role-based access control\n\n<strong>Data Management:</strong>\n Visitor management system\n Guest history and preferences\n Blacklist and watchlist checking\n Automated reporting and analytics\n Integration with existing systems\n Cloud and on-premise options\n\n<strong>Performance:</strong>\n Sub-second scanning and verification\n 99.9% accuracy rate\n Offline capability for internet outages\n Mobile and desktop applications\n API for custom integrations",
          link: "/products/id-scanning/",
        },
      },
      solutions: {
        "digital transformation": {
          title: "Digital Transformation",
          description:
            "Comprehensive digital transformation services to modernize your business.",
          summary: " <strong>Digital Transformation</strong>\n\n<strong>Transformation Areas:</strong>\n Process digitization and automation\n Cloud-first strategy implementation\n Data analytics and insights\n Customer experience enhancement\n Employee productivity tools\n Digital culture development\n\n<strong>Our Methodology:</strong>\n Current state assessment\n Future state vision planning\n Roadmap development\n Phased implementation\n Change management\n Continuous optimization\n\n<strong>Outcomes:</strong> Increased efficiency, reduced costs, improved customer satisfaction, and competitive advantage.",
          link: "/solutions/digital-transformation/",
        },
        "web development": {
          title: "Web & Mobile Solutions",
          description:
            "Custom web and mobile application development services.",
          summary: " <strong>Web & Mobile Solutions</strong>\n\n<strong>Development Services:</strong>\n Custom web application development\n Mobile app development (iOS/Android)\n E-commerce platform creation\n Progressive web applications (PWA)\n API development and integration\n UI/UX design and optimization\n\n<strong>Technologies Used:</strong>\n Modern frameworks (React, Angular, Vue)\n Cross-platform mobile development\n Cloud-native architecture\n Responsive design principles\n SEO optimization\n\n<strong>Deliverables:</strong> Scalable, secure, and user-friendly applications that drive business growth.",
          link: "/solutions/web-mobile/",
        },
        hospitality: {
          title: "Hospitality Solutions",
          description: "Specialized IT solutions for the hospitality industry.",
          summary: " <strong>Hospitality Solutions</strong>\n\n<strong>Comprehensive Suite:</strong>\n Property management systems\n Guest experience platforms\n Revenue management tools\n Housekeeping automation\n Guest Wi-Fi and connectivity\n Point-of-sale systems\n\n<strong>Guest Benefits:</strong>\n Seamless check-in/out experience\n Personalized service delivery\n High-speed internet access\n Mobile concierge services\n Digital amenities\n\n<strong>Hotel Benefits:</strong> Operational efficiency, increased revenue, improved guest satisfaction, and competitive differentiation.",
          link: "/solutions/hospitality/",
        },
        "network solutions": {
          title: "Network Solutions",
          description:
            "Enterprise network design, implementation, and management.",
          summary: " <strong>Network Solutions</strong>\n\n<strong>Network Services:</strong>\n Network design and architecture\n LAN/WAN implementation\n Wireless network deployment\n Network security implementation\n Network monitoring and management\n Disaster recovery planning\n\n<strong>Key Features:</strong>\n High-performance connectivity\n Scalable infrastructure\n Redundancy and failover\n Security-first approach\n 24/7 monitoring\n\n<strong>Benefits:</strong> Reliable connectivity, enhanced security, improved performance, and reduced downtime.",
          link: "/solutions/network-solutions/",
        },
      },
      company: {
        about:
          "ITSthe1 Solutions LLC is a leading provider of IT and Telecom solutions, specializing in Digital Transformation, Cyber Security, Cloud Services, Web & Mobile applications, and Hospitality Solutions.",
        contact:
          "You can contact us through our contact page or reach out directly for personalized assistance.",
        location:
          "We serve clients globally with expertise in various industries including hospitality, healthcare, and enterprise sectors.",
      },
    };

    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.bindEvents();
    this.addWelcomeMessage();
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  createChatbotHTML() {
    const chatbotHTML = `
            <div id="itsthe1-chatbot" class="chatbot-container">
                <div class="chatbot-toggle" id="chatbot-toggle">
                    <div class="chatbot-toggle-content">
                        <div class="chatbot-toggle-avatar">
                            <div class="avatar-fallback">🎧</div>
                        </div>
                        <div class="chatbot-toggle-text">
                            <div class="toggle-title">ONE Assistant</div>
                            <div class="toggle-subtitle">How can I help you today?</div>
                        </div>
                    </div>
                    <div class="chatbot-notification" id="chatbot-notification" style="display: none;">
                        <span>How can I help you today?</span>
                    </div>
                </div>
                
                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-avatar">
                            <div class="avatar-fallback">🎧</div>
                        </div>
                        <div class="chatbot-info">
                            <h4>ONE Assistant</h4>
                            <span class="status">Online</span>
                        </div>
                        <button class="chatbot-minimize" id="chatbot-minimize">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbot-messages">
                        <!-- Messages will be added here -->
                    </div>
                    
                    <div class="chatbot-typing" id="chatbot-typing" style="display: none;">
                        <div class="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span class="typing-text">ONE Assistant is typing...</span>
                    </div>
                    
                    <div class="chatbot-input-area">
                        <div class="quick-actions" id="quick-actions">
                            <button class="quick-action" data-action="services">Our Services</button>
                            <button class="quick-action" data-action="products">Products</button>
                            <button class="quick-action" data-action="contact">Contact Us</button>
                        </div>
                        <div class="chatbot-input-container">
                            <input type="text" id="chatbot-input" placeholder="Type your message..." maxlength="500">
                            <button id="chatbot-send" class="send-button">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", chatbotHTML);
  }

  bindEvents() {
    const toggle = document.getElementById("chatbot-toggle");
    const minimize = document.getElementById("chatbot-minimize");
    const input = document.getElementById("chatbot-input");
    const sendButton = document.getElementById("chatbot-send");
    const quickActions = document.querySelectorAll(".quick-action");

    toggle.addEventListener("click", () => this.toggleChat());
    minimize.addEventListener("click", () => this.toggleChat());

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    sendButton.addEventListener("click", () => this.sendMessage());

    quickActions.forEach((action) => {
      action.addEventListener("click", (e) => {
        const actionType = e.target.dataset.action;
        this.handleQuickAction(actionType);
      });
    });

    // Show notification after a delay (disabled since button shows text)
    // setTimeout(() => {
    //     this.showNotification();
    // }, 3000);
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    const container = document.getElementById("itsthe1-chatbot");
    const notification = document.getElementById("chatbot-notification");

    container.classList.toggle("active", this.isOpen);

    if (this.isOpen) {
      notification.style.display = "none";
      document.getElementById("chatbot-input").focus();
    }
  }

  showNotification() {
    if (!this.isOpen) {
      const notification = document.getElementById("chatbot-notification");
      notification.style.display = "block";

      setTimeout(() => {
        if (!this.isOpen) {
          notification.style.display = "none";
        }
      }, 8000);
    }
  }

  addWelcomeMessage() {
    const welcomeMessage =
      "Hi! I'm your ONE virtual assistant. I can help you learn about our services, products, and solutions. How can I assist you today?";
    this.addMessage(welcomeMessage, "bot");
  }

  addMessage(content, sender, options = {}) {
    const messagesContainer = document.getElementById("chatbot-messages");
    const messageId = this.generateId();

    const messageHTML = `
            <div class="message ${sender}-message" id="msg-${messageId}">
                ${
                  sender === "bot"
                    ? '<div class="message-avatar"><div class="avatar-icon">IT</div></div>'
                    : ""
                }
                <div class="message-content">
                    <div class="message-text">${content}</div>
                    ${
                      options.buttons ? this.createButtons(options.buttons) : ""
                    }
                    ${
                      options.suggestions
                        ? this.createSuggestions(options.suggestions)
                        : ""
                    }
                    <div class="message-time">${new Date().toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}</div>
                </div>
            </div>
        `;

    messagesContainer.insertAdjacentHTML("beforeend", messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    this.messages.push({
      id: messageId,
      content,
      sender,
      timestamp: new Date(),
      options,
    });
  }

  createButtons(buttons) {
    const buttonsHTML = buttons
      .map(
        (button) =>
          `<button class="message-button" data-action="${
            button.action
          }" data-link="${button.link || ""}">${button.text}</button>`
      )
      .join("");

    return `<div class="message-buttons">${buttonsHTML}</div>`;
  }

  createSuggestions(suggestions) {
    const suggestionsHTML = suggestions
      .map(
        (suggestion) =>
          `<button class="suggestion-chip" data-suggestion="${suggestion}">${suggestion}</button>`
      )
      .join("");

    return `<div class="suggestions">${suggestionsHTML}</div>`;
  }

  showTyping() {
    this.isTyping = true;
    document.getElementById("chatbot-typing").style.display = "flex";
    document.getElementById("chatbot-messages").scrollTop =
      document.getElementById("chatbot-messages").scrollHeight;
  }

  hideTyping() {
    this.isTyping = false;
    document.getElementById("chatbot-typing").style.display = "none";
  }

  sendMessage() {
    const input = document.getElementById("chatbot-input");
    const message = input.value.trim();

    if (!message) return;

    this.addMessage(message, "user");
    input.value = "";

    this.showTyping();

    // Simulate AI processing delay
    setTimeout(() => {
      const response = this.processMessage(message);
      this.hideTyping();
      this.addMessage(response.text, "bot", response.options);
    }, 1000 + Math.random() * 1000);
  }

  processMessage(message) {
    const lowerMessage = message.toLowerCase();

    // Greeting patterns
    if (
      this.matchesPattern(lowerMessage, [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
      ])
    ) {
      return {
        text: "Hello! Welcome to ITSthe1 Solutions. I'm here to help you learn about our IT services, products, and solutions. What would you like to know about?",
        options: {
          suggestions: [
            "Our Services",
            "Products",
            "Contact Information",
            "About ONE",
          ],
        },
      };
    }

    // Services inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "service",
        "services",
        "support",
        "it support",
        "help",
      ])
    ) {
      return this.getServicesInfo(lowerMessage);
    }

    // Products inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "product",
        "products",
        "solution",
        "software",
      ])
    ) {
      return this.getProductsInfo(lowerMessage);
    }

    // Specific service inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "cloud",
        "azure",
        "microsoft",
        "office 365",
        "m365",
      ])
    ) {
      return this.getCloudServicesInfo();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "security",
        "cybersecurity",
        "cyber security",
        "protection",
      ])
    ) {
      return this.getSecurityInfo();
    }

    if (
      this.matchesPattern(lowerMessage, ["iptv", "tv", "streaming", "media"])
    ) {
      return this.getIPTVInfo();
    }

    // Digital Signage inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "digital signage",
        "signage",
        "display",
        "screen",
        "kiosk",
        "interactive display",
      ])
    ) {
      return this.getDigitalSignageInfo();
    }

    // CRM inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "crm",
        "customer management",
        "sales pipeline",
        "lead management",
        "customer relationship",
      ])
    ) {
      return this.getCRMInfo();
    }

    // ERP inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "erp",
        "garment",
        "manufacturing",
        "textile",
        "production planning",
        "inventory management",
      ])
    ) {
      return this.getERPInfo();
    }

    // Hospitality App inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "hospitality app",
        "hotel app",
        "guest app",
        "mobile check-in",
        "room service",
        "guest services",
      ])
    ) {
      return this.getHospitalityAppInfo();
    }

    // AI Assistant inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "ai assistant",
        "ai helper",
        "artificial intelligence",
        "chatbot",
        "automation",
        "virtual assistant",
      ])
    ) {
      return this.getAIHelperInfo();
    }

    // Digital Menu inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "digital menu",
        "qr menu",
        "restaurant menu",
        "menu system",
        "contactless menu",
      ])
    ) {
      return this.getDigitalMenuInfo();
    }

    // Helpdesk inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "helpdesk",
        "help desk",
        "ticket system",
        "support system",
        "it support system",
      ])
    ) {
      return this.getHelpdeskInfo();
    }

    // ID Scanning inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "id scanning",
        "identity verification",
        "document scanning",
        "access control",
        "security scanning",
      ])
    ) {
      return this.getIDScanningInfo();
    }

    // Contact inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "contact",
        "phone",
        "email",
        "address",
        "location",
        "reach",
      ])
    ) {
      return {
        text: "You can contact ITSthe1 Solutions through several ways:\n\n<strong>Email:</strong> sales@itsthe1.com - Send us your inquiries\n<strong>Phone:</strong> +971 55 220 2171 - Call us for immediate assistance\n<strong>WhatsApp:</strong> Chat with us directly for quick answers\n\nWould you like me to help you with anything specific about our services?",
        options: {
          buttons: [
            {
              text: "Send Email",
              action: "link",
              link: "mailto:sales@itsthe1.com",
            },
            { text: "Call Now", action: "link", link: "tel:+971552202171" },
            {
              text: "WhatsApp Chat",
              action: "link",
              link: "https://wa.me/971552202171",
            },
            { text: "Contact Page", action: "link", link: "/contact/" },
          ],
        },
      };
    }

    // About company
    if (
      this.matchesPattern(lowerMessage, [
        "about",
        "company",
        "who are you",
        "what do you do",
      ])
    ) {
      return {
        text: "ITSthe1 Solutions LLC is a leading provider of IT and Telecom solutions. We specialize in:\n\n<strong>Digital Transformation</strong> - Modernizing business operations\n<strong>Cyber Security</strong> - Advanced protection and compliance\n<strong>Cloud Services</strong> - Secure migration and infrastructure\n<strong>Web & Mobile Applications</strong> - Custom development solutions\n<strong>Hospitality Solutions</strong> - Industry-specific technology\n\nWe serve clients globally across various industries including hospitality, healthcare, and enterprise sectors.",
        options: {
          buttons: [
            { text: "Learn More", action: "link", link: "/about/" },
            { text: "Our Services", action: "services" },
          ],
        },
      };
    }

    // Pricing inquiries
    if (
      this.matchesPattern(lowerMessage, [
        "price",
        "pricing",
        "cost",
        "how much",
        "quote",
      ])
    ) {
      return {
        text: "Pricing for our services depends on your specific requirements and business needs. We offer:\n\n<strong>Customized Solutions</strong> - Tailored to your business needs\n<strong>Scalable Pricing Models</strong> - Flexible pricing structures\n<strong>Competitive Rates</strong> - Market-competitive pricing\n<strong>Free Consultations</strong> - Initial assessment at no cost\n\nI'd recommend contacting our team for a personalized quote based on your requirements.",
        options: {
          buttons: [
            { text: "Get Quote", action: "link", link: "/contact/" },
            { text: "Our Services", action: "services" },
          ],
        },
      };
    }

    // Default response
    return {
      text: "I'd be happy to help you with information about ITSthe1's services and solutions! I can assist with:\n\n IT Services & Support\n Cloud Solutions\n Cybersecurity\n Products & Software\n Contact Information\n\nWhat specific topic would you like to explore?",
      options: {
        suggestions: [
          "IT Services",
          "Cloud Solutions",
          "Cybersecurity",
          "Products",
          "Contact Us",
        ],
      },
    };
  }

  matchesPattern(message, patterns) {
    return patterns.some((pattern) => message.includes(pattern));
  }

  getServicesInfo(message) {
    const services = [
      "<strong>IT Support & Outsourcing</strong> - 24/7 comprehensive IT support with proactive monitoring",
      "<strong>Cloud & Hybrid Solutions</strong> - Secure cloud migration services and infrastructure",
      "<strong>IT Security & Compliance</strong> - Advanced cybersecurity protection and compliance management",
      "<strong>Microsoft 365 & Azure</strong> - Complete Microsoft solutions for productivity and cloud services",
      "<strong>IT Consultancy</strong> - Strategic technology consulting and digital transformation planning",
      "<strong>Co-managed IT Services</strong> - Flexible IT management partnership with your team",
    ];

    return {
      text: `Here are our main IT services:\n\n${services.join(
        "\n"
      )}\n\nWhich service interests you most?`,
      options: {
        buttons: [
          {
            text: "IT Support",
            action: "link",
            link: "/services/it-support-outsourcing/",
          },
          {
            text: "Cloud Services",
            action: "link",
            link: "/services/cloud-hybrid/",
          },
          {
            text: "Cybersecurity",
            action: "link",
            link: "/services/it-security-compliance/",
          },
        ],
        suggestions: ["Microsoft 365", "IT Consulting", "Learn More"],
      },
    };
  }

  getProductsInfo(message) {
    const products = [
      "<strong>Hospitality Solutions:</strong>",
      "• <strong>IPTV Solutions</strong> - Complete entertainment platform for hotels and enterprises",
      "• <strong>Hospitality Mobile App</strong> - Guest experience platform with mobile check-in/out",
      "• <strong>Digital Menu Solutions</strong> - Interactive QR code and kiosk ordering systems",
      "",
      "<strong>AI & Automation:</strong>",
      "• <strong>AI Helper Assistant</strong> - Intelligent business automation with NLP and ML",
      "• <strong>Digital Signage</strong> - Interactive displays with analytics and content management",
      "",
      "<strong>Business Management:</strong>",
      "• <strong>CRM for SME</strong> - Complete customer relationship management platform",
      "• <strong>ERP for Garment Industry</strong> - Specialized manufacturing and supply chain solution",
      "• <strong>IT Helpdesk Solutions</strong> - Comprehensive support ticketing and management system",
      "",
      "<strong>Security & Verification:</strong>",
      "• <strong>ID Scanning Solutions</strong> - Advanced identity verification and access control",
    ];

    return {
      text: `Our comprehensive product portfolio includes:\n\n${products.join(
        "\n"
      )}\n\nWhich product category interests you most? Click below for detailed information:`,
      options: {
        buttons: [
          { text: "IPTV Solutions", action: "link", link: "/products/iptv/" },
          {
            text: "AI Assistant",
            action: "link",
            link: "/products/ai-helper/",
          },
          {
            text: "Hospitality App",
            action: "link",
            link: "/products/hospitality-app/",
          },
          {
            text: "Digital Signage",
            action: "link",
            link: "/products/digital-signage/",
          },
        ],
        suggestions: ["CRM Solutions", "ERP Systems", "Security Products", "All Products"],
      },
    };
  }

  getCloudServicesInfo() {
    return {
      text: "Our Cloud & Microsoft Solutions include:\n\n<strong>Microsoft Azure Services</strong>\n Cloud migration & management\n Infrastructure as a Service (IaaS)\n Platform as a Service (PaaS)\n\n<strong>Microsoft 365</strong>\n Complete productivity suite\n Email & collaboration tools\n Security & compliance\n\n<strong>Hybrid Solutions</strong>\n On-premises + cloud integration\n Seamless data synchronization\n Scalable infrastructure",
      options: {
        buttons: [
          {
            text: "Azure Services",
            action: "link",
            link: "/services/microsoft-azure/",
          },
          {
            text: "Microsoft 365",
            action: "link",
            link: "/services/microsoft-365/",
          },
        ],
      },
    };
  }

  getSecurityInfo() {
    return {
      text: "Our Cybersecurity & Compliance services:\n\n<strong>Security Solutions</strong>\n Advanced threat protection\n Network security monitoring\n Endpoint security management\n\n<strong>Compliance Services</strong>\n Regulatory compliance audits\n Data protection policies\n Risk assessment & management\n\n<strong>Proactive Protection</strong>\n 24/7 security monitoring\n Incident response planning\n Security awareness training",
      options: {
        buttons: [
          {
            text: "Security Services",
            action: "link",
            link: "/services/it-security-compliance/",
          },
          { text: "Get Assessment", action: "link", link: "/contact/" },
        ],
      },
    };
  }

  getIPTVInfo() {
    return {
      text: "Our IPTV Solutions offer:\n\n<strong>Enterprise IPTV</strong>\n Custom channel packages\n Interactive TV services\n Content management systems\n\n<strong>Hospitality IPTV</strong>\n Guest entertainment systems\n Hotel information channels\n Multi-language support\n\n<strong>Key Features</strong>\n High-definition streaming\n Scalable infrastructure\n 24/7 technical support",
      options: {
        buttons: [
          { text: "IPTV Details", action: "link", link: "/products/iptv/" },
          {
            text: "Hospitality Solutions",
            action: "link",
            link: "/solutions/hospitality/",
          },
        ],
      },
    };
  }

  getDigitalSignageInfo() {
    return {
      text: "Our Digital Signage Solutions provide:\n\n<strong>Interactive Features</strong>\n Multi-touch displays and gesture control\n Real-time content management\n Social media integration\n\n<strong>Smart Analytics</strong>\n Viewer engagement tracking\n Demographic analysis\n ROI measurement\n\n<strong>Applications</strong>\n Retail promotions and wayfinding\n Corporate communications\n Menu boards and pricing displays",
      options: {
        buttons: [
          { text: "Signage Details", action: "link", link: "/products/digital-signage/" },
        ],
        suggestions: ["Interactive Features", "Analytics", "Other Products"],
      },
    };
  }

  getCRMInfo() {
    return {
      text: "Our CRM for SME includes:\n\n<strong>Sales Management</strong>\n Visual sales pipeline\n Lead scoring and tracking\n Quote and proposal generation\n\n<strong>Marketing Automation</strong>\n Email campaigns and drip sequences\n Lead nurturing workflows\n Social media scheduling\n\n<strong>SME Benefits</strong>\n Affordable pricing starting at $15/user\n No setup fees or long-term contracts\n 24/7 customer support",
      options: {
        buttons: [
          { text: "CRM Details", action: "link", link: "/products/crm-sme/" },
        ],
        suggestions: ["Pricing", "Features", "Demo Request"],
      },
    };
  }

  getERPInfo() {
    return {
      text: "Our ERP for Garment Industry offers:\n\n<strong>Design & Production</strong>\n CAD integration and pattern design\n Production planning and scheduling\n Quality control workflows\n\n<strong>Supply Chain</strong>\n Fabric and trim inventory management\n Vendor relationship management\n Multi-warehouse operations\n\n<strong>Industry Expertise</strong>\n Fashion trend analysis\n Compliance with international standards\n Sustainable manufacturing tracking",
      options: {
        buttons: [
          { text: "ERP Details", action: "link", link: "/products/erp-garment/" },
        ],
        suggestions: ["Manufacturing", "Compliance", "Other Solutions"],
      },
    };
  }

  getHospitalityAppInfo() {
    return {
      text: "Our Hospitality Mobile App features:\n\n<strong>Guest Services</strong>\n Digital check-in/check-out\n Room controls via smartphone\n 24/7 concierge chat support\n\n<strong>Revenue Generation</strong>\n Room service and dining orders\n Spa and activity bookings\n Loyalty program integration\n\n<strong>Proven Results</strong>\n 95% guest satisfaction improvement\n 30% increase in ancillary revenue\n 40% reduction in front desk calls",
      options: {
        buttons: [
          { text: "App Details", action: "link", link: "/products/hospitality-app/" },
        ],
        suggestions: ["Guest Features", "ROI Benefits", "Demo"],
      },
    };
  }

  getAIHelperInfo() {
    return {
      text: "Our AI Helper Assistant provides:\n\n<strong>AI Capabilities</strong>\n Natural language processing (50+ languages)\n Machine learning and predictive analytics\n Sentiment analysis and emotion detection\n\n<strong>Business Applications</strong>\n 24/7 customer support automation\n Sales lead qualification\n HR and finance process automation\n\n<strong>Performance</strong>\n 95% accuracy in query understanding\n 80% reduction in response time\n Handles 10,000+ concurrent conversations",
      options: {
        buttons: [
          { text: "AI Details", action: "link", link: "/products/ai-helper/" },
        ],
        suggestions: ["Capabilities", "Integration", "Pricing"],
      },
    };
  }

  getDigitalMenuInfo() {
    return {
      text: "Our Digital Menu Solutions include:\n\n<strong>QR Code Menus</strong>\n Contactless smartphone access\n Instant updates without reprinting\n Multi-language support with photos\n\n<strong>Interactive Kiosks</strong>\n Self-service ordering stations\n Payment processing integration\n Upselling and combo suggestions\n\n<strong>Revenue Impact</strong>\n 20% average order value increase\n Dynamic pricing capabilities\n Customer analytics and insights",
      options: {
        buttons: [
          { text: "Menu Details", action: "link", link: "/products/digital-menu/" },
        ],
        suggestions: ["Restaurant Tech", "Hospitality", "Contact Sales"],
      },
    };
  }

  getHelpdeskInfo() {
    return {
      text: "Our IT Helpdesk Solutions offer:\n\n<strong>Multi-Channel Support</strong>\n Email, phone, chat, and web portal\n Self-service knowledge base\n Mobile app for technicians\n\n<strong>Automation Features</strong>\n AI-powered ticket categorization\n Automated routing and escalation\n SLA tracking and reporting\n\n<strong>Results</strong>\n 50% reduction in resolution time\n 95% customer satisfaction rating\n First call resolution improvement",
      options: {
        buttons: [
          { text: "Helpdesk Details", action: "link", link: "/products/helpdesk/" },
        ],
        suggestions: ["IT Support", "Automation", "Demo"],
      },
    };
  }

  getIDScanningInfo() {
    return {
      text: "Our ID Scanning Solutions provide:\n\n<strong>Advanced Technology</strong>\n Multi-format ID support (passport, license, national ID)\n Biometric verification (fingerprint, facial recognition)\n Real-time fraud detection\n\n<strong>Applications</strong>\n Hotel guest registration\n Age verification for retail\n Healthcare patient identification\n Financial KYC compliance\n\n<strong>Security</strong>\n End-to-end encryption\n 99.9% accuracy rate\n Compliance with data protection regulations",
      options: {
        buttons: [
          { text: "Scanning Details", action: "link", link: "/products/id-scanning/" },
        ],
        suggestions: ["Security", "Compliance", "Industries"],
      },
    };
  }

  handleQuickAction(action) {
    const input = document.getElementById("chatbot-input");

    switch (action) {
      case "services":
        input.value = "Tell me about your services";
        break;
      case "products":
        input.value = "What products do you offer?";
        break;
      case "contact":
        input.value = "How can I contact you?";
        break;
    }

    this.sendMessage();
  }

  // Method to get detailed information about a specific topic
  getDetailedInfo(link) {
    const topic = this.extractTopicFromLink(link);
    
    if (topic && topic.summary) {
      return {
        text: topic.summary,
        options: {
          suggestions: ["More Information", "Contact Us", "Other Services"]
        }
      };
    }
    
    return null;
  }

  // Extract topic information from link
  extractTopicFromLink(link) {
    // Check services
    for (const [key, service] of Object.entries(this.knowledgeBase.services)) {
      if (service.link === link) {
        return service;
      }
    }
    
    // Check products
    for (const [key, product] of Object.entries(this.knowledgeBase.products)) {
      if (product.link === link) {
        return product;
      }
    }
    
    // Check solutions
    for (const [key, solution] of Object.entries(this.knowledgeBase.solutions)) {
      if (solution.link === link) {
        return solution;
      }
    }
    
    return null;
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Wait a bit to ensure all other scripts are loaded
  setTimeout(() => {
    window.chatbotInstance = new ITSthe1Chatbot();
  }, 1000);

  // Handle message button clicks
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("message-button")) {
      const action = e.target.dataset.action;
      const link = e.target.dataset.link;

      if (action === "link" && link) {
        // Get the chatbot instance
        const chatbotInput = document.getElementById("chatbot-input");
        if (chatbotInput && window.chatbotInstance) {
          // Show detailed information instead of navigating
          const detailedInfo = window.chatbotInstance.getDetailedInfo(link);
          if (detailedInfo) {
            window.chatbotInstance.showTyping();
            setTimeout(() => {
              window.chatbotInstance.hideTyping();
              window.chatbotInstance.addMessage(detailedInfo.text, "bot", detailedInfo.options);
            }, 1000);
          }
        }
      }
    }

    if (e.target.classList.contains("suggestion-chip")) {
      const suggestion = e.target.dataset.suggestion;
      const input = document.getElementById("chatbot-input");
      if (input) {
        input.value = suggestion;
        input.focus();
      }
    }
  });
});




