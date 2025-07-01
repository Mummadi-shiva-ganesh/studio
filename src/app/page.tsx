import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
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
            <a href="#home" className="text-2xl font-bold font-headline">
              Kalakar
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Testimonials</a>
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            </nav>

            <div className="hidden md:block">
              <Button asChild className="shadow-[0_0_15px_hsl(var(--primary)/50%)] hover:shadow-[0_0_25px_hsl(var(--primary)/50%)] transition-shadow">
                <a href="#">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
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
                      <SheetClose asChild><a href="#" className="hover:text-primary transition-colors">About</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:text-primary transition-colors">Testimonials</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:text-primary transition-colors">Pricing</a></SheetClose>
                      <SheetClose asChild><a href="#" className="hover:text-primary transition-colors mt-4">Sign In</a></SheetClose>
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
                <span className="text-accent">Captioning</span> Software,
                <br />
                Made by Desi Creators,
                <br />
                For Desi Creators
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{animationDelay: '200ms'}}>
                Auto-generate accurate captions in all major desi languages in seconds
            </p>
            <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{animationDelay: '400ms'}}>
              <Button size="lg" className="shadow-[0_0_20px_hsl(var(--primary))] hover:shadow-[0_0_30px_hsl(var(--primary))] transition-shadow">
                Get started now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
        </div>
      </main>

      <footer className="absolute bottom-10 w-full">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>They trust us</p>
        </div>
      </footer>
    </div>
  );
}
