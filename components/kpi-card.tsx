import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  previousValue?: number
  icon?: React.ReactNode
  trend?: "up" | "down" | "neutral"
  trendPercentage?: number
}

export function KPICard({ title, value, previousValue, icon, trend, trendPercentage }: KPICardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4" />
      case "down":
        return <TrendingDown className="h-4 w-4" />
      default:
        return <Minus className="h-4 w-4" />
    }
  }

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "bg-green-100 text-green-800"
      case "down":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trendPercentage !== undefined && (
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary" className={getTrendColor()}>
              {getTrendIcon()}
              <span className="ml-1">{Math.abs(trendPercentage)}%</span>
            </Badge>
            <p className="text-xs text-muted-foreground">vs previous period</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
