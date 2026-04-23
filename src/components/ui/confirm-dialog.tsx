"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import { Spinner } from "./spinner";

export interface ConfirmDialogProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "destructive";
  onConfirm: () => void | Promise<void>;
}

export function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = "確認",
  cancelLabel = "キャンセル",
  variant = "default",
  onConfirm,
}: ConfirmDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleConfirm(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await onConfirm();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            className={cn(
              variant === "destructive" &&
                buttonVariants({ variant: "destructive" }),
            )}
            disabled={loading}
            onClick={handleConfirm}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Spinner size="sm" />
                {confirmLabel}
              </span>
            ) : (
              confirmLabel
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
ConfirmDialog.displayName = "ConfirmDialog";
