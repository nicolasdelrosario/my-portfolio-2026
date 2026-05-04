"use client";
import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

import type { Item } from "@/components/layout/types";

type Props = {
  item: Item;
};

function subscribe() {
  return () => {};
}

function getClientSnapshot(): boolean {
  const uaData = (
    navigator as Navigator & {
      userAgentData?: { platform: string };
    }
  ).userAgentData;

  const platform = uaData?.platform ?? navigator.userAgent;
  return /Mac|iPhone|iPad|iPod/i.test(platform);
}

function getServerSnapshot(): boolean {
  return false;
}

export function Command({ item }: Props) {
  const isMac = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  return (
    <motion.div
      variants={item}
      className="flex items-center justify-end gap-1 text-xs text-muted-foreground"
    >
      <span>Press</span>
      <kbd className="rounded border border-border bg-muted px-2 py-1 font-mono text-xs text-foreground">
        {isMac ? "⌘ K" : "Ctrl K"}
      </kbd>
      <span>for commands</span>
    </motion.div>
  );
}
