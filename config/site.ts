export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nicolas Del Rosario",
  description:
    "Desarrollador apasionado con más de 1 año de experiencia construyendo aplicaciones web escalables. Especializado en React, Node.js y arquitectura en la nube.",
  url: "https://www.nicolasdelrosario.com",
  email: "delrosariolozanonicolas@gmail.com",
  phone: "+51 913 621 524",
  address: "Lima, Perú",
  version: "1.0.0",
  social: {
    linkedin: "https://www.linkedin.com/in/nicolasdelrosario",
    github: "https://github.com/nicolasdelrosario",
  },
} as const;
