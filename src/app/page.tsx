"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code, Github, Linkedin, Mail, Menu, Star, Bot, ShoppingCart, User, Home as HomeIcon, MessageSquare, Compass, Upload, Feather, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MenuBar } from "@/components/ui/bottom-menu";
import type { MenuBarItem } from "@/components/ui/bottom-menu";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

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

const menuItems: MenuBarItem[] = [
  {
    icon: (props) => <HomeIcon {...props} />,
    label: "Home"
  },
  {
    icon: (props) => <User {...props} />,
    label: "About"
  },
  {
    icon: (props) => <Star {...props} />,
    label: "Projects"
  },
  {
    icon: (props) => <Code {...props} />,
    label: "Skills"
  },
  {
    icon: (props) => <Briefcase {...props} />,
    label: "Experience"
  },
  {
    icon: (props) => <Mail {...props} />,
    label: "Contact"
  }
];

const experienceTimelineData = portfolioData.experience.map(job => ({
    title: job.period,
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{job.role}</h3>
        <h4 className="text-base text-muted-foreground mb-4">{job.company}</h4>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {job.description.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src="https://picsum.photos/seed/jpmorgan/500/500"
              alt="JPMorgan Chase & Co."
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              data-ai-hint="corporate building"
            />
            <Image
              src="https://picsum.photos/seed/coding/500/500"
              alt="Coding"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              data-ai-hint="software development"
            />
        </div>
      </div>
    ),
}));

export default function Home() {
  const projectIcons = {
    Bot: Bot,
    ShoppingCart: ShoppingCart,
  };

  const handleMenuClick = (label: string) => {
    const sectionId = label.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (label === 'Home') {
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (label === 'Contact') {
      window.location.href = `mailto:${portfolioData.email}`;
    }
  };

  const menuItemsWithActions: MenuBarItem[] = menuItems.map(item => ({
    ...item,
    // We create a wrapper for the icon to handle the click
    icon: (props) => (
      <a href={`#${item.label.toLowerCase()}`} onClick={(e) => {
        e.preventDefault();
        handleMenuClick(item.label);
      }}
      aria-label={item.label}
      >
        {/* We need to call the original icon function here */}
        {item.icon(props)}
      </a>
    )
  }));


  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <div className="flex-grow">
        <main id="hero" className="relative flex flex-col min-h-dvh items-center justify-center text-center px-4 animated-grid overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="text-primary">{portfolioData.name}</span>
            </h1>
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

        <section id="experience" className="bg-background w-full">
            <Timeline data={experienceTimelineData} />
        </section>
      </div>

      <div className="fixed bottom-10 left-0 right-0 flex items-center justify-center z-50">
        <MenuBar items={menuItemsWithActions} />
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
