import Link from "@/components/ui/Link";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function Hero() {
  return (
    <Section>

      <Stack>

        <Text>
          Computer Engineering Student
        </Text>

        <Heading level={1}>
          Shams Tabrez Ahmed
        </Heading>

        <Text>
          Building backend systems with Rust, Linux and the Matrix ecosystem.
          Documenting projects, engineering decisions and continuous learning.
        </Text>

        <div className="hero-actions">

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/journey">
            Journey
          </Link>

          <Link href="https://github.com/seucra">
            GitHub
          </Link>

        </div>

      </Stack>

    </Section>
  );
}
