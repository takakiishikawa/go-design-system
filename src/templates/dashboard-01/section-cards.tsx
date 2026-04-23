import * as React from "react";
import { TrendingDownIcon, TrendingUpIcon, MinusIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export interface CardTrend {
  value: string;
  direction: "up" | "down" | "neutral";
}

export interface KpiCard {
  title: string;
  value: string | number;
  description?: string;
  /** 0–100 の達成率。指定時は progress bar を表示。100超えも受け付ける(表示は max 100) */
  progress?: number;
  trend?: CardTrend;
  icon?: React.ReactNode;
  /** カード右上に表示するアクション（編集ボタン等） */
  actions?: React.ReactNode;
}

export interface SectionCardsProps {
  cards: KpiCard[];
  className?: string;
}

function TrendIcon({ direction }: { direction: CardTrend["direction"] }) {
  if (direction === "up") return <TrendingUpIcon className="size-3" />;
  if (direction === "down") return <TrendingDownIcon className="size-3" />;
  return <MinusIcon className="size-3" />;
}

const trendStyles: Record<CardTrend["direction"], string> = {
  up: "border-[color:var(--color-success)]/30 bg-[color:var(--color-success-subtle)] text-[color:var(--color-success)]",
  down: "border-[color:var(--color-danger)]/30 bg-[color:var(--color-danger-subtle)] text-[color:var(--color-danger)]",
  neutral: "border-border bg-muted text-muted-foreground",
};

function TrendBadge({ trend }: { trend: CardTrend }) {
  return (
    <Badge
      variant="outline"
      className={`flex gap-1 rounded-lg text-xs ${trendStyles[trend.direction]}`}
      aria-label={`変化: ${trend.value}`}
    >
      <TrendIcon direction={trend.direction} />
      {trend.value}
    </Badge>
  );
}

export function SectionCards({ cards, className }: SectionCardsProps) {
  return (
    <div
      className={`*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-3 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card ${className ?? ""}`}
    >
      {cards.map((card, i) => {
        const rawProgress = card.progress;
        const achieved = rawProgress !== undefined && rawProgress >= 100;
        const displayProgress =
          rawProgress !== undefined ? Math.min(rawProgress, 100) : undefined;

        const successColor = "var(--color-success)";
        const progressIndicatorStyle: React.CSSProperties | undefined = achieved
          ? { backgroundColor: successColor }
          : undefined;
        const progressTrackStyle: React.CSSProperties | undefined = achieved
          ? {
              backgroundColor: `color-mix(in srgb, ${successColor} 20%, transparent)`,
            }
          : undefined;

        return (
          <Card
            key={i}
            className="@container/card relative"
            style={
              achieved
                ? {
                    borderColor: `color-mix(in srgb, ${successColor} 40%, transparent)`,
                  }
                : undefined
            }
          >
            {card.actions && (
              <div className="absolute top-2 right-2 z-10">{card.actions}</div>
            )}
            <CardHeader className="pb-2">
              <CardDescription>{card.title}</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                {card.value}
              </CardTitle>
            </CardHeader>
            {(card.description ||
              rawProgress !== undefined ||
              card.trend ||
              card.icon) && (
              <CardFooter className="flex-col items-start gap-2 text-sm pt-0">
                {(card.trend || card.description || card.icon) && (
                  <div className="flex w-full items-center justify-between gap-2">
                    {card.description && (
                      <span className="text-muted-foreground line-clamp-1">
                        {card.description}
                      </span>
                    )}
                    {card.trend && <TrendBadge trend={card.trend} />}
                    {card.icon && !card.trend && (
                      <span className="text-muted-foreground">{card.icon}</span>
                    )}
                  </div>
                )}
                {displayProgress !== undefined && (
                  <Progress
                    value={displayProgress}
                    className="h-1.5 w-full"
                    style={progressTrackStyle}
                    indicatorStyle={progressIndicatorStyle}
                  />
                )}
              </CardFooter>
            )}
          </Card>
        );
      })}
    </div>
  );
}
