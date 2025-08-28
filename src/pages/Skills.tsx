import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Server, Smartphone, Cloud, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 92 },
        { name: "Spring Security", level: 88 },
        { name: "Hibernate/JPA", level: 90 },
        { name: "REST APIs", level: 93 },
        { name: "Microservices", level: 85 },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Storage",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 80 },
        { name: "Elasticsearch", level: 75 },
        { name: "SQL Optimization", level: 85 },
      ],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 78 },
        { name: "Jenkins", level: 82 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 85 },
      ],
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Tools & Methodologies",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Agile/Scrum", level: 90 },
        { name: "Test-Driven Development", level: 85 },
        { name: "Maven/Gradle", level: 88 },
        { name: "IntelliJ IDEA", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Jira", level: 85 },
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Additional Technologies",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React Native", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "Apache Kafka", level: 72 },
        { name: "Selenium", level: 80 },
        { name: "JUnit/Mockito", level: 88 },
        { name: "SonarQube", level: 75 },
      ],
    },
  ];

  const certifications = [
    "Oracle Certified Professional: Java SE Developer",
    "AWS Certified Developer - Associate",
    "Certified Scrum Master (CSM)",
    "Spring Professional Certification",
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="animate-slide-up">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <span className="text-primary">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <Card className="project-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Preferred Tech Stack
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="project-card text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">React</Badge>
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">TypeScript</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="project-card text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Java</Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">Spring Boot</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="project-card text-center">
                <CardHeader>
                  <CardTitle className="text-primary">DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">Docker</Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">AWS</Badge>
                    <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white">Jenkins</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;