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
        { name: "JavaScript", level: 90 },
        { name: "jQuery", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Java", level: 80 },
        { name: "Struts", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "Hibernate", level: 75 },
        { name: "REST APIs", level: 70 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Storage",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "AWS", level: 70 },
      ],
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Tools & Methodologies",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Agile", level: 80 },
        { name: "MVC Architecture", level: 90 },
        { name: "Maven", level: 88 },
        { name: "Eclipse IDE", level: 90 },
        { name: "Postman", level: 70 },
      ],
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
                  <div className="space-x-1">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">JavaScript</Badge>
                    <Badge className="bg-gradient-to-r from-pink-500 to-emerald-500 text-white">jQuery</Badge>
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">HTML</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="project-card text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-x-1">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">Java</Badge>
                    <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white">Struts</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Hibernate</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white">Spring Boot</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="project-card text-center">
                <CardHeader>
                  <CardTitle className="text-primary">Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-x-1">
                    <Badge className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">GitBucket</Badge>
                    <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">AWS</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">MySQL</Badge>
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