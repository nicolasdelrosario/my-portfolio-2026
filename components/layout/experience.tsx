"use client";

import { motion } from "framer-motion";

import type { Item } from "@/components/layout/types";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RESUME_DATA } from "@/config/landing";

type Props = {
  item: Item;
};

export function Experience({ item }: Props) {
  return (
    <motion.div variants={item} className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        Experiencia
      </h2>

      <div className="space-y-8">
        {RESUME_DATA.experience.map((job, index) => (
          <div key={index} className="space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="font-medium">{job.company}</p>
                <p className="text-xs text-muted-foreground">{job.location}</p>
              </div>
              <Badge variant="secondary" className="w-fit">
                {job.period}
              </Badge>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 text-accent">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            {index < RESUME_DATA.experience.length - 1 && (
              <Separator className="mt-6" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
