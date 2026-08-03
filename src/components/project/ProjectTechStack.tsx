import { Project } from "@/types/Project";

interface Props {
    project: Project;
}

export default function ProjectTechStack({ project }: Props) {
    return (
        <section>

            <h2>Technology</h2>

            <ul>

                {project.technologies.map((technology) => (

                    <li key={technology}>

                        {technology}

                    </li>

                ))}

            </ul>

        </section>
    );
}
