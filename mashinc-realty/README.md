# Mashinc Realty - Premium Real Estate Website

A modern, responsive website for Mashinc Realty, Nigeria's premier real estate development company led by Abayomi Animashaun.

## 🌟 Features

- **Ultra-Modern Design**: 2025-standard clean layout with generous whitespace and sharp typography
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Accessibility First**: WCAG compliant with semantic HTML and proper navigation
- **Performance Optimized**: Fast loading with lazy-loaded images and optimized assets
- **SEO Ready**: Meta tags, sitemap, and structured data for better search visibility
- **Interactive Elements**: Smooth animations and micro-interactions
- **Contact Forms**: Formspree integration for seamless inquiries

## 🏗️ Structure

```
mashinc-realty/
├── src/
│   ├── input.css          # Tailwind CSS source
│   ├── js/
│   │   └── main.js        # Main JavaScript functionality
│   └── images/            # Image assets (placeholder paths)
├── dist/
│   └── output.css         # Compiled Tailwind CSS
├── index.html             # Home page
├── about.html             # About Us page
├── listings.html          # Property listings page
├── contact.html           # Contact page
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies and scripts
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone/Download the project**
   ```bash
   cd mashinc-realty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS and start development server**
   ```bash
   npm run dev
   ```

4. **Or build CSS only**
   ```bash
   npm run build-css
   ```

5. **Production build**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The website uses a professional color scheme defined in `tailwind.config.js`:
- **Primary**: #0c1b32 (Dark blue)
- **Secondary**: #ffd700 (Gold)
- **Background**: #f8fafc (Light gray)

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family
- Clean, professional, and highly readable

### Images
Replace placeholder image paths in the HTML files with your actual images:
- Logo: `./src/images/logo.png` and `./src/images/logo-white.png`
- Property images: `./src/images/property-*.jpg`
- Team photos: `./src/images/team-member-*.jpg`
- CEO photo: `./src/images/ceo-abayomi-animashaun.jpg`

### Content Updates
- Update contact information in `contact.html`
- Add real property data in `listings.html`
- Replace placeholder content with actual company information
- Update social media links in the footer

## 📧 Contact Form Setup

1. **Sign up for Formspree** at https://formspree.io
2. **Create a new form** and get your form endpoint
3. **Update the form action** in `contact.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🔧 Technical Details

### CSS Framework
- **Tailwind CSS 3.4+**: Utility-first CSS framework
- **Custom Components**: Pre-built components for buttons, cards, and navigation
- **Animations**: Smooth micro-interactions and scroll animations

### JavaScript Features
- Mobile navigation toggle
- Form validation and submission
- Property filtering
- Smooth scrolling
- Intersection Observer for animations
- Performance optimizations

### SEO & Performance
- Semantic HTML5 structure
- Meta tags for social sharing (Open Graph)
- Optimized images with lazy loading
- Fast loading times
- Mobile-first responsive design

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Static Hosting (Recommended)
Deploy to any static hosting service:
- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Enable Pages in repository settings
- **Traditional Web Hosting**: Upload all files to web root

### Before Going Live
1. **Update all placeholder content**
2. **Add real images** (maintain the specified dimensions)
3. **Configure Formspree** form endpoint
4. **Update contact information**
5. **Test all links** and functionality
6. **Run production build**: `npm run build`

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with call-to-action
- Company overview
- Featured properties
- Why choose us section
- Testimonials area

### About Us (`about.html`)
- CEO spotlight (Abayomi Animashaun)
- Company history timeline
- Mission, vision, values
- Team profiles
- Achievements and awards

### Properties (`listings.html`)
- Property filtering system
- Detailed property cards
- Investment opportunities
- Property carousel for multiple images

### Contact (`contact.html`)
- Comprehensive contact form
- Business information
- CEO direct contact
- FAQ section
- Office location map

## 🛠️ Development Commands

```bash
# Watch CSS changes during development
npm run build-css

# Start local development server
npm run serve

# Run both CSS watch and server
npm run dev

# Build for production (minified CSS)
npm run build
```

## 🔒 Security & Privacy

- Contact form protected against spam
- No sensitive data stored locally
- GDPR-compliant privacy notices
- Secure form submission via Formspree

## 📞 Support

For technical support or customization inquiries, contact the development team or refer to the documentation.

---

**© 2025 Mashinc Realty. All rights reserved.**
*Developed by [Websetly](https://websetly.com)*
