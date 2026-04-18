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

export interface CardTrend {
  value: string
  direction: "up" | "down" | "neutral"
}

export interface KpiCard {
  title: string
  value: string | number
  description?: string
  trend?: CardTrend
  icon?: React.ReactNode
}

export interface SectionCardsProps {
  cards: KpiCard[]
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

export function SectionCards({ cards }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      {cards.map((card, i) => (
        <Card key={i} className="@container/card">
          <CardHeader className="relative">
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {card.value}
            </CardTitle>
            {card.trend && (
              <div className="absolute right-4 top-4">
                <TrendBadge trend={card.trend} />
              </div>
            )}
            {card.icon && !card.trend && (
              <div className="absolute right-4 top-4 text-muted-foreground">
                {card.icon}
              </div>
            )}
          </CardHeader>
          {card.description && (
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-2 flex gap-2 text-muted-foreground">
                {card.description}
              </div>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}
