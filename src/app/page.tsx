import { highlightResumeContent } from "@/ai/flows/highlight-resume-content";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Github, Linkedin } from "lucide-react";

// Mock data for the portfolio
const portfolioData = {
  name: "Alex Doe",
  title: "Aspiring Software Engineer",
  avatarUrl: "https://placehold.co/128x128.png",
  stats: {
    internships: 2,
    projects: 5,
    programmingLanguages: 8,
  },
  aboutMe: `A highly motivated and detail-oriented computer science student with a passion for developing innovative software solutions. Experienced in full-stack development, with a strong foundation in data structures, algorithms, and object-oriented programming. Seeking challenging internship opportunities to apply and expand my technical skills in a real-world setting.`,
  skillsDescription: `I have experience with a variety of technologies for front-end and back-end development. My skillset includes JavaScript frameworks like React and Next.js, along with Python for server-side logic and SQL for database management. I am also proficient in using modern development tools and cloud platforms.`,
  skills: [
    { name: "React", icon: "CodeXml" },
    { name: "Next.js", icon: "CodeXml" },
    { name: "TypeScript", icon: "Code" },
    { name: "Python", icon: "Code" },
    { name: "Node.js", icon: "Server" },
    { name: "SQL", icon: "Database" },
    { name: "Figma", icon: "PenTool" },
    { name: "Docker", icon: "Cpu" },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product listings, a shopping cart, and a secure checkout process. Built with a modern tech stack for optimal performance.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      liveLink: "#",
      repoLink: "#",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "website ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative tool to help teams organize tasks, set deadlines, and track progress. Features a drag-and-drop interface and real-time updates.",
      techStack: ["React", "Firebase", "Material-UI"],
      liveLink: "#",
      repoLink: "#",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "application interface"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio, designed to showcase my skills and projects using modern web technologies and a GenAI-powered content highlighter.",
      techStack: ["Next.js", "GenAI", "Tailwind CSS", "Vercel"],
      liveLink: "#",
      repoLink: "#",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "portfolio design"
    },
  ],
  internships: [
    {
      company: "Innovatech Solutions",
      role: "Software Engineer Intern",
      period: "May 2023 - Aug 2023",
      description: "Contributed to the development of a client-facing web application, focusing on front-end features and API integration. Worked in an Agile team, participating in daily stand-ups and sprint planning.",
      logoUrl: "https://placehold.co/40x40.png",
      logoHint: "abstract logo"
    },
    {
      company: "DataDriven Inc.",
      role: "Data Analyst Intern",
      period: "Jan 2023 - Apr 2023",
      description: "Analyzed large datasets to extract actionable insights for the marketing team. Developed Python scripts for data cleaning and visualization, and created dashboards to track key performance indicators.",
      logoUrl: "https://placehold.co/40x40.png",
      logoHint: "data chart"
    },
  ],
  contact: {
    linkedin: "https://www.linkedin.com/",
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
              <h1 className="text-2xl font-bold font-headline text-primary">Crescere Portfolio</h1>
              <div className="hidden md:block">
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>Connect</Button>
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
              </div>
            </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24 py-12">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <HeroSection
                name={portfolioData.name}
                title={portfolioData.title}
                avatarUrl={portfolioData.avatarUrl}
                stats={portfolioData.stats}
                contact={portfolioData.contact}
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
