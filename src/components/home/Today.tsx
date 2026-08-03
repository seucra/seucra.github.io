import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";

export default function Today() {
  return (
    <Section>

      <Stack>

        <Heading>

          Today

        </Heading>

        <div className="today-grid">

          <article>

            <h3>Building</h3>

            <p>Vigilant</p>

          </article>

          <article>

            <h3>Learning</h3>

            <ul>

              <li>Rust</li>

              <li>Distributed Systems</li>

              <li>Data Structures & Algorithms</li>

            </ul>

          </article>

          <article>

            <h3>Researching</h3>

            <p>Vulnerability Prioritization</p>

          </article>

        </div>

      </Stack>

    </Section>
  );
}
