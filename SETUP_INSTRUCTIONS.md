# Quick Setup Instructions

Follow these steps to get your portfolio running locally in under 5 minutes.

## Step 1: Install Node.js

Make sure you have Node.js installed (v16 or higher).

Check your version:
```bash
node --version
```

If you need to install Node.js, download it from [nodejs.org](https://nodejs.org/)

## Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- And other dev dependencies

**Expected install time**: 1-2 minutes

## Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 4: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

You should see your portfolio! 🎉

## Step 5: Make It Yours

### Essential Changes:

1. **Add Your Resume**
   - Place your `resume.pdf` file in the `public/` folder
   - This enables the download buttons in the nav and hero

2. **Update GitHub URLs**
   - Open `src/components/Projects.jsx`
   - Replace placeholder GitHub links with your actual project URLs
   - Lines 15 and 26

3. **Verify Contact Email**
   - Check `src/components/Contact.jsx` line 26
   - Email is set to: `aryan260305@gmail.com`

### Optional Customizations:

4. **Add More Projects**
   - Edit `src/components/Projects.jsx`
   - Add new objects to the `projects` array (starting line 4)

5. **Update Skills**
   - Edit `src/components/Skills.jsx`
   - Modify the `skillCategories` array (starting line 9)

6. **Change Colors**
   - Edit `tailwind.config.js`
   - Update the `accent` color (currently `#2d7d7d` - muted teal)

## Step 6: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

Preview the production build locally:
```bash
npm run preview
```

## Step 7: Deploy

Choose your platform:

### Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" and select your repo
4. Click "Deploy" (Vercel auto-detects Vite)
5. Done! ✨

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

**Note**: Configuration files are already included:
- `netlify.toml` for Netlify
- `vercel.json` for Vercel
- `public/_redirects` for SPA routing

## Common Issues & Solutions

### Issue: Port 5173 already in use
**Solution**: 
```bash
npm run dev -- --port 3000
```

### Issue: Module not found errors
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not working
**Solution**: 
- Make sure `index.css` is imported in `main.jsx`
- Check that Tailwind directives are at the top of `index.css`

### Issue: Dark mode not working
**Solution**: 
- Check browser console for errors
- Ensure JavaScript is enabled
- Try clearing localStorage: `localStorage.clear()`

## File Structure Reference

```
aryan-portfolio/
├── public/              # Static assets
│   ├── resume.pdf      # ⚠️ Add your resume here
│   ├── vite.svg        # Favicon
│   └── _redirects      # SPA routing for Netlify
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles + Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
├── netlify.toml        # Netlify config
└── vercel.json         # Vercel config
```

## Keyboard Shortcuts (VS Code)

- `Ctrl+P` - Quick file search
- `Ctrl+Shift+F` - Search across all files
- `Ctrl+` ` - Open terminal
- `Alt+Click` - Multiple cursors

## Next Steps

1. ✅ Run `npm run dev` and verify everything works
2. ✅ Add your `resume.pdf` to the `public/` folder
3. ✅ Update GitHub links in `Projects.jsx`
4. ✅ Customize content (projects, skills, etc.)
5. ✅ Test on mobile (open http://localhost:5173 on your phone)
6. ✅ Build with `npm run build`
7. ✅ Deploy to Vercel or Netlify

## Need Help?

- Check `README.md` for detailed project info
- Check `GETTING_STARTED.md` for more setup details
- Check `DEPLOYMENT.md` for deployment guide
- Google any error messages (Stack Overflow is your friend!)

---

**Ready to code?** Run `npm run dev` and start building! 🚀

