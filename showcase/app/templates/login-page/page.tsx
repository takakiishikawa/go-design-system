"use client"

import { LoginPage } from "@takaki/go-design-system"
import { Zap } from "lucide-react"

export default function LoginPageDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-2">
        <p className="text-xs text-primary font-medium">
          テンプレートプレビュー — <code>LoginPage</code> コンポーネント（Google OAuth 専用）
        </p>
      </div>
      <div className="rounded-lg border border-border overflow-hidden" style={{ minHeight: "500px" }}>
        <LoginPage
          productName="NativeGo"
          productLogo={<Zap className="size-6 text-primary" />}
          tagline="英語学習を日常に溶け込ませるツール"
          onGoogleSignIn={() => alert("Google サインイン（デモ）")}
        />
      </div>
    </div>
  )
}
