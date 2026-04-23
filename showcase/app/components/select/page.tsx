"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from "@takaki/go-design-system";
import { PageHeader, DemoSection } from "@/app/ui/demo-section";

export default function SelectPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Select"
        description="ドロップダウン選択フィールド。Radix UI SelectRoot をベースに、Label と組み合わせて使う。"
        import="import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@takaki/go-design-system'"
      />

      <DemoSection title="基本">
        <div className="flex w-52 flex-col gap-1.5">
          <Label>カテゴリ</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="food">食品</SelectItem>
              <SelectItem value="health">健康</SelectItem>
              <SelectItem value="finance">家計</SelectItem>
              <SelectItem value="study">学習</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DemoSection>

      <DemoSection title="初期値あり">
        <div className="flex w-52 flex-col gap-1.5">
          <Label>表示期間</Label>
          <Select defaultValue="30d">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">過去7日間</SelectItem>
              <SelectItem value="30d">過去30日間</SelectItem>
              <SelectItem value="90d">過去90日間</SelectItem>
              <SelectItem value="1y">過去1年間</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DemoSection>

      <DemoSection title="無効">
        <div className="flex w-52 flex-col gap-1.5">
          <Label>ステータス</Label>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="変更不可" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">有効</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DemoSection>
    </div>
  );
}
