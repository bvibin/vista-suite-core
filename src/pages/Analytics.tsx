import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricsCard } from "@/components/ui/metrics-card";

const analyticsMetrics = [
  {
    title: "Page Views",
    value: "125,432",
    trend: { value: "+8.2%", isPositive: true },
    subtitle: "Last 30 days"
  },
  {
    title: "Bounce Rate",
    value: "34.2%",
    trend: { value: "-2.1%", isPositive: true },
    subtitle: "Improved retention"
  },
  {
    title: "Session Duration",
    value: "4m 23s",
    trend: { value: "+15%", isPositive: true },
    subtitle: "Average time on site"
  },
  {
    title: "Conversion Rate",
    value: "3.4%",
    trend: { value: "+0.8%", isPositive: true },
    subtitle: "Goal completions"
  }
];

const trafficSources = [
  { name: 'Direct', value: 4200, color: 'hsl(var(--chart-1))' },
  { name: 'Organic', value: 3800, color: 'hsl(var(--chart-2))' },
  { name: 'Social', value: 2100, color: 'hsl(var(--chart-3))' },
  { name: 'Referral', value: 1500, color: 'hsl(var(--chart-4))' },
  { name: 'Email', value: 900, color: 'hsl(var(--chart-5))' }
];

const deviceData = [
  { name: 'Desktop', sessions: 4200, users: 3800 },
  { name: 'Mobile', sessions: 3100, users: 2900 },
  { name: 'Tablet', sessions: 800, users: 750 }
];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
      </div>

      {/* Analytics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric, index) => (
          <MetricsCard
            key={index}
            title={metric.title}
            value={metric.value}
            trend={metric.trend}
            subtitle={metric.subtitle}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trafficSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: source.color }}
                  />
                  <span className="text-sm text-muted-foreground">{source.name}</span>
                  <span className="text-sm font-medium text-card-foreground ml-auto">
                    {source.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Analytics */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Device Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deviceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Bar 
                    dataKey="sessions" 
                    fill="hsl(var(--chart-1))" 
                    name="Sessions"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="users" 
                    fill="hsl(var(--chart-2))" 
                    name="Users"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}