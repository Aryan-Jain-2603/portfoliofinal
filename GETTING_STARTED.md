# Getting Started Guide

Quick reference for setting up and deploying your portfolio.

## Initial Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## Before You Deploy

### 1. Add Your Resume
- Place your `resume.pdf` file in the `public/` folder
- The download links are already configured

### 2. Update Personal Links
Make sure all GitHub links point to your actual profile:
- `src/components/Hero.jsx` - GitHub icon link
- `src/components/Contact.jsx` - GitHub link
- `src/components/Projects.jsx` - Update project GitHub URLs

### 3. Customize Content (Optional)
- Projects: `src/components/Projects.jsx`
- Skills: `src/components/Skills.jsx`
- Experience: `src/components/Experience.jsx`
- Education: `src/components/Education.jsx`

### 4. Update Meta Tags
- Edit `index.html` for SEO descriptions and Open Graph tags
- Add og:image once you have a screenshot

## Build for Production

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## Deploy to Vercel

```bash
# Option 1: Using Vercel CLI
npm i -g vercel
vercel

# Option 2: Via GitHub
# 1. Push code to GitHub
# 2. Go to vercel.com
# 3. Import your repository
# 4. Deploy!
```

## Deploy to Netlify

```bash
# 1. Push code to GitHub
# 2. Go to netlify.com
# 3. Import repository
# 4. Build command: npm run build
# 5. Publish directory: dist
# 6. Deploy!
```

## Suggested Git Workflow

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with clear message
git commit -m "feat: initialize vite + react portfolio"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/ManthanPadalia/aryan-portfolio.git

# Push to GitHub
git push -u origin main
```

## Sample Commit Messages

- `feat: initialize vite + react`
- `chore: add tailwind config and base styles`
- `feat: create Hero, Header and Footer components`
- `feat: add Projects section with ProjectCard`
- `feat: implement Skills and Experience sections`
- `feat: add Contact form with FormSubmit integration`
- `fix: responsive layout tweaks for mobile`
- `style: improve dark mode contrast`
- `chore: add resume.pdf and update README`
- `deploy: initial Vercel deployment`

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173 or use different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark mode not persisting
- Check browser console for localStorage errors
- Ensure JavaScript is enabled

## Performance Tips

1. **Optimize images**: Convert to WebP format, compress before adding
2. **Lazy load**: Heavy sections are already set up with Framer Motion viewport
3. **Bundle analysis**: Run `npm run build` and check dist folder size
4. **CDN**: Use Vercel or Netlify's automatic CDN

## Next Steps

1. ✅ Test on mobile devices
2. ✅ Run Lighthouse audit (aim for 90+ scores)
3. ✅ Test accessibility with screen reader
4. ✅ Add Google Analytics (optional)
5. ✅ Set up custom domain (optional)

---

Need help? Check the main README.md for more details!

