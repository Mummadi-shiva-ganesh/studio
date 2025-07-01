import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Skeleton className="h-8 w-12 rounded-md" />
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
            </nav>
            <div className="hidden md:block">
              <Skeleton className="h-10 w-32 rounded-md" />
            </div>
            <div className="md:hidden">
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        <main id="hero" className="relative flex flex-col min-h-dvh items-center justify-center text-center px-4 animated-grid overflow-hidden">
          <div className="relative z-10 flex flex-col items-center w-full">
             <Skeleton className="h-12 md:h-16 w-full max-w-sm md:max-w-2xl mb-6 rounded-md" />
             <Skeleton className="h-6 w-full max-w-xs md:max-w-lg mb-10 rounded-md" />
             <Skeleton className="h-12 w-48 rounded-md" />
          </div>
        </main>
        
        <section id="about" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-9 sm:h-10 w-48 mx-auto rounded-md" />
            <Skeleton className="h-5 w-64 mx-auto mt-2 rounded-md" />
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
              <CardContent className="space-y-2 p-0">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-5/6 mx-auto rounded-md" />
              </CardContent>
          </Card>
        </section>

        <section id="projects" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-9 sm:h-10 w-48 mx-auto rounded-md" />
            <Skeleton className="h-5 w-64 mx-auto mt-2 rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg flex flex-col h-full">
                <CardHeader>
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center rounded-lg">
                    <Skeleton className="w-16 h-16 rounded-md" />
                  </div>
                  <Skeleton className="h-8 w-3/4 mt-4 rounded-md" />
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-5/6 rounded-md" />
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-9 sm:h-10 w-64 mx-auto rounded-md" />
            <Skeleton className="h-5 w-48 mx-auto mt-2 rounded-md" />
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg p-6 sm:p-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <Skeleton className="h-6 w-32 mb-4 rounded-md" />
                  <div className="flex flex-wrap gap-2">
                    {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-6 w-20 rounded-full" />)}
                  </div>
               </div>
                <div>
                  <Skeleton className="h-6 w-48 mb-4 rounded-md" />
                  <div className="flex flex-wrap gap-2">
                    {[...Array(10)].map((_, i) => <Skeleton key={i} className="h-6 w-20 rounded-full" />)}
                  </div>
               </div>
             </div>
          </Card>
        </section>

        <section id="experience" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-9 sm:h-10 w-64 mx-auto rounded-md" />
            <Skeleton className="h-5 w-56 mx-auto mt-2 rounded-md" />
          </div>
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <div className="space-y-2 w-full sm:w-auto">
                      <Skeleton className="h-7 w-full max-w-xs rounded-md" />
                      <Skeleton className="h-5 w-48 rounded-md" />
                    </div>
                    <Skeleton className="h-7 w-32 rounded-full shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-5/6 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <footer className="w-full py-10">
        <div className="container mx-auto flex flex-col items-center gap-6 text-muted-foreground text-sm">
          <div className="flex justify-center gap-6">
            <Skeleton className="h-6 w-6 rounded-md" />
            <Skeleton className="h-6 w-6 rounded-md" />
            <Skeleton className="h-6 w-6 rounded-md" />
          </div>
          <Skeleton className="h-4 w-64 rounded-md" />
        </div>
      </footer>
    </div>
  );
}
