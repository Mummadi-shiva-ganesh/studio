import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AboutSectionProps = {
  highlightedAboutMe: string;
};

export function AboutSection({ highlightedAboutMe }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-16">
      <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-lg text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightedAboutMe }}
          />
        </CardContent>
      </Card>
    </section>
  );
}
