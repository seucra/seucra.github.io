import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Project Seucra",
  description:
    "Projects, engineering journey and technical writing by Shams Tabrez Ahmed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}
