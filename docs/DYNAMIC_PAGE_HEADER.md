# Dynamic Page Header System

## Overview

The website now uses a unified dynamic page header system implemented through the `page-header.html` partial. This eliminates code duplication and provides consistent header behavior across all pages.

## Features

### 1. Dynamic CSS Classes

The header automatically applies appropriate CSS classes based on the page section:

- `page-header contact-header` for contact pages
- `page-header products-header` for product pages
- `page-header services-header` for service pages
- `page-header solutions-header` for solution pages
- `page-header about-header` for about pages
- `page-header simple-header` for simple pages
- Custom classes via `headerClass` parameter

### 2. Smart Subtitle Handling

The system automatically handles subtitles with fallback logic:

1. First checks for `subtitle` parameter in front matter
2. For section pages, uses page content if available
3. Provides default subtitles for major sections:
   - Products: "Innovative solutions designed to transform your business"
   - Services: "Professional IT services and support tailored for your business needs"
   - Solutions: "Comprehensive solutions to drive your digital transformation"

### 3. Intelligent Breadcrumb Navigation

- Automatically generates breadcrumbs based on page hierarchy
- Hidden on contact pages and home page
- Can be disabled with `hideBreadcrumb: true` parameter
- Maps section names to user-friendly titles:
  - products → "Our Products"
  - services → "Our Services"
  - solutions → "Our Solutions"

## Usage

### In Templates

Replace existing page header code with:

```html
{{/* Use dynamic page header partial */}} {{ partial "page-header.html" . }}
```

### Page Configuration

Control header behavior via front matter:

```yaml
---
title: "Page Title"
subtitle: "Optional subtitle"
headerClass: "custom-class" # Adds custom CSS class
hideBreadcrumb: true # Disables breadcrumb navigation
---
```

## Implementation

### Updated Templates

The following templates now use the dynamic header:

- `layouts/_default/single.html`
- `layouts/_default/list.html`
- `layouts/contact/single.html`
- `layouts/about.html`
- `layouts/simple.html`

### Partial Location

`themes/itsthe1/layouts/partials/page-header.html`

## Benefits

1. **Consistency**: All pages use the same header structure
2. **Maintainability**: Changes only need to be made in one place
3. **Flexibility**: Easy customization per page or section
4. **Performance**: Reduced code duplication
5. **SEO**: Consistent breadcrumb structure across the site
