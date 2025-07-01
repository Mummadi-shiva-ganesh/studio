import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code, Github, Linkedin, Mail, Menu, Star, Bot, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { F1CarCanvas } from "@/components/ui/f1-car";

const portfolioData = {
  name: "Mummadi Shiva Ganesh",
  email: "shivaganeshmummadi7@gmail.com",
  linkedin: "https://www.linkedin.com/in/mummadishivaganesh",
  github: "https://github.com/Mummadi-shiva-ganesh",
  title: "Software Engineer & AI Enthusiast",
  description: "I build scalable applications and explore the frontiers of Artificial Intelligence.",
  about: "I am a 3rd year CSE AIML student at Sphoorthy Engineering College. Driven by a passion for building innovative solutions, I have a strong foundation in both front-end and back-end development. My journey in tech has been fueled by a fascination with Artificial Intelligence and its potential to solve real-world problems. I enjoy tackling complex challenges, collaborating with teams, and continuously learning to stay at the forefront of technology. When I'm not coding, I enjoy exploring new AI models and contributing to open-source projects.",
  projects: [
    {
      title: "Multi-Agent Blog Writing System using Crewa.ai",
      description: "Built a multi-agent system leveraging Crewa.ai to automate blog creation and streamline the writing process. Designed agents for content generation, language refinement, and topic research, utilizing AI and NLP techniques. Enhanced efficiency by producing high-quality, well-structured, and audience-tailored content.",
      icon: "Bot",
      tags: ["Crewa.ai", "Python", "NLP", "AI"],
    },
    {
      title: "Grocery Shop Management System",
      description: "Developed a Python-based application to manage grocery shop operations efficiently. Integrated SQL database to store and retrieve product details, inventory, and transaction records. Implemented features like inventory management, billing, and customer details tracking for streamlined operations.",
      icon: "ShoppingCart",
      tags: ["Python", "SQL", "Inventory Management"],
    }
  ],
  skills: {
    languages: ["C", "Java", "Python", "JavaScript", "Typescript"],
    technologies: ["Crewai", "HTML", "CSS", "React", "NodeJS", "Spring", "NumPy", "Pandas", "Scikit-learn", "MySQL", "Git", "GitHub", "REST API", "TensorFlow", "NLP"]
  },
  experience: [
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Engineering Virtual Internship",
      period: "Virtual Internship",
      description: [
        "Developed scalable applications using Spring, Java, and REST APIs, ensuring seamless communication between front-end and back-end services.",
        "Designed and implemented real-time data pipelines using Kafka, optimizing data flow and enabling efficient processing of large-scale data.",
        "Optimized SQL queries for improved database performance, reducing load times and ensuring smooth integration with backend systems."
      ]
    },
    {
      company: "AICTE",
      role: "AI Intern – Virtual Internship",
      period: "Virtual Internship",
      description: [
        "Developed a chatbot using NLP techniques to improve user engagement and interaction, ensuring accurate responses to queries.",
        "Implemented conversational flows and applied machine learning algorithms to enhance chatbot accuracy and adaptability over time.",
        "Documented the entire project lifecycle, including requirement gathering, development, and testing phases."
      ]
    }
  ]
};

export default function Home() {
  const projectIcons = {
    Bot: Bot,
    ShoppingCart: ShoppingCart,
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold font-headline">
              {portfolioData.name.split(" ").map(n => n[0]).join('')}
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#hero" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            </nav>

            <div className="hidden md:block">
              <Button asChild className="shadow-[0_0_15px_hsl(var(--primary)/50%)] hover:shadow-[0_0_25px_hsl(var(--primary)/50%)] transition-shadow">
                <a href={`mailto:${portfolioData.email}`}>
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full pt-12">
                    <nav className="flex flex-col gap-6 text-lg font-medium">
                      <SheetClose asChild><a href="#hero" className="hover:text-primary transition-colors">Home</a></SheetClose>
                      <SheetClose asChild><a href="#about" className="hover:text-primary transition-colors">About</a></SheetClose>
                      <SheetClose asChild><a href="#projects" className="hover:text-primary transition-colors">Projects</a></SheetClose>
                      <SheetClose asChild><a href="#skills" className="hover:text-primary transition-colors">Skills</a></SheetClose>
                      <SheetClose asChild><a href="#experience" className="hover:text-primary transition-colors">Experience</a></SheetClose>
                      <SheetClose asChild><a href={`mailto:${portfolioData.email}`} className="hover:text-primary transition-colors mt-4">Contact Me</a></SheetClose>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        <main id="hero" className="relative flex flex-col min-h-dvh items-center justify-center text-center px-4 animated-grid overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-full flex justify-center items-center h-48">
              <F1CarCanvas />
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 relative z-10">
                  <span className="text-primary">{portfolioData.name}</span>
              </h1>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{animationDelay: '200ms'}}>
                {portfolioData.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{animationDelay: '400ms'}}>
              <Button size="lg" className="shadow-[0_0_20px_hsl(var(--primary))] hover:shadow-[0_0_30px_hsl(var(--primary))] transition-shadow" asChild>
                <a href="#projects">View My Work <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </main>
        
        <section id="about" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
                    <User className="text-primary"/>
                    About Me
                </h2>
                <p className="text-muted-foreground mt-2">A little bit about my journey.</p>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
                <CardContent className="text-center p-0">
                    <p className="text-muted-foreground leading-relaxed">{portfolioData.about}</p>
                </CardContent>
            </Card>
        </section>

        <section id="projects" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
              <Star className="text-primary"/>
              Projects
            </h2>
            <p className="text-muted-foreground mt-2">A selection of my work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => {
              const IconComponent = projectIcons[project.icon as keyof typeof projectIcons];
              return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <CardHeader>
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center rounded-lg">
                    {IconComponent && <IconComponent className="w-16 h-16 text-primary" />}
                  </div>
                  <CardTitle className="pt-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </CardFooter>
              </Card>
            )})}
          </div>
        </section>

        <section id="skills" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
              <Code className="text-primary"/>
              Skills & Interests
            </h2>
            <p className="text-muted-foreground mt-2">My technical toolbox.</p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.technologies.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section id="experience" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
              <Briefcase className="text-primary"/>
              Work Experience
            </h2>
            <p className="text-muted-foreground mt-2">My professional journey.</p>
          </div>
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl">{job.role}</CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="shrink-0">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <footer className="w-full py-10">
        <div className="container mx-auto flex flex-col items-center gap-6 text-muted-foreground text-sm">
          <div className="flex justify-center gap-6">
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={`mailto:${portfolioData.email}`} className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
