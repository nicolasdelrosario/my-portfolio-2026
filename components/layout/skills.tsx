"use client";

import { motion } from "framer-motion";

import type { Item } from "@/components/layout/types";
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/config/landing";

type Props = {
  item: Item;
};

export function Skills({ item }: Props) {
  return (
    <motion.div variants={item} className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        Habilidades
      </h2>

      <div className="space-y-5">
        {RESUME_DATA.skills.map((group, index) => (
          <div key={index}>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-default transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
