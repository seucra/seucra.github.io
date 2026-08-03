import Hero from "@/components/home/Hero";
import Today from "@/components/home/Today";
import FeaturedProject from "@/components/home/FeaturedProject";
import Principles from "@/components/home/Principles";
import LatestJournal from "@/components/home/LatestJournal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Today />
      <FeaturedProject />
      <Principles />
      <LatestJournal />
    </>
  );
}
