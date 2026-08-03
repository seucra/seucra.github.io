import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export default function Link({
  href,
  children,
}: LinkProps) {
  return (
    <NextLink href={href}>
      {children}
    </NextLink>
  );
}
