# Deployment Guide

Step-by-step instructions for deploying your portfolio to Vercel or Netlify.

## Prerequisites

- [x] Code pushed to GitHub
- [x] Resume PDF added to `public/` folder
- [x] All content customized and tested locally
- [x] Build tested with `npm run build`

---

## Option 1: Vercel (Recommended)

### Why Vercel?
- Zero configuration for Vite projects
- Automatic HTTPS and CDN
- Great performance out of the box
- Free for personal projects

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio setup"
   git remote add origin https://github.com/ManthanPadalia/aryan-portfolio.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Wait for Build** (usually 1-2 minutes)
   
4. **Done!** Your site is live at `your-project.vercel.app`

### Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for propagation (5-10 minutes)

---

## Option 2: Netlify

### Why Netlify?
- Simple drag-and-drop deployment
- Form handling built-in
- Great for contact forms
- Free tier is generous

### Steps

1. **Build Locally First**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

3. **Wait for Build** (usually 2-3 minutes)

4. **Done!** Your site is live at `random-name.netlify.app`

### Enable Netlify Forms

Your contact form is ready for Netlify Forms. Just add this attribute to the form in `src/components/Contact.jsx`:

```jsx
<form onSubmit={handleSubmit} data-netlify="true" className="space-y-4">
```

Then redeploy.

---

## Option 3: GitHub Pages

### Steps

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://ManthanPadalia.github.io/aryan-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/aryan-portfolio/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repo Settings > Pages
   - Source: Deploy from branch `gh-pages`
   - Save

---

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify resume download works
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Test dark mode toggle
- [ ] Verify all external links (GitHub, etc.)
- [ ] Run Lighthouse audit
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Share with friends for feedback

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Push changes to GitHub
2. Platform automatically rebuilds and deploys
3. Live in 1-2 minutes

### Example Workflow

```bash
# Make changes locally
# Test with npm run dev

# Commit and push
git add .
git commit -m "feat: add new project"
git push

# Vercel/Netlify automatically deploys!
```

---

## Domain Configuration Examples

### Vercel
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Netlify
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

---

## Performance Optimization

Already implemented in this portfolio:

- ✅ Code splitting with React lazy loading
- ✅ Optimized bundle size (<200KB gzipped)
- ✅ Lazy loading with Framer Motion viewport
- ✅ Font preloading in index.html
- ✅ Dark mode without flash
- ✅ Semantic HTML for better SEO

---

## Troubleshooting

### Build fails on Vercel/Netlify

Check that:
- `package.json` has all dependencies (not devDependencies)
- Node version is compatible (use Node 18+)
- Build command is correct: `npm run build`

### Form not working

- Vercel: Use FormSubmit.co (already configured)
- Netlify: Add `data-netlify="true"` to form tag
- Both: Check email address in Contact.jsx is correct

### 404 errors

- Ensure `dist` folder is the publish directory
- For SPAs, add `_redirects` file in public folder:
  ```
  /*    /index.html   200
  ```

---

## Monitor Your Site

### Vercel Analytics
- Go to Project > Analytics
- Free basic analytics included

### Google Analytics (Optional)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

**Ready to deploy?** Choose your platform and follow the steps above. Good luck! 🚀

