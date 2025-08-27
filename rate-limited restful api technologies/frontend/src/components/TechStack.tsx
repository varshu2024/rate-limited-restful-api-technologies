
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const technologies = [
  {
    name: "Python",
    category: "Backend",
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    icon: "🐍"
  },
  {
    name: "FastAPI",
    category: "Framework",
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: "⚡"
  },
  {
    name: "Redis",
    category: "Cache",
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    icon: "📦"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: "🐘"
  },
  {
    name: "Docker",
    category: "DevOps",
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    icon: "🐳"
  }
];

export const TechStack = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {technologies.map((tech, index) => (
        <Card 
          key={tech.name} 
          className="p-6 text-center bg-surface/30 border-electric/10 hover:bg-surface-hover hover:border-electric/30 transition-all duration-300 cursor-pointer group hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {tech.icon}
          </div>
          <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
          <Badge className={`${tech.color} font-mono text-xs`}>
            {tech.category}
          </Badge>
        </Card>
      ))}
    </div>
  );
};
