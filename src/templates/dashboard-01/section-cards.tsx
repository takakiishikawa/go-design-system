import * as React from "react"
import { TrendingDownIcon, TrendingUpIcon, MinusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export interface CardTrend {
  value: string
  direction: "up" | "down" | "neutral"
}

export interface KpiCard {
  title: string
  value: string | number
  description?: string
  /** 0–100 の達成率。指定時は description の下にプログレスバーを表示 */
  progress?: number
  trend?: CardTrend
  icon?: React.ReactNode
}

export interface SectionCardsProps {
  cards: KpiCard[]
  className?: string
}

function TrendIcon({ direction }: { direction: CardTrend["direction"] }) {
  if (direction === "up") return <TrendingUpIcon className="size-3" />
  if (direction === "down") return <TrendingDownIcon className="size-3" />
  return <MinusIcon className="size-3" />
}

function TrendBadge({ trend }: { trend: CardTrend }) {
  return (
    <Badge
      variant="outline"
      className="flex gap-1 rounded-lg text-xs"
      aria-label={`変化: ${trend.value}`}
    >
      <TrendIcon direction={trend.direction} />
      {trend.value}
    </Badge>
  )
}

export function SectionCards({ cards, className }: SectionCardsProps) {
  return (
    <div className={`*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-3 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card ${className ?? ""}`}>
      {cards.map((card, i) => (
        <Card key={i} className="@container/card">
          <CardHeader className="pb-2">
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {card.value}
            </CardTitle>
          </CardHeader>
          {(card.description || card.progress !== undefined || card.trend || card.icon) && (
            <CardFooter className="flex-col items-start gap-2 text-sm pt-0">
              {(card.trend || card.description || card.icon) && (
                <div className="flex w-full items-center justify-between gap-2">
                  {card.description && (
                    <span className="text-muted-foreground line-clamp-1">{card.description}</span>
                  )}
                  {card.trend && <TrendBadge trend={card.trend} />}
                  {card.icon && !card.trend && (
                    <span className="text-muted-foreground">{card.icon}</span>
                  )}
                </div>
              )}
              {card.progress !== undefined && (
                <Progress value={card.progress} className="h-1.5 w-full" />
              )}
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}
