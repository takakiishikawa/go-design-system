import { Badge } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function BadgePage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Badge"
        description="ステータス・カテゴリ・数量などを小さなラベルで表示するコンポーネント。"
        import="import { Badge } from '@takaki/go-design-system'"
      />

      <DemoSection title="variant">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </DemoSection>

      <DemoSection title="使用例">
        <Badge variant="default">新機能</Badge>
        <Badge variant="secondary">ベータ</Badge>
        <Badge variant="outline">公開中</Badge>
        <Badge variant="destructive">要対応</Badge>
        <Badge variant="secondary">12</Badge>
      </DemoSection>
    </div>
  );
}
