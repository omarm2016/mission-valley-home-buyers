interface SimpleChartProps {
  data: { date: string; value: number }[]
  height?: number
}

export function SimpleChart({ data, height = 200 }: SimpleChartProps) {
  if (data.length === 0) return <div className="text-center text-muted-foreground">No data available</div>

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1

  return (
    <div className="w-full" style={{ height }}>
      <svg width="100%" height="100%" viewBox="0 0 800 200" className="overflow-visible">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#e5e7eb" strokeWidth="1" />
        ))}

        {/* Chart line */}
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          points={data
            .map((d, i) => {
              const x = (i / (data.length - 1)) * 800
              const y = 180 - ((d.value - minValue) / range) * 160
              return `${x},${y}`
            })
            .join(" ")}
        />

        {/* Data points */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 800
          const y = 180 - ((d.value - minValue) / range) * 160
          return <circle key={i} cx={x} cy={y} r="4" fill="#3b82f6" className="hover:r-6 transition-all" />
        })}
      </svg>
    </div>
  )
}
