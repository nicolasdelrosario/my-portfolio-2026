"use client";

import { motion } from "framer-motion";

import type { Item } from "@/components/layout/types";
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/config/landing";

type Props = {
  item: Item;
};

export function Education({ item }: Props) {
  return (
    <motion.div variants={item} className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold">Educación</h2>

      <div className="space-y-5">
        {RESUME_DATA.education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {edu.period}
              </span>
            </div>
            {edu.extra && (
              <Badge variant="outline" className="mt-2 text-xs">
                {edu.extra}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
