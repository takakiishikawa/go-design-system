import { Tag, TagGroup } from "@takaki/go-design-system"
import { PageHeader, DemoSection } from "@/app/ui/demo-section"

export default function TagPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Tag"
        description="カテゴリ・ステータス・属性などを色付きラベルで表示するコンポーネント。removable でインタラクティブにも使える。"
        import="import { Tag, TagGroup } from '@takaki/go-design-system'"
      />

      <DemoSection title="color variant">
        <TagGroup>
          <Tag color="default">デフォルト</Tag>
          <Tag color="primary">プライマリ</Tag>
          <Tag color="success">成功</Tag>
          <Tag color="warning">警告</Tag>
          <Tag color="danger">危険</Tag>
          <Tag color="info">情報</Tag>
        </TagGroup>
      </DemoSection>

      <DemoSection title="removable">
        <TagGroup>
          <Tag color="primary" removable onRemove={() => {}}>プライマリ</Tag>
          <Tag color="success" removable onRemove={() => {}}>成功</Tag>
          <Tag color="warning" removable onRemove={() => {}}>警告</Tag>
        </TagGroup>
      </DemoSection>

      <DemoSection title="TagGroup (wrap)">
        <TagGroup className="max-w-sm">
          <Tag color="default">食費</Tag>
          <Tag color="success">交通費</Tag>
          <Tag color="info">通信費</Tag>
          <Tag color="warning">エンタメ</Tag>
          <Tag color="primary">ショッピング</Tag>
          <Tag color="danger">未分類</Tag>
        </TagGroup>
      </DemoSection>

      <DemoSection title="カスタムカラー（style prop）">
        <TagGroup>
          <Tag style={{ backgroundColor: "#dcfce7", color: "#15803d", borderColor: "transparent" }}>食費</Tag>
          <Tag style={{ backgroundColor: "#dbeafe", color: "#1d4ed8", borderColor: "transparent" }}>固定費</Tag>
          <Tag style={{ backgroundColor: "#f3e8ff", color: "#7e22ce", borderColor: "transparent" }}>マッサージ</Tag>
          <Tag style={{ backgroundColor: "#ffedd5", color: "#c2410c", borderColor: "transparent" }}>エンタメ</Tag>
        </TagGroup>
      </DemoSection>
    </div>
  )
}
