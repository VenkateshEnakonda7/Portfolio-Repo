import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Test Automation Suite",
      description: "Comprehensive Selenium-based framework for testing e-commerce platforms with parallel execution and detailed reporting.",
      image: "/api/placeholder/400/250",
      technologies: ["Selenium", "TestNG", "Java", "Maven", "Jenkins"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Mobile App Testing Framework",
      description: "Cross-platform mobile testing solution using Appium for both Android and iOS applications.",
      image: "/api/placeholder/400/250",
      technologies: ["Appium", "Python", "pytest", "Docker", "BrowserStack"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "API Automation Testing Tool",
      description: "RESTful API testing framework with comprehensive validation and performance testing capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["REST Assured", "JavaScript", "Newman", "Postman", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Performance Testing Dashboard",
      description: "Real-time performance monitoring and testing dashboard with automated load testing scenarios.",
      image: "/api/placeholder/400/250",
      technologies: ["JMeter", "Grafana", "InfluxDB", "Python", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative test automation solutions that demonstrate expertise 
            in modern testing frameworks and methodologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group glass-card p-6 hover:scale-[1.02] transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center">
                <div className="text-primary/40">
                  <Play size={48} />
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-primary/90">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="ghost-neon" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="neon" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="ghost-neon" size="lg">
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;