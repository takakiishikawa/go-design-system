"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// lucide-react に Google アイコンがないため inline SVG で実装
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export interface LoginPageProps {
  /** プロダクト名（例: "NativeGo"） */
  productName: string;
  /** ロゴコンポーネント */
  productLogo?: React.ReactNode;
  /** キャッチコピー（例: "ネイティブ英語学習を加速する"） */
  tagline?: string;
  /** Google OAuth 開始関数 */
  onGoogleSignIn: () => void | Promise<void>;
  /** ローディング中フラグ */
  isLoading?: boolean;
}

export function LoginPage({
  productName,
  productLogo,
  tagline,
  onGoogleSignIn,
  isLoading = false,
}: LoginPageProps) {
  const [pending, setPending] = React.useState(false);

  async function handleSignIn() {
    setPending(true);
    try {
      await onGoogleSignIn();
    } finally {
      setPending(false);
    }
  }

  const loading = isLoading || pending;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm border border-border">
        <CardHeader className="flex flex-col items-center gap-3 pb-2 pt-8">
          {/* ロゴ */}
          {productLogo && (
            <div className="flex size-14 items-center justify-center rounded-lg border border-border bg-surface-subtle text-foreground">
              {productLogo}
            </div>
          )}

          {/* プロダクト名 */}
          <CardTitle
            className="text-center"
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-weight-semibold)",
            }}
          >
            {productName}
          </CardTitle>

          {/* タグライン */}
          {tagline && (
            <CardDescription className="text-center text-sm leading-relaxed">
              {tagline}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-8 pb-10 pt-6">
          {/* Google サインインボタン */}
          <Button
            type="button"
            size="lg"
            className="w-full gap-3 text-base"
            onClick={handleSignIn}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <span className="size-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            ) : (
              <GoogleIcon className="size-5 shrink-0" />
            )}
            {loading ? "サインイン中..." : "Google でサインイン"}
          </Button>

          {/* 利用規約・プライバシーポリシー */}
          <p className="text-center text-xs text-muted-foreground">
            サインインすることで
            <a
              href="/terms"
              className="underline underline-offset-2 hover:text-foreground"
            >
              利用規約
            </a>
            および
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:text-foreground"
            >
              プライバシーポリシー
            </a>
            に同意したものとみなされます。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
