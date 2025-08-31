import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Integra Global Solutions",
      period: "2023 - 2025",
      location: "Coimbatore, India",
      description: "Web application development with a microservices architecture using Struts and Hibernate.",
    },
    {
      title: "Junior Java Developer",
      company: "Integra Global Solutions",
      period: "2022 - 2023",
      location: "Coimbatore, India",
      description: "Developed and maintained web applications using Java, Struts and Hibernate.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Rathinam Technical Campus",
      period: "2016 - 2020",
      location: "Coimbatore, India",
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
                About Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a drive for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <Card className="project-card">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center">
                     <div className="w-42 h-40 rounded-full overflow-hidden border-5 border-muted shadow-md">
                      <img src="/ManikandanIMG.jpg" alt="ManikandanM" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Manikandan M</h3>
                    <p className="text-muted-foreground mb-4">Java Full Stack Developer</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">Available for Work</Badge>
                      <Badge variant="outline">3+ Years Experience</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <Card className="project-card h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Professional Summary</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate Java Full Stack Developer with over 5 years of experience 
                      building scalable web applications and microservices. My expertise spans across 
                      the entire development lifecycle, from system design to deployment and maintenance.
                    </p>
                    <p>
                      I specialize in Java ecosystem technologies including Spring Boot, Hibernate, 
                      and REST API development, combined with modern frontend frameworks like React 
                      and Angular. I'm passionate about clean code, test-driven development, and 
                      creating user-centric solutions.
                    </p>
                    <p>
                      When I'm not coding, I enjoy contributing to open-source projects, learning 
                      new technologies, and mentoring junior developers. I believe in continuous 
                      learning and staying up-to-date with the latest industry trends and best practices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="project-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                        <h4 className="text-lg font-medium text-foreground">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="project-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                          <GraduationCap className="h-5 w-5" />
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-medium text-foreground">{edu.institution}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;