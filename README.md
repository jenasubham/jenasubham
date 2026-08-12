# ⚡ Subham Jena — Frontend Software Engineer Portfolio

An obsidian dark-mode, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed with editorial typography, smooth 60fps rAF scroll interpolation, custom 3D card tilt physics, and zero heavy animation dependencies.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 (Vanilla CSS Custom Properties & Design Tokens)
- **Typography**: Cormorant Garamond, Geist Sans, Geist Mono
- **Analytics**: Vercel Analytics (`@vercel/analytics`)
- **Deployment**: Vercel

---

## ✨ Key Features & Architecture Highlights

1. **Obsidian Dark Mode Design System**: Locked-in dark aesthetic with curated `#131217` obsidian background and `#B9F2C8` mint accent highlights.
2. **Interactive ASCII Canvas Portrait**: Real-time canvas particle simulation with mouse distance physics and ambient radial depth.
3. **TracingBeam Experience Timeline**: Dynamic SVG path tracking with custom diagonal circuit jogs and dead-centered experience nodes.
4. **Capabilities Proximity Wave Animation**: Custom JS `requestAnimationFrame` lerp loop applying exponential proximity falloff across capability items.
5. **Interactive 3D Tilt Cards**: Custom `<TiltCard>` component with perspective rotation (`rotateX`, `rotateY`) and radial cursor specular glare overlay.
6. **Zero-Lag Motion System**: Throttled scroll state machine updating CSS variables directly on `<html>` for optimal main-thread performance.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.x` or higher
- **Package Manager**: `npm`

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/jenasubham/portfolio.git

# Navigate into project directory
cd portfolio

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 📦 Production Build

```bash
# Create an optimized production build
npm run build

# Preview production build locally
npm run start
```

---

## 📄 License

MIT © [Subham Jena](https://github.com/jenasubham)
