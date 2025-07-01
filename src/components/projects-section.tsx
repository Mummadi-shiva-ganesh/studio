import { ProjectCard } from "@/components/project-card";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  repoLink: string;
  imageUrl: string;
  imageHint: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-4xl font-bold font-headline text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
