"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import type { Item } from "@/components/layout/types";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/config/landing";
import { ROUTES } from "@/core/routes";

type Props = {
  item: Item;
};

export function Header({ item }: Props) {
  return (
    <motion.div variants={item} className="space-y-6">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Avatar className="h-24 w-24 md:h-28 md:w-28">
            <AvatarImage
              src={RESUME_DATA.personalInfo.avatarUrl}
              alt="Profile"
            />
            <AvatarFallback className="text-3xl">
              {RESUME_DATA.personalInfo.initials}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <div className="flex-1 space-y-3 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {RESUME_DATA.personalInfo.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-muted-foreground">
              {RESUME_DATA.personalInfo.title}
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {RESUME_DATA.personalInfo.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground md:justify-start">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{RESUME_DATA.personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span>{RESUME_DATA.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span>{RESUME_DATA.personalInfo.phone}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-2 md:justify-start">
            {RESUME_DATA.personalInfo.socials.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <social.icon className="h-4 w-4" />
                {social.name}
              </Button>
            ))}
            <Button
              size="sm"
              className="gap-2"
              nativeButton={false}
              render={
                <Link
                  href={ROUTES.cv.path}
                  download="CV_Nicolas_Del_Rosario.pdf"
                />
              }
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
