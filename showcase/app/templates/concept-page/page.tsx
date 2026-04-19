import { ConceptPage } from "@takaki/go-design-system"
import { Zap } from "lucide-react"

export default function ConceptPageDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-2">
        <p className="text-xs text-primary font-medium">
          テンプレートプレビュー — <code>ConceptPage</code> コンポーネントのダミーデータ表示
        </p>
      </div>
      <ConceptPage
        productName="NativeGo"
        productLogo={<Zap className="size-5 text-primary" />}
        tagline="英語学習を日常に溶け込ませるツール"
        coreMessage="毎日5分のインプットが、1年後に大きな語彙力の差を生む。NativeGo は継続しやすい仕組みで、学習者の挫折を根本から防ぎます。"
        coreValue="学習の継続を最大化することで、ユーザーが英語を「使える」状態に到達できるようにする。"
        scope={{
          solve: [
            "語彙学習の継続率を高める",
            "日常の隙間時間を活用した学習",
            "学習進捗の可視化とモチベーション維持",
            "パーソナライズされた復習スケジュール",
          ],
          notSolve: [
            "文法の系統的な学習",
            "スピーキング・ライティングの練習",
            "英会話コーチング",
            "TOEIC・英検の試験対策",
          ],
        }}
        productLogic={{
          steps: [
            { title: "単語インプット", description: "1日10単語を3分でインプット" },
            { title: "スペースド復習", description: "忘却曲線に基づく最適タイミングで復習" },
            { title: "定着確認", description: "文脈の中で単語を使う問題で定着確認" },
            { title: "継続フィードバック", description: "ストリークと進捗で継続意欲を高める" },
          ],
          outcome: "3ヶ月で1,000語の実用語彙を習得",
        }}
        resultMetric={{
          title: "90日後の語彙定着率",
          description: "学習開始から90日後に、学習した単語の80%以上を正確に使えるユーザーの割合が70%以上",
        }}
        behaviorMetrics={[
          { title: "デイリーアクティブ率", description: "7日間連続でアプリを起動したユーザーの割合 > 40%" },
          { title: "復習完了率", description: "通知を受け取ったユーザーのうち当日中に復習を完了した割合 > 60%" },
          { title: "30日継続率", description: "初回インストールから30日後もアクティブなユーザーの割合 > 30%" },
          { title: "平均学習時間", description: "1日あたりの平均学習時間 > 5分" },
        ]}
      />
    </div>
  )
}
