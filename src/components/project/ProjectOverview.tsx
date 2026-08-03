import { Project } from "@/types/Project";

interface Props {
    project: Project;
}

export default function ProjectOverview({ project }: Props) {
    return (
        <section>

            <h2>Overview</h2>

            <p>{project.summary}</p>

        </section>
    );
}
