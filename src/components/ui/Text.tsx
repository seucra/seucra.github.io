import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export default function Text({ children }: TextProps) {
  return <p>{children}</p>;
}
