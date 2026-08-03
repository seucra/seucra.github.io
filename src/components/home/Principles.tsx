import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Stack from "@/components/ui/Stack";

const principles = [

    "Evidence over adjectives",

    "Trajectory over perfection",

    "Understanding over authorship",

    "Preserve history",

    "Document decisions"

];

export default function Principles() {

    return (

        <Section>

            <Stack>

                <Heading>

                    Engineering Principles

                </Heading>

                <div className="principles-grid">

                    {principles.map((principle) => (

                        <article key={principle}>

                            <h3>

                                {principle}

                            </h3>

                        </article>

                    ))}

                </div>

            </Stack>

        </Section>

    );

}
