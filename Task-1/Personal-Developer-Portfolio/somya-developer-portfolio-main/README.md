# Developer Portfolio — Uppalapati Somya Sri

> **Aspiring Software Engineer** | B.Tech in Computer Science and Engineering (2023–2027)  
> Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh  
> Live Demo: [https://ais-dev-c32weqtglbfs7htkc4uhrs-256399407885.asia-southeast1.run.app](https://ais-dev-c32weqtglbfs7htkc4uhrs-256399407885.asia-southeast1.run.app) *(or your deployed production URL)*  
> GitHub Repository: [https://github.com/Somyasri1/developer-portfolio](https://github.com/Somyasri1/somya-developer-portfolio) *(placeholder for public repository)*

---

## 📌 Project Overview

This is a modern, responsive, accessible developer portfolio designed and engineered to showcase academic milestones, internship experience, full-stack web applications, technical skillsets, and credentials. Built with **React 19**, **TypeScript**, and **Tailwind CSS**, this project adheres strictly to semantic HTML5 standards, WCAG AA accessibility, mobile-first design, and seamless dark/light theme switching.

---

## 🚀 Key Features

- **Semantic HTML5 Architecture**: Structured with native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **Dark/Light Theme Toggle**: Navy/cosmic slate dark theme default with crisp daylight light mode, with automatic persistence across refreshes via `localStorage` and system preference detection.
- **Fixed Navigation with Scroll Spy**: Smooth scrolling to each section with automatic offset calculation so headings are never obscured by the fixed header bar.
- **Accessible Mobile Navigation**: Fully functional hamburger menu drawer that closes on item selection, clicking outside, or pressing the `Escape` key.
- **Technical Skills Matrix**: 5 structured categories (Programming Languages, Frontend, Backend & Security, Databases & ORM, Developer Tools) with an interactive category filter bar.
- **Featured Project Showcase**: Interactive project cards with technology tags, source code links, and rich architectural modals detailing system workflows and data models.
- **Accessible Project Modals**: Complete system overview, architecture specifications, MongoDB/Firebase schema definitions, and cloud status notes with keyboard trap and Esc key support.
- **Curriculum Vitae / Resume Integration**: Direct one-click download of the official resume PDF (`assets/resume.pdf`) and "Preview in New Tab" capabilities, alongside an in-page high-resolution Document View with zoom controls.
- **Client-Side Validated Contact Form**: Comprehensive input validation (required fields, regex email check, length) and transparent client-side mailto dispatch without misleading fake backend messages.
- **Accessibility & Anti-Slop Discipline**: High contrast ratio, visible focus rings (`focus-visible`), touch targets ≥ 44px on mobile, and zero layout overflow.

---

## 🛠️ Technologies & Ecosystem

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript |
| **Styling & System** | Tailwind CSS v4, Inter, JetBrains Mono |
| **Icons & Media** | Lucide React |
| **Build Tooling** | Vite 8, ESBuild, Node.js v20+ |
| **Primary Languages** | Python, JavaScript (ES6+), C |
| **Web Technologies** | HTML5, CSS3, React.js, Responsive Web Design |
| **Backend & APIs** | Node.js, Express.js, REST APIs, JWT Authentication |
| **Databases** | MongoDB, Mongoose ODM, Firebase Firestore |
| **Dev Tools** | Git, GitHub, Postman, VS Code, Firebase |

---

## 📁 Project Directory Structure

```text
├── index.html                  # HTML5 entry point with SEO metadata and web fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript strict configuration
├── vite.config.ts              # Vite build and plugin configurations
├── metadata.json               # Application manifest and studio metadata
├── public/
│   ├── assets/
│   │   ├── resume.pdf          # Official resume PDF available for download
│   │   └── resume-preview.png  # High-resolution preview image asset
│   └── resume.pdf              # Root path for direct resume links
└── src/
    ├── main.tsx                # React DOM root mounting
    ├── index.css               # Global Tailwind CSS and CSS theme variables
    ├── App.tsx                 # Root component orchestrating theme and scroll spy
    ├── assets/
    │   └── resume-preview.png  # Bundled high-resolution document preview image
    ├── types/
    │   └── portfolio.ts        # TypeScript data contracts and interfaces
    ├── data/
    │   └── portfolioData.ts    # Single source of truth for portfolio records
    ├── utils/
    │   └── resumeDownload.ts   # Safe blob download and preview helper
    └── components/
        ├── Header.tsx          # Fixed navbar, mobile drawer, and theme switch
        ├── Hero.tsx            # Hero showcase, CTAs, and interactive code card
        ├── About.tsx           # Personal narrative and core competencies
        ├── Skills.tsx          # Categorized technical skills & interactive filter
        ├── Experience.tsx      # MERN Stack internship timeline & contributions
        ├── Projects.tsx        # Featured projects grid & modal triggers
        ├── ProjectModal.tsx    # Accessible architecture detail modal
        ├── Education.tsx       # B.Tech & Intermediate credentials
        ├── Certifications.tsx  # Verified certificates and hackathon activities
        ├── ResumeSection.tsx   # Document View & PDF download banner
        ├── Contact.tsx         # Contact Information channels & validated form
        └── Footer.tsx          # Footer navigation, copyright, and status badge
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **pnpm** or **yarn**

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Somyasri1/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` (or the port indicated in your terminal).

5. **Run production build**:
   ```bash
   npm run build
   ```

6. **Run TypeScript check / lint**:
   ```bash
   npm run lint
   ```

---

## 📄 Resume PDF Configuration & Customization

The portfolio is configured to serve your resume directly from:
- `public/assets/resume.pdf`
- `public/resume.pdf`

### How to update or replace with your University-issued PDF:
1. Export your official placement resume as a standard PDF file named `resume.pdf`.
2. Place the file inside the project at:
   - `public/assets/resume.pdf` (and optionally copy to `public/resume.pdf`).
3. Commit and push the changes. Both the "Download Resume" buttons and "Preview in New Tab" links will automatically serve your updated PDF.

---

## 🚀 Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push your code to a public GitHub repository (e.g. `github.com/Somyasri1/developer-portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
3. Select your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Set Build Command: `npm run build` and Output Directory: `dist`.
6. Click **Deploy**. Vercel will assign a production URL (e.g. `https://uppalapati-somya-sri.vercel.app`).

### Option 2: Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **"Import an existing project"** and connect GitHub.
3. Configure Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

### Option 3: GitHub Pages
1. In `vite.config.ts`, ensure `base: './'` is configured for relative assets.
2. In `package.json`, add `"deploy": "gh-pages -d dist"` (install `gh-pages` if needed).
3. Run `npm run build && npm run deploy` or configure GitHub Actions workflow for Pages.

---

## 👤 Author & Contact

**Uppalapati Somya Sri**  
- **Degree**: B.Tech in Computer Science and Engineering (2023–2027)  
- **Institution**: Vishnu Institute of Technology, Bhimavaram, AP  
- **Email**: [uppalapatisomyasri@gmail.com](mailto:uppalapatisomyasri@gmail.com)  
- **Phone**: +91 9030721396  
- **LinkedIn**: [linkedin.com/in/uppalapati-somyasri-3b797831b](https://linkedin.com/in/uppalapati-somyasri-3b797831b)  
- **GitHub**: [github.com/Somyasri1](https://github.com/Somyasri1)  
