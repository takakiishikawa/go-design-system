"use client";

import { useEffect } from "react";
import { useColor } from "./color-provider.js";

export function DynamicColor() {
  const { selected } = useColor();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", selected.color);
    root.style.setProperty("--color-primary-hover", selected.hover);
    root.style.setProperty("--primary", selected.color);
  }, [selected]);

  return null;
}