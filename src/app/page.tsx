"use client";

import { Briefcase, Code, Github, Linkedin, Mail, Menu, Star, Bot, ShoppingCart, User, Home as HomeIcon } from "lucide-react";
import { AwardCard } from "@/components/ui/achievement-cards";
import { Badge } from "@/components/ui/badge";
import { MenuBar } from "@/components/ui/bottom-menu";
import type { MenuBarItem } from "@/components/ui/bottom-menu";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import AboutSection2 from "@/components/ui/about-section-2";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
      title: "Multi-Agent Blog Writing System",
      description: "A multi-agent system to automate blog creation and streamline content generation using CrewAI.",
      icon: <Bot className="h-8 w-8" />,
      tags: ["Crewa.ai", "Python", "NLP", "AI"],
    },
    {
      title: "Grocery Shop Management",
      description: "A Python and SQL based application to manage grocery shop operations, inventory, and billing.",
      icon: (
        <img
          src="https://svgl.app/library/python.svg"
          alt="Python logo"
          className="h-8 w-8 object-contain"
        />
      ),
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
      period: "JPMorgan Chase & Co. Internship",
      description: [
        "Developed scalable applications using Spring, Java, and REST APIs, ensuring seamless communication between front-end and back-end services.",
        "Designed and implemented real-time data pipelines using Kafka, optimizing data flow and enabling efficient processing of large-scale data.",
        "Optimized SQL queries for improved database performance, reducing load times and ensuring smooth integration with backend systems."
      ]
    },
    {
      company: "AICTE",
      role: "AI Intern – Virtual Internship",
      period: "AICTE Internship",
      description: [
        "Developed a chatbot using NLP techniques to improve user engagement and interaction, ensuring accurate responses to queries.",
        "Implemented conversational flows and applied machine learning algorithms to enhance chatbot accuracy and adaptability over time.",
        "Documented the entire project lifecycle, including requirement gathering, development, and testing phases."
      ]
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


export default function Home() {
  const handleMenuClick = (label: string) => {
    const sectionId = label.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (label === 'Contact') {
      window.location.href = `mailto:${portfolioData.email}`;
    }
  };

  const menuItems: MenuBarItem[] = [
    {
      icon: (props) => <HomeIcon {...props} />,
      label: "Home",
      onClick: () => handleMenuClick("Home"),
    },
    {
      icon: (props) => <User {...props} />,
      label: "About",
      onClick: () => handleMenuClick("About"),
    },
    {
      icon: (props) => <Star {...props} />,
      label: "Projects",
      onClick: () => handleMenuClick("Projects"),
    },
    {
      icon: (props) => <Code {...props} />,
      label: "Skills",
      onClick: () => handleMenuClick("Skills"),
    },
    {
      icon: (props) => <Briefcase {...props} />,
      label: "Experience",
      onClick: () => handleMenuClick("Experience"),
    },
    {
      icon: (props) => <Mail {...props} />,
      label: "Contact",
      onClick: () => handleMenuClick("Contact"),
    }
  ];

  const experienceTimelineData = portfolioData.experience.map(job => ({
      title: `${job.role} at ${job.company}`,
      content: (
        <div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {job.description.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ),
  }));


  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <div className="flex-grow">
        <main id="hero">
          <AnomalousMatterHero 
            subtitle={portfolioData.name}
            title={portfolioData.title}
            description={portfolioData.description}
          />
        </main>
        
        <AboutSection2 />

        <section id="projects" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
              <Star className="text-primary"/>
              Projects
            </h2>
            <p className="text-muted-foreground mt-2">A selection of my work.</p>
          </div>
          <div className="w-full max-w-6xl p-4" aria-label="Awards and Recognitions">
            <motion.div
              className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4"
              role="list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {portfolioData.projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants} role="listitem">
                  <AwardCard
                    icon={project.icon}
                    title={project.title}
                    description={project.description}
                  />
                </motion.div>
              ))}
            </motion.div>
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
        <MenuBar items={menuItems} />
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
