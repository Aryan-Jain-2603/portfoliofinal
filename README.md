# Aryan Jain — Developer Portfolio

A minimalist, handcrafted React portfolio showcasing projects, skills, and experience. Built with clean design principles, subtle motion, and accessibility in mind.

## 🚀 Live Demo

[Add your live demo link after deployment]

## ✨ Features

- **Clean, minimalist design** with generous whitespace and restrained color palette
- **Fully responsive** mobile-first layout
- **Accessible** (A11y) with proper semantic HTML, ARIA labels, and keyboard navigation
- **Dark mode** toggle with theme persistence
- **Smooth animations** using Framer Motion
- **Fast performance** with optimized images and code splitting
- **Contact form** integration ready (FormSubmit.co)
- **SEO optimized** with proper meta tags and structured data

## 🛠️ Tech Stack

- **React** (Vite) — Fast, modern build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth micro-interactions
- **JavaScript (ES6+)**

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/ManthanPadalia/aryan-portfolio.git
cd aryan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
aryan-portfolio/
├── public/
│   └── resume.pdf          # Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with sticky behavior
│   │   ├── Hero.jsx        # Landing section with intro
│   │   ├── About.jsx       # About section with stats
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── ProjectCard.jsx # Individual project card
│   │   ├── Skills.jsx      # Skills with proficiency levels
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Education.jsx   # Education & certifications
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer with theme toggle
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite and configure everything
4. Click Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and import your repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy!

## 📝 Customization

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`.

### Update Content

- **Personal info**: Edit components in `src/components/`
- **Projects**: Update the projects array in `src/components/Projects.jsx`
- **Skills**: Modify skill categories in `src/components/Skills.jsx`
- **Colors**: Adjust the color palette in `tailwind.config.js`

### Contact Form

The contact form uses FormSubmit.co by default. To set it up:

1. Update the email in `src/components/Contact.jsx` (already set to aryan260305@gmail.com)
2. On first form submission, you'll receive a confirmation email
3. Click the link to activate the form

Alternatively, you can use Netlify Forms or your own backend.

## 🎨 Design Principles

- **Minimalist color palette**: Neutral background, dark text, muted teal accent
- **Typography hierarchy**: Single geometric sans (Inter) with weight variations
- **Generous whitespace**: 60-75% line length for readability
- **Subtle animations**: Hover lifts, smooth fades, animated underlines
- **Human copy**: Natural language, specific details, no buzzwords

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Aryan Jain**

- Email: aryan260305@gmail.com
- GitHub: [@ManthanPadalia](https://github.com/ManthanPadalia)

---

Built with ❤️ using React and Tailwind CSS

