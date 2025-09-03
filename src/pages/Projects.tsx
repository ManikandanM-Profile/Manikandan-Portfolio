import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Integra Automation Management System - IAMS",
      description: "Developed end-to-end accounting process with a single dashboard for QBO, QBD and Xero. Streamlines client onboarding, data entry, transaction imports, and reconciliation with dynamic review. Supports sales, purchase invoices, journal entries, and check processing for seamless operations.",
      tech: ["Java", "Struts2", "Hibernate", "JavaScript", "MySQL", "AWS"],
      image: "/ManikandanIMG.jpg",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Online Movie Ticket Booking System",
      description: "Enabled users to browse movies, show times and booktickets anytime through a userfriendly interface. Provided real-time seat selection during booking. Allowed admin management of movies, show times, theaters and pricing and Automated booking confirmations and reminders.",
      tech: ["Java", "Spring MVC", "Hibernate", "JavaScript", "MySQL"],
      image: "bg-gradient-to-br from-green-500/20 to-blue-500/20",
      github: "#",
      demo: "#",
      featured: true,
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
                  {/* Project Image Header */}
                  <div className="h-48 w-full rounded-t-lg overflow-hidden">
                    <img
                      src="/ManikandanIMG.jpg"
                      alt="ManikandanM"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardHeader>
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