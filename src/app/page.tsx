import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold font-headline">
              MSG
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            </nav>

            <div className="hidden md:block">
              <Button asChild className="shadow-[0_0_15px_hsl(var(--primary)/50%)] hover:shadow-[0_0_25px_hsl(var(--primary)/50%)] transition-shadow">
                <a href="mailto:shivaganeshmummadi7@gmail.com">
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
                      <SheetClose asChild><a href="#projects" className="hover:text-primary transition-colors">Projects</a></SheetClose>
                      <SheetClose asChild><a href="#skills" className="hover:text-primary transition-colors">Skills</a></SheetClose>
                      <SheetClose asChild><a href="#experience" className="hover:text-primary transition-colors">Experience</a></SheetClose>
                      <SheetClose asChild><a href="mailto:shivaganeshmummadi7@gmail.com" className="hover:text-primary transition-colors mt-4">Contact Me</a></SheetClose>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="text-accent">Mummadi Shiva Ganesh</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{animationDelay: '200ms'}}>
                Software Engineer & AI Enthusiast. I build scalable applications and explore the frontiers of Artificial Intelligence.
            </p>
            <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{animationDelay: '400ms'}}>
              <Button size="lg" className="shadow-[0_0_20px_hsl(var(--primary))] hover:shadow-[0_0_30px_hsl(var(--primary))] transition-shadow" asChild>
                <a href="#projects">View My Work <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
        </div>
      </main>

      <footer className="absolute bottom-10 w-full">
        <div className="container mx-auto flex justify-center gap-6 text-muted-foreground text-sm">
          <a href="https://www.linkedin.com/in/mummadishivaganesh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/MummadiShivaGanesh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:shivaganeshmummadi7@gmail.com" className="hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
