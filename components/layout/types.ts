export type Item = {
  hidden: { opacity: number; y: number };
  show: { opacity: number; y: number };
};

export type Container = {
  hidden: { opacity: number };
  show: { opacity: number; transition: { staggerChildren: number } };
};

export type Theme = "light" | "dark" | "system";

export type Language = "es" | "en";
