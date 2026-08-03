import { Project } from "@/types/Project";

interface Props {
  project: Project;
}

export default function ProjectStatus({ project }: Props) {
  return (
    <section>

      <h2>Status</h2>

      <ul>

        <li>
          <strong>Status:</strong> {project.status}
        </li>

        <li>
          <strong>Role:</strong> {project.role}
        </li>

        <li>
          <strong>Started:</strong> {project.started}
        </li>

        <li>
          <strong>Updated:</strong> {project.updated}
        </li>

      </ul>

    </section>
  );
}
