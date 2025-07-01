import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Internship = {
  company: string;
  role: string;
  period: string;
  description: string;
  logoUrl: string;
  logoHint: string;
};

type ExperienceSectionProps = {
  internships: Internship[];
};

export function ExperienceSection({ internships }: ExperienceSectionProps) {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-4xl font-bold font-headline text-center mb-12">Internship Experience</h2>
      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-0.5 after:bg-border after:left-0">
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="relative">
              <div className="absolute top-1 -left-[35px] h-4 w-4 rounded-full bg-primary ring-8 ring-background" />
              <Card className="ml-4 md:ml-8 shadow-lg transition-shadow hover:shadow-xl">
                <CardHeader className="grid grid-cols-[auto_1fr] gap-x-4 items-start">
                  <Image
                    src={internship.logoUrl}
                    alt={`${internship.company} logo`}
                    width={56}
                    height={56}
                    className="rounded-lg object-contain"
                    data-ai-hint={internship.logoHint}
                  />
                  <div>
                    <CardTitle className="text-xl font-headline">{internship.role}</CardTitle>
                    <CardDescription className="text-base">
                      {internship.company} &middot; {internship.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{internship.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
