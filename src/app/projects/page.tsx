import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";
import Link from "@/components/ui/Link";

import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section>
      <Stack>

        <Heading level={1}>
          Projects
        </Heading>

        {projects.map((project) => (

          <article
            key={project.slug}
            className="featured-project"
          >

            <Heading level={3}>
              {project.title}
            </Heading>

            <p>
              {project.summary}
            </p>

            <Link href={`/projects/${project.slug}`}>
              View Project →
            </Link>

          </article>

        ))}

      </Stack>
    </Section>
  );
}
