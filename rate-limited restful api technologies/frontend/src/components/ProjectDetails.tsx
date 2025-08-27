
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Shield, Activity, CheckCircle, Zap } from "lucide-react";

const achievements = [
  {
    icon: Shield,
    title: "Custom Security Middleware",
    description: "Implemented comprehensive authentication, logging, and rate limiting middleware with JWT token validation and role-based access control.",
    tags: ["Authentication", "Middleware", "Security"]
  },
  {
    icon: Zap,
    title: "Token-Bucket Rate Limiting",
    description: "Built a Redis-powered token bucket algorithm that successfully handles traffic spikes up to 100 requests per second without any failures.",
    tags: ["Redis", "Rate Limiting", "Performance"]
  },
  {
    icon: CheckCircle,
    title: "Test-Driven Development",
    description: "Followed rigorous TDD principles throughout development, achieving over 90% test coverage for all business logic components.",
    tags: ["TDD", "Testing", "Quality Assurance"]
  }
];

export const ProjectDetails = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Project Achievements</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Key technical accomplishments and implementation details of the rate-limited RESTful API project
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <Card 
            key={achievement.title}
            className="p-8 bg-surface/30 border-electric/10 hover:bg-surface-hover hover:border-electric/30 transition-all duration-300 group hover:scale-105"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-electric/10 group-hover:bg-electric/20 transition-colors duration-300">
                <achievement.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {achievement.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {achievement.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  className="bg-electric/10 text-electric border-electric/20 font-mono text-xs hover:bg-electric/20 transition-colors duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      {/* Code Example Section */}
      <Card className="p-8 bg-surface/20 border-electric/10 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-electric" />
          <h3 className="text-xl font-semibold">Implementation Highlights</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-electric">Architecture Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Custom middleware for authentication & logging
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Redis-based token bucket rate limiting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                PostgreSQL with connection pooling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Docker containerization
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-electric">Performance Metrics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                Handles 100+ requests/second
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                Sub-10ms average response time
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-400" />
                Zero security vulnerabilities
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                90%+ test coverage maintained
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};
