import { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
}

export default function Stack({ children }: StackProps) {
  return (
    <div className="stack">
      {children}
    </div>
  );
}
