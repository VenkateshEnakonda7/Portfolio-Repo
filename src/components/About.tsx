import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Award } from "lucide-react";
const About = () => {
  const skills = ["Java", "Selenium WebDriver", "Sql", "TestNG", "JUnit", "Python", "REST API Testing", "Postman", "Jenkins", "Docker", "Git/GitHub", "JIRA", "CI/CD", "Agile", "BDD", "Cucumber"];
  const experience = [{
    year: "2024 - Present",
    role: "Senior Automation Test Engineer",
    company: "Hypersonix.ai",
    description: "Leading test automation initiatives for enterprise applications"
  }, {
    year: "2022 - 2024",
    role: "Automation Test Engineer",
    company: "Pratian Digital Ltd.",
    description: "Developed comprehensive test frameworks and CI/CD pipelines"
  }, {
    year: "2021 - 2022",
    role: "QA Engineer Intern",
    company: "Hypersix.ai",
    description: "Manual and automated testing for web and mobile applications"
  }];

  const education = [{
    year: "2015 - 2020",
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    institution: "Aditya College of Engineering and Technology"
  }, {
    year: "2013 - 2015",
    degree: "Intermediate",
    field: "Mathematics, Physics, Chemistry",
    institution: "Sri Chaitanya Junior College",
    grade: "84.5%"
  }];
  const stats = [{
    icon: Target,
    label: "Projects Delivered",
    value: "5+"
  }, {
    icon: CheckCircle,
    label: "Test Cases Automated",
    value: "1K+"
  }, {
    icon: Users,
    label: "Team Members Led",
    value: "8"
  }, {
    icon: Award,
    label: "Years Experience",
    value: "3+"
  }];
  return <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate automation engineer with a mission to revolutionize software quality 
            through intelligent testing solutions and cutting-edge frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gradient-purple mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">With over 3+ years of experience in software testing and automation, I specialize in creating robust, scalable test frameworks that integrate seamlessly with modern development workflows. My expertise spans web, mobile, and API testing automation.</p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of automation to not just find bugs, but to prevent them. 
                My approach combines technical excellence with strategic thinking to deliver 
                quality solutions that scale with business needs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-8">
            {/* Skills Cloud */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gradient-purple mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => <Badge key={index} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                    {skill}
                  </Badge>)}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gradient-purple mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => <div key={index} className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full -ml-[7px] border-4 border-background"></div>
                      <span className="text-sm font-mono text-primary">{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                  </div>)}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gradient-purple mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => <div key={index} className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full -ml-[7px] border-4 border-background"></div>
                      <span className="text-sm font-mono text-primary">{edu.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.field}</p>
                    <p className="text-muted-foreground text-sm font-medium mt-1">Grade: {edu.grade}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
