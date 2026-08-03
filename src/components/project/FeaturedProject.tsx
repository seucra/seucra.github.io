import Heading from "@/components/ui/Heading";
import Link from "@/components/ui/Link";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";

import { getFeaturedProject } from "@/lib/projects";

export default function FeaturedProject() {
  const project = getFeaturedProject();

  if (!project) {
    return null;
  }

  return (
    <Section>
      <Stack>
        <Heading>Featured Project</Heading>

        <article className="featured-project">

          <p className="project-category">
            {project.category}
          </p>

          <Heading level={3}>
            {project.title}
          </Heading>

          <p>
            {project.summary}
          </p>

          <div className="project-meta">

            <span>
              {project.status}
            </span>

            <span>
              {project.role}
            </span>

          </div>

          <Link href={`/projects/${project.slug}`}>
            Explore Project →
          </Link>

        </article>
      </Stack>
    </Section>
  );
}
