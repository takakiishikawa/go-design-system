import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Separator,
} from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";
import {
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  ArrowRight,
  ShoppingCart,
  Users,
  BarChart2,
  Star,
  MapPin,
  Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Helper: KPI trend indicator                                          */
/* ------------------------------------------------------------------ */
function Trend({ value, up }: { value: string; up: boolean }) {
  const Icon = up ? TrendingUp : TrendingDown;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-xs font-medium ${up ? "text-[color:var(--color-success)]" : "text-destructive"}`}
    >
      <Icon className="size-3" />
      {value}
    </span>
  );
}

export default function CardPage() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <PageHeader
        title="Card"
        description="コンテンツをグループ化するコンテナ。Header・Content・Footer・Title・Description を組み合わせ、様々なレイアウトパターンに対応。"
        import="import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@takaki/go-design-system'"
      />

      {/* ---------------------------------------------------------------- */}
      {/* 1. Basic                                                          */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="基本">
        <Card className="w-72">
          <CardHeader>
            <CardTitle>カードタイトル</CardTitle>
            <CardDescription>
              補足説明テキストをここに記載します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              本文コンテンツがここに入ります。
            </p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button size="sm">確認</Button>
            <Button size="sm" variant="outline">
              キャンセル
            </Button>
          </CardFooter>
        </Card>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 2. KPI / Stat cards                                               */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="KPI カード（数値表示）">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              label: "今月の売上",
              value: "¥1,240,000",
              trend: "+12.3%",
              up: true,
              icon: BarChart2,
            },
            {
              label: "アクティブユーザー",
              value: "3,482",
              trend: "+5.1%",
              up: true,
              icon: Users,
            },
            {
              label: "解約率",
              value: "2.4%",
              trend: "+0.3%",
              up: false,
              icon: TrendingDown,
            },
          ].map((item) => (
            <Card key={item.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription className="text-xs">
                  {item.label}
                </CardDescription>
                <item.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground">
                  {item.value}
                </p>
                <Trend value={item.trend} up={item.up} />
              </CardContent>
            </Card>
          ))}
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 3. Horizontal / Row card                                          */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="横並び（ユーザー・リスト）">
        <div className="flex w-full max-w-md flex-col gap-2">
          {[
            {
              name: "山田 太郎",
              role: "プロダクトマネージャー",
              avatar: "YT",
              active: true,
            },
            {
              name: "鈴木 花子",
              role: "フロントエンドエンジニア",
              avatar: "SH",
              active: false,
            },
            {
              name: "田中 一郎",
              role: "デザイナー",
              avatar: "TI",
              active: true,
            },
          ].map((u) => (
            <Card key={u.name}>
              <CardContent className="flex items-center gap-3 p-4">
                <Avatar className="size-9 shrink-0">
                  <AvatarFallback className="text-xs">
                    {u.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {u.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {u.role}
                  </p>
                </div>
                <Badge
                  variant={u.active ? "default" : "secondary"}
                  className="shrink-0 text-xs"
                >
                  {u.active ? "在籍" : "休止"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 4. Clickable / Navigation cards                                   */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="クリッカブルカード（ナビゲーション）">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: ShoppingCart,
              title: "受注管理",
              desc: "注文一覧・処理状況の確認",
              count: "12件",
            },
            {
              icon: Users,
              title: "顧客管理",
              desc: "顧客情報・購買履歴の管理",
              count: "3,482件",
            },
            {
              icon: BarChart2,
              title: "レポート",
              desc: "売上・在庫の分析レポート",
              count: "5種類",
            },
          ].map((item) => (
            <a key={item.title} href="#" className="group">
              <Card className="h-full transition-colors group-hover:border-[var(--color-primary)] group-hover:bg-surface-subtle">
                <CardHeader className="pb-2">
                  <div
                    className="mb-2 flex size-9 items-center justify-center rounded-md text-primary-foreground"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <item.icon className="size-4" />
                  </div>
                  <CardTitle className="flex items-center justify-between text-sm">
                    {item.title}
                    <ArrowRight
                      className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {item.count}
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 5. Media card                                                     */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="メディアカード（画像付き）">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              tag: "ヘルスケア",
              title: "毎日の歩数目標を達成するコツ",
              meta: "2024/04/10",
              read: "3 min",
            },
            {
              tag: "レシピ",
              title: "簡単10分で作れる朝食アイデア",
              meta: "2024/04/08",
              read: "5 min",
            },
            {
              tag: "節約",
              title: "食費を月2万円に抑えた方法",
              meta: "2024/04/05",
              read: "4 min",
            },
          ].map((item) => (
            <Card key={item.title} className="overflow-hidden">
              {/* Image placeholder */}
              <div
                className="h-32 w-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)",
                }}
              />
              <CardHeader className="pb-1 pt-3">
                <Badge variant="secondary" className="w-fit text-xs">
                  {item.tag}
                </Badge>
                <CardTitle className="mt-1 line-clamp-2 text-sm leading-snug">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {item.meta}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {item.read}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 6. Left-accent / Colored border card                             */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="アクセントカード（ステータス・通知）">
        <div className="flex w-full max-w-md flex-col gap-2">
          {[
            {
              color: "var(--color-primary)",
              label: "情報",
              text: "新機能がリリースされました。詳細はリリースノートをご確認ください。",
            },
            {
              color: "var(--color-info)",
              label: "ヒント",
              text: "情報カラーを使ったアクセントで視覚的な差別化ができます。",
            },
            {
              color: "var(--color-success)",
              label: "成功",
              text: "データのエクスポートが完了しました。",
            },
            {
              color: "var(--color-danger)",
              label: "エラー",
              text: "接続に失敗しました。ネットワーク設定を確認してください。",
            },
          ].map((item) => (
            <Card
              key={item.label}
              className="overflow-hidden pl-0"
              style={{ borderLeftColor: item.color, borderLeftWidth: 3 }}
            >
              <CardContent className="py-3 pl-4 pr-4">
                <p
                  className="mb-0.5 text-xs font-semibold"
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 7. Compact list card                                              */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="コンパクトリスト（アクティビティ）">
        <Card className="w-full max-w-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">最近のアクティビティ</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {[
              {
                user: "山田",
                action: "タスクを完了しました",
                time: "5分前",
                avatar: "Y",
              },
              {
                user: "鈴木",
                action: "コメントを追加しました",
                time: "23分前",
                avatar: "S",
              },
              {
                user: "田中",
                action: "ファイルをアップロード",
                time: "1時間前",
                avatar: "T",
              },
              {
                user: "佐藤",
                action: "レポートを共有しました",
                time: "3時間前",
                avatar: "Sa",
              },
            ].map((item, i, arr) => (
              <div key={i}>
                <div className="flex items-center gap-3 px-4 py-3">
                  <Avatar className="size-7 shrink-0">
                    <AvatarFallback
                      className="text-xs"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "#fff",
                      }}
                    >
                      {item.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-foreground">
                      <span className="font-medium">{item.user}</span>さんが
                      {item.action}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                {i < arr.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="ghost" size="sm" className="w-full text-xs">
              すべて表示 <ArrowRight className="ml-1 size-3" />
            </Button>
          </CardFooter>
        </Card>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 8. Review / Rating card                                           */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="レビューカード">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              name: "佐藤 健",
              rating: 5,
              text: "非常に使いやすく、業務効率が大幅に改善されました。デザインも洗練されていて満足しています。",
              date: "2024/04",
            },
            {
              name: "中村 美咲",
              rating: 4,
              text: "全体的に良いサービスです。一部の機能に改善の余地がありますが、サポートが丁寧で助かっています。",
              date: "2024/03",
            },
          ].map((r) => (
            <Card key={r.name}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8">
                      <AvatarFallback className="text-xs">
                        {r.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5"
                        style={{
                          color:
                            i < r.rating ? "var(--color-warning)" : undefined,
                        }}
                        fill={i < r.rating ? "var(--color-warning)" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{r.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </DemoSection>

      {/* ---------------------------------------------------------------- */}
      {/* 9. Action card with secondary color                               */}
      {/* ---------------------------------------------------------------- */}
      <DemoSection title="プランカード">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              name: "フリー",
              price: "¥0",
              color: "var(--color-border-default)",
              fg: "var(--color-text-primary)",
              features: ["5プロジェクト", "1GBストレージ", "メールサポート"],
              cta: "無料で始める",
              variant: "outline" as const,
            },
            {
              name: "スタンダード",
              price: "¥1,980/月",
              color: "var(--color-primary)",
              fg: "var(--color-primary-text)",
              features: [
                "無制限プロジェクト",
                "10GBストレージ",
                "優先サポート",
              ],
              cta: "今すぐ申し込む",
              variant: "default" as const,
            },
            {
              name: "プレミアム",
              price: "¥4,980/月",
              color: "#334155",
              fg: "#fff",
              features: [
                "無制限プロジェクト",
                "100GBストレージ",
                "専任サポート",
              ],
              cta: "お問い合わせ",
              variant: "outline" as const,
            },
          ].map((plan) => (
            <Card key={plan.name} className="flex flex-col overflow-hidden">
              <div
                className="px-5 py-4"
                style={{ backgroundColor: plan.color, color: plan.fg }}
              >
                <p className="text-xs font-semibold opacity-80">{plan.name}</p>
                <p className="mt-1 text-2xl font-semibold">{plan.price}</p>
              </div>
              <CardContent className="flex flex-1 flex-col gap-3 pt-4">
                <ul className="flex flex-col gap-1.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-muted-foreground/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  size="sm"
                  className="w-full text-xs"
                  style={
                    plan.variant === "default"
                      ? {
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-primary-text)",
                        }
                      : undefined
                  }
                  variant={plan.variant}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DemoSection>
    </div>
  );
}
