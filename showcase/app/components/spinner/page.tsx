import { Spinner } from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function SpinnerPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Spinner"
        description="読み込み中状態を示すアニメーションアイコン。size と color をサポート。"
        import="import { Spinner } from '@takaki/go-design-system'"
      />

      <DemoSection title="size">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Spinner size="md" />
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Spinner size="xl" />
            <span className="text-xs text-muted-foreground">xl</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="color">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Spinner color="current" />
            <span className="text-xs text-muted-foreground">current</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Spinner color="primary" />
            <span className="text-xs text-muted-foreground">primary</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="使用例 — ページ全体の読み込み">
        <div className="flex h-32 w-full items-center justify-center rounded-lg border border-border bg-surface-subtle">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" color="primary" />
            <p className="text-sm text-muted-foreground">
              データを読み込み中...
            </p>
          </div>
        </div>
      </DemoSection>
    </div>
  );
}
