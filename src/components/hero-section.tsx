"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Users } from "lucide-react";

type HeroSectionProps = {
  name: string;
  title: string;
  avatarUrl: string;
  stats: {
    internships: number;
    projects: number;
    programmingLanguages: number;
  };
};

export function HeroSection({ name, title, avatarUrl, stats }: HeroSectionProps) {
  return (
    <section id="home" className="py-12 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
            {name}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{animationDelay: '100ms'}}>
            {title}
          </p>
        </div>
        <div className="flex justify-center animate-in fade-in zoom-in-50 duration-500" style={{animationDelay: '300ms'}}>
          <Image
            src={avatarUrl}
            alt="User avatar"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/50 shadow-2xl"
            priority
            data-ai-hint="portrait professional"
          />
        </div>
      </div>
      <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '400ms'}}>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-2 text-accent">
                <Briefcase className="h-8 w-8" />
                <span className="font-headline text-2xl">{stats.internships} Internships</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Completed in various tech roles.</p>
            </CardContent>
          </Card>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '500ms'}}>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-2 text-accent">
                <Users className="h-8 w-8" />
                <span className="font-headline text-2xl">{stats.projects}+ Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showcasing a diverse range of skills.</p>
            </CardContent>
          </Card>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationDelay: '600ms'}}>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex flex-col items-center gap-2 text-accent">
                <Code className="h-8 w-8" />
                <span className="font-headline text-2xl">{stats.programmingLanguages}+ Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Proficient in modern programming languages.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
