"use client";

import {
  SettingsPage,
  SettingsGroup,
  SettingsItem,
  Switch,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Button,
  Input,
  Label,
} from "@takaki/go-design-system";
import { User, Bell, Shield, Palette } from "lucide-react";

export default function SettingsPageDemo() {
  const sections = [
    {
      id: "profile",
      label: "プロフィール",
      icon: <User className="size-4" />,
      content: (
        <div className="flex flex-col gap-6">
          <SettingsGroup title="基本情報">
            <SettingsItem
              label="表示名"
              description="アプリ内で表示される名前"
              control={<Input defaultValue="山田太郎" className="w-48" />}
            />
            <SettingsItem
              label="メールアドレス"
              description="ログインに使用するメール"
              control={
                <Input
                  defaultValue="yamada@example.com"
                  type="email"
                  className="w-56"
                />
              }
            />
          </SettingsGroup>
          <SettingsGroup title="学習設定">
            <SettingsItem
              label="1日の目標単語数"
              description="毎日学習する単語数の目標"
              control={
                <Select defaultValue="10">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5語</SelectItem>
                    <SelectItem value="10">10語</SelectItem>
                    <SelectItem value="20">20語</SelectItem>
                    <SelectItem value="30">30語</SelectItem>
                  </SelectContent>
                </Select>
              }
            />
          </SettingsGroup>
        </div>
      ),
    },
    {
      id: "notifications",
      label: "通知",
      icon: <Bell className="size-4" />,
      content: (
        <SettingsGroup title="通知設定">
          <SettingsItem
            label="学習リマインダー"
            description="毎日の学習時間に通知を送る"
            control={<Switch defaultChecked />}
          />
          <SettingsItem
            label="ストリーク警告"
            description="連続学習が途切れそうな時に通知"
            control={<Switch defaultChecked />}
          />
          <SettingsItem
            label="週次レポート"
            description="毎週月曜日に学習サマリーを送る"
            control={<Switch />}
          />
          <SettingsItem
            label="お知らせメール"
            description="新機能・アップデート情報"
            control={<Switch />}
          />
        </SettingsGroup>
      ),
    },
    {
      id: "security",
      label: "セキュリティ",
      icon: <Shield className="size-4" />,
      content: (
        <div className="flex flex-col gap-6">
          <SettingsGroup title="アカウントセキュリティ">
            <SettingsItem
              label="二要素認証"
              description="ログイン時にSMSで認証コードを送信"
              control={<Switch />}
            />
            <SettingsItem
              label="ログイン履歴"
              description="最近のログイン活動を確認"
              control={
                <Button variant="outline" size="sm">
                  履歴を確認
                </Button>
              }
            />
          </SettingsGroup>
          <SettingsGroup title="危険ゾーン">
            <SettingsItem
              label="アカウントを削除"
              description="全データが削除されます。この操作は元に戻せません。"
              control={
                <Button variant="destructive" size="sm">
                  アカウントを削除
                </Button>
              }
            />
          </SettingsGroup>
        </div>
      ),
    },
    {
      id: "appearance",
      label: "表示設定",
      icon: <Palette className="size-4" />,
      content: (
        <SettingsGroup title="テーマ">
          <SettingsItem
            label="ダークモード"
            description="ダークテーマを使用する"
            control={<Switch />}
          />
          <SettingsItem
            label="フォントサイズ"
            description="アプリ全体のフォントサイズ"
            control={
              <Select defaultValue="base">
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">小</SelectItem>
                  <SelectItem value="base">標準</SelectItem>
                  <SelectItem value="lg">大</SelectItem>
                </SelectContent>
              </Select>
            }
          />
        </SettingsGroup>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-2">
        <p className="text-xs text-primary font-medium">
          テンプレートプレビュー — <code>SettingsPage</code>{" "}
          コンポーネントのダミーデータ表示
        </p>
      </div>
      <SettingsPage sections={sections} defaultSection="profile" title="設定" />
    </div>
  );
}
