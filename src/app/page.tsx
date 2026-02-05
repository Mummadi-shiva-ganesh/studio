
"use client";

import { Briefcase, Code, Github, Linkedin, Mail, Star, Bot, User, Home as HomeIcon, Search, Send, GraduationCap } from "lucide-react";
import { AwardCard } from "@/components/ui/achievement-cards";
import { Badge } from "@/components/ui/badge";
import { MenuBar } from "@/components/ui/bottom-menu";
import type { MenuBarItem } from "@/components/ui/bottom-menu";
import { Timeline } from "@/components/ui/timeline";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import AboutSection2 from "@/components/ui/about-section-2";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const portfolioData = {
  name: "Mummadi Shiva Ganesh",
  email: "shivagneshmummadi7@gmail.com",
  linkedin: "https://www.linkedin.com/in/mummadishivaganesh",
  github: "https://github.com/Mummadi-shiva-ganesh",
  title: "AI Engineer & Software Developer",
  description: "Specializing in AI-powered solutions, RAG pipelines, and cloud architecture.",
  about: "I am a Bachelor of Computer Engineering student with a minor in Artificial Intelligence at Sphoorthy Engineering College (GPA: 7.6). I specialize in building intelligent systems using LangChain, LLMs, and cloud-native architectures. My experience includes internships at VISWAM.AI and virtual experiences with Microsoft, SAP, and AWS.",
  projects: [
    {
      title: "Research Assistant",
      description: "AI-powered tool using RAG, LangChain, and FAISS to automate research with 95% relevance accuracy.",
      icon: <Search className="h-8 w-8 text-primary" />,
      tags: ["Python", "LangChain", "FAISS", "Ollama"],
    },
    {
      title: "Cold Mail Generator",
      description: "Automated personalized outreach tool using GROQ and vector databases for high-relevance portfolio matching.",
      icon: <Send className="h-8 w-8 text-primary" />,
      tags: ["Groq", "LangChain", "ChromaDB", "Python"],
    }
  ],
  skills: {
    languages: ["Python", "Java", "SQL", "JavaScript", "HTML5", "CSS", "Go", "C", "R"],
    tools: ["AWS (EC2, S3, Lambda, RDS)", "Git", "Docker", "PowerBI", "Postman"],
    frameworks: ["LangChain", "ReactJS", "NextJS", "Spring Boot", "Streamlit", "Flask", "FastAPI", "NodeJS"],
    aiml: ["Machine Learning", "NLP", "LLMs", "RAG", "Transfer Learning", "FAISS", "ChromaDB", "PostgreSQL", "Hugging Face", "Ollama", "OpenAI API", "GROQ"]
  },
  experience: [
    {
      company: "VISWAM.AI",
      role: "AI Intern",
      period: "Jun 2025 – Aug 2025",
      description: [
        "Gained proficiency in Python, collaborative software development, and DevOps practices, building a strong foundation in AI engineering concepts.",
        "Locally procured and preprocessed datasets, fine-tuned AI models using transfer learning, and deployed them using containerization and CI/CD pipelines."
      ]
    },
    {
      company: "Microsoft & SAP",
      role: "AI: Transformative Learning",
      period: "June 2024",
      description: [
        "Completed AI: Transformative Learning with TechSaksham, gaining comprehensive knowledge in AI/ML concepts and enterprise applications.",
        "Developed practical AI skills through hands-on projects focusing on data preprocessing, model training, and deployment strategies."
      ]
    },
    {
      company: "AWS APAC",
      role: "Solutions Architecture Virtual Experience",
      period: "Aug 2024",
      description: [
        "Practiced technical communication and architecture diagram design using AWS architectural patterns on Forage.",
        "Designed and presented a scalable hosting architecture leveraging EC2, S3, and RDS with detailed cost estimations."
      ]
    },
    {
      company: "Sphoorthy Engineering College",
      role: "Bachelor of Computer Engineering (Minor in AI)",
      period: "2023 – 2027",
      description: [
        "GPA: 7.6/10.0",
        "Relevant Courses: Applied Machine Learning, Algorithms and Data Structures, Natural Language Processing, Data Analytics."
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
      title: job.role.includes("Bachelor") ? "Education" : `${job.role} at ${job.company}`,
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
             <h4 className="font-bold text-foreground text-lg">{job.role} @ {job.company}</h4>
             <span className="text-sm font-mono text-primary/80">{job.period}</span>
          </div>
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
              Key Projects
            </h2>
            <p className="text-muted-foreground mt-2">Selected work in AI and Automation.</p>
          </div>
          <motion.div
            className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-2"
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
                <div className="flex flex-wrap gap-2 mt-3 px-4">
                   {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
              <Code className="text-primary"/>
              Technical Skills
            </h2>
            <p className="text-muted-foreground mt-2">My technical toolbox and expertise.</p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Code size={18}/> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Briefcase size={18}/> Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frameworks.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Bot size={18}/> AI & ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.aiml.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Star size={18}/> Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map(skill => <Badge key={skill}>{skill}</Badge>)}
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
