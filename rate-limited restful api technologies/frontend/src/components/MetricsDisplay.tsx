
import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Shield, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  {
    icon: Zap,
    label: "Requests/Second",
    value: 100,
    suffix: "req/s",
    color: "text-electric"
  },
  {
    icon: CheckCircle,
    label: "Test Coverage",
    value: 90,
    suffix: "%",
    color: "text-green-400"
  },
  {
    icon: Shield,
    label: "Security Score",
    value: 98,
    suffix: "%",
    color: "text-blue-400"
  },
  {
    icon: TrendingUp,
    label: "Uptime",
    value: 99.9,
    suffix: "%",
    color: "text-purple-400"
  }
];

export const MetricsDisplay = () => {
  const [animatedValues, setAnimatedValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      metrics.forEach((metric, index) => {
        let start = 0;
        const duration = 2000;
        const startTime = Date.now() + index * 200;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = start + (metric.value - start) * easeOutCubic;
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        if (Date.now() >= startTime) {
          animate();
        } else {
          setTimeout(animate, startTime - Date.now());
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.label} 
          className="p-6 text-center bg-surface/30 border-electric/10 hover:bg-surface-hover transition-all duration-300 group hover:scale-105"
        >
          <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
          <div className={`text-3xl font-bold font-mono mb-2 ${metric.color}`}>
            {animatedValues[index].toFixed(metric.suffix === "%" && metric.value !== Math.floor(metric.value) ? 1 : 0)}
            <span className="text-sm">{metric.suffix}</span>
          </div>
          <p className="text-sm text-muted-foreground">{metric.label}</p>
        </Card>
      ))}
    </div>
  );
};
