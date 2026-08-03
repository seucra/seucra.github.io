import { Project } from "@/types/Project";

interface Props {
    project: Project;
}

export default function ProjectMetadata({ project }: Props) {
    return (
        <section>

            <h2>Metadata</h2>

            <ul>

                <li>Status: {project.status}</li>

                <li>Role: {project.role}</li>

                <li>Started: {project.started}</li>

                <li>Updated: {project.updated}</li>

            </ul>

        </section>
    );
}
