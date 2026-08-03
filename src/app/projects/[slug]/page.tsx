import { notFound } from "next/navigation";

import ProjectPage from "@/components/project/ProjectPage";
import { getProjectBySlug } from "@/lib/projects";

interface Props {
    params: {
        slug: string;
    };
}

export default function Project({ params }: Props) {

    const project = getProjectBySlug(params.slug);

    if (!project) {

        notFound();

    }

    return <ProjectPage project={project} />;

}
