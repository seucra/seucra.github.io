import Heading from "@/components/ui/Heading";
import Link from "@/components/ui/Link";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";

export default function LatestJournal() {
  return (
    <Section>
      <Stack>

        <Heading>
          Engineering Journal
        </Heading>

        <p>
          Notes, experiments, architectural decisions, lessons learned and
          progress logs from ongoing projects.
        </p>

        <Link href="/journal">
          Open Journal →
        </Link>

      </Stack>
    </Section>
  );
}
