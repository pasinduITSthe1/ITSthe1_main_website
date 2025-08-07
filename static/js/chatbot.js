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
          summary:
            "<strong>24/7 IT Support & Outsourcing</strong>\n\n<strong>What We Offer:</strong>\n• Remote monitoring and management\n• Help desk support (phone, email, chat)\n• Server and network maintenance\n• Software updates and patch management\n• Backup and disaster recovery\n• Hardware procurement and setup\n\n<strong>Benefits:</strong>\n• Reduce IT costs by up to 40%\n• 24/7 monitoring and support\n• Proactive issue prevention\n• Access to expert technicians\n• Predictable monthly costs\n\n<strong>Perfect For:</strong> Small to medium businesses wanting reliable IT without full-time staff costs.",
          link: "/services/it-support-outsourcing/",
        },
        "cloud services": {
          title: "Cloud & Hybrid Solutions",
          description:
            "Secure cloud migration and hybrid infrastructure solutions.",
          summary:
            "<strong>Cloud & Hybrid Solutions</strong>\n\n<strong>Services Include:</strong>\n• Cloud migration planning and execution\n• Hybrid infrastructure design\n• Multi-cloud management\n• Data backup and disaster recovery\n• Cloud security implementation\n• Cost optimization strategies\n\n<strong>Key Benefits:</strong>\n• Scalability on demand\n• Enhanced security and compliance\n• Reduced infrastructure costs\n• Improved business continuity\n• Remote work enablement\n\n<strong>Ideal For:</strong> Businesses looking to modernize infrastructure and improve operational efficiency.",
          link: "/services/cloud-hybrid/",
        },
        cybersecurity: {
          title: "IT Security & Compliance",
          description:
            "Advanced cybersecurity solutions to protect your business.",
          summary:
            "<strong>IT Security & Compliance</strong>\n\n<strong>Security Services:</strong>\n• Vulnerability assessments and penetration testing\n• Firewall and intrusion detection systems\n• Email security and anti-phishing\n• Employee security training\n• Compliance management (GDPR, HIPAA, etc.)\n• Incident response planning\n\n<strong>Protection Against:</strong>\n• Ransomware and malware\n• Data breaches\n• Phishing attacks\n• Insider threats\n• Regulatory non-compliance\n\n<strong>Result:</strong> 99.9% threat detection rate with comprehensive protection for your digital assets.",
          link: "/services/it-security-compliance/",
        },
        "microsoft 365": {
          title: "Microsoft 365 Solutions",
          description:
            "Complete Microsoft 365 implementation and management services.",
          summary:
            " <strong>Microsoft 365 Solutions</strong>\n\n<strong>Implementation Services:</strong>\n Microsoft 365 migration and setup\n SharePoint and Teams configuration\n Exchange Online management\n OneDrive for Business deployment\n Power Platform integration\n User training and adoption\n\n<strong>Key Features:</strong>\n Cloud-based productivity suite\n Advanced collaboration tools\n Enterprise-grade security\n Automatic updates and maintenance\n Mobile device management\n\n<strong>Perfect For:</strong> Organizations wanting to enhance productivity and collaboration with Microsoft's ecosystem.",
          link: "/services/microsoft-365/",
        },
        azure: {
          title: "Microsoft Azure Services",
          description: "Expert Azure cloud services and migration solutions.",
          summary:
            " <strong>Microsoft Azure Services</strong>\n\n<strong>Azure Solutions:</strong>\n Azure cloud migration\n Virtual machine deployment\n Azure Active Directory setup\n Database migration to Azure SQL\n Azure networking and security\n DevOps and automation\n\n<strong>Advantages:</strong>\n Global availability and reliability\n Pay-as-you-use pricing model\n Integration with Microsoft ecosystem\n Advanced AI and analytics capabilities\n Robust disaster recovery options\n\n<strong>Best For:</strong> Enterprises seeking scalable, secure cloud infrastructure with Microsoft integration.",
          link: "/services/microsoft-azure/",
        },
        consulting: {
          title: "IT Consultancy Services",
          description:
            "Strategic IT consulting to optimize your business operations.",
          summary:
            " <strong>IT Consultancy Services</strong>\n\n<strong>Consulting Areas:</strong>\n Digital transformation strategy\n IT infrastructure assessment\n Technology roadmap development\n Process optimization\n Vendor selection and management\n Project management and implementation\n\n<strong>Our Approach:</strong>\n Comprehensive business analysis\n Custom solution design\n Implementation planning\n Change management support\n Ongoing optimization\n\n<strong>Outcome:</strong> Strategic IT alignment that drives business growth and operational efficiency.",
          link: "/services/it-consultancy/",
        },
      },
      products: {
        iptv: {
          title: "IPTV Solutions",
          description:
            "Advanced IPTV and streaming solutions for hospitality and enterprise.",
          summary:
            " <strong>IPTV Solutions - Complete Entertainment Platform</strong>\n\n<strong>Hospitality IPTV:</strong>\n 500+ HD channels with international content\n Video-on-demand library (movies, shows, documentaries)\n Interactive guest services (room service, concierge, billing)\n Welcome messages and hotel information channels\n Multi-language interface (20+ languages)\n Chromecast integration for personal devices\n Pay-per-view revenue generation\n\n<strong>Enterprise IPTV:</strong>\n Corporate communications and training channels\n Live event streaming and conferences\n Digital signage integration\n Department-specific content delivery\n Emergency broadcast capabilities\n Analytics and viewing reports\n\n<strong>Revenue Features:</strong>\n Premium content packages\n Pay-per-view movies and events\n Advertisement insertion capabilities\n Detailed billing and reporting\n\n<strong>Management Platform:</strong>\n Cloud-based content management system\n Real-time monitoring and analytics\n Remote configuration and updates\n Multi-property management\n 24/7 technical support\n\n<strong>Perfect For:</strong> Hotels, hospitals, corporate offices, senior living facilities, and educational institutions seeking professional entertainment solutions.",
          link: "/products/iptv/",
        },
        "digital signage": {
          title: "Digital Signage",
          description:
            "Interactive digital signage solutions for modern businesses.",
          summary:
            " <strong>Digital Signage - Smart Display Solutions</strong>\n\n<strong>Interactive Features:</strong>\n Multi-touch displays (up to 10 simultaneous touches)\n Gesture recognition and motion sensors\n QR code integration for mobile connectivity\n Voice activation capabilities\n Facial recognition for personalized content\n NFC and Bluetooth connectivity\n\n<strong>Content Management:</strong>\n Drag-and-drop content builder\n Real-time content scheduling\n Weather and news feed integration\n Social media live feeds\n Emergency alert system\n Multi-zone layout management\n Template library (100+ designs)\n\n<strong>Analytics & Intelligence:</strong>\n Viewer engagement analytics\n Demographic analysis (age, gender)\n Dwell time measurement\n Content performance metrics\n Heat mapping for screen interaction\n ROI measurement tools\n\n<strong>Applications:</strong>\n <strong>Retail:</strong> Product promotions, queue management, virtual shopping assistants\n <strong>Corporate:</strong> Company announcements, meeting room displays, visitor information\n <strong>Healthcare:</strong> Wayfinding, patient information, health education\n <strong>Education:</strong> Campus maps, event announcements, digital bulletin boards\n <strong>Hospitality:</strong> Menu boards, event schedules, local attractions\n <strong>Transportation:</strong> Flight/train schedules, advertising, wayfinding\n\n<strong>Technical Specs:</strong>\n 4K Ultra HD resolution support\n Portrait and landscape orientations\n Outdoor weatherproof options available\n Remote monitoring and management\n Cloud and on-premise deployment options",
          link: "/products/digital-signage/",
        },
        "ai helper": {
          title: "AI Helper Assistant",
          description: "AI-powered virtual assistant for business automation.",
          summary:
            " <strong>AI Helper Assistant - Intelligent Business Automation</strong>\n\n<strong>AI Capabilities:</strong>\n Advanced Natural Language Processing (NLP)\n Machine Learning and predictive analytics\n Sentiment analysis and emotion detection\n Multi-language support (50+ languages)\n Voice recognition and speech synthesis\n Image and document analysis\n Workflow automation and orchestration\n\n<strong>Business Applications:</strong>\n <strong>Customer Support:</strong> 24/7 automated helpdesk, ticket routing, FAQ handling\n <strong>Sales Assistant:</strong> Lead qualification, appointment scheduling, product recommendations\n <strong>HR Automation:</strong> Employee onboarding, policy queries, leave management\n <strong>Finance:</strong> Invoice processing, expense management, financial reporting\n <strong>Marketing:</strong> Campaign management, customer segmentation, content generation\n <strong>Operations:</strong> Inventory management, supply chain optimization, quality control\n\n<strong>Industry Solutions:</strong>\n <strong>Healthcare:</strong> Patient scheduling, medical record management, symptom analysis\n <strong>Legal:</strong> Document review, case research, compliance monitoring\n <strong>Real Estate:</strong> Property matching, client qualification, market analysis\n <strong>Education:</strong> Student support, grading assistance, curriculum planning\n <strong>Retail:</strong> Inventory optimization, customer service, personalized shopping\n\n<strong>Performance Metrics:</strong>\n 95% accuracy in query understanding\n 80% reduction in response time\n 60% decrease in operational costs\n 24/7 availability with 99.9% uptime\n Handles 10,000+ concurrent conversations\n\n<strong>Integration Options:</strong>\n CRM systems (Salesforce, HubSpot, Dynamics)\n Communication platforms (Slack, Teams, WhatsApp)\n E-commerce platforms (Shopify, WooCommerce)\n ERP systems and databases\n Custom API development available",
          link: "/products/ai-helper/",
        },
        crm: {
          title: "CRM for SME",
          description:
            "Customer relationship management solutions for small and medium enterprises.",
          summary:
            " <strong>CRM for SME - Complete Customer Management Platform</strong>\n\n<strong>Contact & Lead Management:</strong>\n Unlimited contacts with detailed profiles\n Lead scoring and qualification\n Contact segmentation and tagging\n Duplicate detection and merging\n Import/export from Excel, CSV, other CRMs\n Social media profile integration\n Contact timeline and interaction history\n\n<strong>Sales Pipeline:</strong>\n Visual sales pipeline with drag-and-drop\n Customizable sales stages and probability\n Deal tracking and forecasting\n Quote and proposal generation\n Product catalog and pricing management\n Commission and territory management\n Win/loss analysis and reporting\n\n<strong>Marketing Automation:</strong>\n Email campaign builder with templates\n Automated drip campaigns\n Lead nurturing workflows\n Landing page creation\n Social media scheduling\n Marketing ROI tracking\n A/B testing capabilities\n\n<strong>Communication Hub:</strong>\n Built-in phone and video calling\n Email integration (Gmail, Outlook)\n SMS messaging campaigns\n Live chat widget for website\n WhatsApp Business integration\n Call recording and transcription\n Communication history tracking\n\n<strong>Analytics & Reporting:</strong>\n Sales performance dashboards\n Custom report builder\n Revenue forecasting\n Activity tracking and productivity metrics\n Customer lifetime value analysis\n Team performance comparisons\n Real-time notifications and alerts\n\n<strong>Mobile & Integration:</strong>\n Native mobile apps (iOS/Android)\n Offline access capabilities\n Integration with QuickBooks, Xero\n Zapier connectivity (2000+ apps)\n Custom API for third-party integrations\n Single sign-on (SSO) support\n\n<strong>SME-Friendly Features:</strong>\n Affordable monthly pricing (starting $15/user)\n No setup fees or long-term contracts\n Free data migration assistance\n 24/7 customer support\n Comprehensive training resources\n Scalable from 1-500 users",
          link: "/products/crm-sme/",
        },
        erp: {
          title: "ERP for Garment Industry",
          description:
            "Specialized ERP solutions for garment manufacturing businesses.",
          summary:
            " <strong>ERP for Garment Industry - Complete Manufacturing Solution</strong>\n\n<strong>Design & Development:</strong>\n CAD integration for pattern design\n Tech pack management and specifications\n Color and fabric library management\n Size grading and marker making\n Sample tracking and approval workflows\n Cost estimation and pricing calculators\n Seasonal collection planning\n\n<strong>Supply Chain Management:</strong>\n Fabric and trim inventory management\n Vendor and supplier relationship management\n Purchase order automation\n Quality control and inspection workflows\n Fabric utilization optimization\n Multi-warehouse management\n Barcode and RFID tracking\n\n<strong>Production Planning:</strong>\n Production scheduling and capacity planning\n Cut plan optimization\n Line balancing and efficiency tracking\n Work order management\n Real-time production monitoring\n Machine maintenance scheduling\n Labor productivity analysis\n\n<strong>Quality Management:</strong>\n AQL (Acceptable Quality Level) standards\n Defect tracking and analysis\n Inspection checklists and protocols\n Supplier quality scorecards\n Corrective action management\n Quality reports and certifications\n Compliance tracking (WRAP, BSCI, etc.)\n\n<strong>Order Management:</strong>\n Customer order processing\n Sales contract management\n Delivery scheduling\n Shipment tracking\n Customer portal for order status\n Multi-currency and multi-language support\n Export documentation automation\n\n<strong>Financial Management:</strong>\n Garment costing (material, labor, overhead)\n Profitability analysis by style/customer\n Budget planning and variance analysis\n Accounts payable/receivable\n Payroll integration\n Multi-company and multi-location support\n Financial reporting and dashboards\n\n<strong>Industry-Specific Features:</strong>\n Fashion trend analysis\n Seasonal demand forecasting\n Compliance with international standards\n Sustainable manufacturing tracking\n Carbon footprint calculation\n Social compliance monitoring\n Ethical sourcing verification\n\n<strong>Technical Capabilities:</strong>\n Cloud-based or on-premise deployment\n Mobile apps for production floor\n Integration with existing systems\n Customizable workflows and reports\n Multi-tenant architecture\n 99.9% uptime guarantee",
          link: "/products/erp-garment/",
        },
        "hospitality app": {
          title: "Hospitality Mobile App",
          description:
            "Mobile applications designed specifically for the hospitality industry.",
          summary:
            " <strong>Hospitality Mobile App - Complete Guest Experience Platform</strong>\n\n<strong>Guest Services:</strong>\n <strong>Digital Check-in/Out:</strong> Skip the front desk, get room keys on phone\n <strong>Room Controls:</strong> Adjust temperature, lighting, curtains, TV from app\n <strong>Concierge Services:</strong> 24/7 chat support, recommendations, bookings\n <strong>Room Service:</strong> Full menu ordering with real-time tracking\n <strong>Housekeeping:</strong> Request cleaning, extra amenities, maintenance\n <strong>Wake-up Calls:</strong> Digital alarm system with custom messages\n <strong>Express Checkout:</strong> Review and pay bills instantly\n\n<strong>Dining & Entertainment:</strong>\n <strong>Restaurant Reservations:</strong> Book tables at hotel restaurants\n <strong>Menu Integration:</strong> Browse menus, dietary information, pricing\n <strong>Bar Services:</strong> Order drinks to pool, room, or lobby\n <strong>Event Booking:</strong> Reserve conference rooms, spa treatments\n <strong>Local Recommendations:</strong> AI-powered suggestions based on preferences\n <strong>Activity Booking:</strong> Tours, transportation, entertainment\n\n<strong>Communication Hub:</strong>\n <strong>Multi-language Support:</strong> 25+ languages with real-time translation\n <strong>Push Notifications:</strong> Personalized offers, reminders, updates\n <strong>Chat Support:</strong> Instant messaging with hotel staff\n <strong>Video Calling:</strong> Face-to-face support when needed\n <strong>Feedback System:</strong> Real-time reviews and suggestion box\n <strong>Emergency Services:</strong> One-touch access to security/medical help\n\n<strong>Payment & Loyalty:</strong>\n <strong>Mobile Payments:</strong> Secure payment processing with multiple options\n <strong>Digital Wallet:</strong> Store payment methods and loyalty cards\n <strong>Loyalty Program:</strong> Points earning, tier status, exclusive offers\n <strong>Expense Tracking:</strong> Business travel expense management\n <strong>Group Billing:</strong> Split bills among multiple guests\n <strong>Currency Conversion:</strong> Real-time exchange rates\n\n<strong>Personalization Engine:</strong>\n <strong>Guest Preferences:</strong> Remember room preferences, dietary requirements\n <strong>Behavioral Analytics:</strong> Learn from guest patterns and preferences\n <strong>Recommendation Engine:</strong> Suggest services based on stay history\n <strong>Custom Offers:</strong> Targeted promotions and upselling opportunities\n <strong>Birthday/Anniversary:</strong> Special recognition and offers\n <strong>VIP Services:</strong> Enhanced features for premium guests\n\n<strong>Hotel Management Dashboard:</strong>\n <strong>Guest Analytics:</strong> Detailed insights into guest behavior\n <strong>Revenue Optimization:</strong> Track upselling and cross-selling success\n <strong>Operational Efficiency:</strong> Monitor service request response times\n <strong>Feedback Management:</strong> Real-time guest satisfaction monitoring\n <strong>Staff Coordination:</strong> Streamlined communication between departments\n <strong>Inventory Management:</strong> Track amenity usage and demand\n\n<strong>Technical Features:</strong>\n <strong>Offline Functionality:</strong> Core features work without internet\n <strong>Beacon Integration:</strong> Location-based services and notifications\n <strong>IoT Integration:</strong> Connect with smart room devices\n <strong>PMS Integration:</strong> Seamless connection with property management systems\n <strong>White-label Solution:</strong> Fully customizable with hotel branding\n <strong>Multi-property Support:</strong> Manage multiple hotels from one platform\n\n<strong>Proven Results:</strong>\n 95% guest satisfaction improvement\n 40% increase in ancillary revenue\n 30% reduction in front desk calls\n 25% improvement in operational efficiency\n 90% guest adoption rate within 24 hours",
          link: "/products/hospitality-app/",
        },
        "digital menu": {
          title: "Digital Menu Solutions",
          description:
            "Interactive digital menu systems for restaurants and hospitality.",
          summary:
            " <strong>Digital Menu Solutions - Smart Restaurant Technology</strong>\n\n<strong>QR Code Menus:</strong>\n Contactless menu access via smartphone\n Instant updates without reprinting\n Multi-language support\n High-resolution food photography\n Nutritional information and allergen alerts\n Customer reviews and ratings integration\n\n<strong>Interactive Kiosk Ordering:</strong>\n Self-service ordering stations\n Customization options for each item\n Upselling suggestions and combos\n Payment processing integration\n Order tracking and pickup notifications\n Accessibility features for all users\n\n<strong>Revenue Enhancement:</strong>\n Dynamic pricing based on demand\n Promotional campaigns and discounts\n Loyalty program integration\n Analytics on popular items\n Average order value increase of 20%\n\n<strong>Management Features:</strong>\n Real-time menu updates\n Inventory integration\n Multi-location management\n Staff training modules\n Customer feedback collection",
          link: "/products/digital-menu/",
        },
        helpdesk: {
          title: "IT Helpdesk Solutions",
          description:
            "Comprehensive IT support and ticketing system for businesses.",
          summary:
            " <strong>IT Helpdesk Solutions - Complete Support Platform</strong>\n\n<strong>Multi-Channel Support:</strong>\n Email, phone, chat, and web portal\n Self-service knowledge base\n Mobile app for technicians\n Social media integration\n Video remote assistance\n SMS notifications and updates\n\n<strong>Ticket Management:</strong>\n Automated ticket routing\n Priority and severity levels\n SLA tracking and escalation\n Asset and configuration management\n Change management workflows\n Problem and incident correlation\n\n<strong>Analytics & Reporting:</strong>\n Performance dashboards\n First call resolution rates\n Customer satisfaction surveys\n Technician productivity metrics\n Trend analysis and forecasting\n Custom reporting tools\n\n<strong>Automation Features:</strong>\n AI-powered ticket categorization\n Automated responses for common issues\n Workflow automation\n Integration with monitoring tools\n Predictive maintenance alerts\n\n<strong>Result:</strong> 50% reduction in resolution time and 95% customer satisfaction rating.",
          link: "/products/helpdesk/",
        },
        "id scanning": {
          title: "ID Scanning Solutions",
          description:
            "Advanced ID verification and scanning technology for secure access control.",
          summary:
            " <strong>ID Scanning Solutions - Secure Identity Verification</strong>\n\n<strong>Advanced Scanning Technology:</strong>\n Multi-format ID support (passport, driver's license, national ID)\n Barcode and magnetic stripe reading\n RFID and NFC capability\n Biometric verification (fingerprint, facial recognition)\n Document authenticity verification\n Real-time fraud detection\n\n<strong>Applications:</strong>\n <strong>Hotels:</strong> Guest check-in and registration\n <strong>Retail:</strong> Age verification and customer onboarding\n <strong>Healthcare:</strong> Patient identification and insurance verification\n <strong>Finance:</strong> KYC compliance and account opening\n <strong>Events:</strong> Ticket validation and access control\n <strong>Government:</strong> Citizen services and document processing\n\n<strong>Security Features:</strong>\n End-to-end encryption\n Secure data storage and transmission\n Compliance with data protection regulations\n Audit trails and logging\n Multi-factor authentication\n Role-based access control\n\n<strong>Data Management:</strong>\n Visitor management system\n Guest history and preferences\n Blacklist and watchlist checking\n Automated reporting and analytics\n Integration with existing systems\n Cloud and on-premise options\n\n<strong>Performance:</strong>\n Sub-second scanning and verification\n 99.9% accuracy rate\n Offline capability for internet outages\n Mobile and desktop applications\n API for custom integrations",
          link: "/products/id-scanning/",
        },
      },
      solutions: {
        "digital transformation": {
          title: "Digital Transformation",
          description:
            "Comprehensive digital transformation services to modernize your business.",
          summary:
            " <strong>Digital Transformation</strong>\n\n<strong>Transformation Areas:</strong>\n Process digitization and automation\n Cloud-first strategy implementation\n Data analytics and insights\n Customer experience enhancement\n Employee productivity tools\n Digital culture development\n\n<strong>Our Methodology:</strong>\n Current state assessment\n Future state vision planning\n Roadmap development\n Phased implementation\n Change management\n Continuous optimization\n\n<strong>Outcomes:</strong> Increased efficiency, reduced costs, improved customer satisfaction, and competitive advantage.",
          link: "/solutions/digital-transformation/",
        },
        "web development": {
          title: "Web & Mobile Solutions",
          description:
            "Custom web and mobile application development services.",
          summary:
            " <strong>Web & Mobile Solutions</strong>\n\n<strong>Development Services:</strong>\n Custom web application development\n Mobile app development (iOS/Android)\n E-commerce platform creation\n Progressive web applications (PWA)\n API development and integration\n UI/UX design and optimization\n\n<strong>Technologies Used:</strong>\n Modern frameworks (React, Angular, Vue)\n Cross-platform mobile development\n Cloud-native architecture\n Responsive design principles\n SEO optimization\n\n<strong>Deliverables:</strong> Scalable, secure, and user-friendly applications that drive business growth.",
          link: "/solutions/web-mobile/",
        },
        hospitality: {
          title: "Hospitality Solutions",
          description: "Specialized IT solutions for the hospitality industry.",
          summary:
            " <strong>Hospitality Solutions</strong>\n\n<strong>Comprehensive Suite:</strong>\n Property management systems\n Guest experience platforms\n Revenue management tools\n Housekeeping automation\n Guest Wi-Fi and connectivity\n Point-of-sale systems\n\n<strong>Guest Benefits:</strong>\n Seamless check-in/out experience\n Personalized service delivery\n High-speed internet access\n Mobile concierge services\n Digital amenities\n\n<strong>Hotel Benefits:</strong> Operational efficiency, increased revenue, improved guest satisfaction, and competitive differentiation.",
          link: "/solutions/hospitality/",
        },
        "network solutions": {
          title: "Network Solutions",
          description:
            "Enterprise network design, implementation, and management.",
          summary:
            " <strong>Network Solutions</strong>\n\n<strong>Network Services:</strong>\n Network design and architecture\n LAN/WAN implementation\n Wireless network deployment\n Network security implementation\n Network monitoring and management\n Disaster recovery planning\n\n<strong>Key Features:</strong>\n High-performance connectivity\n Scalable infrastructure\n Redundancy and failover\n Security-first approach\n 24/7 monitoring\n\n<strong>Benefits:</strong> Reliable connectivity, enhanced security, improved performance, and reduced downtime.",
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

    // Scroll to show the top of the new message
    const newMessage = document.getElementById(`msg-${messageId}`);
    if (newMessage) {
      // Small delay to ensure the message is rendered
      setTimeout(() => {
        newMessage.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
    }

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
    const typingElement = document.getElementById("chatbot-typing");
    typingElement.style.display = "flex";

    // Scroll to show the typing indicator
    setTimeout(() => {
      typingElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 100);
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

    // First check for exact phrase matches to avoid spell correction conflicts
    if (lowerMessage.includes("tell me about your services") || 
        lowerMessage.includes("about your services") ||
        lowerMessage.includes("our services")) {
      return this.getServicesInfo(lowerMessage);
    }

    if (lowerMessage.includes("what products do you offer") || 
        lowerMessage.includes("products do you offer") ||
        lowerMessage.includes("your products")) {
      return this.getProductsInfo(lowerMessage);
    }

    if (lowerMessage.includes("how can i contact you") || 
        lowerMessage.includes("contact you") ||
        lowerMessage.includes("contact information")) {
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

    // Greeting patterns with spell correction
    const greetingMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "greetings",
      "howdy",
    ]);
    if (greetingMatch.matched) {
      const response = {
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

      if (greetingMatch.corrected) {
        return this.getCorrectedResponse(
          greetingMatch.original,
          greetingMatch.correction,
          () => response
        );
      }
      return response;
    }

    // Services inquiries with spell correction
    const servicesMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "service",
      "services",
      "support",
      "it support",
      "help",
      "assistance",
      "solutions",
    ]);
    if (servicesMatch.matched) {
      if (servicesMatch.corrected) {
        return this.getCorrectedResponse(
          servicesMatch.original,
          servicesMatch.correction,
          () => this.getServicesInfo(lowerMessage)
        );
      }
      return this.getServicesInfo(lowerMessage);
    }

    // Products inquiries with spell correction
    const productsMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "product",
      "products",
      "solution",
      "software",
      "applications",
      "tools",
    ]);
    if (productsMatch.matched) {
      if (productsMatch.corrected) {
        return this.getCorrectedResponse(
          productsMatch.original,
          productsMatch.correction,
          () => this.getProductsInfo(lowerMessage)
        );
      }
      return this.getProductsInfo(lowerMessage);
    }

    // Specific service inquiries with spell correction
    const cloudMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "cloud",
      "azure",
      "microsoft",
      "office 365",
      "m365",
      "cloud services",
    ]);
    if (cloudMatch.matched) {
      if (cloudMatch.corrected) {
        return this.getCorrectedResponse(
          cloudMatch.original,
          cloudMatch.correction,
          () => this.getCloudServicesInfo()
        );
      }
      return this.getCloudServicesInfo();
    }

    const securityMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "security",
      "cybersecurity",
      "cyber security",
      "protection",
      "firewall",
      "antivirus",
    ]);
    if (securityMatch.matched) {
      if (securityMatch.corrected) {
        return this.getCorrectedResponse(
          securityMatch.original,
          securityMatch.correction,
          () => this.getSecurityInfo()
        );
      }
      return this.getSecurityInfo();
    }

    const iptvMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "iptv",
      "tv",
      "streaming",
      "media",
      "television",
      "entertainment",
    ]);
    if (iptvMatch.matched) {
      if (iptvMatch.corrected) {
        return this.getCorrectedResponse(
          iptvMatch.original,
          iptvMatch.correction,
          () => this.getIPTVInfo()
        );
      }
      return this.getIPTVInfo();
    }

    // Digital Signage inquiries with spell correction
    const signageMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "digital signage",
      "signage",
      "display",
      "screen",
      "kiosk",
      "interactive display",
      "digital display",
    ]);
    if (signageMatch.matched) {
      if (signageMatch.corrected) {
        return this.getCorrectedResponse(
          signageMatch.original,
          signageMatch.correction,
          () => this.getDigitalSignageInfo()
        );
      }
      return this.getDigitalSignageInfo();
    }

    // CRM inquiries with spell correction
    const crmMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "crm",
      "customer management",
      "sales pipeline",
      "lead management",
      "customer relationship",
      "sales management",
    ]);
    if (crmMatch.matched) {
      if (crmMatch.corrected) {
        return this.getCorrectedResponse(
          crmMatch.original,
          crmMatch.correction,
          () => this.getCRMInfo()
        );
      }
      return this.getCRMInfo();
    }

    // ERP inquiries with spell correction
    const erpMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "erp",
      "garment",
      "manufacturing",
      "textile",
      "production planning",
      "inventory management",
      "enterprise resource",
    ]);
    if (erpMatch.matched) {
      if (erpMatch.corrected) {
        return this.getCorrectedResponse(
          erpMatch.original,
          erpMatch.correction,
          () => this.getERPInfo()
        );
      }
      return this.getERPInfo();
    }

    // Hospitality App inquiries with spell correction
    const hospitalityMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "hospitality app",
      "hotel app",
      "guest app",
      "mobile check-in",
      "room service",
      "guest services",
      "hospitality",
    ]);
    if (hospitalityMatch.matched) {
      if (hospitalityMatch.corrected) {
        return this.getCorrectedResponse(
          hospitalityMatch.original,
          hospitalityMatch.correction,
          () => this.getHospitalityAppInfo()
        );
      }
      return this.getHospitalityAppInfo();
    }

    // AI Assistant inquiries with spell correction
    const aiMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "ai assistant",
      "ai helper",
      "artificial intelligence",
      "chatbot",
      "automation",
      "virtual assistant",
      "ai",
    ]);
    if (aiMatch.matched) {
      if (aiMatch.corrected) {
        return this.getCorrectedResponse(
          aiMatch.original,
          aiMatch.correction,
          () => this.getAIHelperInfo()
        );
      }
      return this.getAIHelperInfo();
    }

    // Digital Menu inquiries with spell correction
    const menuMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "digital menu",
      "qr menu",
      "restaurant menu",
      "menu system",
      "contactless menu",
      "menu",
    ]);
    if (menuMatch.matched) {
      if (menuMatch.corrected) {
        return this.getCorrectedResponse(
          menuMatch.original,
          menuMatch.correction,
          () => this.getDigitalMenuInfo()
        );
      }
      return this.getDigitalMenuInfo();
    }

    // Helpdesk inquiries with spell correction
    const helpdeskMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "helpdesk",
      "help desk",
      "ticket system",
      "support system",
      "it support system",
      "ticketing",
    ]);
    if (helpdeskMatch.matched) {
      if (helpdeskMatch.corrected) {
        return this.getCorrectedResponse(
          helpdeskMatch.original,
          helpdeskMatch.correction,
          () => this.getHelpdeskInfo()
        );
      }
      return this.getHelpdeskInfo();
    }

    // ID Scanning inquiries with spell correction
    const idScanMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "id scanning",
      "identity verification",
      "document scanning",
      "access control",
      "security scanning",
      "id verification",
    ]);
    if (idScanMatch.matched) {
      if (idScanMatch.corrected) {
        return this.getCorrectedResponse(
          idScanMatch.original,
          idScanMatch.correction,
          () => this.getIDScanningInfo()
        );
      }
      return this.getIDScanningInfo();
    }

    // Contact inquiries with spell correction
    const contactMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "contact",
      "phone",
      "email",
      "address",
      "location",
      "reach",
      "call",
      "communicate",
    ]);
    if (contactMatch.matched) {
      const response = {
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

      if (contactMatch.corrected) {
        return this.getCorrectedResponse(
          contactMatch.original,
          contactMatch.correction,
          () => response
        );
      }
      return response;
    }

    // About company with spell correction
    const aboutMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "about",
      "company",
      "who are you",
      "what do you do",
      "information",
      "details",
    ]);
    if (aboutMatch.matched) {
      const response = {
        text: "ITSthe1 Solutions LLC is a leading provider of IT and Telecom solutions. We specialize in:\n\n<strong>Digital Transformation</strong> - Modernizing business operations\n<strong>Cyber Security</strong> - Advanced protection and compliance\n<strong>Cloud Services</strong> - Secure migration and infrastructure\n<strong>Web & Mobile Applications</strong> - Custom development solutions\n<strong>Hospitality Solutions</strong> - Industry-specific technology\n\nWe serve clients globally across various industries including hospitality, healthcare, and enterprise sectors.",
        options: {
          buttons: [
            { text: "Learn More", action: "link", link: "/about/" },
            { text: "Our Services", action: "services" },
          ],
        },
      };

      if (aboutMatch.corrected) {
        return this.getCorrectedResponse(
          aboutMatch.original,
          aboutMatch.correction,
          () => response
        );
      }
      return response;
    }

    // Pricing inquiries with spell correction
    const pricingMatch = this.matchesPatternWithCorrection(lowerMessage, [
      "price",
      "pricing",
      "cost",
      "how much",
      "quote",
      "rates",
      "fees",
      "charges",
    ]);
    if (pricingMatch.matched) {
      const response = {
        text: "Pricing for our services depends on your specific requirements and business needs. We offer:\n\n<strong>Customized Solutions</strong> - Tailored to your business needs\n<strong>Scalable Pricing Models</strong> - Flexible pricing structures\n<strong>Competitive Rates</strong> - Market-competitive pricing\n<strong>Free Consultations</strong> - Initial assessment at no cost\n\nI'd recommend contacting our team for a personalized quote based on your requirements.",
        options: {
          buttons: [
            { text: "Get Quote", action: "link", link: "/contact/" },
            { text: "Our Services", action: "services" },
          ],
        },
      };

      if (pricingMatch.corrected) {
        return this.getCorrectedResponse(
          pricingMatch.original,
          pricingMatch.correction,
          () => response
        );
      }
      return response;
    }

    // Check for common misspellings before default response
    const commonTerms = [
      "help",
      "info",
      "information",
      "support",
      "service",
      "services",
      "product",
      "products",
      "solution",
      "solutions",
      "price",
      "pricing",
      "contact",
      "about",
      "company",
      "cloud",
      "security",
      "ai",
      "iptv",
      "crm",
      "erp",
      "digital",
      "hospitality",
      "menu",
      "helpdesk",
    ];

    const words = lowerMessage.split(/\s+/);
    let foundSuggestion = false;

    for (const word of words) {
      const match = this.findBestMatch(word, commonTerms);
      if (match && match.score >= 0.6) {
        // Get additional similar terms for better suggestions
        const similarTerms = this.suggestSimilarTerms(lowerMessage);
        const suggestionText =
          similarTerms.length > 0
            ? `You might also be interested in: ${similarTerms.join(", ")}`
            : "";

        // Found a potential misspelling, provide helpful suggestion
        return {
          text: `📝 I think you might be looking for information about "<strong>${match.term}</strong>". ${suggestionText}\n\nHere's what I can help you with:\n\n✅ IT Services & Support\n✅ Cloud Solutions\n✅ Cybersecurity\n✅ Products & Software\n✅ Contact Information\n\nPlease try asking about any of these topics, or click a suggestion below:`,
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
    }

    // Default response with enhanced suggestions
    const inputSuggestions = this.suggestSimilarTerms(lowerMessage);
    const suggestionText =
      inputSuggestions.length > 0
        ? `\n\n💡 <em>Did you mean: ${inputSuggestions.join(", ")}?</em>`
        : "";

    return {
      text: `I'd be happy to help you with information about ITSthe1's services and solutions! I can assist with:\n\n✅ IT Services & Support\n✅ Cloud Solutions\n✅ Cybersecurity\n✅ Products & Software\n✅ Contact Information${suggestionText}\n\nWhat specific topic would you like to explore?`,
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

  // Fuzzy string matching for spell correction
  calculateSimilarity(str1, str2) {
    // Convert to lowercase for comparison
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Exact match
    if (str1 === str2) return 1;

    // Calculate Levenshtein distance
    const matrix = [];
    for (let i = 0; i <= str1.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str2.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          );
        }
      }
    }

    const distance = matrix[str1.length][str2.length];
    const maxLength = Math.max(str1.length, str2.length);
    return (maxLength - distance) / maxLength;
  }

  // Find best match for a given input
  findBestMatch(input, searchTerms) {
    let bestMatch = null;
    let bestScore = 0;
    const threshold = 0.7; // Increased threshold for more accurate matching

    for (const term of searchTerms) {
      const score = this.calculateSimilarity(input, term);
      if (score > bestScore && score >= threshold) {
        bestScore = score;
        bestMatch = { term, score };
      }
    }

    return bestMatch;
  }

  // Enhanced pattern matching with spell correction
  matchesPatternWithCorrection(message, patterns) {
    // First try exact matching
    if (this.matchesPattern(message, patterns)) {
      return { matched: true, corrected: false };
    }

    // Try fuzzy matching for each word in the message
    const words = message.toLowerCase().split(/\s+/);

    for (const word of words) {
      const match = this.findBestMatch(word, patterns);
      if (match) {
        return {
          matched: true,
          corrected: true,
          original: word,
          correction: match.term,
          confidence: match.score,
        };
      }
    }

    return { matched: false, corrected: false };
  }

  // Get corrected response with user feedback
  getCorrectedResponse(originalInput, correction, responseFunction) {
    const response = responseFunction();

    // Add correction notice to the response
    const correctionNotice = `<div class="spell-correction">
      <small>📝 I think you meant "<strong>${correction}</strong>" instead of "${originalInput}". Here's the information:</small>
    </div><br>`;

    return {
      ...response,
      text: correctionNotice + response.text,
    };
  }

  // Enhanced method to detect and suggest similar terms
  suggestSimilarTerms(input) {
    const allTerms = [
      // Services
      "cloud services",
      "cybersecurity",
      "it support",
      "microsoft 365",
      "azure",
      "it consultancy",
      "security",
      "backup",
      "network",
      "infrastructure",

      // Products
      "iptv",
      "digital signage",
      "crm",
      "erp",
      "ai assistant",
      "hospitality app",
      "digital menu",
      "helpdesk",
      "id scanning",
      "pos system",

      // General
      "services",
      "products",
      "contact",
      "about",
      "pricing",
      "quote",
      "help",
      "support",
      "information",
      "solutions",
    ];

    const suggestions = [];
    const words = input.toLowerCase().split(/\s+/);

    for (const word of words) {
      for (const term of allTerms) {
        const similarity = this.calculateSimilarity(word, term);
        if (similarity >= 0.5 && similarity < 1.0) {
          suggestions.push({ term, similarity });
        }
      }
    }

    // Sort by similarity and return top 3
    return suggestions
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3)
      .map((s) => s.term);
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
        suggestions: [
          "CRM Solutions",
          "ERP Systems",
          "Security Products",
          "All Products",
        ],
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
          {
            text: "Signage Details",
            action: "link",
            link: "/products/digital-signage/",
          },
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
          {
            text: "ERP Details",
            action: "link",
            link: "/products/erp-garment/",
          },
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
          {
            text: "App Details",
            action: "link",
            link: "/products/hospitality-app/",
          },
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
          {
            text: "Menu Details",
            action: "link",
            link: "/products/digital-menu/",
          },
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
          {
            text: "Helpdesk Details",
            action: "link",
            link: "/products/helpdesk/",
          },
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
          {
            text: "Scanning Details",
            action: "link",
            link: "/products/id-scanning/",
          },
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
          suggestions: ["More Information", "Contact Us", "Other Services"],
        },
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
    for (const [key, solution] of Object.entries(
      this.knowledgeBase.solutions
    )) {
      if (solution.link === link) {
        return solution;
      }
    }

    return null;
  }

  // Method to open page content inline within the chatbot
  openPageInline(link) {
    // Extract page title from link for better header
    const pageTitle = this.getPageTitleFromLink(link);

    // Create an enhanced iframe to display the page content
    const iframeHTML = `
      <div class="inline-page-container">
        <div class="inline-page-header">
          <div class="page-info">
            <span class="inline-page-title">${pageTitle}</span>
          </div>
          <div class="header-controls">
            <button class="refresh-page" onclick="this.closest('.inline-page-container').querySelector('.inline-page-frame').src = this.closest('.inline-page-container').querySelector('.inline-page-frame').src" title="Refresh Page">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="m3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </button>
            <button class="expand-page" onclick="window.open('${link}', '_blank')" title="Open in New Tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15,3 21,3 21,9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
            <button class="close-inline-page" onclick="this.closest('.message').remove()" title="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="iframe-container">
          <iframe 
            src="${link}" 
            class="inline-page-frame"
            frameborder="0"
            allowfullscreen
            sandbox="allow-same-origin allow-scripts allow-forms allow-links allow-popups"
            onload="this.style.opacity = '1'; this.parentElement.querySelector('.iframe-loading').style.display = 'none'; this.parentElement.querySelector('.iframe-progress').style.width = '100%';"
            onerror="this.parentElement.innerHTML = '<div class=\\"iframe-error\\"><div class=\\"error-icon\\">⚠️</div><div class=\\"error-text\\">Unable to load page content</div><div class=\\"error-subtitle\\">This page may not allow embedding</div><button onclick=\\"window.open(\\&quot;${link}\\&quot;, \\&quot;_blank\\&quot;)\\" class=\\"error-button\\">Open in New Tab</button></div>'">
          </iframe>
          <div class="iframe-loading">
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading page content...</div>
            <div class="iframe-progress"></div>
          </div>
        </div>
      </div>
    `;

    // Add the enhanced iframe as a message
    this.addMessage(iframeHTML, "bot", {
      buttons: [
        { text: "📱 Mobile View", action: "mobileView", link: link },
        { text: "❌ Close", action: "closeInline" },
      ],
    });

    // Add enhanced CSS for the inline page if not already added
    if (!document.getElementById("chatbot-inline-styles")) {
      const style = document.createElement("style");
      style.id = "chatbot-inline-styles";
      style.textContent = `
        .inline-page-container {
          width: 100%;
          max-width: 650px;
          height: 450px;
          border: 1px solid #e1e5e9;
          border-radius: 12px;
          overflow: hidden;
          margin: 15px 0;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .inline-page-container:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        
        .inline-page-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .page-info {
          flex: 1;
          min-width: 0;
        }
        
        .inline-page-title {
          font-weight: 600;
          font-size: 14px;
          display: block;
          margin-bottom: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .header-controls {
          display: flex;
          gap: 8px;
          margin-left: 12px;
        }
        
        .header-controls button {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .header-controls button:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-1px);
        }
        
        .iframe-container {
          position: relative;
          height: calc(100% - 60px);
          background: #f8f9fa;
        }
        
        .inline-page-frame {
          width: 100%;
          height: 100%;
          border: none;
          opacity: 0;
          transition: opacity 0.5s ease;
          background: white;
        }
        
        .iframe-loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          z-index: 10;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e3e6ea;
          border-top: 3px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .loading-text {
          color: #6c757d;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        
        .iframe-progress {
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
          transition: width 0.3s ease;
          animation: progress 2s ease-in-out;
        }
        
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 90%; }
        }
        
        .iframe-error {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          background: #f8f9fa;
          z-index: 15;
        }
        
        .error-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .error-text {
          color: #dc3545;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .error-subtitle {
          color: #6c757d;
          font-size: 14px;
          margin-bottom: 20px;
        }
        
        .error-button {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .error-button:hover {
          background: #5a67d8;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .inline-page-container {
            max-width: 100%;
            height: 350px;
            margin: 10px 0;
          }
          
          .inline-page-header {
            padding: 10px 12px;
          }
          
          .inline-page-title {
            font-size: 13px;
          }
          
          .inline-page-url {
            font-size: 10px;
          }
          
          .header-controls {
            gap: 6px;
          }
          
          .header-controls button {
            padding: 5px;
          }
        }
        
        @media (max-width: 480px) {
          .inline-page-container {
            height: 300px;
          }
          
          .page-info {
            max-width: 60%;
          }
        }
        
        /* Mobile view simulation */
        .inline-page-container.mobile-view {
          max-width: 375px;
          height: 500px;
          margin: 15px auto;
        }
        
        .inline-page-container.mobile-view .iframe-container {
          background: #000;
          padding: 10px;
          border-radius: 0 0 20px 20px;
        }
        
        .inline-page-container.mobile-view .inline-page-frame {
          border-radius: 15px;
          border: 2px solid #333;
        }
        
        /* Spell correction styling */
        .spell-correction {
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          border-left: 4px solid #2196f3;
          padding: 8px 12px;
          margin: 8px 0;
          border-radius: 6px;
          font-size: 13px;
          color: #1565c0;
        }
        
        .spell-correction strong {
          color: #0d47a1;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Helper method to extract page title from link
  getPageTitleFromLink(link) {
    const linkParts = link.split("/").filter((part) => part);
    const lastPart =
      linkParts[linkParts.length - 1] ||
      linkParts[linkParts.length - 2] ||
      "Page";

    // Convert kebab-case to title case
    return lastPart
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Helper method to format URL for display
  formatURL(link) {
    try {
      const url = new URL(link, window.location.origin);
      return url.pathname;
    } catch {
      return link.length > 40 ? link.substring(0, 37) + "..." : link;
    }
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
              // Add "Open Page" button to the detailed info
              const detailedInfoWithButton = {
                ...detailedInfo,
                options: {
                  ...detailedInfo.options,
                  buttons: [
                    ...(detailedInfo.options?.buttons || []),
                    { text: "Open Page", action: "openPage", link: link },
                  ],
                },
              };
              window.chatbotInstance.addMessage(
                detailedInfoWithButton.text,
                "bot",
                detailedInfoWithButton.options
              );
            }, 1000);
          }
        }
      }

      if (action === "openPage" && link) {
        // Handle opening page content inline
        if (window.chatbotInstance) {
          window.chatbotInstance.showTyping();
          setTimeout(() => {
            window.chatbotInstance.hideTyping();
            window.chatbotInstance.openPageInline(link);
          }, 500);
        }
      }

      if (action === "closeInline") {
        // Handle closing inline content
        const messageElement = e.target.closest(".message");
        if (messageElement) {
          messageElement.remove();
        }
      }

      if (action === "mobileView" && link) {
        // Handle mobile view toggle
        const iframe = e.target
          .closest(".message")
          .querySelector(".inline-page-frame");
        if (iframe) {
          const container = iframe.closest(".inline-page-container");
          container.classList.toggle("mobile-view");
          e.target.textContent = container.classList.contains("mobile-view")
            ? "🖥️ Desktop View"
            : "📱 Mobile View";
        }
      }

      if (action === "link" && !window.chatbotInstance.getDetailedInfo(link)) {
        // For links that don't have detailed info, open in new tab
        window.open(link, "_blank");
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
