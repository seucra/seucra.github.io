import Hero from "@/components/home/Hero";
import Today from "@/components/home/Today";
import Principles from "@/components/home/Principles";
import LatestJournal from "@/components/home/LatestJournal";

import FeaturedProject from "@/components/project/FeaturedProject";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Today />
      <FeaturedProject />
      <Principles />
      <LatestJournal />
    </main>
  );
}
