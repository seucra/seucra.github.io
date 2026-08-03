const principles = [
  {
    title: "Evidence over adjectives",
    description:
      "Projects should demonstrate capability better than claims."
  },
  {
    title: "Trajectory over perfection",
    description:
      "Growth matters more than pretending to know everything."
  },
  {
    title: "Understanding over authorship",
    description:
      "Using AI is acceptable when understanding is retained."
  },
  {
    title: "Preserve history",
    description:
      "Old projects and failed ideas explain engineering decisions."
  },
  {
    title: "Document decisions",
    description:
      "Engineering is more than code. Decisions deserve documentation."
  }
];

export default function Principles() {
  return (
    <section>
      <h2>Engineering Principles</h2>

      {principles.map((principle) => (
        <article key={principle.title}>
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </article>
      ))}
    </section>
  );
}
