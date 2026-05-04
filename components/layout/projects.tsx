"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

import type { Item } from "@/components/layout/types";
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/config/landing";

type Props = {
  item: Item;
};

export function Projects({ item }: Props) {
  return (
    <motion.div variants={item} className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold">Proyectos</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer space-y-3 rounded-lg bg-accent/5 p-5 transition-colors hover:bg-accent/10"
          >
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground">
                  {project.name}
                </h3>
                {project.stars && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
