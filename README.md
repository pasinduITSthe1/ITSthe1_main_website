# ITSthe1 Website - Hugo Static Site

Modern, responsive website for ITSthe1 IT & Telecom Solutions built with Hugo static site generator.

![Hugo](https://img.shields.io/badge/Hugo-FF4088?style=for-the-badge&logo=hugo&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Overview

This project is a complete redesign of the ITSthe1 company website using Hugo (GoHugo) to create a modern, clean, and professional online presence while maintaining brand consistency with the original orange color scheme.

## ✨ Features

- ✅ **Modern Design**: Clean, professional layout optimized for user experience  
- ✅ **Responsive**: Fully responsive design that works on all devices  
- ✅ **Performance Optimized**: Fast loading times with optimized assets  
- ✅ **SEO Ready**: Proper meta tags, structured data, and SEO optimization  
- ✅ **Accessibility**: WCAG compliant design for maximum accessibility  
- ✅ **Brand Consistent**: Maintains ITSthe1's distinctive orange brand colors  
- ✅ **Hugo Best Practices**: Follows Hugo templating and structure conventions  

## 🛠️ Technology Stack

- **Hugo**: Static site generator (v0.148.2+)
- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with custom properties
- **JavaScript**: Vanilla JS for interactivity
- **Google Fonts**: Inter & Poppins font families
- **Font Awesome**: Icon library

## 📁 Project Structure

```txt
ITSthe1_main_website/
├── content/
│   ├── _index.md
│   ├── about/
│   │   └── index.md
│   ├── contact/
│   │   ├── index.md
│   │   └── thank-you.md
│   ├── products/
│   │   ├── _index.md
│   │   ├── ai-helper.md
│   │   ├── crm-sme.md
│   │   ├── digital-menu.md
│   │   ├── digital-signage.md
│   │   ├── erp-garment.md
│   │   ├── helpdesk.md
│   │   ├── hospitality-app.md
│   │   ├── id-scanning.md
│   │   └── iptv.md
│   └── solutions/
├── themes/itsthe1/
│   ├── layouts/
│   │   ├── _default/
│   │   ├── partials/
│   │   └── index.html
│   └── static/
│       ├── css/
│       ├── js/
│       └── images/
├── static/
│   └── images/
├── public/
├── archetypes/
│   └── default.md
├── hugo.toml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.148.2 or later)
- Git

### Installation

```bash
git clone https://github.com/your-username/ITSthe1_main_website.git
cd ITSthe1_main_website
```

Start development server:

```bash
hugo server --buildDrafts
```

View in browser at: `http://localhost:1313`

### Build for Production

```bash
hugo --minify
```

Output will be in the `public/` directory.

## ⚙️ Configuration

Edit `hugo.toml` for:

- Title, base URL, description
- Menu structure
- Colors & branding

### Brand Colors

```toml
[params]
  primaryColor = '#FF6B35'
  secondaryColor = '#2C3E50'
  accentColor = '#F39C12'
```

## 📝 Content Management

### Add New Pages

```bash
hugo new about/new-page.md
hugo new products/new-product.md
hugo new solutions/new-solution.md
```

### Front Matter

```yaml
---
title: "Page Title"
subtitle: "Optional subtitle"
description: "SEO description"
featured_image: "/images/page-image.jpg"
date: 2024-01-01
draft: false
---
```

### Options

- `title`
- `subtitle`
- `description`
- `featured_image`
- `tags`
- `date`
- `draft`
- `toc`
- `sidebar`
- `share`

## 🎨 Customization

### Styling

`themes/itsthe1/static/css/style.css`:

```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #2C3E50;
    --accent-color: #F39C12;
}
```

### JavaScript

`themes/itsthe1/static/js/main.js` includes:

- Mobile nav toggle
- Smooth scrolling
- Scroll-to-top button
- Form validation
- Animation triggers

## 📄 Pages Included

### Core Pages
- **Homepage**
- **About**
- **Contact**
- **Solutions**

### Product Pages
- AI Helper  
- CRM for SME  
- Digital Menu  
- Digital Signage  
- ERP for Garment  
- Helpdesk  
- Hospitality App  
- ID Scanning  
- IPTV Solutions  

### Solution Pages
- Digital Transformation  
- Cyber Security  
- Cloud Services  
- Web & Mobile Development  
- Hospitality Solutions  
- IPTV & OTT Solutions  

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS/Android mobile browsers

## 🚀 Deployment

Can be hosted via:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **AWS S3**
- **Traditional Hosting**

### Netlify Setup

1. Connect Git repo  
2. Build command: `hugo --minify`  
3. Publish dir: `public`  
4. Deploy  

## 🤝 Contributing

1. Fork this repo  
2. Create feature branch  
3. Commit and push  
4. Open a PR  

## 📄 License

This project is proprietary to ITSthe1 Solutions LLC.

## 📞 Support

- **Email**: support@itsthe1.com  
- **Phone**: +971 4 295 2705  

---

**ITSthe1 Solutions LLC**  
Leading IT & Telecom Solutions Provider  
Dubai | London | Colombo

---

<p align="center">Made with ❤️ using Hugo</p>
<p align="center"><strong>Developed by Pasindu Dilshan</strong></p>
