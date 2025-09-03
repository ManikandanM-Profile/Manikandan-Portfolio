import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Award, TrendingUp, Users, Code } from "lucide-react";

const Resume = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Improved application performance by 40% through code optimization and caching strategies",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description: "Led a team of 5 developers in delivering critical enterprise applications",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technology Innovation",
      description: "Implemented modern CI/CD pipelines reducing deployment time by 60%",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Client Satisfaction",
      description: "Maintained 95+ client satisfaction rating across all project deliveries",
    },
  ];

  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    const link = document.createElement('a');
    link.href = '/files/Manikandan.pdf';
    link.download = 'Manikandan_M_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="animate-slide-up">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Download my complete resume or explore my key achievements below
            </p>
            
            {/* Download Button */}
            <Button 
              onClick={handleDownload}
              size="lg" 
              className="neon-glow cyber-border"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </div>

          {/* Key Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Key Achievements
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="project-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Backend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Java 8</Badge>
                      <Badge variant="secondary">Struts</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">Hibernate</Badge>
                      <Badge variant="secondary">Microservices</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frontend Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="destructive">JavaScript</Badge>
                      <Badge variant="destructive">HTML/CSS</Badge>
                      <Badge variant="destructive">Bootstrap</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Eclipse IDE</Badge>
                      <Badge>MySQL WorkBench</Badge>
                      <Badge>Visual Studio Code</Badge>
                      <Badge>Git</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Career Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Application Development</h4>
                    <p className="text-sm text-muted-foreground">
                      3+ years building scalable enterprise applications serving 100K+ users.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold">Agile Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Led cross-functional Agile teams of developers, testers, and designers, driving sprint planning, daily stand-ups, and retrospectives, which resulted in a 25% faster delivery cycle and improved collaboration.
                    </p>
                  </div>
                  <div className="border-l-2 border-secondary pl-4">
                    <h4 className="font-semibold">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Worked with cross-functional teams (UI/UX, QA, DevOps).
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Problem-Solving</h4>
                    <p className="text-sm text-muted-foreground">
                      Tackled critical bugs, optimized code, or improved system performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Call-to-Action */}
          <Card className="project-card text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ready to Work Together?
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities and exciting projects. 
                Let's connect and explore how we can work together.
              </p>
              <Button asChild size="lg" className="neon-glow cyber-border">
                <a href="/contact">Get In Touch</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;