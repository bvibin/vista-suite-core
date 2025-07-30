import { useState } from "react";
import { MetricsCard } from "@/components/ui/metrics-card";
import { CustomLineChart } from "@/components/ui/line-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const metricsData = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    trend: { value: "+12.5%", isPositive: true },
    subtitle: "Trending up this month"
  },
  {
    title: "New Customers",
    value: "1,234",
    trend: { value: "-20%", isPositive: false },
    subtitle: "Down 20% this period"
  },
  {
    title: "Active Accounts",
    value: "45,678",
    trend: { value: "+12.5%", isPositive: true },
    subtitle: "Strong user retention"
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    trend: { value: "+4.5%", isPositive: true },
    subtitle: "Steady performance"
  }
];

const visitorsData = [
  { name: "Jun 2", value: 2400, value2: 1800 },
  { name: "Jun 4", value: 1398, value2: 2200 },
  { name: "Jun 6", value: 9800, value2: 1600 },
  { name: "Jun 8", value: 3908, value2: 2800 },
  { name: "Jun 10", value: 4800, value2: 1900 },
  { name: "Jun 12", value: 3800, value2: 2400 },
  { name: "Jun 14", value: 4300, value2: 2100 },
  { name: "Jun 16", value: 7200, value2: 3200 },
  { name: "Jun 18", value: 5100, value2: 2600 },
  { name: "Jun 20", value: 6200, value2: 2900 },
  { name: "Jun 22", value: 5800, value2: 2800 },
  { name: "Jun 24", value: 8100, value2: 3500 },
  { name: "Jun 26", value: 7400, value2: 3100 },
  { name: "Jun 28", value: 6800, value2: 2900 },
  { name: "Jun 30", value: 9200, value2: 3800 }
];

const timeRanges = [
  { label: "Last 3 months", value: "3m", active: true },
  { label: "Last 30 days", value: "30d", active: false },
  { label: "Last 7 days", value: "7d", active: false }
];

export default function Dashboard() {
  const [activeRange, setActiveRange] = useState("3m");

  return (
    <div className="p-6 space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData.map((metric, index) => (
          <MetricsCard
            key={index}
            title={metric.title}
            value={metric.value}
            trend={metric.trend}
            subtitle={metric.subtitle}
          />
        ))}
      </div>

      {/* Visitors Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-card-foreground">Total Visitors</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Total for the last 3 months
              </p>
            </div>
            <div className="flex gap-2">
              {timeRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={activeRange === range.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveRange(range.value)}
                  className="text-xs"
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CustomLineChart data={visitorsData} />
        </CardContent>
      </Card>
    </div>
  );
}