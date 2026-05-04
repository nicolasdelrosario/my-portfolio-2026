# Nicolas Del Rosario — Portfolio 2026

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

A modern, high-performance personal portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project is designed to be fully configuration-driven, allowing you to manage your professional identity, projects, and skills through a single data file.

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

- **🚀 High Performance**: Optimized with Next.js 16 and Turbopack for lightning-fast development and production builds.
- **🎨 Modern UI/UX**: Clean, minimal design using [shadcn/ui](https://ui.shadcn.com/) and [Framer Motion](https://www.framer.com/motion/) for smooth animations.
- **🌗 Dark Mode**: Full support for system preferences and manual toggle using `next-themes`.
- **⌨️ Command Palette**: Quick navigation and actions via a powerful command interface (`cmdk`).
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **⚙️ Config Driven**: Manage all content (Experience, Projects, Skills) in `config/landing.ts` without touching the component logic.
- **🔍 SEO Optimized**: Built-in metadata, sitemap, and robots.txt generation.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/), [Base UI](https://base-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Management**: Static configuration via TypeScript objects.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: `v20.x` or higher (Recommended `v22+`)
- **pnpm**: `v9.x` or higher (Preferred package manager)
- **Git**: For version control

---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nicolasdelrosario/my-portfolio-2026.git
   cd my-portfolio-2026
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables** (Optional):
   Create a `.env.local` file if you need to add custom environment variables (e.g., Analytics tokens).

---

## ⚙️ Configuration

The entire portfolio is driven by the data in the `config/` directory.

### Personal Data
Edit `config/landing.ts` to update your professional information.

**Note:** To update your CV, replace the file at `public/cv.pdf`.

```typescript
// config/landing.ts
export const RESUME_DATA = {
  personalInfo: {
    name: "Your Name",
    title: "Your Role",
    summary: "A brief bio about yourself...",
    // ...
  },
  experience: [/* ... */],
  projects: [/* ... */],
  skills: [/* ... */],
  // ...
};
```

### Site Metadata
Edit `config/site.ts` for SEO and global site settings:

```typescript
// config/site.ts
export const siteConfig = {
  name: "Your Site Name",
  description: "Global site description",
  url: "https://yourdomain.com",
  // ...
};
```

---

## 💻 Usage

### Development Mode
Run the development server with Turbopack:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
Create an optimized production build:
```bash
pnpm build
```

### Preview Production
Run the built application locally:
```bash
pnpm start
```

### Code Quality
```bash
pnpm lint       # Run ESLint
pnpm format     # Format code with Prettier
pnpm typecheck  # Run TypeScript compiler check
```

---

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages, Layouts, Metadata)
├── components/       # UI Components
│   ├── layout/       # Section-specific components (Experience, Projects, etc.)
│   ├── ui/           # Shared UI components (Buttons, Inputs, etc.)
│   └── icons/        # Custom SVG icons
├── config/           # Site and Landing page configuration (Content)
├── core/             # Core logic and shared types
├── public/           # Static assets (Images, Icons)
├── lib/              # Utility functions
└── hooks/            # Custom React hooks
```

---

## 🛠 Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Dependencies not installing** | Ensure you are using `pnpm`. Try `pnpm store prune` and reinstall. |
| **Tailwind styles not applying** | Verify that `postcss.config.mjs` is correctly configured for Tailwind 4. |
| **Next.js build errors** | Run `pnpm typecheck` to identify TypeScript errors before building. |
| **Port 3000 already in use** | Run `pnpm dev --port 3001` or kill the existing process. |

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please follow these steps:

1. **Fork** the project.
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the branch (`git push origin feature/AmazingFeature`).
5. **Open** a Pull Request.

Please ensure your code follows the existing style and passes all linting/type checks.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE.md](LICENSE.md) file for details.

---

## ✉️ Contact

**Nicolas Del Rosario**
- Website: [nicolasdelrosario.com](https://www.nicolasdelrosario.com)
- Email: [delrosariolozanonicolas@gmail.com](mailto:delrosariolozanonicolas@gmail.com)
- LinkedIn: [@nicolasdelrosario](https://www.linkedin.com/in/nicolasdelrosario)
- GitHub: [@nicolasdelrosario](https://github.com/nicolasdelrosario)

---

Built with love by [Nicolas Del Rosario](https://github.com/nicolasdelrosario)
