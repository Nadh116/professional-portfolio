# Portfolio Setup Guide

## 🖼️ Adding Your Profile Image

1. Save your profile photo as `profile.jpg` in the `public` folder
2. The image should be:
   - Square aspect ratio (recommended)
   - Good quality (at least 500x500px)
   - Professional headshot
   - File name: `profile.jpg`

**Quick Steps:**
```bash
# Navigate to the public folder
cd public

# Copy your profile image here and rename it to profile.jpg
# The path should be: professional-portfolio/public/profile.jpg
```

## 🚀 Running the Portfolio

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Checklist

### Already Customized ✅
- [x] Name: Nadhii Jemal
- [x] Title: Full Stack Developer
- [x] Email: nadhiijemal503@gmail.com
- [x] GitHub: github.com/nedh116
- [x] LinkedIn: linkedin.com/in/nadhii-jemal
- [x] About section with your background
- [x] Real projects from your portfolio
- [x] Skills matching your tech stack
- [x] Education: BSc Software Engineering, Haramaya University
- [x] Work experience

### To Do 📋
- [ ] Add your profile photo to `public/profile.jpg`
- [ ] Update LinkedIn URL if different
- [ ] Add live demo links for projects (replace '#' with actual URLs)
- [ ] Create a resume PDF and add to `public/resume.pdf`
- [ ] Test contact form (currently simulated)
- [ ] Deploy to hosting platform (Vercel, Netlify, etc.)

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

## 🔗 Update Project Links

Once you have live demos, update these files:
- `src/components/Projects.jsx` - Change `demo: '#'` to actual URLs
- `src/components/Hero.jsx` - Update resume link if you add one

## 📱 Social Media

Make sure your social profiles are up to date:
- GitHub: https://github.com/nedh116
- LinkedIn: https://linkedin.com/in/nadhii-jemal
- Twitter: https://twitter.com/nadhiijemal (update if different)

## 🎨 Color Customization

To change the color scheme, edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

## 📧 Contact Form

The contact form currently simulates submission. To make it functional:
1. Use a service like Formspree, EmailJS, or Web3Forms
2. Update the `handleSubmit` function in `src/components/Contact.jsx`
3. Add your API endpoint

## ✅ Final Checklist Before Deployment

- [ ] Profile image added
- [ ] All links tested
- [ ] Resume PDF added (optional)
- [ ] Contact form configured (optional)
- [ ] Tested on mobile devices
- [ ] Checked dark mode
- [ ] All project descriptions accurate
- [ ] Social media links verified
- [ ] Built successfully (`npm run build`)

---

**Need Help?** Check the main README.md for detailed documentation.
