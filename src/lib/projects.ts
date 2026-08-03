import vigilant from "@/content/projects/vigilant/meta";

import { Project } from "@/types/project";

export const projects: Project[] = [

    vigilant

];

export function getProjects() {

    return projects;

}

export function getFeaturedProject() {

    return projects.find(

        (project) => project.featured

    );

}

export function getProject(slug: string) {

    return projects.find(

        (project) => project.slug === slug

    );

}
