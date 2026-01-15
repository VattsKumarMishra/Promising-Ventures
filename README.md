# 🏗️ Promising Ventures - Construction Company Website

A modern, responsive website for **Promising Ventures Pvt Ltd**, showcasing construction projects, services, and client testimonials. Built with React, TypeScript, and Tailwind CSS.

![Promising Ventures](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌗 **Dark/Light Mode** - Automatic theme switching
- 📱 **Fully Responsive** - Optimized for all devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast builds
- 📧 **Contact Form** - Integrated with Formspree (no backend needed)
- 🖼️ **Project Showcase** - Dynamic project galleries
- ⭐ **Client Testimonials** - Real client reviews
- 🎭 **Smooth Animations** - Framer Motion powered interactions

## 🛠️ Tech Stack

- **Framework:** React 19.2 with TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Build Tool:** Vite 7.3
- **Icons:** Lucide React
- **Form Handling:** Formspree
- **Deployment:** Vercel

## 📁 Project Structure

```
promising-ventures/
├── frontend/                # Main application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── sections/   # Page sections
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── lib/           # Utilities
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/promising-ventures.git
   cd promising-ventures
   ```

2. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5174`

## 📦 Build for Production

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`

## 🌐 Deployment

**Live Site:** [https://promising-ventures.vercel.app](https://promising-ventures.vercel.app)

## 🎨 Customization

### Update Company Information

Edit the following files:
- **Services:** `src/components/sections/Services.tsx`
- **Projects:** `src/components/sections/Projects.tsx`
- **Team:** `src/components/sections/Team.tsx`
- **Testimonials:** `src/components/sections/Testimonials.tsx`
- **Contact Info:** `src/components/sections/Contact.tsx`

### Change Colors

Update the color scheme in `src/index.css`:

```css
:root {
  --primary: 35 95% 55%; /* Amber color */
}
```

### Add Your Logo

Replace the logo in `src/components/Navbar.tsx`

## 📄 Pages

- **Home** - Hero section, services overview, featured projects
- **About** - Company mission and values
- **Services** - Detailed service offerings
- **Projects** - Completed and ongoing projects
- **Team** - Leadership team
- **Machinery** - Plant and machinery showcase
- **Contact** - Contact form and information

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

**Promising Ventures Pvt Ltd**
- 📍 Noida, Uttar Pradesh, India

---

<div align="center">
  <strong>Built with ❤️ by Promising Ventures Team</strong>
  <br>
  <sub>Transforming visions into structures since 2010</sub>
</div>
