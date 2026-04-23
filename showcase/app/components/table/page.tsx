import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

const INVOICES = [
  {
    id: "INV-001",
    customer: "山田太郎",
    amount: "¥24,000",
    status: "支払済",
    date: "2024-01-15",
  },
  {
    id: "INV-002",
    customer: "佐藤花子",
    amount: "¥18,500",
    status: "未払い",
    date: "2024-01-18",
  },
  {
    id: "INV-003",
    customer: "鈴木一郎",
    amount: "¥32,000",
    status: "支払済",
    date: "2024-01-20",
  },
  {
    id: "INV-004",
    customer: "田中美咲",
    amount: "¥9,800",
    status: "期限超過",
    date: "2024-01-10",
  },
  {
    id: "INV-005",
    customer: "高橋健司",
    amount: "¥55,000",
    status: "支払済",
    date: "2024-01-22",
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "支払済") return <Badge variant="default">{status}</Badge>;
  if (status === "期限超過")
    return <Badge variant="destructive">{status}</Badge>;
  return <Badge variant="outline">{status}</Badge>;
}

export default function TablePage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Table"
        description="構造化されたデータの表示。DataTable（ソート・フィルター・ページネーション付き）は dashboard-01 テンプレートも参照。"
        import="import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本テーブル">
        <div className="w-full overflow-hidden rounded-md border border-border">
          <Table>
            <TableCaption>2024年1月の請求書一覧</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>請求書ID</TableHead>
                <TableHead>顧客名</TableHead>
                <TableHead>金額</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>発行日</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {INVOICES.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-mono text-xs">{inv.id}</TableCell>
                  <TableCell>{inv.customer}</TableCell>
                  <TableCell className="tabular-nums">{inv.amount}</TableCell>
                  <TableCell>
                    <StatusBadge status={inv.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {inv.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DemoSection>
    </div>
  );
}
