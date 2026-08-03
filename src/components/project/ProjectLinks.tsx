import { Project } from "@/types/Project";

interface Props {
  project: Project;
}

export default function ProjectLinks({ project }: Props) {
  return (
    <section>

      <h2>Links</h2>

      <ul>

        {project.repository && (
          <li>
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </li>
        )}

        {project.live && (
          <li>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </li>
        )}

      </ul>

    </section>
  );
}
