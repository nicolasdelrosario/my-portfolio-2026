"use client";

import { motion } from "framer-motion";

import type { Item } from "@/components/layout/types";
import { RESUME_DATA } from "@/config/landing";

type Props = {
  item: Item;
};

export function Languages({ item }: Props) {
  return (
    <motion.div variants={item} className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold">Idiomas</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {RESUME_DATA.languages.map((language, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {language.lang}
              </span>
              <span className="text-xs text-muted-foreground">
                {language.level}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-accent/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${language.percentage}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="h-full rounded-full bg-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
