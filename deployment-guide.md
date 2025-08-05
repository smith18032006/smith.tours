# Smith Tours Deployment Guide

## 🚀 Your website is ready for hosting!

### Quick Deployment Steps:

#### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add custom domain `smith.tours.in`
4. Update DNS settings

#### Option 2: Netlify
1. Drag & drop the `dist` folder to Netlify
2. Add custom domain in site settings
3. Configure DNS records

#### Option 3: Manual Upload
1. Upload contents of `dist` folder to your hosting provider
2. Point domain to hosting server
3. Configure SSL certificate

### DNS Configuration for smith.tours.in:
- A Record: Point to hosting provider's IP
- CNAME Record: www.smith.tours.in → smith.tours.in
- Enable SSL/HTTPS

### Build Commands:
- Build: `npm run build`
- Preview: `npm run preview`
- Development: `npm run dev`

### Files Ready for Deployment:
All files in the `dist` folder are production-ready and optimized.
