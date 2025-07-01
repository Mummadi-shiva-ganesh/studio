import { highlightResumeContent } from "@/ai/flows/highlight-resume-content";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Menu } from "lucide-react";

// Mock data for the portfolio
const portfolioData = {
  name: "Mummadi Shiva Ganesh",
  title: "Software Engineer & AI Enthusiast",
  email: "shivaganeshmummadi7@gmail.com",
  phone: "+91 6304732932",
  avatarUrl: "https://placehold.co/128x128.png",
  stats: {
    internships: 2,
    projects: 2,
    programmingLanguages: 5,
  },
  aboutMe: `A dedicated and innovative Computer Science and Engineering student from Sphoorthy Engineering Hyderabad. Passionate about software engineering and artificial intelligence, with hands-on experience in developing scalable applications and AI-driven solutions. Proven ability to work with modern technologies like Java, Spring, Python, and TensorFlow. Eager to leverage my skills to build impactful products and contribute to a forward-thinking team.`,
  skillsDescription: `I possess a diverse skill set spanning multiple programming languages and cutting-edge technologies. My expertise includes C, Java, Python, JavaScript, and TypeScript. I am proficient in frameworks and tools such as React, Node.js, Spring, and Crew.ai, and have a strong background in data science with NumPy, Pandas, Scikit-learn, and TensorFlow.`,
  skills: [
    { name: "Java", icon: "Code" },
    { name: "Python", icon: "Code" },
    { name: "JavaScript", icon: "CodeXml" },
    { name: "TypeScript", icon: "CodeXml" },
    { name: "React", icon: "CodeXml" },
    { name: "Node.js", icon: "Server" },
    { name: "Spring", icon: "Package" },
    { name: "Crew.ai", icon: "Bot" },
    { name: "TensorFlow", icon: "BrainCircuit" },
    { name: "MySQL", icon: "Database" },
  ],
  projects: [
    {
      title: "Multi-Agent Blog Writing System",
      description: "Built a multi-agent system leveraging Crew.ai to automate blog creation. Designed agents for content generation, language refinement, and topic research to produce high-quality, audience-tailored content efficiently.",
      techStack: ["Crew.ai", "Python", "NLP", "AI"],
      liveLink: "#",
      repoLink: "#",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "ai writing blog"
    },
    {
      title: "Grocery Shop Management System",
      description: "Developed a Python-based web application to manage grocery shop operations, including inventory, billing, and customer details, using a SQL database for real-time data accuracy.",
      techStack: ["Python", "SQL", "Web Application"],
      liveLink: "#",
      repoLink: "#",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "grocery store checkout"
    }
  ],
  internships: [
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Engineering Virtual Intern",
      period: "Summer 2023",
      description: "Developed scalable applications using Spring, Java, and REST APIs. Designed and implemented real-time data pipelines using Kafka and optimized SQL queries for improved database performance.",
      logoUrl: "https://placehold.co/40x40.png",
      logoHint: "finance logo"
    },
    {
      company: "AICTE",
      role: "AI Intern – Virtual Internship",
      period: "Spring 2023",
      description: "Developed an NLP-powered chatbot to improve user engagement. Implemented conversational flows and applied machine learning algorithms to enhance chatbot accuracy and adaptability.",
      logoUrl: "https://placehold.co/40x40.png",
      logoHint: "government seal"
    },
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/mummadishivaganesh",
    github: "https://github.com/",
  }
};


export default async function Home() {
  let highlightedAboutMe = portfolioData.aboutMe;
  let highlightedSkillsDescription = portfolioData.skillsDescription;

  try {
    const result = await highlightResumeContent({
      aboutMe: portfolioData.aboutMe,
      skillsDescription: portfolioData.skillsDescription,
    });
    highlightedAboutMe = result.highlightedAboutMe;
    highlightedSkillsDescription = result.highlightedSkillsDescription;
  } catch (error) {
    // The call to highlight content can fail if the API key is not set.
    // In this case, we'll just use the original content.
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#home" className="text-2xl font-bold font-headline text-primary">Crescere Portfolio</a>
              
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm">Connect</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>

              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col h-full">
                      <nav className="flex flex-col gap-4 text-lg font-medium mt-8">
                        <SheetClose asChild><a href="#home" className="hover:text-primary transition-colors">Home</a></SheetClose>
                        <SheetClose asChild><a href="#about" className="hover:text-primary transition-colors">About</a></SheetClose>
                        <SheetClose asChild><a href="#skills" className="hover:text-primary transition-colors">Skills</a></SheetClose>
                        <SheetClose asChild><a href="#projects" className="hover:text-primary transition-colors">Projects</a></SheetClose>
                        <SheetClose asChild><a href="#experience" className="hover:text-primary transition-colors">Experience</a></SheetClose>
                      </nav>
                      <Separator className="my-6" />
                      <div className="flex flex-col gap-4">
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                          <Linkedin className="h-6 w-6" />
                          <span>LinkedIn</span>
                        </a>
                        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                          <Github className="h-6 w-6" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24 py-12">
            <div id="home" className="scroll-mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <HeroSection
                name={portfolioData.name}
                title={portfolioData.title}
                avatarUrl={portfolioData.avatarUrl}
                stats={portfolioData.stats}
              />
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '150ms' }}>
              <AboutSection highlightedAboutMe={highlightedAboutMe} />
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '300ms' }}>
              <SkillsSection skills={portfolioData.skills} highlightedSkillsDescription={highlightedSkillsDescription} />
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '450ms' }}>
              <ProjectsSection projects={portfolioData.projects} />
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '600ms' }}>
              <ExperienceSection internships={portfolioData.internships} />
            </div>
        </div>
      </main>

      <footer className="bg-muted/50">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
