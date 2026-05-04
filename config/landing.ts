import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export const RESUME_DATA = {
  personalInfo: {
    name: "Nicolas Del Rosario",
    title: "Full Stack Developer",
    summary:
      "Desarrollador apasionado con más de 1 año de experiencia construyendo aplicaciones web escalables. Especializado en React, Node.js y arquitectura en la nube.",
    location: "Lima, PE",
    email: "delrosariolozanonicolas@gmail.com",
    phone: "+51 913 621 524",
    avatarUrl: "/icon.jpeg",
    initials: "ND",
    socials: [
      {
        name: "GitHub",
        icon: GithubIcon,
        url: "https://github.com/nicolasdelrosario",
      },
      {
        name: "LinkedIn",
        icon: LinkedinIcon,
        url: "https://www.linkedin.com/in/nicolasdelrosario",
      },
      // { name: "Portafolio", icon: Globe, url: "#" },
    ],
  },
  experience: [
    {
      role: "Full Stack Developer",
      company: "LainDS",
      period: "2026",
      location: "Lima, PE",
      achievements: [
        "Desarrollé una plataforma de matrículas académicas gestionando frontend y backend end-to-end.",
        "Diseñé y optimicé la base de datos con Prisma + MongoDB para alto rendimiento y escalabilidad.",
        "Digitalicé procesos de inscripción, pagos y gestión administrativa reduciendo trabajo manual.",
        "Construí paneles internos y dashboards para seguimiento operativo en tiempo real.",
        "Implementé una arquitectura modular escalable que aceleró nuevas funcionalidades y mantenimiento.",
        "Optimicé rendimiento y experiencia de usuario en frontend y backend.",
      ],
    },
    {
      role: "Junior Full Stack Developer",
      company: "LetyMind",
      period: "2024 - 2025",
      location: "Lima, PE",
      achievements: [
        "Desarrollé sistemas internos y APIs para optimizar operaciones administrativas.",
        "Automaticé procesos críticos de comunicación e integraciones por WhatsApp usando n8n, Chatwoot y Evolution API.",
        "Implementé observabilidad y monitoreo con Grafana, Prometheus y Node Exporter para mejorar estabilidad operativa.",
        "Optimicé flujos internos de datos mediante soluciones low-code e integración de bases SQL/NoSQL.",
        "Creé documentación técnica y guías internas para acelerar onboarding y entregas.",
      ],
    },
    {
      role: "Frontend Intern",
      company: "EasyHotel",
      period: "2024",
      location: "Lima, PE",
      achievements: [
        "Desarrollé componentes responsivos con React y TypeScript para flujos de reserva.",
        "Colaboré con diseño UX para mejorar la experiencia de checkout y conversión.",
        "Optimicé rendimiento frontend mediante lazy loading y reducción de bundle size.",
        "Implementé pruebas E2E y mejoras de accesibilidad en interfaces críticas.",
      ],
    },
  ],
  projects: [
    {
      name: "API de Automatización WhatsApp",
      tech: ["Node.js", "Hono", "TypeScript", "n8n", "whatsapp-web.js"],
      desc: "REST API for automated WhatsApp messaging with broadcasting, replies, QR authentication and seamless n8n workflow integration.",
      url: "https://github.com/nicolasdelrosario/whatsapp-n8n-server",
      stars: "26",
    },
    {
      name: "Inventra — Gestión de Inventario",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Elysia",
        "PostgreSQL",
        "Drizzle ORM",
      ],
      desc: "Plataforma SaaS multiempresa para control de inventario, almacenes, órdenes de compra, movimientos y stock en tiempo real.",
      url: "https://inventra.nicolasdelrosario.com",
    },
    {
      name: "The Koro — E-commerce",
      tech: ["Next.js", "Tailwind", "Shadcn UI", "NestJS", "PostgreSQL"],
      desc: "Plataforma e-commerce moderna con gestión de inventario, pagos y operaciones administrativas escalables.",
      url: "https://the-koro.nicolasdelrosario.com",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "ElysiaJS",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Docker",
        "Linux",
        "AWS",
        "CI/CD",
        "Vercel",
        "DigitalOcean",
        "Grafana",
        "Prometheus",
      ],
    },
  ],
  education: [
    {
      degree: "Desarrollo de Software",
      institution: "Instituto San Ignacio de Loyola",
      period: "2022 - 2024",
      extra: "Egresado",
    },
    // {
    //   degree: "Full Stack Web Development",
    //   institution: "Code Academy Bootcamp",
    //   period: "2019",
    //   extra: "Certificate",
    // },
    // {
    //   degree: "AWS Certified Solutions Architect",
    //   institution: "Amazon Web Services",
    //   period: "2022",
    //   extra: null,
    // },
  ],
  languages: [
    { lang: "Español", level: "Nativo", percentage: 100 },
    { lang: "Inglés", level: "Profesional", percentage: 75 },
    { lang: "Portugués", level: "Básico", percentage: 30 },
  ],
};
