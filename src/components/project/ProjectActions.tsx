import { Project } from "@/types/Project";

interface Props {
    project: Project;
}

export default function ProjectActions({ project }: Props) {
    return (
        <section>

            {project.repository && (

                <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Repository
                </a>

            )}

            {project.live && (

                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>

            )}

        </section>
    );
}
