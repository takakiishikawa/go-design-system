import { ChartArea } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

const MONTHLY_DATA = Array.from({ length: 12 }, (_, i) => ({
  month: `${i + 1}月`,
  revenue: Math.floor(Math.random() * 500000 + 800000),
  users: Math.floor(Math.random() * 200 + 800),
}));

const CHART_CONFIG = {
  revenue: { label: "売上", color: "hsl(var(--sidebar-primary))" },
  users: { label: "ユーザー数", color: "hsl(var(--sidebar-ring))" },
};

export default function ChartAreaPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="ChartArea"
        description="時系列データの折れ線・エリアチャート。recharts ベースで時間範囲フィルター付き。DashboardPage テンプレートでも使用。"
        import="import { ChartArea } from '@takaki/go-design-system'"
      />

      <DemoSection title="売上推移（単一系列）">
        <div className="w-full">
          <ChartArea
            data={MONTHLY_DATA}
            config={{ revenue: CHART_CONFIG.revenue }}
            xKey="month"
            yKeys={["revenue"]}
            title="月次売上"
            description="2024年の月次売上推移"
            filterByDate={false}
          />
        </div>
      </DemoSection>

      <DemoSection title="複数系列">
        <div className="w-full">
          <ChartArea
            data={MONTHLY_DATA}
            config={CHART_CONFIG}
            xKey="month"
            yKeys={["revenue", "users"]}
            title="売上・ユーザー数"
            description="月次推移（複数系列）"
            filterByDate={false}
          />
        </div>
      </DemoSection>
    </div>
  );
}
