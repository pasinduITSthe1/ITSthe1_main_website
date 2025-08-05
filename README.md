# ITSthe1 Solutions LLC - Corporate Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-badge-id/deploy-status)](https://app.netlify.com/sites/your-netlify-site/deploys)
[![Hugo](https://img.shields.io/badge/Hugo-0.148.2-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0.0-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Overview

The official corporate website for **ITSthe1 Solutions LLC**, a leading provider of IT and Telecom solutions specializing in Digital Transformation, Cyber Security, Cloud Services, Web & Mobile applications, and Hospitality Solutions.

**🌐 Live Website:** [https://www.itsthe1.com](https://www.itsthe1.netlify.app)

## 🚀 Features

- **🎨 Modern Design**: Responsive, professional design optimized for all devices
- **⚡ Fast Performance**: Built with Hugo static site generator for optimal speed
- **🔍 SEO Optimized**: Structured data, meta tags, and semantic HTML
- **📱 Mobile First**: Fully responsive design with mobile-first approach
- **🤖 Interactive Chatbot**: AI-powered customer support chatbot
- **📧 Contact Forms**: EmailJS-powered contact forms with spam protection
- **🎯 Business Solutions**: Comprehensive showcase of IT products and services
- **🏨 Industry Focus**: Specialized solutions for hospitality, healthcare, and SMEs

## 🛠️ Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) v0.148.2
- **Theme**: Custom ITSthe1 theme
- **Styling**: CSS3 with custom styling
- **JavaScript**: Vanilla JS for interactions
- **Email Service**: EmailJS for contact forms
- **Deployment**: Netlify with continuous deployment
- **Image Optimization**: Sharp for image processing
- **Package Manager**: npm

## 📁 Project Structure

```
├── archetypes/          # Content templates
├── content/             # Website content (Markdown)
│   ├── products/        # Product pages
│   ├── services/        # Service pages
│   ├── solutions/       # Solution pages
│   ├── about/           # About page
│   └── contact/         # Contact pages
├── data/                # Data files (YAML)
├── docs/                # Documentation
├── public/              # Generated site (auto-generated)
├── static/              # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   ├── images/          # Images and media
│   └── videos/          # Video content
├── themes/itsthe1/      # Custom Hugo theme
├── hugo.toml            # Production configuration
├── hugo.dev.toml        # Development configuration
├── netlify.toml         # Netlify deployment config
└── package.json         # npm dependencies and scripts
```

## 🏃‍♂️ Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) v0.120.0 or higher
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pasinduITSthe1/ITSthe1_main_website.git
   cd ITSthe1_main_website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   hugo server --buildDrafts --watch
   ```

4. **Open in browser**
   - Navigate to `http://localhost:1313`
   - The site will auto-reload on changes

## 📝 Available Scripts

| Script                    | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start development server with drafts |
| `npm run build`           | Build production site                |
| `npm run build:draft`     | Build with draft content             |
| `npm run clean`           | Clean build directory                |
| `npm run optimize-images` | Optimize images using Sharp          |
| `npm run organize-images` | Organize images in directories       |
| `npm run maintenance`     | Run maintenance tasks                |

## 🏗️ Development

### Content Management

Content is organized in the `content/` directory using Markdown files with YAML front matter:

```markdown
---
title: "Page Title"
description: "Page description for SEO"
date: 2024-01-01
draft: false
weight: 10
---

# Page Content

Your markdown content here...
```

### Adding New Content

1. **Create new product/service/solution**:

   ```bash
   hugo new products/new-product.md
   hugo new services/new-service.md
   hugo new solutions/new-solution.md
   ```

2. **Edit the created file** with your content
3. **Set `draft: false`** when ready to publish

### Theme Customization

The custom theme is located in `themes/itsthe1/`. Key directories:

- `layouts/` - HTML templates
- `static/` - Theme-specific static files
- `assets/` - Processed assets (SCSS, JS)

### Configuration

- **Production**: `hugo.toml`
- **Development**: `hugo.dev.toml`
- **Deployment**: `netlify.toml`

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `hugo --minify`
   - Publish directory: `public`
   - Hugo version: `0.148.2`

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy the public/ directory to your hosting provider
```

## 🧪 Testing

### Local Testing

```bash
# Test contact forms
open http://localhost:1313/contact-form.html

# Test email functionality
open http://localhost:1313/email-test.html
```

### Production Testing

- **Performance**: Use [PageSpeed Insights](https://pagespeed.web.dev/)
- **SEO**: Use [SEO Site Checkup](https://seositecheckup.com/)
- **Accessibility**: Use [WAVE](https://wave.webaim.org/)

## 📊 Business Solutions

### Products

- **AI Helper**: Intelligent business automation
- **CRM for SME**: Customer relationship management
- **Digital Menu**: Restaurant digital solutions
- **Digital Signage**: Display management systems
- **ERP for Garment**: Industry-specific ERP
- **Helpdesk**: IT support solutions
- **Hospitality App**: Hotel management systems
- **ID Scanning**: Identity verification
- **IPTV**: Television broadcasting solutions

### Services

- **Cloud & Hybrid Solutions**
- **Co-managed IT Services**
- **Digital Transformation Planning**
- **IT Consultancy**
- **IT Security & Compliance**
- **IT Strategy Development**
- **IT Support Outsourcing**
- **Microsoft 365**
- **Microsoft Azure**

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Content Guidelines

- Use clear, concise language
- Include relevant keywords for SEO
- Optimize images before adding
- Test responsive design
- Validate HTML and accessibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Support

- **Website**: [https://www.itsthe1.net](https://www.itsthe1.com)
- **Email**: [info@itsthe1.com](mailto:info@itsthe1.com)
- **Phone**: +971 4 235 2209
- **Documentation**: See [docs/](docs/) directory

## � Roadmap

- [ ] Implement advanced chatbot features
- [ ] Integrate CMS for easier content management
- [ ] Enhance mobile app showcase
- [ ] Add client portal functionality
- [ ] Implement advanced analytics

## � Acknowledgments

- **Hugo Community** for the excellent static site generator
- **Netlify** for seamless deployment and hosting
- **EmailJS** for contact form functionality
- **Contributors** who help improve this project

---

**Built with ❤️ by ITSthe1 Solutions LLC**

_Transforming businesses through innovative IT and Telecom solutions_

<p align="center"><strong>Developed by Pasindu Dilshan ❤️</strong></p>


