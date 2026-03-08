# Resume UI - Shubham Nevare

**Name:** Shubham Nevare  
**Role Applied For:** Frontend Developer Intern at Platione

## 🚀 Live Demo

[View Live Site](https://shubhamnevare-resume.vercel.app)

[Git Hub Repo](https://github.com/Shubham-Nevare/Personal-Resume)


## 📸 Screenshots

![Desktop View](![alt text](image-1.png))
![Mobile View](![alt text](image.png))

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Language:** JavaScript (React)
- **Data:** Static JSON

## ✨ Features

- Pixel-perfect, modern, professional design
- Fully responsive (mobile, tablet, desktop)
- Component-based architecture
- Resume data rendered from single JSON file
- Smooth animations and micro-interactions
- Accessible (good contrast, focus states)
- Clean, maintainable code

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.js        # Root layout
│   └── page.jsx         # Main page
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero/About section
│   ├── Education.jsx    # Education timeline
│   ├── Projects.jsx     # Project cards
│   ├── Skills.jsx       # Skills & tools
│   ├── Achievements.jsx # Achievements & extracurricular
│   ├── Contact.jsx      # Contact information
│   └── Footer.jsx       # Footer
└── data/
    └── resume.json      # All resume data
```

## 🏃 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Shubham-Nevare/resumeui.git
   cd resumeui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy to GitHub Pages

1. Update `next.config.mjs` for static export
2. Run `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 📝 License

MIT License - Feel free to use this template for your own resume!
