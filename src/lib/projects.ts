import vigilant from "@/content/projects/vigilant";

import { Project } from "@/types/Project";

export const projects: Project[] = [

    vigilant

];

export function getProjectBySlug(slug: string) {

    return projects.find(

        (project) => project.slug === slug

    );

}
