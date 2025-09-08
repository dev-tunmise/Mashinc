# 🚀 Mashinc Realty - Cloudflare Pages Deployment Guide

## 📋 Pre-Deployment Checklist

✅ **Project Structure Ready**
- All HTML, CSS, and JS files are properly organized
- Images are in `src/images/` directory
- Build configuration is set up

✅ **Build Configuration**
- `package.json` with build scripts
- Tailwind CSS configured and built
- Production CSS minified in `dist/output.css`

## 🌐 Cloudflare Pages Deployment Steps

### Option 1: Connect Git Repository (Recommended)

1. **Push to GitHub/GitLab**:
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare Pages deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages"
   - Click "Create a project"
   - Connect your Git provider
   - Select your repository

3. **Build Settings**:
   - **Framework preset**: None (Static HTML)
   - **Build command**: `npm run build`
   - **Build output directory**: `.` (root directory)
   - **Root directory**: `mashinc-realty` (if monorepo)

### Option 2: Direct Upload

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to Cloudflare Pages
   - Choose "Upload assets"
   - Upload entire project folder

## ⚙️ Build Configuration

**Build Command**: `npm run build`
**Output Directory**: `.` (root)
**Node Version**: 18
**Environment Variables**: None required

## 📁 Deployment Files Created

- `_redirects` - URL redirects and clean URLs
- `_headers` - Security headers and caching
- `wrangler.toml` - Cloudflare configuration
- `.gitignore` - Git ignore patterns

## 🔧 Build Process

The build process will:
1. Install dependencies (`npm install`)
2. Compile and minify Tailwind CSS
3. Generate production-ready `dist/output.css`
4. Deploy static files to Cloudflare's global network

## 🌍 Custom Domain Setup

1. **Add Custom Domain**:
   - In Cloudflare Pages project settings
   - Go to "Custom domains"
   - Add your domain (e.g., `mashincrealty.com`)

2. **DNS Configuration**:
   - Add CNAME record pointing to your Pages project
   - Or use Cloudflare as your DNS provider

## 🔒 Security Features

- **HTTPS**: Automatic SSL certificate
- **Security Headers**: XSS protection, content type sniffing prevention
- **Caching**: Optimized cache headers for performance
- **DDoS Protection**: Built-in Cloudflare protection

## 📈 Performance Optimizations

- **Global CDN**: Files served from 200+ locations
- **Auto-minification**: CSS and HTML minified
- **Brotli Compression**: Automatic compression
- **HTTP/2 & HTTP/3**: Latest protocols enabled

## 🚨 Troubleshooting

**Build Fails**:
- Check Node.js version (should be 18+)
- Verify `package.json` dependencies
- Run `npm install` locally first

**Images Not Loading**:
- Verify image paths are relative (`./src/images/...`)
- Check image file names match HTML references

**CSS Not Applying**:
- Ensure `dist/output.css` is built and committed
- Check CSS path in HTML files (`./dist/output.css`)

## 📞 Support

For deployment issues:
1. Check Cloudflare Pages documentation
2. Verify build logs in Cloudflare dashboard
3. Test locally with `npm run build && npm run serve`

---

**🎉 Your Mashinc Realty website is ready for deployment!**

The site will be available at:
- **Cloudflare Pages URL**: `https://mashinc-realty.pages.dev`
- **Custom Domain**: `https://mashincrealty.com` (after DNS setup)
