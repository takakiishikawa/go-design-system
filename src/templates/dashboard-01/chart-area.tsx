"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export interface TimeRangeOption {
  label: string;
  value: string;
  /** X軸のキーの値が ISO 日付文字列の場合に使う遡り日数 */
  daysBack?: number;
}

export interface ChartAreaProps {
  /** recharts 用の行データ配列 */
  data: Record<string, unknown>[];
  /** shadcn/ui ChartConfig */
  config: ChartConfig;
  /** X軸に使うデータキー */
  xKey: string;
  /** 面グラフとして描画するデータキー群 */
  yKeys: string[];
  title?: string;
  description?: string;
  /**
   * 時間レンジ切り替えボタンの設定。
   * 省略するとフィルタリングなし（全データを表示）。
   */
  timeRanges?: TimeRangeOption[];
  defaultRange?: string;
  /**
   * xKey の値が ISO 日付文字列のとき、選択レンジ（daysBack）でフィルタする。
   * xKey が日付でない場合は false を渡してフィルタを無効化。
   * デフォルト: true
   */
  filterByDate?: boolean;
  /** X軸ラベルのフォーマッター */
  xTickFormatter?: (value: string) => string;
  /** ツールチップのラベルフォーマッター */
  tooltipLabelFormatter?: (value: string) => string;
}

const DEFAULT_TIME_RANGES: TimeRangeOption[] = [
  { label: "過去90日", value: "90d", daysBack: 90 },
  { label: "過去30日", value: "30d", daysBack: 30 },
  { label: "過去7日", value: "7d", daysBack: 7 },
];

function defaultXFormatter(value: string): string {
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("ja-JP", { month: "short", day: "numeric" });
}

export function ChartArea({
  data,
  config,
  xKey,
  yKeys,
  title,
  description,
  timeRanges = DEFAULT_TIME_RANGES,
  defaultRange,
  filterByDate = true,
  xTickFormatter = defaultXFormatter,
  tooltipLabelFormatter,
}: ChartAreaProps) {
  const initialRange = defaultRange ?? timeRanges[0]?.value ?? "";
  const [timeRange, setTimeRange] = React.useState(initialRange);

  const filteredData = React.useMemo(() => {
    if (!filterByDate || !timeRanges.length) return data;
    const selected = timeRanges.find((r) => r.value === timeRange);
    if (!selected?.daysBack) return data;

    const referenceDate = new Date(
      Math.max(...data.map((d) => new Date(d[xKey] as string).getTime())),
    );
    const cutoff = new Date(referenceDate);
    cutoff.setDate(cutoff.getDate() - selected.daysBack);

    return data.filter((item) => new Date(item[xKey] as string) >= cutoff);
  }, [data, filterByDate, timeRange, timeRanges, xKey]);

  // グラジェント ID の衝突を防ぐためユニーク ID を付与
  const uid = React.useId().replace(/:/g, "");

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}

        {timeRanges.length > 0 && (
          <div className="absolute right-4 top-4 flex items-center gap-2">
            {/* デスクトップ: ToggleGroup */}
            <ToggleGroup
              type="single"
              value={timeRange}
              onValueChange={(v) => v && setTimeRange(v)}
              variant="outline"
              className="@[767px]/card:flex hidden"
            >
              {timeRanges.map((r) => (
                <ToggleGroupItem
                  key={r.value}
                  value={r.value}
                  className="h-8 px-2.5"
                >
                  {r.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            {/* モバイル: Select */}
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger
                className="@[767px]/card:hidden flex w-36"
                aria-label="期間を選択"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                {timeRanges.map((r) => (
                  <SelectItem
                    key={r.value}
                    value={r.value}
                    className="rounded-lg"
                  >
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={config}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {yKeys.map((key) => (
                <linearGradient
                  key={key}
                  id={`${uid}-fill-${key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={`var(--color-${key})`}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={`var(--color-${key})`}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={xTickFormatter}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={
                    tooltipLabelFormatter
                      ? tooltipLabelFormatter
                      : (v) => xTickFormatter(v as string)
                  }
                  indicator="dot"
                />
              }
            />
            {yKeys.map((key) => (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={`url(#${uid}-fill-${key})`}
                stroke={`var(--color-${key})`}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
