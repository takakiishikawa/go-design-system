"use client";

import { DashboardPage } from "@takaki/go-design-system";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@takaki/go-design-system";

type Order = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "完了" | "処理中" | "キャンセル";
  date: string;
};

const ORDERS: Order[] = [
  {
    id: "ORD-001",
    customer: "山田太郎",
    product: "スタンダードプラン",
    amount: 9800,
    status: "完了",
    date: "2024-01-20",
  },
  {
    id: "ORD-002",
    customer: "佐藤花子",
    product: "プレミアムプラン",
    amount: 19800,
    status: "処理中",
    date: "2024-01-21",
  },
  {
    id: "ORD-003",
    customer: "鈴木一郎",
    product: "スタンダードプラン",
    amount: 9800,
    status: "完了",
    date: "2024-01-22",
  },
  {
    id: "ORD-004",
    customer: "田中美咲",
    product: "エンタープライズ",
    amount: 98000,
    status: "処理中",
    date: "2024-01-22",
  },
  {
    id: "ORD-005",
    customer: "高橋健司",
    product: "スタンダードプラン",
    amount: 9800,
    status: "キャンセル",
    date: "2024-01-19",
  },
];

const COLUMNS: ColumnDef<Order>[] = [
  { accessorKey: "id", header: "注文ID" },
  { accessorKey: "customer", header: "顧客名" },
  { accessorKey: "product", header: "プラン" },
  {
    accessorKey: "amount",
    header: "金額",
    cell: ({ row }) => `¥${row.original.amount.toLocaleString()}`,
  },
  {
    accessorKey: "status",
    header: "ステータス",
    cell: ({ row }) => {
      const s = row.original.status;
      return (
        <Badge
          variant={
            s === "完了"
              ? "default"
              : s === "キャンセル"
                ? "destructive"
                : "outline"
          }
        >
          {s}
        </Badge>
      );
    },
  },
  { accessorKey: "date", header: "日付" },
];

const CHART_DATA = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 0, i + 1).toISOString().split("T")[0],
  revenue: Math.floor(Math.random() * 500000 + 500000),
}));

const KPI_CARDS = [
  {
    title: "月間売上",
    value: "¥12,400,000",
    trend: { direction: "up" as const, value: "+12.3%" },
  },
  {
    title: "アクティブユーザー",
    value: "3,482",
    trend: { direction: "up" as const, value: "+5.1%" },
  },
  {
    title: "新規登録",
    value: "284",
    trend: { direction: "down" as const, value: "-2.4%" },
  },
  {
    title: "解約率",
    value: "1.2%",
    trend: { direction: "up" as const, value: "+0.3pt" },
  },
];

export default function DashboardPageDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-2">
        <p className="text-xs text-primary font-medium">
          テンプレートプレビュー — <code>DashboardPage</code>{" "}
          コンポーネントのダミーデータ表示
        </p>
      </div>
      <DashboardPage
        cards={KPI_CARDS}
        chart={{
          data: CHART_DATA,
          config: { revenue: { label: "売上", color: "var(--color-primary)" } },
          xKey: "date",
          yKeys: ["revenue"],
          title: "売上推移（過去30日）",
        }}
        table={{
          columns: COLUMNS,
          data: ORDERS,
          searchable: { columnId: "customer", placeholder: "顧客名で検索..." },
        }}
      />
    </div>
  );
}
