import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, featuring user authentication, product catalog, shopping cart, and payment integration.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS"],
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.",
      tech: ["Spring Boot", "Angular", "WebSocket", "MySQL", "Redis"],
      image: "bg-gradient-to-br from-green-500/20 to-blue-500/20",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts, real-time monitoring, and customizable widgets for business intelligence.",
      tech: ["Java", "React", "D3.js", "MongoDB", "Kafka", "Kubernetes"],
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "Centralized API gateway with authentication, rate limiting, load balancing, and comprehensive monitoring for microservices.",
      tech: ["Spring Cloud Gateway", "OAuth2", "Consul", "Prometheus"],
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time messaging application with group chats, file sharing, message encryption, and mobile-responsive design.",
      tech: ["Spring Boot", "WebSocket", "React Native", "PostgreSQL"],
      image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Inventory Management",
      description: "Comprehensive inventory tracking system with barcode scanning, automated alerts, reporting, and multi-location support.",
      tech: ["Java", "Spring MVC", "Thymeleaf", "MySQL", "JasperReports"],
      image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="animate-slide-up">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical expertise through real-world applications and innovative solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <Card key={project.id} className="project-card group">
                  <CardHeader>
                    <div className={`h-48 rounded-lg ${project.image} mb-4 flex items-center justify-center`}>
                      <div className="text-4xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" className="cyber-border">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="secondary" className="cyber-border">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Other Projects</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <Card key={project.id} className="project-card group">
                  <CardHeader>
                    <div className={`h-32 rounded-lg ${project.image} mb-4 flex items-center justify-center`}>
                      <div className="text-2xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="ghost" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="ghost" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Interested in Collaborating?
                  </span>
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited about new challenges and innovative projects. 
                  Let's discuss how we can build something amazing together.
                </p>
                <Button asChild size="lg" className="neon-glow cyber-border">
                  <a href="/contact">Start a Project</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;