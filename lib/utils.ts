import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num)
}

export function getDateRange(period: "week" | "month" | "quarter" | "year") {
  const now = new Date()
  const start = new Date()

  switch (period) {
    case "week":
      start.setDate(now.getDate() - 7)
      break
    case "month":
      start.setMonth(now.getMonth() - 1)
      break
    case "quarter":
      start.setMonth(now.getMonth() - 3)
      break
    case "year":
      start.setFullYear(now.getFullYear() - 1)
      break
  }

  return {
    start: start.toISOString().split("T")[0],
    end: now.toISOString().split("T")[0],
  }
}
