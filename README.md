# Amaze PMS - Modern Integrated Property & Facility Management Platform

A high-performance, modern redesign for **Amaze PMS** ([amazepms.com](https://www.amazepms.com)) built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis Inertial Smooth Scrolling**.

This web platform showcases end-to-end property & service management capabilities including 24/7 technical command dispatch, IoT electromechanical telemetry, HVAC engineering, janitorial soft services, annual maintenance contract (AMC) packages, and technical workforce recruitment.

---

## 🌟 Key Features & Innovations

- **Obsidian Emerald Glassmorphism Theme**: Custom design system featuring deep dark emerald foundations (`#040d0a`), radial mint & teal mesh lights (`#10b981`, `#34d399`), 56px grid layout matrix, translucent frosted panels (`glass-card`, `glass-nav`, `glass-footer`), and glowing accents.
- **Lenis Physics Smooth Inertial Scrolling**: Smooth scroll physics simulating vehicle deceleration inertia for a fluid navigation experience across all viewports.
- **Framer Motion Animation Suite**:
  - **Dynamic Hero Slider**: 4 interactive slide carousels with telemetry consoles, progress indicators, and auto-play controls.
  - **Infinite Client Marquee**: Continuous smooth sliding carousel showcasing enterprise client brands and metrics.
  - **Spring Pill Navigation**: Framer Motion `layoutId="activeNavPill"` active tab indicators on Navbar, Services, Clients, Careers, and Gallery.
  - **Viewport Reveal Animations**: Scroll-triggered staggered entrances (`whileInView`) for feature cards, timeline milestones, and benchmark comparison matrices.
- **Interactive SLA & AMC Cost Estimator**: Real-time calculator allowing visitors to adjust property square footage and service scopes to receive instant SLA response time guarantees and AMC package recommendations.
- **Operations Gallery with Lightbox Modal**: High-resolution Unsplash field operation photos with category filters and full-screen glass modal lightbox viewing.
- **Interactive Forms & Real-Time Ticket Generation**: Custom service dispatch, AMC quote, manpower requisition, and job application forms with dynamic ticket ID feedback (`#APMS-XXXXXX` & `#JOB-XXXXXX`).
- **Complete Next.js SEO & Performance**: `Metadata` title/description tags on every route and dynamic loading skeleton UI (`loading.tsx`).

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16.2](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Custom Glassmorphism System |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) (`lenis`) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Image Hosting** | Next.js Image Optimization with Unsplash `remotePatterns` |

---

## 🗺️ Sitemap & Route Breakdown

| Route | Page Name | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Hero slider, Client marquee, Strategic pillars, Services grid, SLA estimator, Why Choose Us matrix, Contact section. |
| `/services` | **Services & AMC** | Filterable service catalog, AMC plan matrix (Silver, Gold Enterprise, Platinum Premier), quote modal. |
| `/about-us` | **About Us** | Corporate vision/mission tab switcher, 2012–2026 milestone timeline, executive team grid, ISO certifications. |
| `/our-strength` | **Our Strength** | 6 operational capability pillars, technology stack grid (IoT, CAFM, Mobile Tech App, BMS). |
| `/our-clients` | **Our Clients** | Sector filterable case studies (Commercial, Hospitals, Residential), quote testimonials, 5-star ratings. |
| `/gallery` | **Gallery** | Unsplash picture gallery, category filters, interactive lightbox modal viewer. |
| `/recruitment` | **Recruitment** | 5-step manpower sourcing workflow, trade pool categories, interactive staffing request form. |
| `/careers` | **Careers** | Culture & benefits grid, job department tabs, open position listings, interactive applicant drawer. |
| `/contact-us` | **Contact Us** | 24/7 emergency dispatch line (+1 800-AMAZE), headquarters location map container, FAQ accordion. |

---

## 📂 Project Structure

```text
amazepms/
├── public/                     # Static assets & SVG icons
├── src/
│   ├── app/
│   │   ├── (home)/             # Main Route Group with Shared Glass Layout
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── services/       # Services & AMC Page
│   │   │   ├── about-us/       # About Us Page
│   │   │   ├── our-strength/   # Our Strength Page
│   │   │   ├── our-clients/    # Our Clients Page
│   │   │   ├── gallery/        # Operations Gallery Page
│   │   │   ├── recruitment/    # Manpower Recruitment Page
│   │   │   ├── careers/        # Careers & Jobs Page
│   │   │   ├── contact-us/     # Contact Us Page
│   │   │   ├── loading.tsx     # Global Glassmorphism Loading Skeleton
│   │   │   └── layout.tsx      # Shared Layout with Lenis SmoothScroll
│   │   ├── globals.css         # Theme tokens, custom glass scrollbar & bg pattern
│   │   └── layout.tsx          # Root Layout & Geist Font setup
│   └── component/
│       ├── home/               # Hero, AboutUsSection, WhyChooseUs, ContactSection
│       ├── services/           # Services catalog & AMC plans
│       ├── about-us/           # Corporate timeline & leadership team
│       ├── our-strength/       # Operational pillars & tech stack
│       ├── our-clients/        # Case studies & testimonials
│       ├── gallery/            # Picture gallery & lightbox modal
│       ├── recruitment/        # Manpower sourcing & requisition form
│       ├── careers/            # Open positions & job apply drawer
│       ├── contact-us/         # Contact cards & FAQ accordion
│       └── shared/             # Navbar, Footer, ServiceModal, SmoothScroll
├── next.config.ts              # Unsplash remotePatterns image config
├── tsconfig.json               # TypeScript config
└── package.json                # Project dependencies
```

---

## 🚀 Getting Started & Local Setup

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/theabsparrow/amazespms.git
cd amazepms
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🛡️ License & Acknowledgments

- Designed & Developed for the **Amaze PMS** Website Redesign Assessment.
- Powered by Next.js, Tailwind CSS, Framer Motion, and Lenis.
