
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Shield, Zap, Activity, CheckCircle } from "lucide-react";
import { TechStack } from "@/components/TechStack";
import { MetricsDisplay } from "@/components/MetricsDisplay";
import { ProjectDetails } from "@/components/ProjectDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-surface border border-electric/20">
            <Zap className="w-4 h-4 text-electric" />
            <span className="text-sm font-mono text-muted-foreground">High-Performance API</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rate-Limited
            <span className="text-gradient block">RESTful API</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A secure, high-performance RESTful API with custom middleware, 
            token-bucket rate limiting, and 90%+ test coverage
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="hero-gradient text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
              <Code className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
            <Button variant="outline" className="border-electric/30 hover:bg-surface-hover px-8 py-3 rounded-xl transition-all duration-300">
              <Activity className="w-5 h-5 mr-2" />
              Live Metrics
            </Button>
          </div>
          
          <MetricsDisplay />
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Leveraging industry-leading tools for optimal performance and reliability
          </p>
          <TechStack />
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ProjectDetails />
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Custom Authentication",
                description: "Secure middleware implementation with JWT tokens and role-based access control"
              },
              {
                icon: Zap,
                title: "Token-Bucket Rate Limiting",
                description: "Redis-powered rate limiting handling 100+ req/sec with zero failures"
              },
              {
                icon: Database,
                title: "PostgreSQL Integration",
                description: "Optimized database queries with connection pooling and transaction management"
              },
              {
                icon: Code,
                title: "Test-Driven Development",
                description: "90%+ test coverage ensuring robust and reliable API endpoints"
              },
              {
                icon: Activity,
                title: "Advanced Logging",
                description: "Comprehensive request/response logging with structured JSON output"
              },
              {
                icon: CheckCircle,
                title: "Docker Ready",
                description: "Containerized deployment with multi-stage builds and health checks"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-surface/50 border-electric/10 hover:bg-surface-hover transition-all duration-300 hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <feature.icon className="w-12 h-12 text-electric mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
