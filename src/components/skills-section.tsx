import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Database, Code, CodeXml, PenTool, Server } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Cpu,
  Database,
  Code,
  CodeXml,
  PenTool,
  Server,
};

type Skill = {
  name: string;
  icon: string;
};

type SkillsSectionProps = {
  skills: Skill[];
  highlightedSkillsDescription: string;
};

export function SkillsSection({ skills, highlightedSkillsDescription }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-4xl font-bold font-headline text-center mb-12">Technical Skills</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">My Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p 
              className="text-lg text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlightedSkillsDescription }}
            />
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center aspect-square shadow-lg hover:shadow-xl transition-shadow hover:bg-muted/50">
                <IconComponent className="h-10 w-10 mb-2 text-accent" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
