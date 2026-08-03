import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="section">
      <Container>
        {children}
      </Container>
    </section>
  );
}
