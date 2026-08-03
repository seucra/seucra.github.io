import { Project } from "@/types/Project";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <header>

      <p>{project.category}</p>

      <h1>{project.title}</h1>

      <p>{project.tagline}</p>

    </header>
  );
}
