# Project Structure Guide

## 📁 Directory Organization

### Root Level

```
ITSthe1_main_website/
├── .git/                    # Git repository data
├── .gitignore              # Git ignore rules
├── .hugo_build.lock        # Hugo build lock file
├── .vscode/                # VS Code settings
├── hugo.toml               # Production configuration
├── hugo.dev.toml           # Development configuration
├── netlify.toml            # Netlify deployment config
├── package.json            # Node.js dependencies & scripts
├── package-lock.json       # Locked dependency versions
├── README.md               # Project documentation
└── optimize-images.ps1     # Image optimization script
```

### Content Structure

```
content/
├── _index.md               # Homepage content
├── about.md                # About page (legacy)
├── about/
│   └── index.md           # About page (current)
├── contact/
│   ├── index.md           # Contact form page
│   └── success.md         # Contact success page
├── products/
│   ├── _index.md          # Products listing page
│   ├── ai-helper.md       # AI Helper product
│   ├── crm-sme.md         # CRM for SME product
│   ├── digital-menu.md    # Digital Menu product
│   ├── digital-signage.md # Digital Signage product
│   ├── erp-garment.md     # ERP for Garment product
│   ├── helpdesk.md        # Helpdesk product
│   ├── hospitality-app.md # Hospitality App product
│   ├── id-scanning.md     # ID Scanning product
│   └── iptv.md           # IPTV product
├── services/
│   ├── _index.md          # Services listing page
│   ├── cloud-hybrid.md    # Cloud & Hybrid service
│   ├── co-managed-it-services.md
│   ├── digital-transformation-planning.md
│   ├── it-consultancy.md
│   ├── it-security-compliance.md
│   ├── it-strategy-development.md
│   ├── it-support-outsourcing.md
│   ├── microsoft-365.md
│   ├── microsoft-azure.md
│   └── microsoft-business-applications.md
└── solutions/
    ├── _index.md          # Solutions listing page
    ├── cloud-services.md  # Cloud Services solution
    ├── cyber-security.md  # Cyber Security solution
    ├── digital-transformation.md
    ├── hospitality.md     # Hospitality solution
    ├── iptv-ott.md       # IPTV & OTT solution
    └── web-mobile.md      # Web & Mobile solution
```

### Theme Structure

```
themes/itsthe1/
├── layouts/               # HTML templates
│   ├── _default/         # Default templates
│   ├── partials/         # Reusable components
│   └── index.html        # Homepage template
├── static/               # Theme-specific assets
│   ├── css/             # Theme stylesheets
│   └── js/              # Theme JavaScript
└── theme.toml           # Theme configuration
```

### Static Assets

```
static/
├── favicon-16x16.png     # Favicon (16x16)
├── favicon-32x32.png     # Favicon (32x32)
├── favicon.ico           # Main favicon
├── site.webmanifest      # Web app manifest
├── css/                  # Site-wide stylesheets
├── js/                   # Site-wide JavaScript
├── videos/               # Video files
└── images/               # Organized image library
    ├── logo.svg          # Main logo
    ├── logo-white.svg    # White logo variant
    ├── about-story.jpg   # About page image
    ├── favicon-source.png # Favicon source
    ├── clients/          # Client logos
    ├── office/           # Office photos
    ├── partners/         # Partner logos
    ├── products/         # Product images (organized)
    ├── Products2/        # Product images (needs cleanup)
    ├── projects/         # Project showcases
    └── solutions/        # Solution diagrams
```

### Generated & Build

```
public/                   # Generated site (Git ignored)
├── index.html           # Generated homepage
├── sitemap.xml          # Generated sitemap
├── css/                 # Compiled CSS
├── js/                  # Compiled JavaScript
├── images/              # Processed images
└── [all content pages]  # Generated HTML pages

node_modules/            # Node.js dependencies (Git ignored)
hugo_stats.json         # Hugo build statistics
```

### Template Files

```
archetypes/
└── default.md          # Default content template
```

## 🔧 Asset Management Guidelines

### Images

- **Products**: Use `static/images/products/[product-name]/`
- **Solutions**: Use `static/images/solutions/[solution-name]/`
- **General**: Use appropriate subfolder in `static/images/`

### CSS/JS

- **Theme-specific**: `themes/itsthe1/static/`
- **Site-wide**: `static/`

### Content

- **Use consistent naming**: kebab-case for files
- **Include proper front matter**: title, description, date
- **Organize by type**: products/, services/, solutions/

## 🚨 Cleanup Needed

1. **Merge duplicate image folders**: `products/` and `Products2/`
2. **Remove unused files**: Clean up any orphaned assets
3. **Standardize naming**: Ensure consistent file naming
4. **Optimize images**: Run image optimization script
5. **Clean public folder**: Remove from version control
