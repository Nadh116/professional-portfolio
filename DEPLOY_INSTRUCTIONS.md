# 🚀 Deploy Your Portfolio - Step by Step

Your portfolio is ready to deploy! Follow these simple steps:

## Option 1: Deploy with Vercel (Recommended - Easiest)

### Step 1: Login to Vercel
```powershell
vercel login
```
- This will open your browser
- Login with GitHub, GitLab, or email
- Come back to terminal after logging in

### Step 2: Deploy
```powershell
vercel --prod
```
- Answer the prompts:
  - Set up and deploy? **Y**
  - Which scope? Press Enter (use your account)
  - Link to existing project? **N**
  - What's your project's name? **professional-portfolio** (or press Enter)
  - In which directory is your code located? Press Enter (current directory)
  - Want to override settings? **N**

### Step 3: Done! 🎉
Your portfolio will be live at: `https://professional-portfolio-[your-username].vercel.app`

---

## Option 2: Deploy with Netlify (Alternative)

### Step 1: Build your project
```powershell
npm run build
```

### Step 2: Deploy
1. Go to: https://app.netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `dist` folder
5. Done! Your site is live

---

## Option 3: Push to GitHub First (Then Deploy)

If you want to push to GitHub first:

### Step 1: Create GitHub Repository
1. Go to: https://github.com/nadh116
2. Click "+" → "New repository"
3. Name: `professional-portfolio`
4. Make it Public
5. Don't initialize with README
6. Click "Create repository"

### Step 2: Push Your Code
```powershell
git remote add origin https://github.com/nadh116/professional-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy from GitHub
**Using Vercel:**
1. Go to: https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy"

**Using Netlify:**
1. Go to: https://app.netlify.com
2. Click "Add new site" → "Import from Git"
3. Choose GitHub → Select your repository
4. Click "Deploy"

---

## 🎯 What You'll Get

After deployment, you'll have:
- ✅ Live portfolio URL (e.g., `https://nadhii-portfolio.vercel.app`)
- ✅ Automatic HTTPS (secure)
- ✅ Global CDN (fast worldwide)
- ✅ Free hosting
- ✅ Automatic deployments on updates

---

## 📝 After Deployment

1. **Update your README** with the live URL
2. **Add to LinkedIn** profile
3. **Share on GitHub** profile
4. **Include in resume**
5. **Share with potential employers**

---

## 🔧 Troubleshooting

### If Vercel login doesn't work:
- Make sure you have a browser installed
- Try: `vercel login --github` to login with GitHub

### If build fails:
```powershell
# Test build locally first
npm run build

# If successful, then deploy
vercel --prod
```

### If you see "command not found":
```powershell
# Reinstall Vercel CLI
npm install -g vercel
```

---

## 💡 Quick Deploy (Fastest Method)

```powershell
# 1. Login
vercel login

# 2. Deploy
vercel --prod

# That's it! Your portfolio is live! 🎉
```

---

## 📊 Your Portfolio Stats

- ✅ 9 Projects showcased
- ✅ Full tech stack displayed
- ✅ Contact information complete
- ✅ Responsive design
- ✅ Dark mode enabled
- ✅ SEO optimized
- ✅ Professional design

**Ready to impress employers!** 🚀

---

Need help? Check the main README.md or SETUP.md files!
