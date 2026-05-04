"use client";

import { motion } from "framer-motion";

import { Education } from "@/components/layout/education";
import { Experience } from "@/components/layout/experience";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Languages } from "@/components/layout/languages";
import { Projects } from "@/components/layout/projects";
import { Skills } from "@/components/layout/skills";
import { Separator } from "@/components/ui/separator";

export function ResumeCard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="mx-auto w-full max-w-4xl bg-background p-6 md:p-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Header */}
          <Header item={item} />

          <Separator />

          {/* Experience */}
          <Experience item={item} />

          <Separator />

          {/* Projects */}
          <Projects item={item} />

          <Separator />

          {/* Skills */}
          <Skills item={item} />

          <Separator />

          {/* Education */}
          <Education item={item} />

          <Separator />

          {/* Languages */}
          <Languages item={item} />

          <Separator />

          {/* Command */}
          {/* <Command item={item} /> */}
          <Footer item={item} />
        </motion.div>
      </div>
    </>
  );
}
