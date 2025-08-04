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
                'it support': {
                    title: 'IT Support & Outsourcing',
                    description: 'Comprehensive 24/7 IT support services to keep your business running smoothly.',
                    link: '/services/it-support-outsourcing/'
                },
                'cloud services': {
                    title: 'Cloud & Hybrid Solutions',
                    description: 'Secure cloud migration and hybrid infrastructure solutions.',
                    link: '/services/cloud-hybrid/'
                },
                'cybersecurity': {
                    title: 'IT Security & Compliance',
                    description: 'Advanced cybersecurity solutions to protect your business.',
                    link: '/services/it-security-compliance/'
                },
                'microsoft 365': {
                    title: 'Microsoft 365 Solutions',
                    description: 'Complete Microsoft 365 implementation and management services.',
                    link: '/services/microsoft-365/'
                },
                'azure': {
                    title: 'Microsoft Azure Services',
                    description: 'Expert Azure cloud services and migration solutions.',
                    link: '/services/microsoft-azure/'
                },
                'consulting': {
                    title: 'IT Consultancy Services',
                    description: 'Strategic IT consulting to optimize your business operations.',
                    link: '/services/it-consultancy/'
                }
            },
            products: {
                'iptv': {
                    title: 'IPTV Solutions',
                    description: 'Advanced IPTV and streaming solutions for hospitality and enterprise.',
                    link: '/products/iptv/'
                },
                'digital signage': {
                    title: 'Digital Signage',
                    description: 'Interactive digital signage solutions for modern businesses.',
                    link: '/products/digital-signage/'
                },
                'ai helper': {
                    title: 'AI Helper Assistant',
                    description: 'AI-powered virtual assistant for business automation.',
                    link: '/products/ai-helper/'
                },
                'crm': {
                    title: 'CRM for SME',
                    description: 'Customer relationship management solutions for small and medium enterprises.',
                    link: '/products/crm-sme/'
                },
                'erp': {
                    title: 'ERP for Garment Industry',
                    description: 'Specialized ERP solutions for garment manufacturing businesses.',
                    link: '/products/erp-garment/'
                },
                'hospitality app': {
                    title: 'Hospitality Mobile App',
                    description: 'Mobile applications designed specifically for the hospitality industry.',
                    link: '/products/hospitality-app/'
                }
            },
            solutions: {
                'digital transformation': {
                    title: 'Digital Transformation',
                    description: 'Comprehensive digital transformation services to modernize your business.',
                    link: '/solutions/digital-transformation/'
                },
                'web development': {
                    title: 'Web & Mobile Solutions',
                    description: 'Custom web and mobile application development services.',
                    link: '/solutions/web-mobile/'
                },
                'hospitality': {
                    title: 'Hospitality Solutions',
                    description: 'Specialized IT solutions for the hospitality industry.',
                    link: '/solutions/hospitality/'
                },
                'network solutions': {
                    title: 'Network Solutions',
                    description: 'Enterprise network design, implementation, and management.',
                    link: '/solutions/network-solutions/'
                }
            },
            company: {
                about: 'ITSthe1 Solutions LLC is a leading provider of IT and Telecom solutions, specializing in Digital Transformation, Cyber Security, Cloud Services, Web & Mobile applications, and Hospitality Solutions.',
                contact: 'You can contact us through our contact page or reach out directly for personalized assistance.',
                location: 'We serve clients globally with expertise in various industries including hospitality, healthcare, and enterprise sectors.'
            }
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
                            <div class="toggle-title">ITSthe1 Assistant</div>
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
                            <div class="avatar-fallback">IT</div>
                        </div>
                        <div class="chatbot-info">
                            <h4>ITSthe1 Assistant</h4>
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
                        <span class="typing-text">ITSthe1 Assistant is typing...</span>
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
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    bindEvents() {
        const toggle = document.getElementById('chatbot-toggle');
        const minimize = document.getElementById('chatbot-minimize');
        const input = document.getElementById('chatbot-input');
        const sendButton = document.getElementById('chatbot-send');
        const quickActions = document.querySelectorAll('.quick-action');
        
        toggle.addEventListener('click', () => this.toggleChat());
        minimize.addEventListener('click', () => this.toggleChat());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        sendButton.addEventListener('click', () => this.sendMessage());
        
        quickActions.forEach(action => {
            action.addEventListener('click', (e) => {
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
        const container = document.getElementById('itsthe1-chatbot');
        const notification = document.getElementById('chatbot-notification');
        
        container.classList.toggle('active', this.isOpen);
        
        if (this.isOpen) {
            notification.style.display = 'none';
            document.getElementById('chatbot-input').focus();
        }
    }
    
    showNotification() {
        if (!this.isOpen) {
            const notification = document.getElementById('chatbot-notification');
            notification.style.display = 'block';
            
            setTimeout(() => {
                if (!this.isOpen) {
                    notification.style.display = 'none';
                }
            }, 8000);
        }
    }
    
    addWelcomeMessage() {
        const welcomeMessage = "Hi! I'm your ITSthe1 virtual assistant. I can help you learn about our services, products, and solutions. How can I assist you today?";
        this.addMessage(welcomeMessage, 'bot');
    }
    
    addMessage(content, sender, options = {}) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageId = this.generateId();
        
        const messageHTML = `
            <div class="message ${sender}-message" id="msg-${messageId}">
                ${sender === 'bot' ? '<div class="message-avatar"><div class="avatar-icon">IT</div></div>' : ''}
                <div class="message-content">
                    <div class="message-text">${content}</div>
                    ${options.buttons ? this.createButtons(options.buttons) : ''}
                    ${options.suggestions ? this.createSuggestions(options.suggestions) : ''}
                    <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.messages.push({
            id: messageId,
            content,
            sender,
            timestamp: new Date(),
            options
        });
    }
    
    createButtons(buttons) {
        const buttonsHTML = buttons.map(button => 
            `<button class="message-button" data-action="${button.action}" data-link="${button.link || ''}">${button.text}</button>`
        ).join('');
        
        return `<div class="message-buttons">${buttonsHTML}</div>`;
    }
    
    createSuggestions(suggestions) {
        const suggestionsHTML = suggestions.map(suggestion => 
            `<button class="suggestion-chip" data-suggestion="${suggestion}">${suggestion}</button>`
        ).join('');
        
        return `<div class="suggestions">${suggestionsHTML}</div>`;
    }
    
    showTyping() {
        this.isTyping = true;
        document.getElementById('chatbot-typing').style.display = 'flex';
        document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
    }
    
    hideTyping() {
        this.isTyping = false;
        document.getElementById('chatbot-typing').style.display = 'none';
    }
    
    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        this.showTyping();
        
        // Simulate AI processing delay
        setTimeout(() => {
            const response = this.processMessage(message);
            this.hideTyping();
            this.addMessage(response.text, 'bot', response.options);
        }, 1000 + Math.random() * 1000);
    }
    
    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Greeting patterns
        if (this.matchesPattern(lowerMessage, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
            return {
                text: "Hello! Welcome to ITSthe1 Solutions. I'm here to help you learn about our IT services, products, and solutions. What would you like to know about?",
                options: {
                    suggestions: ['Our Services', 'Products', 'Contact Information', 'About ITSthe1']
                }
            };
        }
        
        // Services inquiries
        if (this.matchesPattern(lowerMessage, ['service', 'services', 'support', 'it support', 'help'])) {
            return this.getServicesInfo(lowerMessage);
        }
        
        // Products inquiries
        if (this.matchesPattern(lowerMessage, ['product', 'products', 'solution', 'software'])) {
            return this.getProductsInfo(lowerMessage);
        }
        
        // Specific service inquiries
        if (this.matchesPattern(lowerMessage, ['cloud', 'azure', 'microsoft', 'office 365', 'm365'])) {
            return this.getCloudServicesInfo();
        }
        
        if (this.matchesPattern(lowerMessage, ['security', 'cybersecurity', 'cyber security', 'protection'])) {
            return this.getSecurityInfo();
        }
        
        if (this.matchesPattern(lowerMessage, ['iptv', 'tv', 'streaming', 'media'])) {
            return this.getIPTVInfo();
        }
        
        // Contact inquiries
        if (this.matchesPattern(lowerMessage, ['contact', 'phone', 'email', 'address', 'location', 'reach'])) {
            return {
                text: "You can contact ITSthe1 Solutions through several ways:\n\n<strong>Email:</strong> sales@itsthe1.com - Send us your inquiries\n<strong>Phone:</strong> +971 55 220 2171 - Call us for immediate assistance\n<strong>WhatsApp:</strong> Chat with us directly for quick answers\n\nWould you like me to help you with anything specific about our services?",
                options: {
                    buttons: [
                        { text: 'Send Email', action: 'link', link: 'mailto:sales@itsthe1.com' },
                        { text: 'Call Now', action: 'link', link: 'tel:+971552202171' },
                        { text: 'WhatsApp Chat', action: 'link', link: 'https://wa.me/971552202171' },
                        { text: 'Contact Page', action: 'link', link: '/contact/' }
                    ]
                }
            };
        }
        
        // About company
        if (this.matchesPattern(lowerMessage, ['about', 'company', 'who are you', 'what do you do'])) {
            return {
                text: "ITSthe1 Solutions LLC is a leading provider of IT and Telecom solutions. We specialize in:\n\n<strong>Digital Transformation</strong> - Modernizing business operations\n<strong>Cyber Security</strong> - Advanced protection and compliance\n<strong>Cloud Services</strong> - Secure migration and infrastructure\n<strong>Web & Mobile Applications</strong> - Custom development solutions\n<strong>Hospitality Solutions</strong> - Industry-specific technology\n\nWe serve clients globally across various industries including hospitality, healthcare, and enterprise sectors.",
                options: {
                    buttons: [
                        { text: 'Learn More', action: 'link', link: '/about/' },
                        { text: 'Our Services', action: 'services' }
                    ]
                }
            };
        }
        
        // Pricing inquiries
        if (this.matchesPattern(lowerMessage, ['price', 'pricing', 'cost', 'how much', 'quote'])) {
            return {
                text: "Pricing for our services depends on your specific requirements and business needs. We offer:\n\n<strong>Customized Solutions</strong> - Tailored to your business needs\n<strong>Scalable Pricing Models</strong> - Flexible pricing structures\n<strong>Competitive Rates</strong> - Market-competitive pricing\n<strong>Free Consultations</strong> - Initial assessment at no cost\n\nI'd recommend contacting our team for a personalized quote based on your requirements.",
                options: {
                    buttons: [
                        { text: 'Get Quote', action: 'link', link: '/contact/' },
                        { text: 'Our Services', action: 'services' }
                    ]
                }
            };
        }
        
        // Default response
        return {
            text: "I'd be happy to help you with information about ITSthe1's services and solutions! I can assist with:\n\n• IT Services & Support\n• Cloud Solutions\n• Cybersecurity\n• Products & Software\n• Contact Information\n\nWhat specific topic would you like to explore?",
            options: {
                suggestions: ['IT Services', 'Cloud Solutions', 'Cybersecurity', 'Products', 'Contact Us']
            }
        };
    }
    
    matchesPattern(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    }
    
    getServicesInfo(message) {
        const services = [
            "<strong>IT Support & Outsourcing</strong> - 24/7 comprehensive IT support with proactive monitoring",
            "<strong>Cloud & Hybrid Solutions</strong> - Secure cloud migration services and infrastructure", 
            "<strong>IT Security & Compliance</strong> - Advanced cybersecurity protection and compliance management",
            "<strong>Microsoft 365 & Azure</strong> - Complete Microsoft solutions for productivity and cloud services",
            "<strong>IT Consultancy</strong> - Strategic technology consulting and digital transformation planning",
            "<strong>Co-managed IT Services</strong> - Flexible IT management partnership with your team"
        ];
        
        return {
            text: `Here are our main IT services:\n\n${services.join('\n')}\n\nWhich service interests you most?`,
            options: {
                buttons: [
                    { text: 'IT Support', action: 'link', link: '/services/it-support-outsourcing/' },
                    { text: 'Cloud Services', action: 'link', link: '/services/cloud-hybrid/' },
                    { text: 'Cybersecurity', action: 'link', link: '/services/it-security-compliance/' }
                ],
                suggestions: ['Microsoft 365', 'IT Consulting', 'Learn More']
            }
        };
    }
    
    getProductsInfo(message) {
        const products = [
            "<strong>IPTV Solutions</strong> - Advanced streaming platform for hospitality and enterprise",
            "<strong>Digital Signage</strong> - Interactive digital display solutions for modern businesses",
            "<strong>AI Helper Assistant</strong> - AI-powered business automation for enhanced efficiency",
            "<strong>CRM for SME</strong> - Customer relationship management for small and medium enterprises",
            "<strong>ERP for Garment Industry</strong> - Specialized manufacturing ERP for textile businesses",
            "<strong>Hospitality Mobile App</strong> - Industry-specific mobile applications for guest experiences"
        ];
        
        return {
            text: `Our innovative products include:\n\n${products.join('\n')}\n\nWhich product would you like to know more about?`,
            options: {
                buttons: [
                    { text: 'IPTV Solutions', action: 'link', link: '/products/iptv/' },
                    { text: 'Digital Signage', action: 'link', link: '/products/digital-signage/' },
                    { text: 'AI Assistant', action: 'link', link: '/products/ai-helper/' }
                ]
            }
        };
    }
    
    getCloudServicesInfo() {
        return {
            text: "Our Cloud & Microsoft Solutions include:\n\n<strong>Microsoft Azure Services</strong>\n• Cloud migration & management\n• Infrastructure as a Service (IaaS)\n• Platform as a Service (PaaS)\n\n<strong>Microsoft 365</strong>\n• Complete productivity suite\n• Email & collaboration tools\n• Security & compliance\n\n<strong>Hybrid Solutions</strong>\n• On-premises + cloud integration\n• Seamless data synchronization\n• Scalable infrastructure",
            options: {
                buttons: [
                    { text: 'Azure Services', action: 'link', link: '/services/microsoft-azure/' },
                    { text: 'Microsoft 365', action: 'link', link: '/services/microsoft-365/' }
                ]
            }
        };
    }
    
    getSecurityInfo() {
        return {
            text: "Our Cybersecurity & Compliance services:\n\n<strong>Security Solutions</strong>\n• Advanced threat protection\n• Network security monitoring\n• Endpoint security management\n\n<strong>Compliance Services</strong>\n• Regulatory compliance audits\n• Data protection policies\n• Risk assessment & management\n\n<strong>Proactive Protection</strong>\n• 24/7 security monitoring\n• Incident response planning\n• Security awareness training",
            options: {
                buttons: [
                    { text: 'Security Services', action: 'link', link: '/services/it-security-compliance/' },
                    { text: 'Get Assessment', action: 'link', link: '/contact/' }
                ]
            }
        };
    }
    
    getIPTVInfo() {
        return {
            text: "Our IPTV Solutions offer:\n\n<strong>Enterprise IPTV</strong>\n• Custom channel packages\n• Interactive TV services\n• Content management systems\n\n<strong>Hospitality IPTV</strong>\n• Guest entertainment systems\n• Hotel information channels\n• Multi-language support\n\n<strong>Key Features</strong>\n• High-definition streaming\n• Scalable infrastructure\n• 24/7 technical support",
            options: {
                buttons: [
                    { text: 'IPTV Details', action: 'link', link: '/products/iptv/' },
                    { text: 'Hospitality Solutions', action: 'link', link: '/solutions/hospitality/' }
                ]
            }
        };
    }
    
    handleQuickAction(action) {
        const input = document.getElementById('chatbot-input');
        
        switch(action) {
            case 'services':
                input.value = 'Tell me about your services';
                break;
            case 'products':
                input.value = 'What products do you offer?';
                break;
            case 'contact':
                input.value = 'How can I contact you?';
                break;
        }
        
        this.sendMessage();
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure all other scripts are loaded
    setTimeout(() => {
        new ITSthe1Chatbot();
    }, 1000);
    
    // Handle message button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('message-button')) {
            const action = e.target.dataset.action;
            const link = e.target.dataset.link;
            
            if (action === 'link' && link) {
                window.open(link, '_blank');
            }
        }
        
        if (e.target.classList.contains('suggestion-chip')) {
            const suggestion = e.target.dataset.suggestion;
            const input = document.getElementById('chatbot-input');
            if (input) {
                input.value = suggestion;
                input.focus();
            }
        }
    });
});
