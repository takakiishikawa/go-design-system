import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * フォームのアクションボタン行。Atlassian規約: Primary右・Cancel左。
 * ボタンはcontent-fit（flex-1やw-fullは使わない）。
 */
export function FormActions({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex items-center justify-end gap-3 pt-6", className)}>
      {children}
    </div>
  );
}
