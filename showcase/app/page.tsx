import { Badge, Card, CardContent, CardHeader, CardTitle } from "@takaki/go-design-system"
import { Layers, Palette, FileText, Package } from "lucide-react"

const sections = [
  {
    icon: Palette,
    title: "デザイントークン",
    description: "カラー・スペーシング・角丸・フォントなど、Goシリーズ共通のデザイン変数一覧",
    href: "/tokens",
    count: "tokens.css",
  },
  {
    icon: Package,
    title: "コンポーネント",
    description: "shadcn/ui ベースの UI コンポーネント + Goシリーズ独自コンポーネント",
    href: "/components/button",
    count: "13コンポーネント",
  },
  {
    icon: FileText,
    title: "テンプレート",
    description: "DashboardPage / ConceptPage / SettingsPage / LoginPage の実装例",
    href: "/templates/dashboard-page",
    count: "4テンプレート",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 py-4">
      {/* Hero */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Layers className="size-6 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Go Design System</h1>
        </div>
        <p className="max-w-2xl text-base text-muted-foreground">
          NativeGo / CareGo / KenyakuGo / TaskGo / CookGo / PhysicalGo ——
          Goシリーズ全プロダクトの共通デザインシステムです。
          各プロダクトに組み込む前にコンポーネント・テンプレート・トークンをここで確認できます。
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js 16</Badge>
          <Badge variant="secondary">React 19</Badge>
          <Badge variant="secondary">Tailwind v4</Badge>
          <Badge variant="secondary">shadcn/ui New York</Badge>
          <Badge variant="secondary">TypeScript</Badge>
        </div>
      </div>

      {/* Nav Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sections.map((s) => (
          <a key={s.title} href={s.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50 group-hover:bg-surface-subtle">
              <CardHeader className="pb-2">
                <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <s.icon className="size-5" />
                </div>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">{s.description}</p>
                <span className="text-xs font-medium text-primary">{s.count}</span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Usage guide */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">各プロダクトでの使い方</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            各プロダクトの <code className="rounded bg-surface-subtle px-1 py-0.5 text-xs font-mono">app/layout.tsx</code> で <code className="rounded bg-surface-subtle px-1 py-0.5 text-xs font-mono">DesignTokens</code> コンポーネントを使ってトークンを注入します。
          </p>
          <pre className="overflow-x-auto rounded-md border border-border bg-surface-subtle p-4 text-xs">
{`import { DesignTokens, AppLayout, AppSidebar } from '@takaki/go-design-system'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <DesignTokens primaryColor="#E74C3C" primaryColorHover="#C0392B" />
      </head>
      <body>
        <AppLayout sidebar={<AppSidebar currentApp="NativeGo" ... />}>
          {children}
        </AppLayout>
      </body>
    </html>
  )
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
