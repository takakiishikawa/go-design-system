"use client";

import { Input, Textarea, Label, PageHeader } from "@takaki/go-design-system";

function DemoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </section>
  );
}

export default function InputPage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <PageHeader
        title="Input / Textarea"
        description="テキスト入力フィールド。Label と組み合わせてフォームを構成する。"
        import="import { Input, Textarea, Label } from '@takaki/go-design-system'"
      />

      <DemoSection title="Input — 基本">
        <div className="flex w-72 flex-col gap-1.5">
          <Label htmlFor="basic">名前</Label>
          <Input id="basic" placeholder="山田太郎" />
        </div>
      </DemoSection>

      <DemoSection title="type">
        <div className="flex flex-wrap gap-4">
          <div className="flex w-52 flex-col gap-1.5">
            <Label>text</Label>
            <Input type="text" placeholder="テキスト入力" />
          </div>
          <div className="flex w-52 flex-col gap-1.5">
            <Label>email</Label>
            <Input type="email" placeholder="user@example.com" />
          </div>
          <div className="flex w-52 flex-col gap-1.5">
            <Label>password</Label>
            <Input type="password" placeholder="パスワード" />
          </div>
          <div className="flex w-52 flex-col gap-1.5">
            <Label>number</Label>
            <Input type="number" placeholder="0" />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="状態">
        <div className="flex flex-wrap gap-4">
          <div className="flex w-52 flex-col gap-1.5">
            <Label>通常</Label>
            <Input placeholder="入力してください" />
          </div>
          <div className="flex w-52 flex-col gap-1.5">
            <Label>入力済み</Label>
            <Input defaultValue="山田太郎" />
          </div>
          <div className="flex w-52 flex-col gap-1.5">
            <Label>無効</Label>
            <Input placeholder="入力できません" disabled />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Textarea">
        <div className="flex w-80 flex-col gap-1.5">
          <Label htmlFor="ta">コメント</Label>
          <Textarea
            id="ta"
            placeholder="自由にコメントを入力してください..."
            rows={4}
          />
        </div>
      </DemoSection>
    </div>
  );
}
