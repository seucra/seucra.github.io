import { Project } from "@/types/Project";

import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectMetadata from "./ProjectMetadata";
import ProjectTechStack from "./ProjectTechStack";
import ProjectActions from "./ProjectActions";

interface Props {
    project: Project;
}

export default function ProjectPage({ project }: Props) {
    return (
        <>
            <ProjectHero project={project} />

            <ProjectOverview project={project} />

            <ProjectMetadata project={project} />

            <ProjectTechStack project={project} />

            <ProjectActions project={project} />
        </>
    );
}
