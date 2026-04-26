"use client";

import { useState } from "react";
import {
  LoadingOverlay,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  PageHeader,
} from "@takaki/go-design-system";

function DemoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </section>
  );
}

export default function LoadingOverlayPage() {
  const [loading, setLoading] = useState(false);

  function simulate() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="LoadingOverlay"
        description="セクション単位のローディング表示。children の上にスピナーをオーバーレイする。"
        import="import { LoadingOverlay } from '@takaki/go-design-system'"
      />
      ...
    </div>
  );
}

Two changes made: `PageHeader` moved into the `@takaki/go-design-system` import (removing the nonexistent `@/app/ui/demo-section` import), and `DemoSection` defined inline following the same pattern all other showcase pages use.