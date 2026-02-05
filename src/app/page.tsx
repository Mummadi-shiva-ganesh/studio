"use client";

import { Briefcase, Code, Github, Linkedin, Mail, Star, Bot, User, Home as HomeIcon, Search, Send, GraduationCap, Zap } from "lucide-react";
import { AwardCard } from "@/components/ui/achievement-cards";
import { Badge } from "@/components/ui/badge";
import { MenuBar } from "@/components/ui/bottom-menu";
import type { MenuBarItem } from "@/components/ui/bottom-menu";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import AboutSection2 from "@/components/ui/about-section-2";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const portfolioData = {
  name: "Mummadi Shiva Ganesh",
  email: "shivagneshmummadi7@gmail.com",
  linkedin: "https://www.linkedin.com/in/mummadishivaganesh",
  github: "https://github.com/Mummadi-shiva-ganesh",
  title: "AI Engineer & Software Developer",
  description: "Specializing in AI-powered solutions, RAG pipelines, and cloud architecture.",
  about: "I am a Bachelor of Computer Engineering student with a minor in Artificial Intelligence at Sphoorthy Engineering College (GPA: 7.6). I specialize in building intelligent systems using LangChain, LLMs, and cloud-native architectures.",
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
      id: 1,
      title: "Education @ Sphoorthy",
      date: "2023 - 2027",
      content: "Bachelor of Computer Engineering (Minor in AI) student with 7.6 GPA. Focused on Applied Machine Learning, NLP, and Data Structures.",
      category: "Education",
      icon: GraduationCap,
      relatedIds: [2],
      status: "in-progress" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "AI @ Microsoft & SAP",
      date: "June 2024",
      content: "Completed AI: Transformative Learning with TechSaksham. Gained knowledge in AI/ML concepts and enterprise-ready AI solutions.",
      category: "Learning",
      icon: Star,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 3,
      title: "Solutions @ AWS APAC",
      date: "Aug 2024",
      content: "Designed scalable cloud hosting architectures using EC2, S3, and RDS during a virtual solutions architecture experience.",
      category: "Experience",
      icon: CloudIcon,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "AI Intern @ VISWAM.AI",
      date: "Jun 2025 – Aug 2025",
      content: "Building production-ready AI systems. Fine-tuning models using transfer learning and deploying via containerized CI/CD pipelines.",
      category: "Experience",
      icon: Bot,
      relatedIds: [3],
      status: "completed" as const,
      energy: 95,
    }
  ]
};

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19c3.037 0 5.5-2.463 5.5-5.5 0-2.97-2.354-5.397-5.28-5.497A8.995 8.995 0 0 0 8.02 3 9 9 0 0 0 2 12c0 2.22 1.206 4.16 3 5.197" />
      <path d="M5 18h14" />
    </svg>
  );
}

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

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="flex-grow">
        <main id="home">
          <AnomalousMatterHero 
            subtitle={portfolioData.name}
            title={portfolioData.title}
            description={portfolioData.description}
          />
        </main>
        
        <AboutSection2 />

        <section id="projects" className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
              <Star className="text-primary w-6 h-6 md:w-8 md:h-8"/>
              Key Projects
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Selected work in AI and Automation.</p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            role="list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} role="listitem" className="flex flex-col">
                <AwardCard
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                />
                <div className="flex flex-wrap gap-2 mt-3 px-2">
                   {project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-[10px] md:text-xs">{tag}</Badge>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
              <Code className="text-primary w-6 h-6 md:w-8 md:h-8"/>
              Technical Skills
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">My technical toolbox and expertise.</p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Code size={18}/> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Briefcase size={18}/> Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frameworks.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Bot size={18}/> AI & ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.aiml.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Star size={18}/> Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section id="experience" className="bg-background w-full py-20 md:py-32 overflow-hidden border-t border-border/20">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-bold flex items-center justify-center gap-2">
              <Briefcase className="text-primary w-6 h-6 md:w-8 md:h-8"/>
              Professional Journey
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base px-4">A futuristic view of my career path.</p>
          </div>
          <RadialOrbitalTimeline timelineData={portfolioData.experience} />
        </section>
      </div>

      <div className="fixed bottom-6 md:bottom-10 left-0 right-0 flex items-center justify-center z-50 px-4">
        <MenuBar items={menuItems} />
      </div>

      <footer className="w-full py-10 border-t border-border/10 bg-card/20">
        <div className="container mx-auto flex flex-col items-center gap-6 text-muted-foreground text-sm px-4">
          <div className="flex justify-center gap-8">
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
          <p className="text-center">&copy; {new Date().getFullYear()} {portfolioData.name}. Built with Next.js & AI.</p>
        </div>
      </footer>
    </div>
  );
}
