"use client";

import { motion } from "framer-motion";

import type { Item } from "@/components/layout/types";

type Props = {
  item: Item;
};

export function Footer({ item }: Props) {
  return (
    <motion.div
      variants={item}
      className="flex items-center justify-end gap-1 text-xs text-muted-foreground"
    >
      <span>Hecho por Nicolas · 0 bugs en producción (por ahora)</span>
    </motion.div>
  );
}
